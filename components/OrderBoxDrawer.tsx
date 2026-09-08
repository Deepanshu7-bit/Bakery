'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBakery } from '@/context/BakeryContext';
import { BakeryStamp } from '@/components/ui/BakeryStamp';
import { PRODUCTS } from '@/data/bakeryData';

export const OrderBoxDrawer: React.FC = () => {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    boxItems,
    boxSize,
    setBoxSize,
    updateQuantity,
    removeFromBox,
    clearBox,
    totalBoxItems,
    boxTotalCost,
    addToBox,
  } = useBakery();

  const [customGiftNote, setCustomGiftNote] = useState('Please pack with extra napkins & a sprinkle of joy!');
  const [pickupMethod, setPickupMethod] = useState<'hatch' | 'courier'>('hatch');
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderSerial, setOrderSerial] = useState('');

  const targetCapacity = boxSize === '4-box' ? 4 : boxSize === '6-box' ? 6 : 12;
  const isBoxFull = totalBoxItems >= targetCapacity;

  const handleBakeOrder = () => {
    // Generate order serial
    const serial = `CC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderSerial(serial);
    setIsOrdered(true);

    // Confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C4122F', '#FEE38D', '#4D7C55', '#2B1810', '#E14D6C'],
      });
    } catch {
      console.log('Confetti trigger');
    }
  };

  const handleResetOrder = () => {
    setIsOrdered(false);
    clearBox();
    setIsDrawerOpen(false);
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
          />

          {/* Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-[#FFFDF7] z-50 shadow-2xl flex flex-col justify-between border-l-4 border-[#C4122F] overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 bg-[#FAF6EE] border-b border-[#E5DFD5] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C4122F] animate-pulse" />
                  <span className="font-code text-xs font-bold uppercase tracking-widest text-[#C4122F]">
                    CUSTOM BAKERY BOX
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-black text-[#1A1615] mt-0.5">
                  Pack Your Selection
                </h3>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full bg-[#EFE7DA] hover:bg-[#E2D5C3] text-[#2D2A26] transition-colors focus:outline-none"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {isOrdered ? (
                /* Order Confirmation Receipt Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#166534] mx-auto flex items-center justify-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="font-code text-xs tracking-widest uppercase text-[#C4122F] font-bold">
                      ORDER TICKET RECEIVED
                    </span>
                    <h4 className="font-editorial text-3xl font-black text-[#1A1615] mt-1">
                      The Hearth Is Heating Up!
                    </h4>
                    <p className="font-sans text-sm text-[#665E55] max-w-md mx-auto mt-2">
                      Our pastry team has received your box order. We are tying the red ribbon and boxing your fresh bakes right now.
                    </p>
                  </div>

                  {/* Visual Receipt Box */}
                  <div className="bg-[#FAF8F2] border-2 border-dashed border-[#C4122F] rounded-lg p-5 text-left font-code text-xs space-y-3 max-w-md mx-auto shadow-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-[#E5DFD5]">
                      <span className="font-bold text-[#C4122F]">TICKET #{orderSerial}</span>
                      <span className="text-[#8C8477]">READY IN ~18 MINS</span>
                    </div>

                    <div className="space-y-1.5">
                      {boxItems.map((item) => (
                        <div key={item.product.id} className="flex justify-between">
                          <span>{item.quantity}x {item.product.name}</span>
                          <span className="font-bold">₹{item.product.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#E5DFD5] flex justify-between font-bold text-sm">
                      <span>TOTAL DUE AT HATCH</span>
                      <span className="text-[#C4122F]">₹{boxTotalCost}</span>
                    </div>

                    <div className="bg-[#FFF4D4] p-2.5 rounded text-[11px] font-handwritten text-[#78350F]">
                      Note: &quot;{customGiftNote}&quot;
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleResetOrder}
                      className="bg-[#C4122F] text-[#FFF4D4] px-6 py-3 rounded-full font-code font-bold text-xs tracking-wider shadow-md hover:bg-[#A80E26] transition-colors"
                    >
                      ORDER ANOTHER BOX →
                    </button>
                  </div>
                </motion.div>
              ) : (
                <>
                  {/* Box Size Selector */}
                  <div>
                    <label className="font-code text-xs font-bold uppercase tracking-wider text-[#786F66] block mb-2">
                      1. Select Box Size:
                    </label>
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                      {[
                        { id: '4-box' as const, name: '4-PACK BOX', cap: 4, desc: 'For solo or paired mornings' },
                        { id: '6-box' as const, name: '6-PACK BOX', cap: 6, desc: 'Our classic bakery box' },
                        { id: '12-box' as const, name: '12-PACK PARTY', cap: 12, desc: 'For office or Sunday feasts' },
                      ].map((b) => (
                        <button
                          key={b.id}
                          onClick={() => setBoxSize(b.id)}
                          className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                            boxSize === b.id
                              ? 'border-[#C4122F] bg-[#FFF1F2] text-[#C4122F] shadow-xs'
                              : 'border-[#E5DFD5] bg-white text-[#2D2A26] hover:border-[#C8C0B2]'
                          }`}
                        >
                          <div className="font-code font-bold text-xs">{b.name}</div>
                          <div className="font-sans text-[11px] opacity-75 mt-0.5">{b.cap} Pastries</div>
                        </button>
                      ))}
                    </div>

                    {/* Progress Bar of Box Filling */}
                    <div className="mt-3 bg-[#EFE7DA] rounded-full h-2.5 overflow-hidden flex">
                      <div
                        style={{ width: `${Math.min(100, (totalBoxItems / targetCapacity) * 100)}%` }}
                        className={`transition-all duration-300 ${
                          isBoxFull ? 'bg-[#4D7C55]' : 'bg-[#C4122F]'
                        }`}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] font-code text-[#786F66] mt-1">
                      <span>{totalBoxItems} of {targetCapacity} pastries filled</span>
                      {isBoxFull && <span className="text-[#4D7C55] font-bold">✓ Box perfectly filled</span>}
                    </div>
                  </div>

                  {/* Items in Box List */}
                  <div>
                    <label className="font-code text-xs font-bold uppercase tracking-wider text-[#786F66] block mb-2">
                      2. Pastries Inside Your Box:
                    </label>

                    {boxItems.length === 0 ? (
                      <div className="p-6 text-center border-2 border-dashed border-[#E5DFD5] rounded-xl bg-white/50">
                        <ShoppingBag className="w-8 h-8 text-[#C8C0B2] mx-auto mb-2" />
                        <p className="font-editorial text-lg text-[#665E55]">Your box is feeling empty!</p>
                        <p className="font-sans text-xs text-[#8C8477] mt-1">Pick your favorite pastries from the suggestions below.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {boxItems.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#E5DFD5] shadow-xs"
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#E5DFD5]">
                                <Image
                                  src={item.product.image}
                                  alt={item.product.name}
                                  fill
                                  sizes="56px"
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-editorial font-bold text-sm text-[#1A1615] leading-tight">
                                  {item.product.name}
                                </h4>
                                <span className="font-code text-xs text-[#C4122F] font-bold">
                                  ₹{item.product.price} each
                                </span>
                              </div>
                            </div>

                            {/* Quantity buttons */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="w-7 h-7 rounded-full bg-[#F5ECE1] hover:bg-[#EBDDCB] flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-code font-bold text-sm w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="w-7 h-7 rounded-full bg-[#F5ECE1] hover:bg-[#EBDDCB] flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => removeFromBox(item.product.id)}
                                className="p-1.5 text-[#A89F91] hover:text-[#C4122F] transition-colors ml-1 cursor-pointer"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quick Add Suggestions */}
                  <div>
                    <label className="font-code text-xs font-bold uppercase tracking-wider text-[#786F66] block mb-2">
                      Add More Fresh Bakes:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {PRODUCTS.slice(0, 4).map((prod) => (
                        <button
                          key={prod.id}
                          onClick={() => addToBox(prod, 1)}
                          className="flex items-center gap-2 p-2 bg-[#FAF6EE] hover:bg-[#F3EAD9] rounded-lg border border-[#E5DFD5] text-left transition-colors cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-[#C4122F] shrink-0" />
                          <div className="truncate">
                            <span className="font-editorial text-xs font-bold block truncate text-[#1A1615]">
                              {prod.name}
                            </span>
                            <span className="font-code text-[10px] text-[#786F66]">
                              +₹{prod.price}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personalized Gift Card Note */}
                  <div>
                    <label className="font-code text-xs font-bold uppercase tracking-wider text-[#786F66] block mb-2">
                      3. Handwritten Ribbon Card Note:
                    </label>
                    <textarea
                      rows={2}
                      value={customGiftNote}
                      onChange={(e) => setCustomGiftNote(e.target.value)}
                      placeholder="Write a message to tuck inside the bakery box..."
                      className="w-full p-3 rounded-lg border border-[#E5DFD5] bg-[#FFFDF7] font-handwritten text-lg text-[#3B2317] focus:ring-2 focus:ring-[#C4122F] focus:outline-none"
                    />
                  </div>

                  {/* Pickup vs Courier Options */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      onClick={() => setPickupMethod('hatch')}
                      className={`p-3 rounded-lg border text-xs font-code text-left transition-all ${
                        pickupMethod === 'hatch'
                          ? 'border-[#C4122F] bg-[#FFF1F2] font-bold text-[#C4122F]'
                          : 'border-[#E5DFD5] bg-white text-[#665E55]'
                      }`}
                    >
                      <span className="block font-bold">STREET HATCH PICKUP</span>
                      <span className="text-[10px] opacity-80">Ready in 15 mins (Free)</span>
                    </button>
                    <button
                      onClick={() => setPickupMethod('courier')}
                      className={`p-3 rounded-lg border text-xs font-code text-left transition-all ${
                        pickupMethod === 'courier'
                          ? 'border-[#C4122F] bg-[#FFF1F2] font-bold text-[#C4122F]'
                          : 'border-[#E5DFD5] bg-white text-[#665E55]'
                      }`}
                    >
                      <span className="block font-bold">ECO CARGO COURIER</span>
                      <span className="text-[10px] opacity-80">Central London (₹250)</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Checkout Action */}
            {!isOrdered && (
              <div className="p-5 sm:p-6 bg-[#FAF6EE] border-t border-[#E5DFD5] space-y-3">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-code text-xs text-[#786F66] uppercase">BOX ESTIMATED TOTAL</span>
                    <div className="font-editorial text-2xl font-black text-[#1A1615]">
                      ₹{boxTotalCost + (pickupMethod === 'courier' ? 250 : 0)}
                    </div>
                  </div>
                  <BakeryStamp text="HOT & CRISP" size="sm" rotation={6} />
                </div>

                <button
                  disabled={boxItems.length === 0}
                  onClick={handleBakeOrder}
                  className={`w-full py-3.5 px-6 rounded-full font-code font-bold text-sm tracking-wider uppercase shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    boxItems.length === 0
                      ? 'bg-[#D7CEC2] text-[#8C8477] cursor-not-allowed'
                      : 'bg-[#C4122F] hover:bg-[#A80E26] text-[#FFF4D4] hover:shadow-xl'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>BAKE & SECURE MY BOX →</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
