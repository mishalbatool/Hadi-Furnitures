/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';

export default function CustomerRating() {
  return (
    <section className="py-16 sm:py-20 bg-[#F4EEDF] border-y border-[#E8DFD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#C5A15B]/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Left: Star rating and score */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#173D32] text-[#F8F4EA] flex flex-col items-center justify-center shadow-inner shrink-0 border border-[#C5A15B]/40">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C5A15B]">
                {BUSINESS_INFO.googleRating}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#E8DFD0]/80 mt-0.5">
                out of 5.0
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C5A15B] text-[#C5A15B]"
                  />
                ))}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173D32]">
                Google Showroom Rating
              </h3>

              <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-[#262824]/75 mt-1">
                <span>Based on 18 verified customer ratings</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-[#173D32] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A15B]" />
                  Verified Showroom
                </span>
              </div>
            </div>
          </div>

          {/* Right: CTA button to view genuine Google listing */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173D32] text-[#F8F4EA] hover:bg-[#C5A15B] hover:text-[#173D32] text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <span>View Google Business Listing</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
