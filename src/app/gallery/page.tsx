// src/app/gallery/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, X, Maximize2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Vocal Music Recital', category: 'Music', image: '/assets/gallery/gallery-1.jpg', caption: 'Young vocal prodigies performing Hindustani classical ragas' },
  { id: 2, title: 'Celebrity Guest Visit', category: 'Celebrity', image: '/assets/testimonials/annu-kapoor.png', caption: 'Shri Annu Kapoor interacting with Tansen music students' },
  { id: 3, title: 'Kathak Dance Recital', category: 'Dance', image: '/assets/gallery/gallery-3.jpg', caption: 'Kathak graduation performance in traditional attire' },
  { id: 4, title: 'Guitar Masterclass', category: 'Music', image: '/assets/gallery/gallery-6.jpg', caption: 'Interactive jam session with acoustic & electric guitar faculty' },
  { id: 5, title: 'Keyboard Performance', category: 'Music', image: '/assets/gallery/gallery-4.jpg', caption: 'Young prodigies performing intricate piano & keyboard sonatas' },
  { id: 6, title: 'Fine Arts Studio', category: 'Visual Arts', image: '/assets/courses/fine-arts-cover.jpg', caption: 'Sketching, painting and visual arts creations' },
  { id: 7, title: 'Acoustic Drums Ensemble', category: 'Music', image: '/assets/gallery/gallery-5.jpg', caption: 'Rhythmic beats and percussion showcase' },
  { id: 8, title: 'Western Dance Showcase', category: 'Dance', image: '/assets/gallery/gallery-2.jpg', caption: 'High-energy Hip Hop, Jazz and Freestyle dance performance' },
  { id: 9, title: 'Celebrity Masterclass', category: 'Celebrity', image: '/assets/testimonials/saroj-khan.png', caption: 'Legendary Saroj Khan mentoring Tansen dance students' },
  { id: 10, title: 'Vocal Practice Studio', category: 'Center Moments', image: '/assets/courses/vocal-inside.jpg', caption: 'Acoustic practice studio setup at Sushant Lok center' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Events', 'Dance', 'Music', 'Celebrity', 'Visual Arts', 'Center Moments'];

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto">
      {/* Hero Banner */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20">
        <div className="container-site relative z-10">
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">Gallery</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-4">
            Photo & Performance <span className="text-[#D4952B]">Gallery</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Moments of joy, stage performances, celebrity visits, and artistic achievements at Tansen Sangeet Mahavidyalaya.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
        <div className="container-site flex items-center justify-start gap-2 overflow-x-auto scrollbar-none py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D4952B] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group relative h-72 rounded-2xl overflow-hidden bg-gray-200 cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-xs font-bold text-[#D4952B] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-poppins mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-300 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <button
            onClick={() => setActiveModalItem(null)}
            className="absolute top-6 right-6 text-white hover:text-[#D4952B] p-2 bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh] w-full bg-black">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-[#0A101C] text-white">
              <span className="text-xs font-bold text-[#D4952B] uppercase tracking-wider block mb-1">
                {activeModalItem.category}
              </span>
              <h3 className="text-xl font-bold font-poppins mb-2">{activeModalItem.title}</h3>
              <p className="text-sm text-gray-300">{activeModalItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
