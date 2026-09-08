'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { MobileMenu } from '@/components/MobileMenu';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { HeroExperience } from '@/components/HeroExperience';
import { TodaysBakes } from '@/components/TodaysBakes';
import { SignatureBake } from '@/components/SignatureBake';
import { BakeProcess } from '@/components/BakeProcess';
import { OvenMoment } from '@/components/OvenMoment';
import { BakeryStory } from '@/components/BakeryStory';
import { CustomerNotes } from '@/components/CustomerNotes';
import { SocialWall } from '@/components/SocialWall';
import { VisitUs } from '@/components/VisitUs';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { OrderBoxDrawer } from '@/components/OrderBoxDrawer';
import { ProductDetailModal } from '@/components/ProductDetailModal';

export default function BakeryHomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#1A1615] relative selection:bg-[#C4122F] selection:text-[#FFF4D4]">
      {/* Physics Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Navigation Masthead */}
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* 1. Hero Experience (Art-directed poster & packaging cover) */}
      <HeroExperience />

      {/* 2. Today's Bakes (Asymmetrical editorial pastry counter) */}
      <TodaysBakes />

      {/* 3. Signature Bake (72% Dark Chocolate Babka Magazine Story) */}
      <SignatureBake />

      {/* 4. The Recipe & 72-Hour Lamination Journal */}
      <BakeProcess />

      {/* 5. From The Oven (Cinematic 06:12 AM Hearth Atmosphere) */}
      <OvenMoment />

      {/* 6. Bakery Story (Flour on the Counter & Batch #47) */}
      <BakeryStory />

      {/* 7. Customer Notes & Artifact Wall (Napkins, Receipts, Texts) */}
      <CustomerNotes />

      {/* 8. Instagram & Social Wall (Asymmetrical magazine collage) */}
      <SocialWall />

      {/* 9. Visit Us (Postcard map, live hours & pastry hold) */}
      <VisitUs />

      {/* 10. Final Call to Action (High-contrast celebration spread) */}
      <FinalCTA />

      {/* 11. Packaging Box Footer */}
      <Footer />

      {/* Interactive Cart / Bakery Box Drawer */}
      <OrderBoxDrawer />

      {/* Deep-dive Product Recipe & Allergen Modal */}
      <ProductDetailModal />
    </main>
  );
}
