'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Plus, Heart, Send } from 'lucide-react';
import { useBakery } from '@/context/BakeryContext';
import { WashiTape } from '@/components/ui/WashiTape';

export const CustomerNotes: React.FC = () => {
  const { customerNotes, addCustomerNote } = useBakery();
  const [filterType, setFilterType] = useState<string>('all');
  const [isNoteInputOpen, setIsNoteInputOpen] = useState(false);
  const [noteAuthor, setNoteAuthor] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteType, setNoteType] = useState<'napkin' | 'receipt' | 'polaroid' | 'text'>('napkin');

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteContent.trim()) return;
    addCustomerNote({
      author: noteAuthor,
      content: noteContent,
      type: noteType,
    });
    setNoteAuthor('');
    setNoteContent('');
    setIsNoteInputOpen(false);
  };

  const filteredArtifacts = filterType === 'all'
    ? customerNotes
    : customerNotes.filter((art) => art.type === filterType);

  return (
    <section id="customer-notes" className="py-24 sm:py-36 bg-[#FAF6EE] text-[#1A1615] relative border-b-4 border-[#1A1615] overflow-hidden">
      {/* Paper Grain Background */}
      <div className="absolute inset-0 bg-paper-grain opacity-80 pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <WashiTape color="butter" width="w-36" rotation={-4} className="top-12 left-10" label="CUSTOMER BOARD" />
      <WashiTape color="cherry" width="w-40" rotation={3} className="top-16 right-12" label="REAL CONFESSIONS" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b-2 border-[#D7C4B0] gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#EBDDCB] text-[#78350F] px-3.5 py-1.5 rounded-full font-code text-xs font-bold uppercase tracking-wider border border-[#D7C4B0]">
              <MessageSquare className="w-3.5 h-3.5 text-[#C4122F]" />
              <span>COMMUNITY ARTIFACT BOARD</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl font-black text-[#1A1615] leading-none tracking-tight">
              SCRAWLED ON <br />
              <span className="text-[#C4122F] italic font-normal">NAPKINS & RECEIPTS.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#665E55] max-w-lg">
              No sponsored influencer scripts. Just real notes rescued from Covent Garden cafe tables, greasy receipts, and text messages.
            </p>
          </div>

          {/* Action: Add Note + Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 bg-[#EBDDCB] p-1 rounded-full border border-[#D7C4B0]">
              {(['all', 'napkin', 'receipt', 'polaroid'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilterType(tab)}
                  className={`px-3 py-1 rounded-full font-code text-xs uppercase font-bold transition-colors cursor-pointer ${
                    filterType === tab
                      ? 'bg-[#C4122F] text-white shadow-xs'
                      : 'text-[#78350F] hover:text-[#1A1615]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsNoteInputOpen(true)}
              className="bg-[#C4122F] hover:bg-[#A80E26] text-[#FFF4D4] px-5 py-2.5 rounded-full font-code text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>PIN A NAPKIN NOTE</span>
            </button>
          </div>
        </div>

        {/* Interactive Modal to Pin a Note */}
        <AnimatePresence>
          {isNoteInputOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-white rounded-2xl border-3 border-[#1A1615] shadow-xl max-w-2xl mx-auto overflow-hidden"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-code text-xs font-bold uppercase text-[#C4122F] tracking-wider">
                  PIN YOUR BAKERY NOTE
                </span>
                <button
                  onClick={() => setIsNoteInputOpen(false)}
                  className="font-code text-xs text-[#8C8477] hover:text-[#1A1615]"
                >
                  CANCEL
                </button>
              </div>

              <form onSubmit={handleSubmitNote} className="space-y-4">
                <div>
                  <label className="font-code text-xs text-[#786F66] uppercase block mb-1">
                    Your Name / Title:
                  </label>
                  <input
                    type="text"
                    value={noteAuthor}
                    onChange={(e) => setNoteAuthor(e.target.value)}
                    placeholder="e.g. Maya S., Croissant Fanatic"
                    className="w-full p-2.5 rounded-lg border border-[#E5DFD5] font-sans text-sm focus:ring-2 focus:ring-[#C4122F] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="font-code text-xs text-[#786F66] uppercase block mb-1">
                    Your Honest Confession / Review:
                  </label>
                  <textarea
                    rows={3}
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="“I came for one cookie and left with two full boxes...”"
                    className="w-full p-3 rounded-lg border border-[#E5DFD5] font-handwritten text-xl text-[#2B1810] focus:ring-2 focus:ring-[#C4122F] focus:outline-none"
                    required
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    {(['napkin', 'receipt', 'text'] as const).map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setNoteType(t)}
                        className={`px-3 py-1 rounded-md text-xs font-code uppercase ${
                          noteType === t
                            ? 'bg-[#1A1615] text-[#FFF4D4] font-bold'
                            : 'bg-[#FAF6EE] text-[#786F66]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="bg-[#C4122F] text-[#FFF4D4] px-5 py-2 rounded-full font-code text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm hover:bg-[#A80E26]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>STICK TO BOARD</span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Asymmetrical Customer Artifact Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredArtifacts.map((art, idx) => {
            if (art.type === 'receipt') {
              return (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  style={{ transform: `rotate(${art.tiltAngle}deg)` }}
                  className="relative bg-[#FAF8F2] p-6 rounded-xs border border-[#D7C4B0] shadow-lg font-code text-xs space-y-3"
                >
                  <WashiTape color="kraft" width="w-24" rotation={2} className="-top-3 left-1/3" />
                  <div className="flex justify-between pb-2 border-b border-dashed border-[#C8C0B2]">
                    <span className="font-bold text-[#C4122F]">{art.badge || 'RECEIPT EVIDENCE'}</span>
                    <span className="text-[#8C8477]">{art.date}</span>
                  </div>
                  <pre className="font-code text-xs whitespace-pre-wrap leading-relaxed text-[#2D2A26]">
                    {art.content}
                  </pre>
                  <div className="pt-2 border-t border-dashed border-[#C8C0B2] text-[10px] text-[#8C8477] flex justify-between items-center">
                    <span>{art.author}</span>
                    <span className="text-[#C4122F] font-bold">VERIFIED MEWS PURCHASE</span>
                  </div>
                </motion.div>
              );
            }

            if (art.type === 'polaroid') {
              return (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  style={{ transform: `rotate(${art.tiltAngle}deg)` }}
                  className="relative bg-white p-4 pb-6 rounded-lg border-2 border-[#1A1615] shadow-xl space-y-3"
                >
                  <WashiTape color="cherry" width="w-24" rotation={-3} className="-top-3 left-1/3" />
                  {art.photoUrl && (
                    <div className="relative aspect-square rounded overflow-hidden bg-[#FAF6EE] border border-[#E5DFD5]">
                      <Image
                        src={art.photoUrl}
                        alt="Customer polaroid"
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="font-handwritten text-xl text-[#1A1615] leading-snug px-1">
                    {art.content}
                  </p>
                  <div className="flex justify-between items-center text-[10px] font-code text-[#8C8477] px-1">
                    <span>— {art.author}</span>
                    <span>{art.date}</span>
                  </div>
                </motion.div>
              );
            }

            if (art.type === 'text') {
              return (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  style={{ transform: `rotate(${art.tiltAngle}deg)` }}
                  className="relative bg-[#1A1615] text-white p-6 rounded-2xl shadow-xl space-y-3 border-2 border-[#332B25]"
                >
                  <WashiTape color="butter" width="w-28" rotation={-2} className="-top-3 right-6" />
                  <div className="flex justify-between text-[11px] font-code text-[#A89F91] border-b border-[#332B25] pb-2">
                    <span className="text-[#FEE38D] font-bold">iMessage • {art.author}</span>
                    <span>{art.date}</span>
                  </div>
                  <div className="bg-[#248A3D] text-white p-3.5 rounded-2xl rounded-tr-xs font-sans text-sm font-medium leading-snug">
                    {art.content}
                  </div>
                  <div className="text-[10px] font-code text-[#A89F91] text-right">
                    Delivered with urgency 🥖
                  </div>
                </motion.div>
              );
            }

            // Default Napkin Style
            return (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{ transform: `rotate(${art.tiltAngle}deg)` }}
                className="relative bg-[#EBDDCB] p-6 sm:p-7 rounded-2xl border-2 border-dashed border-[#B8A38E] shadow-lg space-y-4"
              >
                <WashiTape color="sage" width="w-24" rotation={4} className="-top-3 left-6" />
                <div className="flex justify-between items-center text-[10px] font-code text-[#785C46] border-b border-[#D7C4B0] pb-2">
                  <span className="font-bold uppercase tracking-wider">{art.badge || 'NAPKIN NOTE'}</span>
                  <span>{art.date}</span>
                </div>
                <p className="font-handwritten text-2xl sm:text-3xl text-[#2B1810] font-bold leading-tight">
                  {art.content}
                </p>
                <div className="flex justify-between items-center text-xs font-code text-[#785C46] pt-1">
                  <span>— {art.author}</span>
                  <Heart className="w-3.5 h-3.5 text-[#C4122F] fill-[#C4122F]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
