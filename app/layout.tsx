import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, Caveat, Space_Mono } from 'next/font/google';
import './globals.css';
import { BakeryProvider } from '@/context/BakeryContext';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
});

const spaceMono = Space_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'CRUMB & CHERRY — Artisanal Viennoiserie & Pâtisserie',
  description:
    'Small batches. Long mornings. Unreasonable amounts of butter. Experience 72-layer croissants, molten 72% chocolate babka, and wild pistachio clouds baked fresh from 06:15 AM daily in Covent Garden.',
  keywords: [
    'Bakery',
    'Artisanal Viennoiserie',
    'Croissants London',
    'Pâtisserie',
    'Chocolate Babka',
    'Pistachio Pastry',
    'Craft Sourdough',
    'Crumb and Cherry',
  ],
  openGraph: {
    title: 'CRUMB & CHERRY — Baked for Happy People',
    description: 'Small batches. Long mornings. Very good butter.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakarta.variable} ${caveat.variable} ${spaceMono.variable} scroll-smooth antialiased selection:bg-[#C4122F] selection:text-[#FFF4D4]`}
    >
      <body className="bg-[#FFFDF7] text-[#1A1615] font-sans antialiased overflow-x-hidden min-h-screen">
        <BakeryProvider>
          {children}
        </BakeryProvider>
      </body>
    </html>
  );
}
