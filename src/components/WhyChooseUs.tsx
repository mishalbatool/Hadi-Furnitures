/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, HeartHandshake, Hammer, Smile } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/furnitureData';

export default function WhyChooseUs() {
  const iconMap = {
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
    Hammer: Hammer,
    Smile: Smile,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#173D32] text-[#F8F4EA] relative overflow-hidden">
      {/* Decorative Gold Accent Borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A15B]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A15B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-semibold block mb-2">
            Showroom Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F4EA] mb-4">
            Why Choose Haddi Furnitures?
          </h2>
          <p className="text-sm sm:text-base text-[#E8DFD0]/80 font-light leading-relaxed">
            Every home tells a story. We create foundational furniture pieces designed to bring balance, lasting comfort, and understated sophistication.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A15B]/60 transition-all duration-300 hover:bg-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box with antique gold accent */}
                  <div className="w-12 h-12 rounded-xl bg-[#C5A15B]/15 border border-[#C5A15B]/30 flex items-center justify-center text-[#C5A15B] mb-6 group-hover:scale-110 group-hover:bg-[#C5A15B] group-hover:text-[#173D32] transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#F8F4EA] mb-3 group-hover:text-[#C5A15B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E8DFD0]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="text-[11px] font-mono tracking-widest text-[#C5A15B]/60">0{idx + 1}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#C5A15B]/20 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
