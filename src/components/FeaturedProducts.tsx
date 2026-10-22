/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Eye, Info, Sparkles } from 'lucide-react';
import { FEATURED_PRODUCTS, ProductItem, buildWhatsAppLink } from '../data/furnitureData';

interface FeaturedProductsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: ProductItem) => void;
}

export default function FeaturedProducts({
  selectedCategory,
  onSelectCategory,
  onQuickView,
}: FeaturedProductsProps) {
  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'beds', label: 'Beds & Frames' },
    { id: 'bedroom', label: 'Bedroom Furniture' },
    { id: 'living', label: 'Sofas & Living' },
    { id: 'storage', label: 'Wardrobes & Storage' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="featured" className="py-20 sm:py-28 bg-[#FCFAF5] relative border-t border-[#E8DFD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold block mb-2">
            Signature Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173D32] tracking-tight mb-4">
            Featured Furniture
          </h2>
          <p className="text-sm sm:text-base text-[#262824]/75 font-light leading-relaxed">
            A curated glimpse into our showroom pieces. Inquire directly for custom sizing, wood selections, and pricing.
          </p>

          {/* Demonstration Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD0]/40 text-[#262824]/80 text-xs border border-[#C5A15B]/30">
            <Info className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
            <span>Showroom demonstration catalog · Contact for Price & Inquiries</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#173D32] text-[#F8F4EA] shadow-sm'
                    : 'bg-white text-[#262824]/75 hover:text-[#173D32] hover:bg-[#E8DFD0]/50 border border-[#E8DFD0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const whatsappUrl = buildWhatsAppLink(product.name);

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-[#E8DFD0] hover:border-[#C5A15B]/80 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col overflow-hidden"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8F4EA]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#173D32] text-xs font-semibold shadow-md flex items-center gap-1.5 hover:bg-[#C5A15B] hover:text-[#173D32] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-[#173D32]/85 text-[#F8F4EA] backdrop-blur-xs">
                      {product.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#173D32] group-hover:text-[#C5A15B] transition-colors mb-1.5 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#262824]/70 leading-relaxed font-light line-clamp-2 mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing / WhatsApp Inquiry CTA */}
                  <div className="pt-3 border-t border-[#F8F4EA] flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#173D32] tracking-wide">
                      Price on Inquiry
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#173D32] hover:bg-[#C5A15B] text-[#F8F4EA] hover:text-[#173D32] text-xs font-medium transition-colors shadow-xs"
                      aria-label={`Contact for price on ${product.name}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Contact for Price</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Catalog Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#262824]/60 max-w-xl mx-auto">
            Looking for a specific configuration or custom room suite? We craft made-to-order pieces in solid wood according to your home dimensions.
          </p>
        </div>
      </div>
    </section>
  );
}
