'use client';

import React, { createContext, useContext, useState } from 'react';
import { Product, BoxItem, CustomerArtifact } from '@/types/bakery';
import { CUSTOMER_ARTIFACTS, PRODUCTS } from '@/data/bakeryData';

export type CursorType = 'default' | 'look' | 'taste' | 'grab' | 'zoom' | 'stamp' | 'heat';

interface BakeryContextType {
  boxItems: BoxItem[];
  boxSize: '4-box' | '6-box' | '12-box';
  setBoxSize: (size: '4-box' | '6-box' | '12-box') => void;
  addToBox: (product: Product, quantity?: number) => void;
  removeFromBox: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearBox: () => void;
  totalBoxItems: number;
  boxTotalCost: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  stampCount: number;
  triggerStamp: () => void;
  customerNotes: CustomerArtifact[];
  addCustomerNote: (note: { author: string; content: string; type?: 'napkin' | 'receipt' | 'polaroid' | 'text' }) => void;
  isBakingOvenWarm: boolean;
  toggleOvenWarm: () => void;
}

const BakeryContext = createContext<BakeryContextType | undefined>(undefined);

export function BakeryProvider({ children }: { children: React.ReactNode }) {
  const [boxItems, setBoxItems] = useState<BoxItem[]>([
    { product: PRODUCTS[0], quantity: 2 },
    { product: PRODUCTS[1], quantity: 1 },
    { product: PRODUCTS[3], quantity: 1 },
  ]);
  const [boxSize, setBoxSize] = useState<'4-box' | '6-box' | '12-box'>('4-box');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [stampCount, setStampCount] = useState(3);
  const [customerNotes, setCustomerNotes] = useState<CustomerArtifact[]>(CUSTOMER_ARTIFACTS);
  const [isBakingOvenWarm, setIsBakingOvenWarm] = useState(true);

  const totalBoxItems = boxItems.reduce((acc, item) => acc + item.quantity, 0);
  const boxTotalCost = boxItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const addToBox = (product: Product, quantity: number = 1) => {
    setBoxItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromBox = (productId: string) => {
    setBoxItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setBoxItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as BoxItem[];
    });
  };

  const clearBox = () => setBoxItems([]);

  const openProductModal = (product: Product) => setSelectedProduct(product);
  const closeProductModal = () => setSelectedProduct(null);

  const triggerStamp = () => {
    setStampCount((prev) => prev + 1);
  };

  const addCustomerNote = ({
    author,
    content,
    type = 'napkin',
  }: {
    author: string;
    content: string;
    type?: 'napkin' | 'receipt' | 'polaroid' | 'text';
  }) => {
    const newNote: CustomerArtifact = {
      id: `custom-${Date.now()}`,
      type,
      author: author.trim() || 'Anonymous Pastry Lover',
      date: 'Just now',
      content,
      subtext: 'Freshly pinned to our customer board',
      tiltAngle: (Math.random() * 8) - 4,
      bgStyle: type === 'receipt' ? 'receipt-paper' : 'napkin-kraft',
      badge: 'COMMUNITY NOTE',
    };
    setCustomerNotes((prev) => [newNote, ...prev]);
  };

  const toggleOvenWarm = () => setIsBakingOvenWarm((prev) => !prev);

  return (
    <BakeryContext.Provider
      value={{
        boxItems,
        boxSize,
        setBoxSize,
        addToBox,
        removeFromBox,
        updateQuantity,
        clearBox,
        totalBoxItems,
        boxTotalCost,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedProduct,
        openProductModal,
        closeProductModal,
        cursorType,
        setCursorType,
        stampCount,
        triggerStamp,
        customerNotes,
        addCustomerNote,
        isBakingOvenWarm,
        toggleOvenWarm,
      }}
    >
      {children}
    </BakeryContext.Provider>
  );
}

export function useBakery() {
  const context = useContext(BakeryContext);
  if (!context) {
    throw new Error('useBakery must be used within a BakeryProvider');
  }
  return context;
}
