'use client';

import React from 'react';

interface PriceTagProps {
  price: number;
  batch?: string;
  rotation?: number;
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  batch = 'BATCH #01',
  rotation = 4,
  className = '',
}) => {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative inline-flex items-center gap-2 bg-[#FAF6EE] text-[#2B1810] border-2 border-[#D7C4B0] px-3 py-1.5 rounded-sm shadow-sm font-code select-none ${className}`}
    >
      {/* Perforated hole at the left */}
      <div className="w-2.5 h-2.5 rounded-full bg-[#E2D9CC] border border-[#B8A896] -ml-1 shrink-0" />
      <div className="flex flex-col">
        <span className="text-[8px] tracking-widest text-[#856D57] uppercase font-bold">
          {batch}
        </span>
        <span className="font-bold text-sm tracking-tight text-[#C4122F]">
          ₹{price}
        </span>
      </div>
    </div>
  );
};
