'use client';

import React from 'react';

interface WashiTapeProps {
  color?: 'butter' | 'cherry' | 'sage' | 'kraft' | 'masking';
  width?: string;
  rotation?: number;
  className?: string;
  label?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = 'butter',
  width = 'w-24',
  rotation = -3,
  className = '',
  label,
}) => {
  const colorStyles = {
    butter: 'bg-[#FFF3B0]/80 text-[#92400E] border-[#FDE68A]',
    cherry: 'bg-[#FEE2E2]/85 text-[#991B1B] border-[#FECACA]',
    sage: 'bg-[#DCFCE7]/80 text-[#166534] border-[#BBF7D0]',
    kraft: 'bg-[#EBDDCB]/90 text-[#78350F] border-[#D7C4B0]',
    masking: 'bg-[#FEF9C3]/75 text-[#854D0E] border-[#FEF08A]',
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`h-7 ${width} ${colorStyles[color]} border-t border-b border-dashed shadow-xs backdrop-blur-xs flex items-center justify-center pointer-events-none select-none z-20 ${className}`}
    >
      {label && (
        <span className="font-code text-[10px] tracking-widest uppercase font-semibold opacity-75">
          {label}
        </span>
      )}
      {/* Jagged ends simulated with pseudo styling */}
      <div className="absolute -left-1 top-0 bottom-0 w-2 border-r border-dashed opacity-50 pointer-events-none" />
      <div className="absolute -right-1 top-0 bottom-0 w-2 border-l border-dashed opacity-50 pointer-events-none" />
    </div>
  );
};
