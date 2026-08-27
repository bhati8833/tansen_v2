'use client';

// src/components/sections/Testimonials.tsx — 2-column side-by-side layout matching live site
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const studentTestimonials = [
  {
    id: 1,
    name: 'Stuti Tiwari',
    role: 'Fine & Arts Student',
    quote:
      'Highly recommended! Excellent dance training, supportive teachers, and a very professional setup. My child loves the classes and the environment is extremely safe',
    avatar: '/assets/testimonials/anu-kapoor.jpg',
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    role: 'Guitar Student',
    quote:
      'Tansen Sangeet Mahavidyalaya has transformed my guitar playing completely. The structured curriculum and personal attention from faculty are unmatched.',
    avatar: '/assets/testimonials/master-ji.jpg',
  },
];

const celebrities = [
  {
    id: 1,
    name: 'Shri Anu Kapoor',
    role: 'Veteran Actor',
    image: '/assets/testimonials/anu-kapoor.jpg',
  },
  {
    id: 2,
    name: 'Late Shri Saroj Khan',
    role: 'Choreographer',
    image: '/assets/testimonials/saroj_khan.jpg',
  },
  {
    id: 3,
    name: 'Master Marji',
    role: 'Choreographer',
    image: '/assets/testimonials/master-ji.jpg',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = studentTestimonials[current];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Student Success Stories */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
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

              {/* Testimonial Card */}
              <div
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 relative mb-6"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-100">
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
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrent((p) => (p - 1 + studentTestimonials.length) % studentTestimonials.length)}
                      className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      onClick={() => setCurrent((p) => (p + 1) % studentTestimonials.length)}
                      className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <a
              href="https://share.google/DymDbeuTIwHWgJLIg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider hover:gap-2.5 transition-all"
              style={{ color: '#D4952B' }}
            >
              <span>VIEW ALL TESTIMONIALS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Column: Celebrity Recognition */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#D4952B' }}>
              CELEBRITY RECOGNITION
            </p>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
            >
              Trusted by Celebrities
            </h2>

            {/* 3 Celebrity Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {celebrities.map((celeb) => (
                <div
                  key={celeb.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-center"
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
          </div>
        </div>
      </div>
    </section>
  );
}
