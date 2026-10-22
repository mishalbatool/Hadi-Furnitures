/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageCircle, MapPin, Star, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/furnitureData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f2b23] text-[#F8F4EA] pt-16 pb-12 border-t border-[#C5A15B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#F8F4EA]">
              Haddi Furnitures
            </h3>
            <p className="text-xs sm:text-sm text-[#E8DFD0]/75 font-light leading-relaxed">
              Crafted for Comfort. Designed for Living. Discover handcrafted furniture bringing warmth and timeless elegance to Pakistani homes.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-[#C5A15B]">
              <Star className="w-4 h-4 fill-[#C5A15B] text-[#C5A15B]" />
              <span className="font-bold">{BUSINESS_INFO.googleRating} / 5.0</span>
              <span className="text-[#E8DFD0]/60">({BUSINESS_INFO.reviewCount} Google reviews)</span>
            </div>
          </div>

          {/* Col 2: Showroom Location */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold">
              Showroom Location
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E8DFD0]/80">
              <MapPin className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5A15B] hover:text-[#dfc58e] underline underline-offset-4 font-medium"
              >
                Find on Google Maps
              </a>
            </div>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#E8DFD0]/80">
                <Phone className="w-4 h-4 text-[#C5A15B]" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="hover:text-[#C5A15B] transition-colors"
                >
                  Call Showroom
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#E8DFD0]/80">
                <MessageCircle className="w-4 h-4 text-[#C5A15B]" />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A15B] transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
            <p className="text-[11px] text-[#E8DFD0]/50 pt-1">
              Contact us anytime for price quotes and custom furniture sizing.
            </p>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E8DFD0]/70 font-light">
              <li>
                <a href="#collections" className="hover:text-[#C5A15B] transition-colors">
                  Furniture Collections
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#C5A15B] transition-colors">
                  Featured Furniture
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A15B] transition-colors">
                  Craftsmanship Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C5A15B] transition-colors">
                  About Our Showroom
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A15B] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DFD0]/60">
          <p>© {new Date().getFullYear()} Haddi Furnitures. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#C5A15B]/80 font-medium">Chiniot, Punjab, Pakistan</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-[#C5A15B] hover:text-[#173D32] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
