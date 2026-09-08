'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, CheckCircle, Sparkles, X } from 'lucide-react';
import { STORE_LOCATION, BAKERY_INFO } from '@/data/bakeryData';
import { WashiTape } from '@/components/ui/WashiTape';
import { BakeryStamp } from '@/components/ui/BakeryStamp';

export const VisitUs: React.FC = () => {
  const [isHoldModalOpen, setIsHoldModalOpen] = useState(false);
  const [holdName, setHoldName] = useState('');
  const [holdPastry, setHoldPastry] = useState('Pistachio Cloud (x2)');
  const [holdTime, setHoldTime] = useState('Today at 09:30 AM');
  const [isHoldSubmitted, setIsHoldSubmitted] = useState(false);

  const handleHoldSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsHoldSubmitted(true);
    setTimeout(() => {
      setIsHoldSubmitted(false);
      setIsHoldModalOpen(false);
      setHoldName('');
    }, 2500);
  };

  return (
    <section id="visit" className="py-24 sm:py-36 bg-[#FAF6EE] text-[#1A1615] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Background Kraft Texture */}
      <div className="absolute inset-0 bg-paper-grain opacity-80 pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <WashiTape color="butter" width="w-36" rotation={-3} className="top-10 left-12" label="COVENT GARDEN" />
      <WashiTape color="cherry" width="w-40" rotation={4} className="top-14 right-14" label="WALK-INS WELCOME" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Postcard Frame Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border-4 border-[#1A1615] shadow-2xl relative">
          
          {/* Postcard Center Divider (simulated vintage postcard) */}
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 w-[2px] bg-[#E5DFD5] -translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Side: Postcard Message, Hours & Features */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4D7C55] animate-ping" />
                <span className="font-code text-xs font-bold uppercase tracking-widest text-[#4D7C55]">
                  DOORS OPEN TODAY
                </span>
                <span className="font-code text-[11px] text-[#8C8477]">
                  06:30 AM — 08:30 PM
                </span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#1A1615] leading-none tracking-tight">
                COME SAY <br />
                <span className="text-[#C4122F] italic font-normal">HELLO.</span>
              </h2>

              <p className="font-handwritten text-2xl text-[#78350F] leading-snug">
                “Follow the aroma of caramelized butter down Baker’s Mews. Look for the cherry red awning.”
              </p>

              {/* Hours Schedule Grid */}
              <div className="bg-[#FAF6EE] p-5 rounded-2xl border-2 border-dashed border-[#D7C4B0] space-y-2.5 font-code text-xs">
                <div className="text-[#8C8477] font-bold uppercase text-[10px] tracking-wider mb-1">
                  Baking & Service Hours:
                </div>
                {STORE_LOCATION.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#E5DFD5] pb-1.5 last:border-0 last:pb-0">
                    <span className="font-bold text-[#1A1615]">{h.days}</span>
                    <span className="text-[#C4122F] font-bold">{h.open} — {h.close}</span>
                  </div>
                ))}
              </div>

              {/* Location Features Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {STORE_LOCATION.features.map((feat, i) => (
                  <span
                    key={i}
                    className="bg-[#FAF6EE] border border-[#E5DFD5] px-3 py-1 rounded-full text-xs font-code text-[#4A433D]"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C4122F] hover:bg-[#A80E26] text-[#FFF4D4] px-6 py-3.5 rounded-full font-code font-bold text-xs tracking-wider uppercase shadow-md flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS →</span>
                </a>

                <button
                  onClick={() => setIsHoldModalOpen(true)}
                  className="bg-[#FAF6EE] hover:bg-[#F3EAD9] text-[#1A1615] border-2 border-[#1A1615] px-5 py-3 rounded-full font-code font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  REQUEST PASTRY HOLD
                </button>
              </div>

            </div>

            {/* Right Side: Graphic Illustrated Postcard Map & Stamp Corner */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              
              {/* Postcard Stamp Box in top right */}
              <div className="flex justify-between items-start">
                <div className="font-code text-xs text-[#8C8477]">
                  <span className="font-bold text-[#1A1615] block">COVENT GARDEN FLAGSHIP</span>
                  <span>42 Baker’s Mews, London WC2E 8HD</span>
                </div>
                <BakeryStamp text="COVENT GARDEN" subtext="POSTAGE PAID" size="md" rotation={8} color="cherry" />
              </div>

              {/* Illustrated Architectural Mini-Map Box */}
              <div className="relative bg-[#F4ECE1] rounded-2xl p-6 border-3 border-[#1A1615] shadow-md overflow-hidden min-h-[260px] flex flex-col justify-between">
                
                {/* Street Grid Illustration lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-12 left-0 right-0 h-4 bg-[#786F66]" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-[#786F66]" />
                  <div className="absolute top-36 left-0 right-0 h-6 bg-[#786F66]" />
                </div>

                {/* Map Pins & Callouts */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-code text-[11px] font-bold bg-[#1A1615] text-white px-2.5 py-1 rounded">
                    FLORAL MARKET SQUARE
                  </span>
                  <span className="font-code text-[11px] font-bold bg-[#4D7C55] text-white px-2.5 py-1 rounded">
                    TUBE: COVENT GARDEN (2 MIN)
                  </span>
                </div>

                {/* Center Bakery Flagship Highlight */}
                <div className="relative z-10 my-4 bg-white p-4 rounded-xl border-2 border-[#C4122F] shadow-lg max-w-xs mx-auto text-center space-y-1">
                  <div className="inline-flex p-2 rounded-full bg-[#C4122F] text-white mb-1">
                    <MapPin className="w-5 h-5 animate-bounce" />
                  </div>
                  <h4 className="font-editorial text-lg font-black text-[#1A1615]">
                    CRUMB & CHERRY
                  </h4>
                  <p className="font-code text-[10px] text-[#C4122F] font-bold">
                    RED AWNING • COVENT GARDEN MEWS
                  </p>
                </div>

                <div className="relative z-10 flex justify-between text-[11px] font-code text-[#665E55] bg-white/80 backdrop-blur-xs p-2 rounded-lg border border-[#E5DFD5]">
                  <span>☕ FILTER BAR OPEN</span>
                  <span>🥐 EXPRESS PICKUP HATCH</span>
                </div>
              </div>

              {/* Contact direct lines */}
              <div className="grid grid-cols-2 gap-3 font-code text-xs text-[#665E55] pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C4122F]" />
                  <span>{BAKERY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C4122F]" />
                  <span>{BAKERY_INFO.email}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Pastry Hold Modal */}
      <AnimatePresence>
        {isHoldModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHoldModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full border-4 border-[#1A1615] shadow-2xl z-10"
            >
              <button
                onClick={() => setIsHoldModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-[#FAF6EE] text-[#1A1615]"
              >
                <X className="w-4 h-4" />
              </button>

              {isHoldSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle className="w-12 h-12 text-[#4D7C55] mx-auto" />
                  <h4 className="font-editorial text-2xl font-bold">Pastries Held Behind Counter!</h4>
                  <p className="font-sans text-xs text-[#665E55]">
                    We will save your selection under &quot;{holdName}&quot; until {holdTime}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleHoldSubmit} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C4122F]" />
                    <span className="font-code text-xs font-bold text-[#C4122F] uppercase tracking-wider">
                      HOLD BEHIND THE GLASS
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-black">
                    Reserve Your Morning Bakes
                  </h3>

                  <div>
                    <label className="font-code text-xs text-[#786F66] uppercase block mb-1">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={holdName}
                      onChange={(e) => setHoldName(e.target.value)}
                      placeholder="e.g. Charlotte Wood"
                      className="w-full p-2.5 rounded-lg border border-[#E5DFD5] font-sans text-sm focus:ring-2 focus:ring-[#C4122F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-code text-xs text-[#786F66] uppercase block mb-1">
                      Pastries to Reserve:
                    </label>
                    <input
                      type="text"
                      required
                      value={holdPastry}
                      onChange={(e) => setHoldPastry(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#E5DFD5] font-sans text-sm focus:ring-2 focus:ring-[#C4122F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-code text-xs text-[#786F66] uppercase block mb-1">
                      Pickup Window:
                    </label>
                    <select
                      value={holdTime}
                      onChange={(e) => setHoldTime(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-[#E5DFD5] font-code text-xs focus:ring-2 focus:ring-[#C4122F] focus:outline-none"
                    >
                      <option>Today at 08:30 AM</option>
                      <option>Today at 09:30 AM</option>
                      <option>Today at 11:30 AM (Warm Batch)</option>
                      <option>Today at 03:45 PM (Afternoon Batch)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C4122F] text-[#FFF4D4] py-3 rounded-full font-code font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#A80E26] transition-colors cursor-pointer"
                  >
                    CONFIRM HOLD REQUEST →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
