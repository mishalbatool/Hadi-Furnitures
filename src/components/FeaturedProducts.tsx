/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Eye, Info, Search, X, RotateCcw } from 'lucide-react';
import { ProductItem, buildWhatsAppLink, searchProducts } from '../data/furnitureData';

interface FeaturedProductsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: ProductItem) => void;
  searchQuery: string;
  onClearSearch: () => void;
}

export default function FeaturedProducts({
  selectedCategory,
  onSelectCategory,
  onQuickView,
  searchQuery,
  onClearSearch,
}: FeaturedProductsProps) {
  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'beds', label: 'Beds & Frames' },
    { id: 'bedroom', label: 'Bedroom Furniture' },
    { id: 'living', label: 'Sofas & Living' },
    { id: 'storage', label: 'Wardrobes & Storage' },
  ];

  // Search and category filter applied together seamlessly
  const filteredProducts = searchProducts(searchQuery, selectedCategory);

  return (
    <section id="featured" className="py-20 sm:py-28 bg-[#FCFAF5] relative border-t border-[#E8DFD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
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

        {/* Search Active Notification Banner */}
        {searchQuery.trim() && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-white border border-[#C5A15B]/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#173D32]">
              <div className="w-8 h-8 rounded-full bg-[#173D32]/10 flex items-center justify-center text-[#173D32] shrink-0">
                <Search className="w-4 h-4 text-[#C5A15B]" />
              </div>
              <div>
                <span>
                  Showing results for <span className="font-bold text-[#173D32]">"{searchQuery}"</span>
                </span>
                <span className="text-[#262824]/60 ml-1.5">
                  ({filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} found)
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClearSearch}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#173D32] text-[#F8F4EA] hover:bg-[#C5A15B] hover:text-[#173D32] transition-colors shadow-xs"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear search</span>
            </button>
          </div>
        )}

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

        {/* Product Cards Grid or No Results Message */}
        {filteredProducts.length > 0 ? (
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
        ) : (
          /* Friendly No Results Found State */
          <div className="max-w-lg mx-auto py-12 px-6 rounded-3xl bg-white border border-[#E8DFD0] shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#E8DFD0]/40 text-[#173D32] flex items-center justify-center mx-auto mb-4 border border-[#C5A15B]/30">
              <Search className="w-7 h-7 text-[#C5A15B]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#173D32] mb-2">
              No matching furniture found
            </h3>
            <p className="text-xs sm:text-sm text-[#262824]/75 mb-6 leading-relaxed">
              We couldn't find any furniture pieces matching{' '}
              <strong className="text-[#173D32]">"{searchQuery}"</strong>
              {selectedCategory !== 'all' ? ' in this category' : ''}. Try checking for common terms like "bed", "sofa", "wardrobe", or clear your search to explore all items.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClearSearch();
                  onSelectCategory('all');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#173D32] text-[#F8F4EA] hover:bg-[#C5A15B] hover:text-[#173D32] text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Clear Search & View All</span>
              </button>
            </div>
          </div>
        )}

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
