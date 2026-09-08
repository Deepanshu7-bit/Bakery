'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useBakery } from '@/context/BakeryContext';

export const CustomCursor: React.FC = () => {
  const { cursorType } = useBakery();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const getCursorContent = () => {
    switch (cursorType) {
      case 'look':
        return { text: 'LOOK', size: 'w-14 h-14', bg: 'bg-[#C4122F] text-[#FFF4D4]' };
      case 'taste':
        return { text: 'TASTE', size: 'w-16 h-16', bg: 'bg-[#4D7C55] text-white' };
      case 'grab':
        return { text: 'GRAB', size: 'w-16 h-16', bg: 'bg-[#3B2317] text-[#FFF4D4]' };
      case 'zoom':
        return { text: 'ZOOM', size: 'w-14 h-14', bg: 'bg-[#1E2238] text-white' };
      case 'stamp':
        return { text: 'STAMP!', size: 'w-16 h-16', bg: 'bg-[#C4122F] text-white border-2 border-white' };
      case 'heat':
        return { text: '210°C', size: 'w-16 h-16', bg: 'bg-[#FF7A00] text-black font-bold' };
      default:
        return { text: '', size: 'w-4 h-4', bg: 'bg-[#C4122F]/80' };
    }
  };

  const cursorState = getCursorContent();

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-code text-[10px] tracking-wider uppercase font-bold shadow-lg transition-colors duration-200 ${cursorState.size} ${cursorState.bg}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{ scale: 0, opacity: 0 }}
    >
      {cursorState.text}
    </motion.div>
  );
};
