/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryItem, buildWhatsAppLink } from '../data/furnitureData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({ item, onClose, onPrev, onNext }: LightboxModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button top right */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F4EA] hover:text-[#C5A15B] transition-colors"
        aria-label="Close preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-[#C5A15B] text-[#F8F4EA] hover:text-[#173D32] transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-[#C5A15B] text-[#F8F4EA] hover:text-[#173D32] transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Main Frame */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl max-h-[75vh]">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-auto max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & WhatsApp Action Bar */}
        <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left px-2">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#C5A15B] font-medium block">
              {item.category}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F8F4EA]">
              {item.title}
            </h3>
          </div>

          <a
            href={buildWhatsAppLink(item.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A15B] hover:bg-[#b58f47] text-[#173D32] text-xs sm:text-sm font-semibold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Inquire About This Design</span>
          </a>
        </div>
      </div>
    </div>
  );
}
