import { CountryOption, VisaRequirement } from '../types';

export const PASSPORTS: CountryOption[] = [
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
];

export const DESTINATIONS: CountryOption[] = [
  { code: 'EU', name: 'Schengen Area (France, Italy, Germany...)', flag: '🇪🇺' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'AE', name: 'United Arab Emirates (Dubai)', flag: '🇦🇪' },
  { code: 'GE', name: 'Georgia', flag: '🇬🇪' },
];

export function getVisaRules(passportCode: string, destinationCode: string): VisaRequirement {
  // Schengen rules
  if (destinationCode === 'EU') {
    if (['GB', 'US', 'CA', 'AU', 'DE', 'BR'].includes(passportCode)) {
      return {
        status: 'schengen',
        badgeText: 'Visa-Free · 90/180 Schengen',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        maxDays: 90,
        schengenRule: true,
        description: 'You can stay up to 90 days within any 180-day rolling window in the Schengen Zone.',
        notes: [
          'Rolling 180-day period automatically calculated by Viflo',
          'Passport must be valid for at least 3 months beyond intended departure',
          'Passport issue date must be within the last 10 years'
        ]
      };
    } else if (passportCode === 'TR') {
      return {
        status: 'visa-required',
        badgeText: 'Schengen Visa Required (C-Type)',
        badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        maxDays: 90,
        schengenRule: true,
        description: 'Requires a valid Schengen C Visa (or Green Special Passport for 90 days visa-free).',
        notes: [
          'Viflo tracks your C-Visa expiration & allowed stay duration',
          'Green passport holders enjoy 90 days per 180 days visa-free',
          'Biometric data mandatory during visa application'
        ]
      };
    } else {
      return {
        status: 'visa-required',
        badgeText: 'Schengen Visa Required',
        badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
        maxDays: 90,
        schengenRule: true,
        description: 'Schengen Short-Stay Visa required before travel.',
        notes: [
          'Requires travel insurance with €30,000 coverage',
          'Proof of accommodation and return ticket required'
        ]
      };
    }
  }

  // Japan
  if (destinationCode === 'JP') {
    if (['TR', 'GB', 'US', 'DE', 'CA', 'AU'].includes(passportCode)) {
      return {
        status: 'visa-free',
        badgeText: 'Visa-Free · 90 Days',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        maxDays: 90,
        description: 'No visa required for tourism or business visits up to 90 days.',
        notes: [
          'Visit Japan Web digital registration recommended before flight',
          'Return flight ticket mandatory upon landing'
        ]
      };
    }
    if (passportCode === 'IN') {
      return {
        status: 'evisa',
        badgeText: 'e-Visa Required',
        badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        maxDays: 90,
        description: 'Eligible for online Japan e-Visa (single entry short-term stay).',
        notes: [
          'Apply online via JAPAN eVISA portal',
          'Processing time approximately 5 business days'
        ]
      };
    }
  }

  // Thailand
  if (destinationCode === 'TH') {
    if (['GB', 'US', 'DE', 'CA', 'AU', 'TR'].includes(passportCode)) {
      return {
        status: 'visa-free',
        badgeText: 'Visa-Free Exemption · 60 Days',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        maxDays: 60,
        description: 'Tourist visa exemption allowed up to 60 days upon entry.',
        notes: [
          'Can be extended locally at immigration for another 30 days',
          'Requires proof of funds (20,000 THB equivalent)'
        ]
      };
    }
    return {
      status: 'voa',
      badgeText: 'Visa on Arrival / e-Visa',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      maxDays: 15,
      description: 'Visa on Arrival available at international airports for 15 days stay.',
      notes: ['Fee: 2,000 THB payable in cash upon arrival']
    };
  }

  // Vietnam
  if (destinationCode === 'VN') {
    if (['DE', 'GB', 'FR'].includes(passportCode)) {
      return {
        status: 'visa-free',
        badgeText: 'Visa Exemption · 45 Days',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        maxDays: 45,
        description: 'Visa exemption granted for stays up to 45 consecutive days.',
        notes: ['Passport valid for at least 6 months']
      };
    }
    return {
      status: 'evisa',
      badgeText: 'e-Visa · 90 Days (Multiple Entry)',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      maxDays: 90,
      description: 'Apply online for a 90-day single or multiple entry e-Visa.',
      notes: ['Online application issued in 3 working days', 'Fee: $25 USD']
    };
  }

  // Default fallback
  return {
    status: 'visa-free',
    badgeText: 'Visa-Free Entry Allowed',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    maxDays: 90,
    description: 'Entry allowed under standard tourist visa exemption rules.',
    notes: ['Always verify passport validity (min. 6 months remaining)']
  };
}
