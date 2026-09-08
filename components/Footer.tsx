'use client';

import { ArrowUp } from 'lucide-react';
import { BAKERY_INFO } from '@/data/bakeryData';
import { BakeryStamp } from '@/components/ui/BakeryStamp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1615] text-[#FFFDF7] pt-20 pb-12 relative overflow-hidden">
      {/* Background Paper Texture */}
      <div className="absolute inset-0 bg-paper-grain opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Packaging Label Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#38312B]">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C4122F] text-[#FFF4D4] flex items-center justify-center font-editorial font-black text-xl">
                C&C
              </div>
              <div>
                <span className="font-editorial text-2xl font-black text-[#FFFDF7] block leading-none">
                  CRUMB & CHERRY
                </span>
                <span className="font-code text-[10px] text-[#A89F91] tracking-widest uppercase">
                  ARTISANAL PATISSERIE • COVENT GARDEN
                </span>
              </div>
            </div>

            <p className="font-editorial text-lg text-[#D7CEC2] italic">
              “{BAKERY_INFO.motto}”
            </p>

            <p className="font-sans text-xs text-[#A89F91] max-w-sm leading-relaxed">
              Crafted in small batches with 84% Normandy Beurre d’Isigny AOP and slow-fermented organic grains. No preservatives, no commercial yeast shortcuts.
            </p>

            <div className="pt-2">
              <BakeryStamp text="100% ARTISANAL" subtext="NO COMPROMISES" size="sm" rotation={-4} color="cherry" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3 font-code text-xs">
            <span className="font-bold text-[#FEE38D] uppercase tracking-wider block">
              THE BAKERY DIRECTORY
            </span>
            <ul className="space-y-2 text-[#D7CEC2]">
              <li>
                <a href="#todays-bakes" className="hover:text-[#C4122F] transition-colors">
                  → Today&apos;s Fresh Bakes Counter
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#C4122F] transition-colors">
                  → 72% Dark Chocolate Babka
                </a>
              </li>
              <li>
                <a href="#recipe-process" className="hover:text-[#C4122F] transition-colors">
                  → 72-Hour Lamination Journal
                </a>
              </li>
              <li>
                <a href="#from-the-oven" className="hover:text-[#C4122F] transition-colors">
                  → 06:12 AM Hearth Batch
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C4122F] transition-colors">
                  → Our Story (Batch #47)
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#C4122F] transition-colors">
                  → Visit Covent Garden
                </a>
              </li>
            </ul>
          </div>

          {/* Bakery Packaging Nutrition Facts Parody Label */}
          <div className="lg:col-span-4 bg-[#26201D] p-5 rounded-xl border border-[#3E352F] font-code text-xs space-y-2">
            <div className="border-b-2 border-[#D7CEC2] pb-1">
              <span className="font-black text-sm uppercase tracking-wider text-[#FFFDF7] block">
                BAKERY NUTRITION & SEROTONIN
              </span>
              <span className="text-[10px] text-[#A89F91]">Serving size: 1 Pastry (or 3 if you had a long week)</span>
            </div>

            <div className="space-y-1 text-[11px] text-[#D7CEC2]">
              <div className="flex justify-between border-b border-[#3E352F] pb-0.5">
                <span>Pure Normandy Butter</span>
                <span className="font-bold text-[#FEE38D]">84% AOP</span>
              </div>
              <div className="flex justify-between border-b border-[#3E352F] pb-0.5">
                <span>Flaky Honeycomb Layers</span>
                <span className="font-bold text-[#FEE38D]">72 Exact</span>
              </div>
              <div className="flex justify-between border-b border-[#3E352F] pb-0.5">
                <span>Instant Serotonin</span>
                <span className="font-bold text-[#4D7C55]">100% Daily Value</span>
              </div>
              <div className="flex justify-between">
                <span>Diet Guilt</span>
                <span className="font-bold text-[#C4122F]">0% (Not allowed here)</span>
              </div>
            </div>

            <div className="pt-2 text-[9px] text-[#8C8477] italic">
              * Daily values are based on an unrepentant appreciation for pastry craftsmanship.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-[#8C8477]">
          <div>
            © {new Date().getFullYear()} CRUMB & CHERRY LTD. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-2">
            <span>BAKED WITH UNREASONABLE AMOUNTS OF BUTTER</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#FFF4D4] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
