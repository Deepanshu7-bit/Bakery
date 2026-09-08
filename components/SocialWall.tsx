'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { SOCIAL_POSTS, BAKERY_INFO } from '@/data/bakeryData';
import { WashiTape } from '@/components/ui/WashiTape';
import { BakeryStamp } from '@/components/ui/BakeryStamp';

export const SocialWall: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#FFFDF7] text-[#1A1615] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Subtle Grain */}
      <div className="absolute inset-0 bg-paper-grain opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFF1F2] text-[#C4122F] px-4 py-1.5 rounded-full font-code text-xs font-bold uppercase tracking-widest border border-[#FECDD3]">
            <Camera className="w-3.5 h-3.5" />
            <span>{BAKERY_INFO.instagram}</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#1A1615] leading-none tracking-tight">
            CRUMBS IN <br />
            <span className="text-[#C4122F] italic font-normal">THE WILD.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#665E55]">
            Morning light in Covent Garden, broken chocolate crusts, and flour-dusted sleeves. Tag us to be pinned to the bakery wall.
          </p>
        </div>

        {/* Asymmetrical Magazine Collage Spread */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-center">
          {SOCIAL_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 30 }}
              style={{ transform: `rotate(${post.tilt}deg)` }}
              className="relative bg-white p-4 sm:p-5 rounded-2xl border-3 border-[#1A1615] shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Tape Accent */}
              {post.tapePosition === 'top' && (
                <WashiTape color="butter" width="w-28" rotation={-3} className="-top-3.5 left-1/3" />
              )}
              {post.tapePosition === 'dual' && (
                <>
                  <WashiTape color="sage" width="w-20" rotation={-4} className="-top-3 left-4" />
                  <WashiTape color="cherry" width="w-20" rotation={3} className="-bottom-3 right-4" />
                </>
              )}
              {post.tapePosition === 'corner' && (
                <WashiTape color="kraft" width="w-24" rotation={45} className="-top-2 -right-6" />
              )}

              {/* Image Frame */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#FAF6EE] border-2 border-[#1A1615]">
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover group-hover:scale-106 transition-transform duration-500"
                />
              </div>

              {/* Caption & Metadata */}
              <div className="pt-3 space-y-2">
                <div className="flex justify-between items-center text-[11px] font-code text-[#786F66]">
                  <span className="font-bold text-[#1A1615]">{post.author}</span>
                  <span className="text-[#C4122F] flex items-center gap-1 font-semibold">
                    <Heart className="w-3 h-3 fill-[#C4122F]" />
                    {post.likes}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#4A433D] leading-relaxed">
                  {post.caption}
                </p>

                <div className="font-code text-[10px] text-[#8C8477]">
                  {post.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Stamp */}
        <div className="mt-12 flex justify-center">
          <BakeryStamp text="TAG @CRUMBANDCHERRY" subtext="TO BE PINNED" size="md" rotation={-4} color="cherry" />
        </div>

      </div>
    </section>
  );
};
