/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, MessageCircle, Star, MapPin, Sparkles } from 'lucide-react';
import heroBedroomImg from '../assets/images/hero_luxury_bedroom_1792679274126.jpg';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/furnitureData';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#173D32]">
      {/* Background Image with subtle cinematic zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBedroomImg}
          alt="Luxury handcrafted solid wood bedroom furniture showcase by Haddi Furnitures"
          className="w-full h-full object-cover object-center scale-100 animate-in fade-in zoom-in-105 duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured Forest Green Gradient Scrim for supreme legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#173D32]/95 via-[#173D32]/80 to-[#173D32]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173D32] via-transparent to-black/40" />
      </div>

      {/* Decorative Gold Grain Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A15B]/40 to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-32 w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle Location & Heritage Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#E8DFD0] tracking-wide mb-4 sm:mb-6">
            <span className="text-[#C5A15B] font-semibold tracking-wider uppercase text-xs">Chiniot Showroom</span>
            <span className="text-[#C5A15B]/60" aria-hidden="true">·</span>
            <span className="text-[#E8DFD0]/90">Punjab, Pakistan</span>
            <span className="text-[#C5A15B]/60" aria-hidden="true">·</span>
            <span className="text-[#C5A15B] flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#C5A15B] text-[#C5A15B]" />
              <span className="font-semibold">{BUSINESS_INFO.googleRating}</span>
              <span className="text-[#E8DFD0]/70 text-xs">({BUSINESS_INFO.reviewCount} Reviews)</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F4EA] leading-[1.12] mb-6 drop-shadow-sm text-balance">
            Crafted for Comfort.{' '}
            <span className="italic font-normal text-[#C5A15B]">Designed for Living.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#E8DFD0]/90 leading-relaxed font-light mb-8 sm:mb-10 max-w-2xl text-balance">
            Discover furniture that brings warmth, character, and timeless elegance to your home.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => handleScrollTo('collections')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A15B] text-[#173D32] hover:bg-[#b58f47] text-sm sm:text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F8F4EA] border border-[#F8F4EA]/25 text-sm sm:text-base font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        {/* Bottom Trust & Feature Banner Strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#C5A15B]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-[#E8DFD0]/80">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#C5A15B] font-medium mb-1">Showroom Location</p>
            <p className="text-sm font-medium text-[#F8F4EA]">Chiniot Road, Chiniot</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#C5A15B] font-medium mb-1">Google Rating</p>
            <p className="text-sm font-medium text-[#F8F4EA] flex items-center gap-1.5">
              <span>★ 4.8 / 5.0</span>
              <span className="text-xs text-[#E8DFD0]/60">(18 reviews)</span>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#C5A15B] font-medium mb-1">Showroom Inquiry</p>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="text-sm font-medium text-[#F8F4EA] hover:text-[#C5A15B] transition-colors"
            >
              Call Showroom
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#C5A15B] font-medium mb-1">Direct Assistance</p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#C5A15B] hover:text-[#dfc58e] inline-flex items-center gap-1 transition-colors"
            >
              <span>WhatsApp Showroom</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
