/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Search, ArrowRight, CornerDownLeft } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppLink, ProductItem, searchProducts } from '../data/furnitureData';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export default function Header({ searchQuery, onSearchChange, onSelectProduct }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto focus mobile search input when opened
  useEffect(() => {
    if (mobileSearchOpen) {
      setTimeout(() => mobileInputRef.current?.focus(), 100);
    }
  }, [mobileSearchOpen]);

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
    setMobileSearchOpen(false);
    setDropdownOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setDropdownOpen(false);
    setMobileSearchOpen(false);
    setMobileMenuOpen(false);
    const target = document.querySelector('#featured');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const liveMatches = searchQuery.trim() ? searchProducts(searchQuery, 'all') : [];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#173D32]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C5A15B]/20 text-[#F8F4EA]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Search Overlay Bar */}
          {mobileSearchOpen ? (
            <div className="flex items-center gap-2 animate-fade-in py-1">
              <form onSubmit={handleSearchSubmit} className="flex-1 relative flex items-center">
                <Search className="w-4 h-4 text-[#C5A15B] absolute left-3 pointer-events-none" />
                <input
                  ref={mobileInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    setDropdownOpen(true);
                  }}
                  placeholder="Search furniture by name, style, or type..."
                  className="w-full pl-9 pr-9 py-2 rounded-full bg-white text-[#262824] placeholder-[#262824]/50 text-xs sm:text-sm border border-[#C5A15B] focus:outline-none shadow-md"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      onSearchChange('');
                    }}
                    className="absolute right-3 p-1 text-[#262824]/50 hover:text-[#262824]"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </form>
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="px-3 py-2 rounded-full bg-[#C5A15B] text-[#173D32] text-xs font-bold hover:bg-[#b58f47]"
              >
                Go
              </button>
              <button
                type="button"
                onClick={() => setMobileSearchOpen(false)}
                className="p-2 rounded-full text-[#F8F4EA] hover:bg-white/10"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4 lg:gap-8">
              {/* Zone 1: Brand Wordmark */}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="flex items-center gap-2 group whitespace-nowrap shrink-0"
                aria-label="Hadi Furnitures Home"
              >
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F8F4EA] group-hover:text-[#C5A15B] transition-colors">
                  Hadi Furnitures
                </span>
              </a>

              {/* Zone 2: Navigation Links */}
              <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
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

              {/* Zone 3: Search Bar & Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Desktop Search Input with Dropdown */}
                <div ref={searchContainerRef} className="relative hidden md:block">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onFocus={() => {
                        if (searchQuery.trim()) setDropdownOpen(true);
                      }}
                      onChange={(e) => {
                        onSearchChange(e.target.value);
                        setDropdownOpen(true);
                      }}
                      placeholder="Search furniture..."
                      className={`w-44 lg:w-56 focus:w-64 lg:focus:w-72 pl-9 pr-8 py-2 rounded-full text-xs font-light transition-all duration-300 ${
                        isScrolled
                          ? 'bg-white/15 text-white placeholder-white/60 border border-white/20 focus:bg-white focus:text-[#262824] focus:placeholder-[#262824]/50'
                          : 'bg-black/30 text-white placeholder-white/70 border border-white/30 focus:bg-white focus:text-[#262824] focus:placeholder-[#262824]/50'
                      } focus:border-[#C5A15B] focus:ring-2 focus:ring-[#C5A15B]/30 focus:outline-none`}
                    />
                    <Search className="w-4 h-4 text-[#C5A15B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => {
                          onSearchChange('');
                          setDropdownOpen(false);
                        }}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-current/60 hover:text-current transition-colors"
                        aria-label="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </form>

                  {/* Desktop Live Search Dropdown */}
                  {dropdownOpen && searchQuery.trim().length > 0 && (
                    <div className="absolute right-0 mt-2 w-80 lg:w-96 rounded-2xl bg-white text-[#262824] shadow-2xl border border-[#C5A15B]/30 overflow-hidden z-50 animate-fade-in">
                      <div className="p-3 bg-[#F8F4EA] border-b border-[#E8DFD0] flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#173D32]">
                          Matching Pieces ({liveMatches.length})
                        </span>
                        <span className="text-[11px] text-[#262824]/60">Press Enter to view all</span>
                      </div>

                      <div className="max-h-72 overflow-y-auto divide-y divide-[#E8DFD0]/60">
                        {liveMatches.length > 0 ? (
                          liveMatches.map((product) => (
                            <div
                              key={product.id}
                              onClick={() => {
                                onSelectProduct(product);
                                setDropdownOpen(false);
                              }}
                              className="p-3 hover:bg-[#F8F4EA] flex items-center gap-3 cursor-pointer transition-colors group"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-12 h-12 rounded-lg object-cover bg-[#E8DFD0] shrink-0 border border-[#E8DFD0]"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-bold text-[#173D32] group-hover:text-[#C5A15B] transition-colors truncate">
                                  {product.name}
                                </h4>
                                <span className="text-[10px] text-[#262824]/60 uppercase tracking-wider block">
                                  {product.categoryLabel}
                                </span>
                              </div>
                              <span className="text-[11px] font-semibold text-[#C5A15B] group-hover:translate-x-0.5 transition-transform shrink-0">
                                View →
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="p-6 text-center text-xs text-[#262824]/70">
                            <p className="font-medium text-[#173D32] mb-1">No furniture found</p>
                            <p className="text-[11px] text-[#262824]/60">
                              Try searching for "bed", "sofa", "wardrobe", or "table"
                            </p>
                          </div>
                        )}
                      </div>

                      {liveMatches.length > 0 && (
                        <div className="p-2.5 bg-[#F8F4EA] border-t border-[#E8DFD0] text-center">
                          <button
                            type="button"
                            onClick={() => handleSearchSubmit()}
                            className="w-full py-1.5 px-3 rounded-lg bg-[#173D32] hover:bg-[#C5A15B] text-[#F8F4EA] hover:text-[#173D32] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                          >
                            <span>Explore all {liveMatches.length} results</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile Search Trigger Icon */}
                <button
                  type="button"
                  onClick={() => setMobileSearchOpen(true)}
                  className="md:hidden p-2 rounded-full text-[#F8F4EA] hover:text-[#C5A15B] hover:bg-white/10 transition-colors"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5 text-[#C5A15B]" />
                </button>

                {/* Highlighted WhatsApp CTA Button */}
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-[#C5A15B] text-[#173D32] hover:bg-[#b58f47] shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 font-semibold active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <span>WhatsApp Us</span>
                </a>

                {/* Mobile Menu Toggle Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="xl:hidden p-2 rounded-lg text-[#F8F4EA] hover:text-[#C5A15B] hover:bg-white/10 transition-colors"
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#F8F4EA]" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Navigation with Search Bar */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#173D32] text-[#F8F4EA] p-6 shadow-2xl flex flex-col justify-between border-l border-[#C5A15B]/20 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#C5A15B]/20">
                <span className="font-serif text-xl font-bold text-[#F8F4EA]">
                  Hadi Furnitures
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

              {/* Search Inside Drawer */}
              <div className="mt-5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const target = document.querySelector('#featured');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search furniture..."
                    className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-white/10 text-white placeholder-white/50 text-xs border border-white/20 focus:border-[#C5A15B] focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-[#C5A15B] absolute left-3 top-1/2 -translate-y-1/2" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => onSearchChange('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </form>
                {searchQuery && (
                  <p className="text-[11px] text-[#C5A15B] mt-1.5 pl-1">
                    {liveMatches.length} matching piece{liveMatches.length === 1 ? '' : 's'} in catalog
                  </p>
                )}
              </div>

              <nav className="mt-6 flex flex-col gap-2 text-base font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-2 px-3 rounded-lg text-[#F8F4EA]/90 hover:text-[#C5A15B] hover:bg-white/5 transition-colors text-sm"
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
