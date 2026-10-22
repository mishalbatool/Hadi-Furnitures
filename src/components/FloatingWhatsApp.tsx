/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/furnitureData';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#173D32] text-[#F8F4EA] hover:bg-[#C5A15B] hover:text-[#173D32] shadow-xl border border-[#C5A15B]/40 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Direct WhatsApp inquiry"
      >
        <div className="w-7 h-7 rounded-full bg-[#C5A15B] group-hover:bg-[#173D32] text-[#173D32] group-hover:text-[#F8F4EA] flex items-center justify-center transition-colors">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-wide pr-1">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
