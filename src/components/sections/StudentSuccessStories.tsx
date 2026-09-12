'use client';

// src/components/sections/StudentSuccessStories.tsx — full-width testimonial carousel
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { studentTestimonials } from '@/data/testimonials';

export function StudentSuccessStories() {
  const [current, setCurrent] = useState(0);
  const [isStudentHovered, setIsStudentHovered] = useState(false);

  // Auto slide Student Testimonials (5s)
  useEffect(() => {
    if (isStudentHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % studentTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isStudentHovered]);

  const t = studentTestimonials[current];

  return (
    <section className="py-16 bg-band-cool">
      <div
        className="container-site"
        onMouseEnter={() => setIsStudentHovered(true)}
        onMouseLeave={() => setIsStudentHovered(false)}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-2" style={{ color: '#E37216' }}>
            STUDENT SUCCESS STORIES
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
          >
            What Our Students Say
          </h2>
        </div>

        {/* Testimonial Card — Centered */}
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-card-soft hover:shadow-card-lift transition-all duration-300 min-h-[280px] sm:min-h-[260px] md:min-h-[240px] flex flex-col">
            <div className="flex items-center gap-4 md:gap-6 flex-1 min-h-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-100/80 shadow-sm">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-h-0">
                <p className="text-sm md:text-base text-gray-700 italic leading-relaxed font-serif line-clamp-6 md:line-clamp-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-bold text-sm mt-3" style={{ color: '#0A101C' }}>
                  - {t.name}
                </p>
                <p className="text-xs font-medium" style={{ color: '#E37216' }}>
                  {t.role}
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between pt-4 mt-auto">
              <div className="flex gap-1.5">
                {studentTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor: i === current ? '#E37216' : '#d1d5db',
                      width: i === current ? '16px' : '8px',
                    }}
                    aria-label={`Go to student story ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrent((p) => (p - 1 + studentTestimonials.length) % studentTestimonials.length)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#E37216] hover:text-white hover:border-[#E37216] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Previous Student Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrent((p) => (p + 1) % studentTestimonials.length)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#E37216] hover:text-white hover:border-[#E37216] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Next Student Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
