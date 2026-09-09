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
    <section className="py-16" style={{ backgroundColor: '#FDF9F3' }}>
      <div
        className="container-site"
        onMouseEnter={() => setIsStudentHovered(true)}
        onMouseLeave={() => setIsStudentHovered(false)}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#E37216' }}>
            STUDENT SUCCESS STORIES
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
          >
            What Our Students Say
          </h2>
        </div>

        {/* Testimonial Card — Centered */}
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-100/80 shadow-xs">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-700 italic leading-relaxed font-serif">
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
            <div className="flex items-center justify-between pt-2">
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
