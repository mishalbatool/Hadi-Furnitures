/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/furnitureData';

export default function ContactSection() {
  const [selectedInterest, setSelectedInterest] = useState('General Collection Inquiry');
  const [customNote, setCustomNote] = useState('');

  const interestOptions = [
    'General Collection Inquiry',
    'Master Bed & Bed Frames',
    'Complete Bedroom Suite',
    'Living Room Sofa Set',
    'Wooden Wardrobes & Storage',
    'Custom Woodwork Inquiry',
  ];

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Haddi Furnitures, I would like to inquire about: ${selectedInterest}.`;
    if (customNote.trim()) {
      text += ` Additional note: ${customNote.trim()}`;
    }
    const url = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#173D32] text-[#F8F4EA] relative">
      {/* Decorative Top Accent Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A15B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold block mb-2">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4EA] mb-4">
            Visit Our Showroom or Connect
          </h2>
          <p className="text-sm sm:text-base text-[#E8DFD0]/80 font-light leading-relaxed">
            We are pleased to answer questions regarding our showroom pieces, custom requirements, and wood finishes.
          </p>
        </div>

        {/* 3 Main Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Call Now */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A15B]/60 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C5A15B]/15 border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F8F4EA] mb-2">
                Phone Contact
              </h3>
              <p className="text-xs sm:text-sm text-[#E8DFD0]/70 mb-4 font-light">
                Speak directly with our showroom team for immediate guidance.
              </p>
              <p className="text-base font-semibold text-[#C5A15B]">
                Direct Showroom Line
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A15B] hover:bg-[#b58f47] text-[#173D32] text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Us */}
          <div className="p-8 rounded-2xl bg-[#C5A15B]/10 border border-[#C5A15B]/40 hover:border-[#C5A15B] transition-all duration-300 flex flex-col justify-between relative shadow-lg">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C5A15B] text-[#173D32]">
                Fastest Response
              </span>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C5A15B] text-[#173D32] flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F8F4EA] mb-2">
                WhatsApp Us
              </h3>
              <p className="text-xs sm:text-sm text-[#E8DFD0]/80 mb-4 font-light">
                Send a quick message to request photos, catalog options, or pricing inquiries.
              </p>
              <p className="text-xs text-[#E8DFD0]/70">
                Pre-filled message available for instant inquiry.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A15B] hover:bg-[#dfc58e] text-[#173D32] text-sm font-bold transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Card 3: Get Directions */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A15B]/60 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C5A15B]/15 border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F8F4EA] mb-2">
                Showroom Address
              </h3>
              <p className="text-xs sm:text-sm text-[#E8DFD0]/70 mb-4 font-light">
                Conveniently located on main Chiniot Road in the heart of Chiniot.
              </p>
              <p className="text-sm font-medium text-[#F8F4EA] leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#F8F4EA] text-sm font-semibold transition-colors border border-white/15"
              >
                <Navigation className="w-4 h-4 text-[#C5A15B]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Quick-Inquiry Form */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/5 border border-[#C5A15B]/30 backdrop-blur-xs">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#F8F4EA] mb-2">
              Send a Tailored Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#E8DFD0]/70 font-light">
              Select your category of interest and type your note to open a pre-filled WhatsApp message directly to our showroom.
            </p>
          </div>

          <form onSubmit={handleSendCustomWhatsApp} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C5A15B] font-semibold mb-2">
                Furniture Category
              </label>
              <select
                value={selectedInterest}
                onChange={(e) => setSelectedInterest(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#F8F4EA] focus:border-[#C5A15B] focus:outline-none text-sm transition-colors cursor-pointer"
              >
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#173D32] text-[#F8F4EA]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C5A15B] font-semibold mb-2">
                Custom Requirements or Room Size (Optional)
              </label>
              <textarea
                rows={3}
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="e.g., King size wooden bed frame in dark polish, or wardrobe measurements..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-[#F8F4EA] placeholder-[#E8DFD0]/40 focus:border-[#C5A15B] focus:outline-none text-sm transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#C5A15B] hover:bg-[#b58f47] text-[#173D32] font-bold text-sm transition-all duration-200 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Send Inquiry to WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
