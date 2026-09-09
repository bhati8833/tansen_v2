'use client';

// src/components/sections/CelebrityRecognition.tsx — grid aligned with courses section
import Image from 'next/image';
import { celebrities } from '@/data/testimonials';

export function CelebrityRecognition() {
  return (
    <section className="py-20 bg-band-warm">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-2" style={{ color: '#E37216' }}>
            CELEBRITY RECOGNITION
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
          >
            Trusted by Celebrities
          </h2>
        </div>

        {/* Static Grid — matches courses section spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {celebrities.map((celeb) => (
            <div
              key={celeb.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card-soft hover:shadow-card-lift transition-all duration-300 text-center"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 40vw, 20vw"
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
      </div>
    </section>
  );
}