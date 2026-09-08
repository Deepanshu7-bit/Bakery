'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Check, Info } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { PRODUCTS } from '@/data/bakeryData';
import { BakeryCategory, Product } from '@/types/bakery';
import { WashiTape } from '@/components/ui/WashiTape';

export const TodaysBakes: React.FC = () => {
  const { setCursorType, openProductModal, addToBox } = useBakery();
  const [activeCategory, setActiveCategory] = useState<BakeryCategory>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories: { label: string; value: BakeryCategory }[] = [
    { label: 'ALL BAKES', value: 'all' },
    { label: 'VIENNOISERIE', value: 'viennoiserie' },
    { label: 'PÂTISSERIE & TARTS', value: 'pastries' },
    { label: 'COOKIES & CAKES', value: 'cookies' },
    { label: 'WILD SOURDOUGH', value: 'sourdough' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory || (activeCategory === 'cookies' && p.category === 'cakes'));

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToBox(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="todays-bakes" className="py-24 sm:py-32 bg-[#F2F7F2] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Background grain and pistachio tint */}
      <div className="absolute inset-0 bg-paper-grain opacity-60 pointer-events-none" />

      {/* Decorative Washi Tape */}
      <WashiTape color="sage" width="w-36" rotation={-2} className="top-12 left-8" label="PULL 06:15 AM" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Editorial Headline & Filter Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b-2 border-[#D4E7D0] gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4D7C55] animate-pulse" />
              <span className="font-code text-xs font-bold uppercase tracking-widest text-[#4D7C55]">
                TODAY&apos;S FRESH COUNTER
              </span>
              <span className="font-code text-[11px] bg-white px-2.5 py-0.5 rounded border border-[#D4E7D0] text-[#4D7C55] font-semibold">
                8 CREATIONS LIVE
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#1A1615] leading-none tracking-tight">
              MEET YOUR NEW <br />
              <span className="text-[#4D7C55] italic font-normal">FAVOURITE.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#526354] max-w-lg">
              Every item is shaped by hand, slow-fermented, and pulled from the stone hearth throughout the morning. When a batch sells out, we ring the bell.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-2 rounded-full font-code text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-[#4D7C55] text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#3E5241] border border-[#D4E7D0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetrical Product Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProducts.map((product, idx) => {
            // Give varied column spans and heights for true editorial asymmetry!
            const isFeatured = idx === 0 || idx === 3;
            const colSpan = isFeatured ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => openProductModal(product)}
                onMouseEnter={() => setCursorType('look')}
                onMouseLeave={() => setCursorType('default')}
                className={`${colSpan} group relative bg-white rounded-3xl p-5 sm:p-7 border-3 border-[#1A1615] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer`}
              >
                {/* Product Badge / Sticker */}
                {product.badge && (
                  <div className="absolute -top-3.5 right-6 z-20">
                    <span className="font-code text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-[#4D7C55] text-white rounded-full border border-[#1A1615] shadow-sm">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Top Info Bar */}
                <div className="flex justify-between items-baseline pb-3 border-b border-dashed border-[#E5DFD5]">
                  <div>
                    <span className="font-code text-[11px] font-bold text-[#8C8477] uppercase tracking-wider">
                      {product.batchNumber}
                    </span>
                    <span className="font-code text-[10px] text-[#4D7C55] ml-2 font-semibold">
                      • {product.bakedAt}
                    </span>
                  </div>
                  <div className="font-code font-black text-lg text-[#C4122F]">
                    ₹{product.price}
                  </div>
                </div>

                {/* Main Product Image with Tactile Zoom & Angle Preview */}
                <div className={`relative ${isFeatured ? 'aspect-16/10' : 'aspect-4/3'} rounded-2xl overflow-hidden my-4 bg-[#FAF6EE] border-2 border-[#1A1615]`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
                  />
                  
                  {/* Subtle paper tag overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#1A1615] font-code text-[10px] text-[#1A1615] font-bold shadow-xs">
                    {product.butterPercentage || '84% Normandy Butter'}
                  </div>
                </div>

                {/* Typography & Copywriting */}
                <div className="space-y-2 mt-2">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-black text-[#1A1615] group-hover:text-[#4D7C55] transition-colors leading-tight">
                    {product.name}
                  </h3>

                  <p className="font-handwritten text-lg text-[#D97706] leading-none">
                    “{product.tagline}”
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#5C554E] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-5 mt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductModal(product);
                    }}
                    className="font-code text-xs font-bold text-[#4D7C55] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>RECIPE & ALLERGENS</span>
                  </button>

                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={(e) => handleQuickAdd(product, e)}
                    disabled={!product.available}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-code font-bold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer ${
                      !product.available
                        ? 'bg-[#E5DFD5] text-[#8C8477] cursor-not-allowed'
                        : addedId === product.id
                        ? 'bg-[#4D7C55] text-white'
                        : 'bg-[#1A1615] hover:bg-[#C4122F] text-[#FFF4D4]'
                    }`}
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>ADDED!</span>
                      </>
                    ) : !product.available ? (
                      <span>SOLD OUT</span>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>ADD TO BOX</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
