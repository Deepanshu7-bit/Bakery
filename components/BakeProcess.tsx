'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Scale, Thermometer } from 'lucide-react';
import { RECIPE_STEPS } from '@/data/bakeryData';
import { WashiTape } from '@/components/ui/WashiTape';
import { BakeryStamp } from '@/components/ui/BakeryStamp';

export const BakeProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Start on 72 Layers
  const activeStep = RECIPE_STEPS[activeStepIndex];

  return (
    <section id="recipe-process" className="py-24 sm:py-32 bg-[#FAF6EE] text-[#1A1615] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Kraft Paper Grain Texture */}
      <div className="absolute inset-0 bg-paper-grain opacity-80 pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <WashiTape color="butter" width="w-36" rotation={-3} className="top-8 left-12" label="BAKER’S NOTEBOOK" />
      <WashiTape color="sage" width="w-32" rotation={4} className="top-12 right-16" label="72 LAYERS" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EBDDCB] text-[#78350F] px-4 py-1.5 rounded-full font-code text-xs font-bold uppercase tracking-widest border border-[#D7C4B0]">
            <Scale className="w-3.5 h-3.5 text-[#C4122F]" />
            <span>THE 72-HOUR FERMENTATION METHOD</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#1A1615] leading-tight">
            GOOD THINGS <br />
            <span className="text-[#C4122F] italic font-normal">TAKE BUTTER.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#665E55] max-w-xl mx-auto">
            We don’t cut corners, speed up proofs, or substitute vegetable margarine. Click through our 5-step daily routine below.
          </p>
        </div>

        {/* Step Selector Tab Bar (Recipe Card Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {RECIPE_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3.5 sm:p-4 rounded-2xl border-3 text-left transition-all cursor-pointer relative overflow-hidden ${
                activeStepIndex === idx
                  ? 'bg-[#1A1615] text-[#FFF4D4] border-[#1A1615] shadow-lg scale-102'
                  : 'bg-white text-[#4A433D] border-[#E5DFD5] hover:border-[#C4122F]'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-code text-xs font-bold tracking-widest text-[#C4122F]">
                  STEP {step.stepNumber}
                </span>
                {activeStepIndex === idx && (
                  <span className="w-2 h-2 rounded-full bg-[#FFF4D4] animate-ping" />
                )}
              </div>
              <div className="font-editorial text-sm sm:text-base font-black truncate leading-tight">
                {step.title.replace('THE ', '')}
              </div>
            </button>
          ))}
        </div>

        {/* Active Recipe Journal Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.stepNumber}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border-4 border-[#1A1615] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative"
          >
            {/* Left Details & Ingredients breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#C4122F] text-[#FFF4D4] px-3 py-1 rounded font-code font-bold text-xs uppercase tracking-wider">
                  STEP {activeStep.stepNumber}
                </span>
                <span className="font-code text-xs text-[#8C8477] font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C4122F]" />
                  {activeStep.duration}
                </span>
                {activeStep.temperature && (
                  <span className="font-code text-xs bg-[#FFF3B0] text-[#78350F] px-2.5 py-0.5 rounded font-bold flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-[#C4122F]" />
                    {activeStep.temperature}
                  </span>
                )}
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-black text-[#1A1615] leading-tight">
                {activeStep.title}
              </h3>

              <p className="font-sans text-base text-[#4A433D] leading-relaxed">
                {activeStep.description}
              </p>

              {/* Exact Formula / Ingredients Box */}
              <div className="bg-[#FAF6EE] p-5 rounded-2xl border-2 border-dashed border-[#D7C4B0] space-y-3">
                <div className="flex items-center justify-between text-xs font-code font-bold uppercase text-[#786F66]">
                  <span>Formula Measurements:</span>
                  <span>Batch #04</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {activeStep.ingredients.map((ing, i) => (
                    <div key={i} className="flex justify-between items-baseline text-xs font-code border-b border-[#E5DFD5] pb-1">
                      <span className="text-[#1A1615] font-semibold">{ing.name}</span>
                      <span className="text-[#C4122F] font-bold shrink-0">{ing.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Baker's Secret Annotation */}
              <div className="border-l-4 border-[#C4122F] pl-4 py-1 bg-[#FFF1F2] rounded-r-lg">
                <span className="font-code text-[11px] font-bold text-[#C4122F] uppercase block">
                  Baker&apos;s Journal Secret:
                </span>
                <p className="font-handwritten text-xl text-[#78350F] mt-0.5 font-bold">
                  “{activeStep.bakerSecret}”
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className={`px-4 py-2 rounded-full font-code text-xs font-bold uppercase transition-colors ${
                    activeStepIndex === 0
                      ? 'text-[#A89F91] cursor-not-allowed'
                      : 'bg-[#FAF6EE] text-[#1A1615] hover:bg-[#EBDDCB]'
                  }`}
                >
                  ← PREVIOUS
                </button>
                <button
                  disabled={activeStepIndex === RECIPE_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(RECIPE_STEPS.length - 1, prev + 1))}
                  className={`px-5 py-2 rounded-full font-code text-xs font-bold uppercase flex items-center gap-1.5 transition-colors ${
                    activeStepIndex === RECIPE_STEPS.length - 1
                      ? 'text-[#A89F91] cursor-not-allowed'
                      : 'bg-[#C4122F] text-[#FFF4D4] hover:bg-[#A80E26]'
                  }`}
                >
                  <span>NEXT STEP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Photography / Diagram */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-3 border-[#1A1615] shadow-xl bg-[#FAF6EE]">
                <Image
                  src={activeStep.image}
                  alt={activeStep.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
                
                {/* Visual measurement mark lines overlay */}
                <div className="absolute inset-4 border border-white/40 rounded-xl pointer-events-none flex flex-col justify-between p-3 text-[10px] font-code text-white/90">
                  <div className="flex justify-between">
                    <span>LAMINATED LAYER 72/72</span>
                    <span>+210°C DECK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CHAMBER HUMIDITY: 82%</span>
                    <span>REST: 36H @ 4°C</span>
                  </div>
                </div>
              </div>

              {/* Floating Stamp */}
              <div className="absolute -bottom-4 -right-4 z-20">
                <BakeryStamp text="PROVED BY HAND" subtext="72H SLOW" size="sm" rotation={8} color="cherry" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
