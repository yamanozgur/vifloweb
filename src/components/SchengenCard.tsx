import React from 'react';

interface SchengenCardProps {
  compact?: boolean;
}

export const SchengenCard: React.FC<SchengenCardProps> = ({ compact = false }) => {
  return (
    <div className={`relative bg-[#e5f7f4] rounded-2xl md:rounded-3xl p-4 md:p-5 border border-[#0da98b]/30 border-t-[4px] border-t-[#0da98b] shadow-xs text-[#003837] ${compact ? 'text-xs' : ''}`}>
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-2 mb-3 md:mb-4">
        <div>
          <h4 className={`font-bold text-[#003837] tracking-tight ${compact ? 'text-xs md:text-sm' : 'text-base md:text-lg'}`}>
            Days used in last 180 days
          </h4>
          <p className={`text-[#5c857e] font-medium ${compact ? 'text-[10px]' : 'text-xs md:text-sm'}`}>
            Rolling window · resets automatically
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className={`font-bold text-[#0da98b] leading-none ${compact ? 'text-xl' : 'text-3xl md:text-4xl'}`}>
            44
          </div>
          <div className={`text-[#5c857e] font-medium ${compact ? 'text-[9px]' : 'text-xs'}`}>
            days left
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-1 mb-4">
        <div className="flex justify-between items-center text-xs font-medium">
          <span className="text-[#5c857e]">Used</span>
          <span className="font-bold text-[#003837] text-xs md:text-sm">46 / 90 days</span>
        </div>
        <div className="w-full bg-[#d3ede7] h-3 rounded-full overflow-hidden">
          <div 
            className="bg-[#0da98b] h-full rounded-full transition-all duration-500" 
            style={{ width: `${(46 / 90) * 100}%` }}
          />
        </div>
      </div>

      {/* Bottom 3 Summary Boxes */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-3 text-center shadow-xs border border-[#0da98b]/10">
          <div className={`font-extrabold text-[#0da98b] leading-tight ${compact ? 'text-sm' : 'text-xl md:text-2xl'}`}>
            46
          </div>
          <div className={`text-[#5c857e] font-medium ${compact ? 'text-[9px]' : 'text-xs'}`}>
            Days used
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-3 text-center shadow-xs border border-[#0da98b]/10">
          <div className={`font-extrabold text-[#0da98b] leading-tight ${compact ? 'text-sm' : 'text-xl md:text-2xl'}`}>
            44
          </div>
          <div className={`text-[#5c857e] font-medium ${compact ? 'text-[9px]' : 'text-xs'}`}>
            Days remaining
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-3 text-center shadow-xs border border-[#0da98b]/10">
          <div className={`font-extrabold text-[#003837] leading-tight ${compact ? 'text-sm' : 'text-xl md:text-2xl'}`}>
            180
          </div>
          <div className={`text-[#5c857e] font-medium ${compact ? 'text-[9px]' : 'text-xs'}`}>
            Window (days)
          </div>
        </div>
      </div>
    </div>
  );
};
