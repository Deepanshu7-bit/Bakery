'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Clock, ArrowRight, ShoppingBag } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { BakeryStamp } from '@/components/ui/BakeryStamp';
import { BAKERY_INFO } from '@/data/bakeryData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { totalBoxItems, setIsDrawerOpen } = useBakery();

  const navLinks = [
    { label: "TODAY'S BAKES", href: '#todays-bakes', note: 'Freshly pulled from hearth' },
    { label: 'SIGNATURE BABKA', href: '#signature', note: '72% Valrhona Dark Chocolate' },
    { label: 'THE RECIPE & PROCESS', href: '#recipe-process', note: '72 layers of butter' },
    { label: 'FROM THE OVEN', href: '#from-the-oven', note: '06:12 AM Batch atmosphere' },
    { label: 'OUR STORY', href: '#story', note: 'Flour on the counter' },
    { label: 'CUSTOMER NOTES', href: '#customer-notes', note: 'Napkins & receipts' },
    { label: 'VISIT US', href: '#visit', note: 'Covent Garden flagship' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBox = () => {
    onClose();
    setIsDrawerOpen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FFFDF7] z-50 overflow-y-auto flex flex-col justify-between p-6 sm:p-8 shadow-2xl border-l-4 border-[#C4122F]"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD5]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C4122F] text-[#FFF4D4] flex items-center justify-center font-editorial font-bold text-lg">
                    C&C
                  </div>
                  <div>
                    <span className="font-editorial text-lg font-black text-[#1A1615] block leading-none">
                      CRUMB & CHERRY
                    </span>
                    <span className="font-code text-[9px] text-[#786F66] tracking-widest uppercase">
                      LONDON • EST. 2021
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-[#F5ECE1] hover:bg-[#EBDDCB] text-[#2D2A26] transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Box CTA button */}
              <div className="mt-6">
                <button
                  onClick={handleOpenBox}
                  className="w-full flex items-center justify-between bg-[#C4122F] text-[#FFF4D4] p-4 rounded-xl font-code font-bold text-sm shadow-md hover:bg-[#A80E26] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5" />
                    <span>BUILD A CUSTOM BOX</span>
                  </div>
                  <span className="bg-[#FFF4D4] text-[#C4122F] px-2.5 py-0.5 rounded-full text-xs font-black">
                    {totalBoxItems} ITEMS
                  </span>
                </button>
              </div>

              {/* Navigation Items */}
              <div className="mt-8 space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left py-2 flex items-center justify-between group border-b border-[#F0EBE1] hover:border-[#C4122F] transition-colors"
                  >
                    <div>
                      <div className="font-editorial text-xl font-bold text-[#1A1615] group-hover:text-[#C4122F] transition-colors">
                        {link.label}
                      </div>
                      <div className="font-code text-[11px] text-[#8C8477]">
                        {link.note}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C4122F] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer with Bakery Information & Stamp */}
            <div className="mt-8 pt-6 border-t border-[#E5DFD5]">
              <div className="bg-[#FAF6EE] p-4 rounded-lg border border-[#E5DFD5] space-y-2 font-code text-xs text-[#524B43]">
                <div className="flex items-center gap-2 text-[#C4122F] font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>OPEN TODAY: 06:30 AM — 08:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#856D57]" />
                  <span>42 Baker’s Mews, Covent Garden</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#856D57]" />
                  <span>{BAKERY_INFO.phone}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-handwritten text-lg text-[#78350F]">
                  “Butter was involved.”
                </span>
                <BakeryStamp text="FRESH DAILY" size="sm" rotation={-5} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
