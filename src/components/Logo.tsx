import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'brand';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'brand', 
  size = 'md',
  showText = false
}) => {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-14',
    '2xl': 'h-16'
  };

  const logoSrc = variant === 'light'
    ? "https://raw.githubusercontent.com/yamanozgur/vifloweb/main/viflo_white_vt.png"
    : "https://raw.githubusercontent.com/yamanozgur/vifloweb/main/viflo_gr_vt.png";

  return (
    <div className="flex items-center group cursor-pointer select-none">
      <img 
        src={logoSrc}
        alt="Viflo Logo"
        className={`${heights[size]} w-auto object-contain transition-transform group-hover:scale-105 shrink-0`}
        referrerPolicy="no-referrer"
      />
      {showText && (
        <span className="ml-2 font-black text-xl tracking-tight text-[#003837] uppercase font-['Ubuntu']">
          VIFLO
        </span>
      )}
    </div>
  );
};


