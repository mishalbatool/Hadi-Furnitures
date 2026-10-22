/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, MessageCircle, Phone, Info, ShieldCheck } from 'lucide-react';
import { ProductItem, BUSINESS_INFO, buildWhatsAppLink } from '../data/furnitureData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = buildWhatsAppLink(product.name);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD0] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#173D32] shadow-sm transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Frame */}
        <div className="md:w-1/2 relative bg-[#F8F4EA] min-h-[280px] md:min-h-[420px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#173D32] text-[#F8F4EA] shadow-xs">
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C5A15B] font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Haddi Furnitures Showroom</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173D32] mb-3">
              {product.name}
            </h3>

            <p className="text-sm text-[#262824]/80 leading-relaxed font-light mb-6">
              {product.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#F8F4EA] border border-[#E8DFD0] text-xs text-[#262824]/75 mb-6 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#173D32]">
                <Info className="w-4 h-4 text-[#C5A15B] shrink-0" />
                <span>Showroom Inquiries & Sizing</span>
              </div>
              <p>
                Each design can be adjusted to specific bedroom or living room dimensions. Contact our showroom for custom wood finishes and pricing.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#F8F4EA]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#173D32] hover:bg-[#C5A15B] text-[#F8F4EA] hover:text-[#173D32] text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact for Price on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#F8F4EA] text-[#173D32] text-sm font-medium border border-[#E8DFD0] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A15B]" />
              <span>Call Showroom</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
