'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Plus, Flame, Clock } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { PRODUCTS } from '@/data/bakeryData';
import { BakeryStamp } from '@/components/ui/BakeryStamp';
import { WashiTape } from '@/components/ui/WashiTape';
import { PriceTag } from '@/components/ui/PriceTag';

export const SignatureBake: React.FC = () => {
  const { setCursorType, addToBox, openProductModal } = useBakery();
  const signatureProduct = PRODUCTS[1]; // 72% Dark Chocolate Babka

  return (
    <section id="signature" className="py-24 sm:py-36 bg-[#2B1810] text-[#FFFDF7] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Editorial chocolate background grain & glowing oven ambiance */}
      <div className="absolute inset-0 bg-paper-grain opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C4122F]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#FF7A00]/15 blur-3xl pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <WashiTape color="kraft" width="w-40" rotation={-3} className="top-12 left-10" label="COVER STORY" />
      <WashiTape color="cherry" width="w-36" rotation={4} className="bottom-12 right-12" label="36H FERMENT" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Magazine Masthead Tag */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFF4D4] text-[#2B1810] px-4 py-1.5 rounded-full font-code text-xs font-black uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C4122F]" />
            <span>THE COVENT GARDEN OBSESSION</span>
          </div>

          <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.9] text-[#FFF4D4]">
            THE ONE <br />
            <span className="text-[#C4122F] italic font-normal">EVERYONE</span> <br />
            TALKS ABOUT.
          </h2>

          <p className="font-editorial text-xl sm:text-2xl text-[#E5DFD5] max-w-xl mx-auto">
            72% Valrhona Dark Chocolate. 36-Hour Fermented Brioche. Orange Blossom Syrup.
          </p>
        </div>

        {/* Feature Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Enormous Photography with Tilted Frame */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-[#FFFDF7] text-[#1A1615] rounded-3xl p-6 sm:p-8 border-4 border-[#1A1615] shadow-2xl"
            >
              {/* Top Paper Header */}
              <div className="flex justify-between items-center pb-4 border-b-2 border-dashed border-[#E5DFD5] font-code text-xs">
                <span className="font-bold text-[#C4122F] tracking-widest">EDITION NO. 04 • AUTUMN</span>
                <span className="text-[#8C8477]">VALRHONA GUANAJA 72%</span>
              </div>

              {/* Huge Visual Image */}
              <div
                onMouseEnter={() => setCursorType('taste')}
                onMouseLeave={() => setCursorType('default')}
                className="relative aspect-16/11 sm:aspect-16/10 rounded-2xl overflow-hidden my-5 border-2 border-[#1A1615] shadow-lg group cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1200&q=85"
                  alt="72% Dark Chocolate Babka Twist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Steam Effect badge */}
                <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-xs text-[#FFF4D4] px-3 py-1 rounded-full font-code text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-[#FF7A00] animate-pulse" />
                  <span>WARMED TO 45°C</span>
                </div>
              </div>

              {/* Bottom Details with Price and Handwritten Annotation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div>
                  <span className="font-code text-[11px] text-[#8C8477] uppercase font-bold block">
                    Baker&apos;s Confession
                  </span>
                  <p className="font-handwritten text-xl text-[#C4122F] font-bold">
                    “We tried 46 variations. The 47th batch broke the internet.”
                  </p>
                </div>
                <PriceTag price={390} batch="VALRHONA #02" rotation={2} />
              </div>

              {/* Interactive Stamp Overlays */}
              <div className="absolute -top-6 -right-6 z-20">
                <BakeryStamp text="CULT FAVOURITE" subtext="72% VALRHONA" size="md" rotation={12} color="cherry" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Recipe Story, Flavor Notes, & Add CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Story Card */}
            <div className="bg-[#3D251A] rounded-2xl p-6 sm:p-7 border-2 border-[#523325] shadow-lg space-y-4">
              <div className="flex items-center gap-2 font-code text-xs text-[#FEE38D] font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#C4122F]" />
                <span>36 HOURS IN THE MAKING</span>
              </div>

              <h3 className="font-editorial text-3xl font-bold text-[#FFF4D4] leading-tight">
                Slow proofed. Aggressively braided. Drenched in orange blossom.
              </h3>

              <p className="font-sans text-sm text-[#E5DFD5] leading-relaxed">
                We make our enriched brioche dough using whole milk, cultured churned butter, and organic eggs. After a 36-hour cold ferment, it is rolled with warm Valrhona 72% dark chocolate ganache, hand-braided, and baked until glossy.
              </p>

              {/* Key Highlights list */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#523325] font-code text-xs text-[#FEE38D]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4122F]" />
                  <span>72% Valrhona Guanaja</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4122F]" />
                  <span>36h Cold Fermentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4122F]" />
                  <span>Piedmont Hazelnuts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4122F]" />
                  <span>Orange Blossom Syrup</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => addToBox(signatureProduct, 1)}
                className="flex-1 bg-[#C4122F] hover:bg-[#A80E26] text-[#FFF4D4] py-4 px-6 rounded-full font-code font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>ADD TO BOX — ₹390</span>
              </button>

              <button
                onClick={() => openProductModal(signatureProduct)}
                className="bg-[#FFF4D4] hover:bg-white text-[#2B1810] py-4 px-6 rounded-full font-code font-bold text-xs sm:text-sm tracking-widest uppercase shadow-md transition-colors cursor-pointer"
              >
                RECIPE DETAILS
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
