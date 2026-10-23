/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import About from './components/About';
import CustomerRating from './components/CustomerRating';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProductDetailModal from './components/ProductDetailModal';
import { ProductItem } from './data/furnitureData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  const handleSelectProductFromSearch = (product: ProductItem) => {
    setQuickViewProduct(product);
    const target = document.querySelector('#featured');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EA] text-[#262824] antialiased">
      {/* Top Navigation with Responsive Search */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectProduct={handleSelectProductFromSearch}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Furniture Collections */}
        <Collections
          onSelectCategory={(cat) => {
            handleSelectCategory(cat);
            handleClearSearch();
          }}
        />

        {/* 3. Featured Products Showcase with Search Filter */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onQuickView={setQuickViewProduct}
          searchQuery={searchQuery}
          onClearSearch={handleClearSearch}
        />

        {/* 4. Why Choose Hadi Furnitures */}
        <WhyChooseUs />

        {/* 5. Craftsmanship Gallery */}
        <Gallery />

        {/* 6. About Section */}
        <About />

        {/* 7. Verified Customer Rating */}
        <CustomerRating />

        {/* 8. Contact & WhatsApp Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast WhatsApp Inquiry Button */}
      <FloatingWhatsApp />

      {/* Product Quick-View Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
