'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBakery } from '@/context/BakeryContext';

interface BakeryStampProps {
  text?: string;
  subtext?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'cherry' | 'burgundy' | 'pistachio' | 'chocolate' | 'butter';
  variant?: 'circle' | 'badge' | 'rectangular';
  rotation?: number;
  className?: string;
  interactive?: boolean;
}

export const BakeryStamp: React.FC<BakeryStampProps> = ({
  text = 'FRESH FROM OVEN',
  subtext = 'EST. 2021 • COVENT GARDEN',
  size = 'md',
  color = 'cherry',
  variant = 'circle',
  rotation = -8,
  className = '',
  interactive = true,
}) => {
  const { triggerStamp } = useBakery();
  const [stampedCount, setStampedCount] = useState(0);

  const colorMap = {
    cherry: 'text-[#C4122F] border-[#C4122F]',
    burgundy: 'text-[#2D1217] border-[#2D1217]',
    pistachio: 'text-[#4D7C55] border-[#4D7C55]',
    chocolate: 'text-[#3B2317] border-[#3B2317]',
    butter: 'text-[#B45309] border-[#B45309]',
  };

  const sizeClasses = {
    sm: 'w-20 h-20 text-[9px]',
    md: 'w-28 h-28 text-[11px]',
    lg: 'w-36 h-36 text-[13px]',
  };

  const handleStampClick = () => {
    if (!interactive) return;
    setStampedCount((c) => c + 1);
    triggerStamp();
  };

  if (variant === 'badge') {
    return (
      <motion.div
        whileHover={interactive ? { scale: 1.05, rotate: rotation + 4 } : {}}
        whileTap={interactive ? { scale: 0.92, rotate: rotation - 2 } : {}}
        onClick={handleStampClick}
        style={{ rotate: `${rotation}deg` }}
        className={`inline-flex flex-col items-center justify-center px-4 py-2 border-2 border-dashed ${colorMap[color]} font-code uppercase rounded-sm bg-white/70 backdrop-blur-xs select-none shadow-sm cursor-pointer ${className}`}
      >
        <span className="font-bold tracking-widest text-xs">{text}</span>
        {subtext && <span className="text-[9px] tracking-wider opacity-80 mt-0.5">{subtext}</span>}
      </motion.div>
    );
  }

  if (variant === 'rectangular') {
    return (
      <motion.div
        whileHover={interactive ? { scale: 1.05, rotate: rotation + 3 } : {}}
        whileTap={interactive ? { scale: 0.94 } : {}}
        onClick={handleStampClick}
        style={{ rotate: `${rotation}deg` }}
        className={`inline-flex flex-col items-center justify-center px-3 py-1.5 border-[2.5px] ${colorMap[color]} font-code font-bold uppercase rounded-md bg-white/40 select-none shadow-xs cursor-pointer ${className}`}
      >
        <span className="text-xs tracking-widest">{text}</span>
        {subtext && <span className="text-[9px] tracking-wide opacity-75">{subtext}</span>}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={interactive ? { scale: 1.08, rotate: rotation + 12 } : {}}
      whileTap={interactive ? { scale: 0.88, rotate: rotation - 6 } : {}}
      onClick={handleStampClick}
      style={{ rotate: `${rotation}deg` }}
      className={`relative inline-flex items-center justify-center rounded-full border-[2.5px] border-dashed ${colorMap[color]} ${sizeClasses[size]} p-2 select-none cursor-pointer transition-colors bg-white/20 backdrop-blur-xs ${className}`}
    >
      <div className="absolute inset-1 rounded-full border border-current opacity-40 pointer-events-none" />
      <div className="flex flex-col items-center justify-center text-center leading-tight">
        <span className="font-bold tracking-wider font-code">{text}</span>
        <div className="w-8 h-[1px] bg-current my-0.5 opacity-60" />
        <span className="text-[8px] tracking-widest font-code opacity-85">{subtext}</span>
        {stampedCount > 0 && (
          <span className="text-[7px] text-red-600 font-bold mt-0.5 animate-pulse">
            ★ {stampedCount}
          </span>
        )}
      </div>
    </motion.div>
  );
};
