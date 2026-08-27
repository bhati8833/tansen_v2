'use client';

// src/components/sections/Gallery.tsx
import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/assets/gallery/gallery-${i + 1}.jpg`,
  alt: `Tansen Sangeet Mahavidyalaya Gallery Image ${i + 1}`,
}));

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16" style={{ backgroundColor: '#FCF7F1' }}>
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-poppins-var)', color: '#1f2937' }}
          >
            Moments that Inspire
          </h2>
          <a
            href="/our-photo-gallery"
            className="text-sm font-bold tracking-widest transition-colors hover:opacity-80"
            style={{ color: '#E37216' }}
          >
            VIEW FULL GALLERY
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {galleryImages.map((img) => (
            <button
              key={img.id}
              onClick={() => setLightbox(img.id)}
              className="relative overflow-hidden rounded-lg group aspect-square w-full"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/assets/gallery/gallery-${lightbox}.jpg`}
              alt={`Gallery image ${lightbox}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
