/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS, CollectionItem } from '../data/furnitureData';

interface CollectionsProps {
  onSelectCategory: (category: string) => void;
}

export default function Collections({ onSelectCategory }: CollectionsProps) {
  const handleCardClick = (col: CollectionItem) => {
    onSelectCategory(col.categoryFilter);
    const target = document.getElementById('featured');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#F8F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#173D32] font-semibold block mb-2">
              Curated Showroom Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173D32] tracking-tight">
              Furniture Collections
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#262824]/75 max-w-md font-light leading-relaxed">
            Thoughtfully crafted living spaces. Explore signature collections created with exceptional timber and refined detailing.
          </p>
        </div>

        {/* 4 Premium Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => handleCardClick(col)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8DFD0] hover:border-[#C5A15B] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col relative"
            >
              {/* Image Frame with hover zoom */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-[#E8DFD0]/40">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Subtle Gold accent indicator bar */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[#C5A15B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Badge text */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-[#173D32]/90 text-[#F8F4EA] backdrop-blur-sm shadow-xs border border-white/10">
                    {col.badgeText}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#173D32] group-hover:text-[#C5A15B] transition-colors mb-2">
                    {col.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#262824]/70 leading-relaxed font-light line-clamp-3">
                    {col.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F8F4EA] flex items-center justify-between text-xs font-semibold text-[#173D32] group-hover:text-[#C5A15B] transition-colors">
                  <span>Explore Collection</span>
                  <div className="w-7 h-7 rounded-full bg-[#F8F4EA] group-hover:bg-[#C5A15B] group-hover:text-[#173D32] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
