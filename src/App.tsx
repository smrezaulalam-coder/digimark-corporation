/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryTiles } from './components/CategoryTiles';
import { ProductCatalog } from './components/ProductCatalog';
import { ProjectQuoteBuilder } from './components/ProjectQuoteBuilder';
import { WhyUs } from './components/WhyUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { Product } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [boqProducts, setBoqProducts] = useState<Product[]>([]);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBOQ = () => {
    const el = document.getElementById('boq-estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleBOQ = (product: Product) => {
    setBoqProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromBOQ = (productId: string) => {
    setBoqProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearBOQ = () => {
    setBoqProducts([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header
        onNavigateToCatalog={(catId) => {
          if (catId !== undefined) setSelectedCategory(catId);
        }}
        onOpenBOQ={handleScrollToBOQ}
        boqItemCount={boqProducts.length}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSelectCategory={handleSelectCategory}
          onOpenBOQ={handleScrollToBOQ}
        />

        {/* 4 Core Pillars - "Choose a Product Type" as in user design */}
        <CategoryTiles
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Full Equipment Catalog with Category & Brand Chips, Search & Sort */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onViewProductSpecs={(p) => setModalProduct(p)}
          onAddToBOQ={handleToggleBOQ}
          boqProductIds={boqProducts.map((p) => p.id)}
        />

        {/* Interactive BOQ Quotation Builder & Estimator */}
        <ProjectQuoteBuilder
          boqProducts={boqProducts}
          onRemoveFromBOQ={handleRemoveFromBOQ}
          onClearBOQ={handleClearBOQ}
        />

        {/* Why Choose Digimark Corporation */}
        <WhyUs />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Floating WhatsApp Quick Chat Assistant */}
      <FloatingWhatsApp />

      {/* Detailed Technical Specification Sheet Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onAddToBOQ={handleToggleBOQ}
        isInBOQ={modalProduct ? boqProducts.some((p) => p.id === modalProduct.id) : false}
      />
    </div>
  );
}
