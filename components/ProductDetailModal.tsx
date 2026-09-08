'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { WashiTape } from '@/components/ui/WashiTape';

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct, closeProductModal, addToBox } = useBakery();

  if (!selectedProduct) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProductModal}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-[#FFFDF7] w-full max-w-3xl rounded-2xl shadow-2xl border-4 border-[#1A1615] overflow-hidden z-10 my-8"
        >
          {/* Top Tape decoration */}
          <WashiTape color="butter" width="w-32" rotation={-2} className="-top-3 left-12" label="RECIPE CARD" />

          {/* Close button */}
          <button
            onClick={closeProductModal}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#1A1615] shadow-md transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Image Area */}
            <div className="relative min-h-[300px] md:min-h-full bg-[#FAF6EE] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E5DFD5]">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-[#E5DFD5]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>

              {selectedProduct.badge && (
                <div className="absolute bottom-4 left-6">
                  <span className="font-code text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-[#C4122F] text-[#FFF4D4] rounded-full shadow-md">
                    ★ {selectedProduct.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Right Details Area */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-code text-xs font-bold text-[#8C8477] uppercase tracking-widest">
                    {selectedProduct.batchNumber} • {selectedProduct.bakedAt}
                  </span>
                  <span className="font-code text-lg font-black text-[#C4122F]">
                    ₹{selectedProduct.price}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-black text-[#1A1615] mt-2 leading-tight">
                  {selectedProduct.name}
                </h3>

                <p className="font-handwritten text-xl text-[#B45309] mt-1">
                  “{selectedProduct.tagline}”
                </p>

                <p className="font-sans text-sm text-[#4A433D] mt-3 leading-relaxed">
                  {selectedProduct.longDescription}
                </p>
              </div>

              {/* Flavor Profile Bars */}
              <div className="space-y-2 bg-[#FAF6EE] p-4 rounded-xl border border-[#E5DFD5]">
                <span className="font-code text-[11px] font-bold uppercase tracking-wider text-[#786F66] block">
                  Pastry Texture & Profile:
                </span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-code">
                  <div>
                    <div className="flex justify-between text-[10px] text-[#786F66] mb-0.5">
                      <span>Flakiness</span>
                      <span>{selectedProduct.flavorProfile.flakiness}%</span>
                    </div>
                    <div className="h-1.5 bg-[#E2D9CC] rounded-full overflow-hidden">
                      <div
                        style={{ width: `${selectedProduct.flavorProfile.flakiness}%` }}
                        className="h-full bg-[#C4122F]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-[#786F66] mb-0.5">
                      <span>Richness</span>
                      <span>{selectedProduct.flavorProfile.richness}%</span>
                    </div>
                    <div className="h-1.5 bg-[#E2D9CC] rounded-full overflow-hidden">
                      <div
                        style={{ width: `${selectedProduct.flavorProfile.richness}%` }}
                        className="h-full bg-[#D97706]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Baker's Secret Note */}
              <div className="border-l-3 border-[#C4122F] pl-3 py-0.5 text-xs text-[#5C5349] font-sans italic bg-[#FFF1F2]/40 rounded-r">
                <span className="font-bold font-code uppercase not-italic text-[#C4122F] text-[10px] block">
                  Baker&apos;s Pro Tip:
                </span>
                {selectedProduct.bakerNote}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    addToBox(selectedProduct, 1);
                    closeProductModal();
                  }}
                  className="flex-1 bg-[#C4122F] hover:bg-[#A80E26] text-[#FFF4D4] py-3 px-5 rounded-full font-code font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>ADD TO MY BOX (₹{selectedProduct.price})</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
