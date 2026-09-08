'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StickerBadgeProps {
  label: string;
  sublabel?: string;
  color?: 'cherry' | 'butter' | 'pistachio' | 'gold' | 'chocolate';
  rotation?: number;
  className?: string;
  shape?: 'scalloped' | 'circle' | 'pill' | 'starburst';
}

export const StickerBadge: React.FC<StickerBadgeProps> = ({
  label,
  sublabel,
  color = 'cherry',
  rotation = 6,
  className = '',
  shape = 'circle',
}) => {
  const colorMap = {
    cherry: 'bg-[#C4122F] text-[#FFF4D4] border-[#8F0A20] shadow-[#C4122F]/20',
    butter: 'bg-[#FDE68A] text-[#78350F] border-[#D97706] shadow-[#FDE68A]/30',
    pistachio: 'bg-[#4D7C55] text-[#F0FDF4] border-[#2E4C33] shadow-[#4D7C55]/20',
    gold: 'bg-[#D97706] text-white border-[#92400E] shadow-[#D97706]/20',
    chocolate: 'bg-[#2B1810] text-[#FFF4D4] border-[#180E0A] shadow-[#2B1810]/30',
  };

  if (shape === 'pill') {
    return (
      <motion.div
        whileHover={{ scale: 1.08, rotate: rotation + 4 }}
        style={{ rotate: `${rotation}deg` }}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border shadow-md font-code text-xs font-bold tracking-wider uppercase select-none ${colorMap[color]} ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 animate-ping" />
        <span>{label}</span>
        {sublabel && <span className="opacity-80 text-[10px]">({sublabel})</span>}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: rotation + 6 }}
      whileTap={{ scale: 0.95 }}
      style={{ rotate: `${rotation}deg` }}
      className={`relative inline-flex flex-col items-center justify-center rounded-full p-2.5 aspect-square border-2 border-dashed shadow-md font-code select-none cursor-pointer transition-transform ${colorMap[color]} ${className}`}
    >
      {/* Subtle glossy sheen line */}
      <div className="absolute top-1 left-2 right-2 h-1/3 bg-white/20 rounded-t-full pointer-events-none" />
      <span className="font-extrabold text-[11px] leading-tight text-center tracking-wider uppercase">
        {label}
      </span>
      {sublabel && (
        <span className="text-[8px] tracking-widest uppercase opacity-90 mt-0.5">
          {sublabel}
        </span>
      )}
    </motion.div>
  );
};
