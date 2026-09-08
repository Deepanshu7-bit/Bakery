'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, Clock, MapPin } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const { totalBoxItems, setIsDrawerOpen, setCursorType } = useBakery();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "TODAY'S BAKES", href: '#todays-bakes' },
    { label: 'SIGNATURE BABKA', href: '#signature' },
    { label: 'THE RECIPE', href: '#recipe-process' },
    { label: 'FROM THE OVEN', href: '#from-the-oven' },
    { label: 'OUR STORY', href: '#story' },
    { label: 'VISIT US', href: '#visit' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Batch Status Marquee Ribbon */}
      <div className="bg-[#C4122F] text-[#FFF4D4] py-1.5 px-4 text-xs font-code font-bold tracking-wider overflow-hidden border-b border-[#8F0A20]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFF4D4] animate-ping" />
            <span className="hidden sm:inline">LIVE FROM COVENT GARDEN:</span>
            <span>BATCH #04-A WARM IN DISPLAY • 72-LAYER CROISSANTS AVAILABLE NOW</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] opacity-90">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> OPEN UNTIL 8:30 PM
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> 42 BAKER’S MEWS
            </span>
          </div>
        </div>
      </div>

      {/* Main Masthead Navigation Bar */}
      <nav
        className={`transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#FFFDF7]/95 backdrop-blur-md shadow-md py-3 border-[#E5DFD5]'
            : 'bg-[#FFFDF7] py-4 md:py-5 border-[#E2D9CC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Editorial Stamp */}
          <Link
            href="/"
            onMouseEnter={() => setCursorType('look')}
            onMouseLeave={() => setCursorType('default')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4122F]"
          >
            <div className="w-10 h-10 rounded-full bg-[#C4122F] text-[#FFF4D4] flex items-center justify-center font-editorial font-black text-xl shadow-sm group-hover:rotate-12 transition-transform">
              C&C
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl font-black tracking-tight leading-none text-[#1A1615] group-hover:text-[#C4122F] transition-colors">
                CRUMB & CHERRY
              </span>
              <span className="font-code text-[9px] sm:text-[10px] tracking-[0.2em] text-[#786F66] uppercase mt-0.5 font-semibold">
                PATISSERIE • LONDON
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setCursorType('look')}
                onMouseLeave={() => setCursorType('default')}
                className="font-code text-xs font-bold tracking-wider text-[#3D3731] hover:text-[#C4122F] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C4122F] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* Action Area: Box Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Build / Order a Box Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsDrawerOpen(true)}
              onMouseEnter={() => setCursorType('grab')}
              onMouseLeave={() => setCursorType('default')}
              className="relative flex items-center gap-2.5 bg-[#C4122F] hover:bg-[#A80E26] text-[#FFF4D4] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-code font-bold text-xs tracking-wider shadow-md transition-colors cursor-pointer"
              aria-label={`Open Bakery Box containing ${totalBoxItems} items`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">BUILD A BOX</span>
              <span className="sm:hidden">BOX</span>
              {totalBoxItems > 0 && (
                <span className="flex items-center justify-center bg-[#FFF4D4] text-[#C4122F] font-extrabold text-[11px] w-5 h-5 rounded-full shadow-xs">
                  {totalBoxItems}
                </span>
              )}
            </motion.button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-md text-[#2B1810] hover:bg-[#F4ECE1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C4122F]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
