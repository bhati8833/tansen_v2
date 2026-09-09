'use client';

// src/components/sections/CelebrityRecognition.tsx — full-width celebrity carousel
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { celebrities } from '@/data/testimonials';

export function CelebrityRecognition() {
  const [celebIndex, setCelebIndex] = useState(0);
  const [isCelebHovered, setIsCelebHovered] = useState(false);

  // Auto slide Celebrity Recognition (4s)
  useEffect(() => {
    if (isCelebHovered) return;
    const timer = setInterval(() => {
      setCelebIndex((prev) => (prev + 1) % celebrities.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isCelebHovered]);

  const visibleCelebrities = [
    celebrities[celebIndex],
    celebrities[(celebIndex + 1) % celebrities.length],
    celebrities[(celebIndex + 2) % celebrities.length],
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div
        className="container-site"
        onMouseEnter={() => setIsCelebHovered(true)}
        onMouseLeave={() => setIsCelebHovered(false)}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#E37216' }}>
              CELEBRITY RECOGNITION
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
            >
              Trusted by Celebrities
            </h2>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCelebIndex((prev) => (prev - 1 + celebrities.length) % celebrities.length)}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#E37216] hover:text-white hover:border-[#E37216] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Previous Celebrity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCelebIndex((prev) => (prev + 1) % celebrities.length)}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#E37216] hover:text-white hover:border-[#E37216] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Next Celebrity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Celebrity Cards Displayed at a time */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {visibleCelebrities.map((celeb) => (
            <div
              key={celeb.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm" style={{ color: '#0A101C' }}>
                  {celeb.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{celeb.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {celebrities.map((_, i) => (
            <button
              key={i}
              onClick={() => setCelebIndex(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: i === celebIndex ? '#E37216' : '#d1d5db',
                width: i === celebIndex ? '16px' : '8px',
              }}
              aria-label={`Go to celebrity ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
