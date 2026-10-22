/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/furnitureData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'Featured', href: '#featured' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#173D32]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C5A15B]/20 text-[#F8F4EA]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group whitespace-nowrap shrink-0"
              aria-label="Haddi Furnitures Home"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F8F4EA] group-hover:text-[#C5A15B] transition-colors">
                Haddi Furnitures
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 text-[#F8F4EA]/90 hover:text-[#C5A15B] transition-colors whitespace-nowrap shrink-0 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A15B] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action (Highlighted WhatsApp Button) */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-[#C5A15B] text-[#173D32] hover:bg-[#b58f47] shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 font-semibold active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#F8F4EA] hover:text-[#C5A15B] hover:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#173D32] text-[#F8F4EA] p-6 shadow-2xl flex flex-col justify-between border-l border-[#C5A15B]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C5A15B]/20">
                <span className="font-serif text-xl font-bold text-[#F8F4EA]">
                  Haddi Furnitures
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#F8F4EA] hover:text-[#C5A15B] rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4 text-base font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-2.5 px-3 rounded-lg text-[#F8F4EA]/90 hover:text-[#C5A15B] hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#C5A15B]/20 space-y-3">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A15B] text-[#173D32] font-semibold text-sm shadow hover:bg-[#b58f47] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-[#F8F4EA] font-medium text-sm transition-colors border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#C5A15B]" />
                <span>Call Showroom</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#E8DFD0]/70 pt-2 px-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
                <span className="truncate">{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
