'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { WashiTape } from '@/components/ui/WashiTape';
import { BakeryStamp } from '@/components/ui/BakeryStamp';

export const BakeryStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-36 bg-[#FFFDF7] text-[#1A1615] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Paper Grain */}
      <div className="absolute inset-0 bg-paper-grain opacity-80 pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <WashiTape color="cherry" width="w-40" rotation={-3} className="top-12 left-10" label="ORIGIN STORY" />
      <WashiTape color="kraft" width="w-36" rotation={5} className="bottom-14 right-14" label="BATCH #47" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Scrapbook Recipe Cards & Film Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Scrapbook Layer */}
              <div className="absolute -inset-2 sm:-inset-4 bg-[#EBDDCB] rounded-3xl transform rotate-2 border-3 border-[#1A1615] shadow-lg pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative bg-white p-5 sm:p-7 rounded-3xl border-3 border-[#1A1615] shadow-xl space-y-4">
                
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#1A1615]">
                  <Image
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=85"
                    alt="Hands dusting flour and rolling dough on marble counter"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover"
                  />
                  
                  {/* Pinned Note on photo */}
                  <div className="absolute top-3 left-3 bg-[#FFF3B0] text-[#78350F] p-2 rounded border border-[#D97706] font-handwritten text-base shadow-sm">
                    “4:30 AM • First test bake in 2021”
                  </div>
                </div>

                {/* Hand-scrawled Recipe Notes */}
                <div className="bg-[#FAF6EE] p-4 rounded-xl border border-dashed border-[#D7C4B0] font-handwritten text-lg text-[#523325] leading-snug">
                  “Ratio test: 84% butter vs 82%. The Normandy Beurre d’Isigny creates 3x higher honeycomb lift. Do not use supermarket butter ever again.”
                </div>

                {/* Timeline badge footer */}
                <div className="flex justify-between items-center text-xs font-code text-[#786F66] pt-1">
                  <span>EST. OCTOBER 2021</span>
                  <span>COVENT GARDEN • MEWS 42</span>
                </div>
              </div>

              {/* Tilted Vintage Polaroid in corner */}
              <motion.div
                initial={{ rotate: -8 }}
                whileHover={{ rotate: -2, scale: 1.05 }}
                className="absolute -bottom-8 -left-4 sm:-left-8 w-44 sm:w-52 bg-white p-3 rounded-lg border-2 border-[#1A1615] shadow-2xl z-20"
              >
                <div className="relative aspect-square rounded overflow-hidden mb-2 bg-[#FAF6EE]">
                  <Image
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
                    alt="The 47th batch croissant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center font-handwritten text-sm text-[#C4122F] font-bold">
                  “Batch #47: Success!”
                </div>
              </motion.div>

              {/* Floating Stamp */}
              <div className="absolute -top-6 -right-4 z-20">
                <BakeryStamp text="HAND ROLLED" subtext="NO SHORTCUTS" size="md" rotation={12} color="cherry" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copywriting & Manifesto */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            
            <div className="inline-flex items-center gap-2 bg-[#FFF1F2] text-[#C4122F] px-3.5 py-1.5 rounded-full font-code text-xs font-bold uppercase tracking-wider border border-[#FECDD3]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE CRUMB & CHERRY MANIFESTO</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#1A1615] leading-[0.95] tracking-tight">
              IT STARTED <br />
              WITH FLOUR ON <br />
              <span className="text-[#C4122F] italic font-normal">THE COUNTER.</span>
            </h2>

            <div className="space-y-4 font-sans text-base sm:text-lg text-[#4A433D] leading-relaxed">
              <p>
                We burned a lot of croissants figuring this out. We set smoke alarms off in rented flats at 5:00 AM. We argued over quarter-gram measurements of Maldon salt.
              </p>

              <p className="font-editorial text-2xl text-[#1A1615] font-bold italic">
                “The good news? The 47th batch was ridiculous.”
              </p>

              <p>
                We believe that a croissant isn’t just breakfast — it’s three days of patient fermentation, 72 microscopic layers of cold Normandy butter, and the quiet satisfaction of a mahogany crust that shatters across your table.
              </p>
            </div>

            {/* Core Bakery Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5DFD5]">
              <div className="bg-[#FAF6EE] p-4 rounded-xl border border-[#E5DFD5]">
                <span className="font-code text-xs font-bold text-[#C4122F] block uppercase tracking-wider">
                  01. UNCOMPROMISING BUTTER
                </span>
                <p className="font-sans text-xs text-[#665E55] mt-1">
                  84% Beurre d’Isigny AOP only. We refuse to touch palm oils or shortcuts.
                </p>
              </div>

              <div className="bg-[#FAF6EE] p-4 rounded-xl border border-[#E5DFD5]">
                <span className="font-code text-xs font-bold text-[#C4122F] block uppercase tracking-wider">
                  02. 3-DAY FERMENTATION
                </span>
                <p className="font-sans text-xs text-[#665E55] mt-1">
                  Slow cold proofing develops complex caramelized flavors you cannot fake.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
