'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Clock, ChevronRight } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { BakeryStamp } from '@/components/ui/BakeryStamp';
import { WashiTape } from '@/components/ui/WashiTape';
import { StickerBadge } from '@/components/ui/StickerBadge';
import { PriceTag } from '@/components/ui/PriceTag';

export const HeroExperience: React.FC = () => {
  const { setCursorType, setIsDrawerOpen } = useBakery();

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFDF7] overflow-hidden flex flex-col justify-between border-b-4 border-[#1A1615]">
      {/* Editorial Background Paper Texture Grid */}
      <div className="absolute inset-0 bg-paper-grain opacity-80 pointer-events-none" />

      {/* Decorative Washi Tape elements */}
      <WashiTape color="butter" width="w-28 sm:w-36" rotation={-4} className="top-24 sm:top-28 left-4 sm:left-12" label="FRESH 06:15 AM" />
      <WashiTape color="cherry" width="w-32" rotation={6} className="top-32 right-4 sm:right-16" label="72 LAYERS" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Oversized Editorial Typography & Packaging Microcopy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Meta Batch Pill & Bakery Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 bg-[#C4122F] text-[#FFF4D4] px-3.5 py-1 rounded-full font-code text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FFF4D4] animate-ping" />
                <span>HEARTH BATCH #04-A</span>
              </div>
              <span className="font-handwritten text-lg sm:text-xl text-[#78350F] font-bold">
                “Very good butter was involved.”
              </span>
            </motion.div>

            {/* Giant Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black leading-[0.88] tracking-tight text-[#1A1615]">
                <span className="block text-[#C4122F]">BAKED</span>
                <span className="block">FOR HAPPY</span>
                <span className="block italic font-normal text-[#2B1810]">PEOPLE.</span>
              </h1>
            </motion.div>

            {/* Supporting Human Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 max-w-xl"
            >
              <p className="font-editorial text-xl sm:text-2xl text-[#3D352E] font-medium leading-snug">
                Small batches. Long mornings. Shatteringly crisp 72-layer croissants and molten Valrhona chocolate babka.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-code text-[#786F66] border-t border-b border-[#E5DFD5] py-2.5">
                <span className="flex items-center gap-1.5 font-bold text-[#1A1615]">
                  <Clock className="w-3.5 h-3.5 text-[#C4122F]" /> FRESH DAILY FROM 06:15 AM
                </span>
                <span>•</span>
                <span>STONEGROUND T65 FLOUR</span>
                <span>•</span>
                <span className="text-[#C4122F] font-bold">84% NORMANDY BUTTER</span>
              </div>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#todays-bakes"
                onMouseEnter={() => setCursorType('look')}
                onMouseLeave={() => setCursorType('default')}
                className="inline-flex items-center gap-2 bg-[#C4122F] hover:bg-[#A80E26] text-[#FFF4D4] px-7 py-4 rounded-full font-code font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>SEE TODAY&apos;S BAKES</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsDrawerOpen(true)}
                onMouseEnter={() => setCursorType('grab')}
                onMouseLeave={() => setCursorType('default')}
                className="inline-flex items-center gap-2 bg-[#FAF6EE] hover:bg-[#F3EAD9] text-[#1A1615] border-2 border-[#1A1615] px-6 py-3.5 rounded-full font-code font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xs transition-colors cursor-pointer"
              >
                <span>BUILD A 6-PACK BOX →</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Physical Art-Directed Poster & Layered Pastry Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', damping: 20 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Back Card Shadow Frame */}
              <div className="absolute inset-0 bg-[#E8DCCB] rounded-3xl transform rotate-3 scale-98 border-2 border-[#1A1615] shadow-lg pointer-events-none" />

              {/* Main Physical Bakery Showcase Card */}
              <div className="relative bg-[#FAF6EE] rounded-3xl p-5 sm:p-7 border-3 border-[#1A1615] shadow-2xl overflow-hidden">
                {/* Top Poster Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-dashed border-[#D7C4B0] text-xs font-code">
                  <span className="font-bold text-[#C4122F] tracking-widest">COVENT GARDEN HEARTH</span>
                  <span className="text-[#856D57]">BATCH NO. 04</span>
                </div>

                {/* Main Hero Pastry Photography Container */}
                <div
                  onMouseEnter={() => setCursorType('taste')}
                  onMouseLeave={() => setCursorType('default')}
                  className="relative aspect-4/3 rounded-2xl overflow-hidden my-4 border-2 border-[#1A1615] group cursor-pointer shadow-md bg-white"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85"
                    alt="Heritage 72-Layer Croissant fresh out of the oven"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    priority
                    className="object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Image Microcopy Label */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
                    <div>
                      <span className="font-code text-[10px] tracking-widest uppercase bg-[#C4122F] px-2 py-0.5 rounded font-bold">
                        PULL TO OPEN
                      </span>
                      <p className="font-editorial text-base sm:text-lg font-bold mt-1">
                        Heritage 72-Layer Croissant
                      </p>
                    </div>
                    <span className="font-code text-sm font-bold bg-black/70 px-2 py-1 rounded">
                      ₹320
                    </span>
                  </div>
                </div>

                {/* Bottom Card Annotation & Details */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-code text-[10px] uppercase tracking-wider text-[#856D57] block">
                      Texture Rating
                    </span>
                    <span className="font-handwritten text-lg text-[#C4122F] font-bold">
                      “Shatters across the table”
                    </span>
                  </div>
                  <PriceTag price={320} batch="CRUST #01" rotation={-3} />
                </div>
              </div>

              {/* Floating Stamps & Stickers positioned intentionally */}
              <div className="absolute -top-6 -right-4 z-20">
                <BakeryStamp text="CRUST OBSESSED" subtext="NORMANDY BUTTER" size="md" rotation={14} color="cherry" />
              </div>

              <div className="absolute -bottom-5 -left-4 z-20">
                <StickerBadge label="72 LAYERS" sublabel="CRUNCH TEST" color="butter" rotation={-8} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-code text-[#786F66]">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-[#C4122F] animate-bounce" />
          <span className="font-bold uppercase tracking-wider">SCROLL TO EXPLORE THE BAKERY</span>
        </div>
        <div className="hidden sm:block font-handwritten text-base text-[#C4122F]">
          “Don&apos;t bring a fork. Actually, bring three.”
        </div>
      </div>
    </section>
  );
};
