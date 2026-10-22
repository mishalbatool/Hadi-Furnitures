/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import local high-resolution generated photography
import heroBedroomImg from '../assets/images/hero_luxury_bedroom_1792679274126.jpg';
import bedFramesImg from '../assets/images/collection_bed_frames_1792679274641.jpg';
import sofasLivingImg from '../assets/images/collection_sofas_living_1792679274515.jpg';
import wardrobesStorageImg from '../assets/images/collection_wardrobes_storage_1792679275955.jpg';
import carvedBedImg from '../assets/images/product_carved_bed_1792679299944.jpg';
import dressingTableImg from '../assets/images/product_dressing_table_1792679300796.jpg';
import bedsideTablesImg from '../assets/images/product_bedside_tables_1792679300296.jpg';
import showroomInteriorImg from '../assets/images/about_chiniot_showroom_1792679275976.jpg';

export const BUSINESS_INFO = {
  name: 'Haddi Furnitures',
  phoneDisplay: 'Call Showroom',
  phoneHref: 'tel:+923007935902',
  whatsappBase: 'https://wa.me/923007935902',
  defaultWhatsappMessage: 'Hello Haddi Furnitures, I would like to inquire about your furniture collection.',
  address: 'Chiniot Road, Chiniot, Punjab, Pakistan',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Haddi+Furnitures+Chiniot+Road+Chiniot+Punjab+Pakistan',
  googleRating: '4.8',
  reviewCount: 18,
  type: 'Furniture Showroom',
};

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  categoryFilter: string;
  image: string;
  badgeText: string;
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'bedroom-furniture',
    title: 'Bedroom Furniture',
    description: 'Complete sanctuary suites crafted with balanced proportions, refined finishes, and restful elegance.',
    categoryFilter: 'bedroom',
    image: heroBedroomImg,
    badgeText: 'Curated Suites',
  },
  {
    id: 'beds-and-bed-frames',
    title: 'Beds and Bed Frames',
    description: 'From clean contemporary lines to traditional hand-carved solid wood masterpieces.',
    categoryFilter: 'beds',
    image: bedFramesImg,
    badgeText: 'Signature Craft',
  },
  {
    id: 'sofas-and-living-room',
    title: 'Sofas and Living Room',
    description: 'Sculpted comfort with high-resilience seating, tactile fabrics, and rich solid wooden frames.',
    categoryFilter: 'living',
    image: sofasLivingImg,
    badgeText: 'Living Comfort',
  },
  {
    id: 'wardrobes-and-storage',
    title: 'Wardrobes and Storage',
    description: 'Generous bespoke wardrobes, armoires, and storage units designed for graceful organization.',
    categoryFilter: 'storage',
    image: wardrobesStorageImg,
    badgeText: 'Bespoke Storage',
  },
];

export interface ProductItem {
  id: string;
  name: string;
  category: 'bedroom' | 'beds' | 'living' | 'storage';
  categoryLabel: string;
  description: string;
  image: string;
  dimensionsNote?: string;
}

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-modern-wooden-bed',
    name: 'Modern Wooden Bed',
    category: 'beds',
    categoryLabel: 'Beds & Frames',
    description: 'Minimalist solid wood frame with geometric relief headboard and natural warm finish.',
    image: bedFramesImg,
  },
  {
    id: 'prod-classic-carved-bed',
    name: 'Classic Carved Bed',
    category: 'beds',
    categoryLabel: 'Beds & Frames',
    description: 'Heritage hand-carved floral filigree headboard showcasing traditional Chiniot woodwork finesse.',
    image: carvedBedImg,
  },
  {
    id: 'prod-luxury-bedroom-set',
    name: 'Luxury Bedroom Set',
    category: 'bedroom',
    categoryLabel: 'Bedroom Furniture',
    description: 'Cohesive master suite ensemble featuring a grand wooden bed, matching side tables, and dresser.',
    image: heroBedroomImg,
  },
  {
    id: 'prod-contemporary-sofa',
    name: 'Contemporary Sofa',
    category: 'living',
    categoryLabel: 'Living Room',
    description: 'Deep cushioned 3-seater sofa combining forest green velvet accents with solid wood footing.',
    image: sofasLivingImg,
  },
  {
    id: 'prod-wooden-wardrobe',
    name: 'Wooden Wardrobe',
    category: 'storage',
    categoryLabel: 'Wardrobes & Storage',
    description: 'Spacious multi-door wardrobe featuring fluted timber panels and antique brass hardware.',
    image: wardrobesStorageImg,
  },
  {
    id: 'prod-bedside-tables',
    name: 'Bedside Tables',
    category: 'bedroom',
    categoryLabel: 'Bedroom Furniture',
    description: 'Dual-drawer nightstands crafted in dark walnut tone with sleek brass bar pulls.',
    image: bedsideTablesImg,
  },
  {
    id: 'prod-dressing-table',
    name: 'Dressing Table',
    category: 'bedroom',
    categoryLabel: 'Bedroom Furniture',
    description: 'Graceful vanity table with curved cabriole legs, brass-framed mirror, and matching vanity stool.',
    image: dressingTableImg,
  },
  {
    id: 'prod-living-room-set',
    name: 'Living Room Furniture Set',
    category: 'living',
    categoryLabel: 'Living Room',
    description: 'Comprehensive living arrangement with artisanal cane-backed armchairs, coffee table, and credenza.',
    image: showroomInteriorImg,
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  aspectClass: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Wooden Bed Designs',
    category: 'Bedframes',
    image: bedFramesImg,
    alt: 'Handcrafted modern wooden bed frame in showroom',
    aspectClass: 'md:col-span-2 aspect-[16/10]',
  },
  {
    id: 'gal-2',
    title: 'Craftsmanship & Carved Detail',
    category: 'Handmade Details',
    image: carvedBedImg,
    alt: 'Close-up of intricate hand-carved floral wood headboard',
    aspectClass: 'md:col-span-1 aspect-[4/5]',
  },
  {
    id: 'gal-3',
    title: 'Luxury Bedroom Interiors',
    category: 'Master Suites',
    image: heroBedroomImg,
    alt: 'Complete luxury master bedroom layout with carved bed',
    aspectClass: 'md:col-span-1 aspect-[4/5]',
  },
  {
    id: 'gal-4',
    title: 'Stylish Sofas & Lounging',
    category: 'Living Room',
    image: sofasLivingImg,
    alt: 'Contemporary luxury velvet sofa with solid wood details',
    aspectClass: 'md:col-span-2 aspect-[16/10]',
  },
  {
    id: 'gal-5',
    title: 'Wardrobes & Cabinets',
    category: 'Storage',
    image: wardrobesStorageImg,
    alt: 'Spacious wooden wardrobe with fluted woodwork and brass fittings',
    aspectClass: 'md:col-span-1 aspect-square',
  },
  {
    id: 'gal-6',
    title: 'Dressing Tables & Vanities',
    category: 'Bedroom Accents',
    image: dressingTableImg,
    alt: 'Artisanal vanity dressing table with gold mirror',
    aspectClass: 'md:col-span-1 aspect-square',
  },
  {
    id: 'gal-7',
    title: 'Furniture Details & Craftsmanship',
    category: 'Artisanship',
    image: bedsideTablesImg,
    alt: 'Detailed wood grain bedside tables with warm lamp',
    aspectClass: 'md:col-span-1 aspect-square',
  },
];

export interface WhyFeature {
  title: string;
  description: string;
  iconName: 'Sparkles' | 'HeartHandshake' | 'Hammer' | 'Smile';
}

export const WHY_CHOOSE_US: WhyFeature[] = [
  {
    title: 'Elegant Furniture Designs',
    description: 'Carefully proportioned silhouettes that complement both contemporary aesthetics and timeless traditional interiors.',
    iconName: 'Sparkles',
  },
  {
    title: 'Comfort-Focused Living',
    description: 'Every piece is planned around natural ergonomics, supportive seating, and durable, comfortable daily use.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Attention to Craftsmanship',
    description: 'Deep respect for wood selection, joint stability, smooth finishes, and delicate wood carving traditions.',
    iconName: 'Hammer',
  },
  {
    title: 'Helpful Customer Service',
    description: 'Direct assistance via phone and WhatsApp to guide your choices, discuss custom requirements, and arrange viewings.',
    iconName: 'Smile',
  },
];

export function buildWhatsAppLink(productName?: string): string {
  const text = productName
    ? `Hello Haddi Furnitures, I would like to inquire about the ${productName}.`
    : BUSINESS_INFO.defaultWhatsappMessage;
  return `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(text)}`;
}
