'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame, Thermometer, Wind } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { BakeryStamp } from '@/components/ui/BakeryStamp';

export const OvenMoment: React.FC = () => {
  const { setCursorType, isBakingOvenWarm, toggleOvenWarm } = useBakery();

  return (
    <section id="from-the-oven" className="py-28 sm:py-36 bg-[#1A0C0E] text-[#FFFDF7] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Dark glowing furnace ambiance */}
      <div className="absolute inset-0 bg-paper-grain opacity-10 pointer-events-none" />
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#FF4D00]/15 via-[#C4122F]/20 to-transparent transition-opacity duration-1000 ${
          isBakingOvenWarm ? 'opacity-100' : 'opacity-30'
        }`}
      />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF7A00]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Atmospheric Typography & Live Hearth Gauges */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Batch Timestamp Pill */}
            <div className="inline-flex items-center gap-3 bg-[#2D1217] border border-[#6B1B26] px-4 py-2 rounded-full font-code text-xs text-[#FF7A00] font-bold tracking-widest uppercase shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-ping" />
              <span>06:12 AM • FIRST BATCH OUT</span>
            </div>

            {/* Giant Editorial Headline */}
            <h2 className="font-editorial text-5xl sm:text-7xl font-black text-[#FFF4D4] leading-[0.92] tracking-tight">
              STILL WARM. <br />
              <span className="text-[#FF7A00] italic font-normal">DON&apos;T WAIT.</span>
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-[#EBDDCB] leading-snug">
              When the stone deck timer chimes, steam billows into the Covent Garden dawn. The crust is at peak crispness for exactly forty minutes.
            </p>

            {/* Live Oven Stats Board */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#2D1217]/80 border border-[#6B1B26] font-code text-xs text-center">
              <div>
                <span className="text-[10px] text-[#A88C8F] uppercase block">Deck Temp</span>
                <span className="text-base sm:text-lg font-bold text-[#FF7A00] flex items-center justify-center gap-1 mt-0.5">
                  <Thermometer className="w-4 h-4" /> 210°C
                </span>
              </div>
              <div className="border-x border-[#4A1D23]">
                <span className="text-[10px] text-[#A88C8F] uppercase block">Steam Injected</span>
                <span className="text-base sm:text-lg font-bold text-[#FFF4D4] flex items-center justify-center gap-1 mt-0.5">
                  <Wind className="w-4 h-4 text-[#FF7A00]" /> 90 Sec
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#A88C8F] uppercase block">Status</span>
                <span className="text-base sm:text-lg font-bold text-[#4D7C55] mt-0.5 block">
                  HOT & READY
                </span>
              </div>
            </div>

            {/* Baker's Handwritten Chalk Warning */}
            <div className="bg-[#261014] p-4 rounded-xl border-l-4 border-[#FF7A00] font-handwritten text-2xl text-[#FEE38D]">
              “If your fingers don&apos;t get a little butter on them, you&apos;re eating it wrong.”
            </div>

            {/* Interactive Heat Glow Toggle */}
            <div className="pt-2">
              <button
                onClick={toggleOvenWarm}
                onMouseEnter={() => setCursorType('heat')}
                onMouseLeave={() => setCursorType('default')}
                className="inline-flex items-center gap-2 bg-[#FF7A00] hover:bg-[#E06900] text-[#1A0C0E] px-6 py-3 rounded-full font-code font-bold text-xs tracking-wider uppercase transition-colors shadow-lg cursor-pointer"
              >
                <Flame className="w-4 h-4" />
                <span>{isBakingOvenWarm ? 'OVEN GLOW: ACTIVE (210°C)' : 'TURN OVEN HEAT ON'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Cinematic Photography with Visual Rising Steam Layers */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-4/3 sm:aspect-16/11 rounded-3xl overflow-hidden border-4 border-[#6B1B26] shadow-2xl bg-[#0D0506]"
            >
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85"
                alt="Golden croissants fresh from the 210°C hearth"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className={`object-cover transition-all duration-1000 ${
                  isBakingOvenWarm ? 'brightness-110 saturate-125 scale-102' : 'brightness-85'
                }`}
              />

              {/* Rising Steam Graphic Overlay Elements */}
              {isBakingOvenWarm && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute bottom-6 left-1/3 w-24 h-40 bg-gradient-to-t from-white/30 to-transparent rounded-full filter blur-xl animate-steam" />
                  <div className="absolute bottom-8 left-1/2 w-32 h-48 bg-gradient-to-t from-white/20 to-transparent rounded-full filter blur-2xl animate-steam-delayed" />
                </div>
              )}

              {/* Tag in corner */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-code bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="font-bold text-[#FF7A00]">T65 STONEGROUND • FLAKY CRUST</span>
                <span className="text-[#FFF4D4]">HEARTH 06:12 AM</span>
              </div>
            </motion.div>

            {/* Floating Stamp */}
            <div className="absolute -top-6 -right-4 z-20">
              <BakeryStamp text="FRESH STEAM" subtext="210°C STONE" size="md" rotation={10} color="cherry" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
