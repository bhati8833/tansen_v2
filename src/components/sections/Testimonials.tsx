'use client';

// src/components/sections/Testimonials.tsx — 2-column side-by-side layout with auto-sliding carousels
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const studentTestimonials = [
  {
    id: 1,
    name: 'Stuti Tiwari',
    role: 'Fine & Arts Student',
    quote:
      'Highly recommended! Excellent dance training, supportive teachers, and a very professional setup. My child loves the classes and the environment is extremely safe',
    avatar: '/assets/students/stuti-tiwari.webp',
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    role: 'Guitar Student',
    quote:
      'Tansen Sangeet Mahavidyalaya has transformed my guitar playing completely. The structured curriculum and personal attention from faculty are unmatched.',
    avatar: '/assets/students/rohan-sharma.webp',
  },
  {
    id: 3,
    name: 'Arti Verma',
    role: 'Vocal Music Student',
    quote:
      'Learning Hindustani classical vocal at Tansen has been a deeply inspiring journey. The faculty is immensely patient and knowledgeable.',
    avatar: '/assets/students/arti.webp',
  },
];

const celebrities = [
  {
    id: 1,
    name: 'Shri Annu Kapoor',
    role: 'Actor & Host',
    image: '/assets/testimonials/annu-kapoor.webp',
  },
  {
    id: 2,
    name: 'Late Shri Mati Saroj Khan',
    role: 'Choreographer',
    image: '/assets/testimonials/saroj-khan.webp',
  },
  {
    id: 3,
    name: 'Shri Shakti Kapoor',
    role: 'Veteran Actor',
    image: '/assets/testimonials/shakti-kapoor.webp',
  },
  {
    id: 4,
    name: 'Shri Ismail Darbar',
    role: 'Music Composer',
    image: '/assets/testimonials/ismail-darbar.webp',
  },
  {
    id: 5,
    name: 'Master Marzi Pestonji',
    role: 'Dance Maestro',
    image: '/assets/testimonials/marzi-pestonji.webp',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [celebIndex, setCelebIndex] = useState(0);
  const [isStudentHovered, setIsStudentHovered] = useState(false);
  const [isCelebHovered, setIsCelebHovered] = useState(false);

  // Auto slide Student Testimonials (5s)
  useEffect(() => {
    if (isStudentHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % studentTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isStudentHovered]);

  // Auto slide Celebrity Recognition (4s)
  useEffect(() => {
    if (isCelebHovered) return;
    const timer = setInterval(() => {
      setCelebIndex((prev) => (prev + 1) % celebrities.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isCelebHovered]);

  const t = studentTestimonials[current];

  const visibleCelebrities = [
    celebrities[celebIndex],
    celebrities[(celebIndex + 1) % celebrities.length],
    celebrities[(celebIndex + 2) % celebrities.length],
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Student Success Stories */}
          <div
            className="lg:col-span-5 flex flex-col justify-between h-full"
            onMouseEnter={() => setIsStudentHovered(true)}
            onMouseLeave={() => setIsStudentHovered(false)}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#D4952B' }}>
                STUDENT SUCCESS STORIES
              </p>
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
              >
                What Our Students Say
              </h2>

              {/* Testimonial Card — Uniform Card Styling */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative mb-6">
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
                    <p className="text-sm text-gray-700 italic leading-relaxed font-serif">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="font-bold text-sm mt-3" style={{ color: '#0A101C' }}>
                      - {t.name}
                    </p>
                    <p className="text-xs font-medium" style={{ color: '#D4952B' }}>
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
                          backgroundColor: i === current ? '#D4952B' : '#d1d5db',
                          width: i === current ? '16px' : '8px',
                        }}
                        aria-label={`Go to student story ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrent((p) => (p - 1 + studentTestimonials.length) % studentTestimonials.length)}
                      className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#D4952B] hover:text-white hover:border-[#D4952B] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
                      aria-label="Previous Student Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCurrent((p) => (p + 1) % studentTestimonials.length)}
                      className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#D4952B] hover:text-white hover:border-[#D4952B] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
                      aria-label="Next Student Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Celebrity Recognition */}
          <div
            className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-10"
            onMouseEnter={() => setIsCelebHovered(true)}
            onMouseLeave={() => setIsCelebHovered(false)}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#D4952B' }}>
                  CELEBRITY RECOGNITION
                </p>
                <h2
                  className="text-3xl font-bold"
                  style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
                >
                  Trusted by Celebrities
                </h2>
              </div>

              {/* Slider Prev / Next Controls — Uniform Arrow Styling */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCelebIndex((prev) => (prev - 1 + celebrities.length) % celebrities.length)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#D4952B] hover:text-white hover:border-[#D4952B] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Previous Celebrity"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCelebIndex((prev) => (prev + 1) % celebrities.length)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#D4952B] hover:text-white hover:border-[#D4952B] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Next Celebrity"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3 Celebrity Cards Displayed at a time — Uniform Card Styling */}
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
                    backgroundColor: i === celebIndex ? '#D4952B' : '#d1d5db',
                    width: i === celebIndex ? '16px' : '8px',
                  }}
                  aria-label={`Go to celebrity ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
