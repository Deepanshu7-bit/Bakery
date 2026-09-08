'use client';

import React from 'react';

interface PaperReceiptProps {
  receiptNumber?: string;
  date?: string;
  items?: { name: string; price: number; qty?: number }[];
  note?: string;
  total?: number;
  rotation?: number;
  className?: string;
}

export const PaperReceipt: React.FC<PaperReceiptProps> = ({
  receiptNumber = '#8812',
  date = 'TODAY 08:14 AM',
  items = [
    { name: 'Pistachio Cloud', price: 420, qty: 1 },
    { name: '72% Chocolate Babka', price: 390, qty: 2 },
    { name: 'Salted Honey Cookie', price: 280, qty: 1 },
  ],
  note = '“Eaten in the car before the engine even warmed up. No regrets.”',
  total,
  rotation = -2,
  className = '',
}) => {
  const calculatedTotal = total ?? items.reduce((acc, it) => acc + it.price * (it.qty || 1), 0);

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative bg-[#FAF8F2] text-[#2D2A26] font-code p-5 shadow-lg border border-[#E5DFD5] max-w-sm rounded-xs select-none ${className}`}
    >
      {/* Serrated top edge */}
      <div className="absolute -top-2 left-0 right-0 h-2 receipt-edge" />

      {/* Header */}
      <div className="text-center pb-3 border-b border-dashed border-[#C8C0B2]">
        <div className="font-bold text-sm tracking-widest text-[#C4122F]">
          CRUMB & CHERRY
        </div>
        <div className="text-[10px] tracking-wider text-[#6B6358] mt-0.5">
          42 BAKER’S MEWS • LONDON
        </div>
        <div className="text-[9px] text-[#8C8477] mt-1">
          RECEIPT {receiptNumber} • {date}
        </div>
      </div>

      {/* Items list */}
      <div className="py-3 space-y-1.5 text-xs border-b border-dashed border-[#C8C0B2]">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-[11px]">
            <span className="truncate pr-2">
              {item.qty && item.qty > 1 ? `${item.qty}x ` : ''}
              {item.name}
            </span>
            <span className="font-semibold shrink-0">
              ₹{item.price * (item.qty || 1)}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="py-2.5 flex justify-between items-baseline font-bold text-xs border-b border-[#2D2A26]">
        <span>TOTAL (PAID)</span>
        <span className="text-sm text-[#C4122F]">₹{calculatedTotal}</span>
      </div>

      {/* Customer annotation note */}
      {note && (
        <div className="mt-3 p-2 bg-[#FFF3B0]/60 rounded-xs border-l-2 border-[#D97706] font-handwritten text-base text-[#78350F] leading-tight">
          {note}
        </div>
      )}

      {/* Barcode representation */}
      <div className="mt-4 pt-2 flex flex-col items-center">
        <div className="flex gap-[2px] h-6 items-center">
          {[3, 1, 4, 1, 2, 5, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 3, 2, 1].map((w, i) => (
            <div
              key={i}
              style={{ width: `${w}px` }}
              className="h-full bg-[#3B3630]"
            />
          ))}
        </div>
        <span className="text-[8px] tracking-[0.25em] text-[#8C8477] mt-1">
          * 2026-CRUMB-CHERRY-AUTH *
        </span>
      </div>

      {/* Serrated bottom edge */}
      <div className="absolute -bottom-2 left-0 right-0 h-2 receipt-edge-bottom" />
    </div>
  );
};
