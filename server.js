import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Explicit route for Service Worker
app.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
  res.setHeader('Service-Worker-Allowed', '/');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.status(200).send(`self.addEventListener('install', function(e) { self.skipWaiting(); }); self.addEventListener('activate', function(e) { e.waitUntil(self.registration.unregister()); });`);
});

// Explicit route for Web App Manifest
app.get('/manifest.json', (req, res) => {
  res.setHeader('Content-Type', 'application/manifest+json; charset=UTF-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, 'manifest.json'));
});

// Serve static files from the root directory without caching HTML
app.use(express.static(__dirname, {
  etag: false,
  lastModified: false,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

const DATA_FILE = path.join(__dirname, 'users.json');
const CONTACT_FILE = path.join(__dirname, 'contact_messages.json');

// Helper to read contact messages
function readContactMessages() {
  try {
    if (!fs.existsSync(CONTACT_FILE)) {
      fs.writeFileSync(CONTACT_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(CONTACT_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading contact messages:', error);
    return [];
  }
}

// Helper to write contact messages
function writeContactMessages(messages) {
  try {
    fs.writeFileSync(CONTACT_FILE, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('Error writing contact messages:', error);
  }
}

// Helper to read users database
function readUsers() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify({}));
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data || '{}');
  } catch (error) {
    console.error('Error reading users database:', error);
    return {};
  }
}

// Helper to write users database
function writeUsers(users) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error writing users database:', error);
  }
}

// REGISTER ENDPOINT
app.post('/api/auth/register', (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const key = email.toLowerCase().trim();
  const users = readUsers();

  if (users[key]) {
    return res.status(400).json({ error: 'An account with this email already exists.' });
  }

  users[key] = {
    email: key,
    password: password, // For simulation/dev testing purposes, stored simply
    name: name || 'Explorer',
    isPremium: false,
    subscriptionPlan: 'free',
    isFounder: false,
    expiresAt: null,
    state: null
  };

  writeUsers(users);
  res.json({ message: 'Registration successful!', user: { email: key, name: users[key].name, isPremium: false, subscriptionPlan: 'free', isFounder: false } });
});

// LOGIN ENDPOINT
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const key = email.toLowerCase().trim();
  const users = readUsers();
  const user = users[key];

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  res.json({
    message: 'Login successful!',
    user: { 
      email: key, 
      name: user.name, 
      isPremium: !!user.isPremium,
      subscriptionPlan: user.subscriptionPlan || (user.isPremium ? 'monthly' : 'free'),
      isFounder: !!user.isFounder,
      expiresAt: user.expiresAt || null
    },
    state: user.state
  });
});

// SYNC STATE ENDPOINT
app.post('/api/sync', (req, res) => {
  const { email, state } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Authentication required to sync.' });
  }

  const key = email.toLowerCase().trim();
  const users = readUsers();
  const user = users[key];

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Update server state with client state
  user.state = state;
  // Sync name or premium status if they match
  if (state && state.user) {
    user.name = state.user.name || user.name;
    if (state.user.isPremium !== undefined) user.isPremium = state.user.isPremium;
    if (state.user.subscriptionPlan) user.subscriptionPlan = state.user.subscriptionPlan;
    if (state.user.isFounder !== undefined) user.isFounder = state.user.isFounder;
    if (state.user.expiresAt) user.expiresAt = state.user.expiresAt;
  }

  writeUsers(users);
  res.json({ 
    message: 'Data synced successfully!', 
    isPremium: user.isPremium,
    subscriptionPlan: user.subscriptionPlan,
    isFounder: user.isFounder
  });
});

// UPGRADE TO PREMIUM / FOUNDER PASS
app.post('/api/upgrade', (req, res) => {
  const { email, plan, productId } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Authentication required to upgrade.' });
  }

  const key = email.toLowerCase().trim();
  const users = readUsers();
  const user = users[key];

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const selectedPlan = plan || (productId === 'viflo_founder_lifetime' ? 'founder_lifetime' : productId === 'viflo_pro_annual' ? 'annual' : 'monthly');
  const isFounder = selectedPlan === 'founder_lifetime' || productId === 'viflo_founder_lifetime';

  user.isPremium = true;
  user.subscriptionPlan = selectedPlan;
  user.isFounder = isFounder;
  user.updatedAt = new Date().toISOString();

  if (isFounder) {
    user.expiresAt = null; // Lifetime access
  } else if (selectedPlan === 'annual') {
    const exp = new Date();
    exp.setFullYear(exp.getFullYear() + 1);
    user.expiresAt = exp.toISOString();
  } else {
    const exp = new Date();
    exp.setMonth(exp.getMonth() + 1);
    user.expiresAt = exp.toISOString();
  }

  if (user.state && user.state.user) {
    user.state.user.isPremium = true;
    user.state.user.subscriptionPlan = selectedPlan;
    user.state.user.isFounder = isFounder;
    user.state.user.expiresAt = user.expiresAt;
  }

  writeUsers(users);
  res.json({ 
    message: isFounder ? 'Welcome to the viflo Founders Club! Lifetime access unlocked.' : 'Successfully upgraded to viflo Pro!', 
    isPremium: true,
    subscriptionPlan: selectedPlan,
    isFounder: isFounder,
    expiresAt: user.expiresAt
  });
});

// SUBMIT CONTACT MESSAGE (IN-APP SUPPORT)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message, userAgent } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  const messages = readContactMessages();
  const newMsg = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: (name || 'Anonymous Explorer').trim(),
    email: email.trim().toLowerCase(),
    subject: (subject || 'General Inquiry').trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
    status: 'unread',
    userAgent: userAgent || req.headers['user-agent'] || 'web'
  };

  messages.unshift(newMsg);
  // Keep last 500 messages
  if (messages.length > 500) {
    messages.length = 500;
  }

  writeContactMessages(messages);
  res.json({ success: true, message: 'Message recorded successfully!', ticketId: newMsg.id });
});

// GET ALL CONTACT MESSAGES (ADMIN)
app.get('/api/contact/messages', (req, res) => {
  const messages = readContactMessages();
  res.json({ messages });
});

// DELETE CONTACT MESSAGE (ADMIN)
app.delete('/api/contact/messages/:id', (req, res) => {
  const { id } = req.params;
  let messages = readContactMessages();
  messages = messages.filter(m => m.id !== id);
  writeContactMessages(messages);
  res.json({ success: true, message: 'Message deleted' });
});

// Send index.html for all other routes to support client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
