/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, MessageCircle, CheckCircle2, Store } from 'lucide-react';
import showroomInteriorImg from '../assets/images/about_chiniot_showroom_1792679275976.jpg';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/furnitureData';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FCFAF5] relative border-t border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A15B] font-semibold">
              <Store className="w-4 h-4 text-[#C5A15B]" />
              <span>Chiniot Furniture Showroom</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173D32] tracking-tight leading-tight">
              Furniture That Makes a House Feel Like Home
            </h2>

            <p className="text-base text-[#262824]/80 leading-relaxed font-light">
              Hadi Furnitures is a premier furniture showroom situated on Chiniot Road in Chiniot, Punjab. Known as Pakistan’s heart of traditional wood craftsmanship, Chiniot holds an enduring legacy of woodworking artistry that inspires every piece we showcase.
            </p>

            <p className="text-base text-[#262824]/80 leading-relaxed font-light">
              We focus on bringing warmth, balance, and understated luxury into contemporary family spaces. Whether you are furnishing a new master bedroom, selecting an inviting sofa set, or seeking bespoke wardrobe solutions, our showroom team offers dedicated guidance to help you bring your interior vision to life.
            </p>

            {/* Core Values / Showroom Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DFD0]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173D32]">Chiniot Road Showroom</h3>
                  <p className="text-xs text-[#262824]/70 mt-0.5">Walk in to experience finishes, upholstery, and wood joinery first-hand.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#173D32]">Tailored Inquiries</h3>
                  <p className="text-xs text-[#262824]/70 mt-0.5">Discuss room sizes, custom dimensions, and wood preferences directly with us.</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173D32] text-[#F8F4EA] hover:bg-[#C5A15B] hover:text-[#173D32] text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#173D32] hover:bg-[#E8DFD0]/40 border border-[#E8DFD0] text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A15B]" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interior Showroom Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD0] shadow-xl group">
              <img
                src={showroomInteriorImg}
                alt="Inside Hadi Furnitures showroom on Chiniot Road displaying handcrafted furniture"
                className="w-full h-full object-cover object-center max-h-[520px] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              {/* Showroom Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#173D32]/95 backdrop-blur-md text-[#F8F4EA] border border-[#C5A15B]/30 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A15B]/20 border border-[#C5A15B]/40 flex items-center justify-center text-[#C5A15B] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-sm font-bold text-[#F8F4EA]">Visit Hadi Furnitures</h3>
                      <p className="text-xs text-[#E8DFD0]/80">{BUSINESS_INFO.address}</p>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_INFO.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#C5A15B] hover:text-[#dfc58e] underline underline-offset-4 shrink-0"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
