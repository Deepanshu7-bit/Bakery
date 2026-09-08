'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBakery } from '@/context/BakeryContext';
import { WashiTape } from '@/components/ui/WashiTape';
import { BakeryStamp } from '@/components/ui/BakeryStamp';

export const FinalCTA: React.FC = () => {
  const { setIsDrawerOpen, setCursorType } = useBakery();

  const handleCelebrate = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#C4122F', '#FEE38D', '#4D7C55', '#2B1810', '#E14D6C'],
      });
    } catch {
      console.log('Confetti');
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-[#C4122F] text-[#FFF4D4] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Background Kraft & Sparkle Textures */}
      <div className="absolute inset-0 bg-paper-grain opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FEE38D]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/25 blur-3xl pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <WashiTape color="butter" width="w-40" rotation={-4} className="top-8 left-12" label="BAKED FRESH" />
      <WashiTape color="sage" width="w-36" rotation={3} className="bottom-10 right-16" label="COVENT GARDEN" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Dramatic Typography & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-[#FFF4D4] text-[#C4122F] px-4 py-1.5 rounded-full font-code text-xs font-black uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C4122F]" />
              <span>THE MORNING RITUAL</span>
            </div>

            <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-black leading-[0.88] tracking-tight text-[#FFF4D4]">
              YOU BRING <br />
              THE PEOPLE. <br />
              <span className="text-[#FEE38D] italic font-normal">WE&apos;LL BRING</span> <br />
              THE CAKE.
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-[#FFEAD4] max-w-lg leading-snug">
              Order a custom 6-pack or 12-pack bakery box for morning meetings, weekend feasts, or quiet Sunday mornings in bed.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  handleCelebrate();
                  setIsDrawerOpen(true);
                }}
                onMouseEnter={() => setCursorType('grab')}
                onMouseLeave={() => setCursorType('default')}
                className="bg-[#FFF4D4] hover:bg-white text-[#C4122F] px-8 py-4 rounded-full font-code font-black text-xs sm:text-sm tracking-widest uppercase shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>BUILD A CUSTOM BOX NOW →</span>
              </button>

              <a
                href="#visit"
                className="bg-[#2B1810] hover:bg-[#1A0E0A] text-[#FFF4D4] border-2 border-[#FFF4D4]/40 px-7 py-3.5 rounded-full font-code font-bold text-xs sm:text-sm tracking-widest uppercase transition-colors"
              >
                FIND THE BAKERY
              </a>
            </div>

            {/* Microcopy footnote */}
            <p className="font-handwritten text-xl text-[#FEE38D] pt-2">
              “Yes, we pack extra napkins. Yes, you will need them.”
            </p>

          </div>

          {/* Right Side: Hero Visual Packaging & Tart Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-[#FFFDF7] p-6 rounded-3xl border-4 border-[#1A1615] shadow-2xl text-[#1A1615]"
            >
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#1A1615] shadow-md bg-[#FAF6EE]">
                <Image
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85"
                  alt="Wild Strawberry & Tarragon Tart"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              <div className="pt-4 flex justify-between items-center text-xs font-code">
                <div>
                  <span className="font-bold text-[#C4122F] uppercase block">SEASONAL SPECIAL</span>
                  <span className="font-editorial text-lg font-bold text-[#1A1615]">Wild Strawberry Tart</span>
                </div>
                <span className="font-bold text-base text-[#C4122F]">₹450</span>
              </div>

              {/* Floating Stamps */}
              <div className="absolute -top-6 -right-6 z-20">
                <BakeryStamp text="PRE-ORDER BOX" subtext="SAVE YOUR FAVORITES" size="md" rotation={10} color="cherry" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
