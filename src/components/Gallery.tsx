/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/furnitureData';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveItemIndex(null);
  };

  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F8F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#173D32] font-semibold block mb-2">
              Visual Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173D32] tracking-tight">
              Furniture Gallery
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#262824]/75 max-w-md font-light leading-relaxed">
            Click any photograph to view high-resolution details of our solid wood beds, luxury bedroom suites, sofas, and wardrobe arrangements.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#E8DFD0]/40 border border-[#E8DFD0] hover:border-[#C5A15B] transition-all duration-300 shadow-xs hover:shadow-xl ${item.aspectClass}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-300" />

              {/* Gold Hairline Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-[#C5A15B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Information & Hover Expand Trigger */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">
                <div className="self-end">
                  <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-[#F8F4EA] group-hover:bg-[#C5A15B] group-hover:text-[#173D32] flex items-center justify-center transition-colors shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A15B] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItemIndex !== null ? GALLERY_ITEMS[activeItemIndex] : null}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
