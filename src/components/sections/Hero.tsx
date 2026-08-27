'use client';

// src/components/sections/Hero.tsx — exact layout with bottom floating stat card matching live site
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Shield, Users, MapPin, Key, Star, Building2, Globe, GraduationCap, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/assets/hero/slider-1.jpg',
    tagline: "India's Most Trusted",
    title: 'Music & Dance Academy',
    subtitle: 'Academy Since 1972',
    description: 'Nurturing Talent. Building Confidence. Creating Futures.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,50,000+', label: 'Happy Student' },
      { icon: MapPin, value: '125+', label: 'Years of Legacy' },
      { icon: Key, value: '100+', label: 'Cities Across India' },
    ],
  },
  {
    id: 2,
    image: '/assets/hero/slider-2.jpg',
    tagline: "India's Most Trusted",
    title: 'Indian Classical Dance',
    subtitle: 'Academy Since 1972',
    description: 'Discover Passion. Master Skills. Achieve Excellence.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Happy Student' },
      { icon: MapPin, value: '125+', label: 'Years of Legacy' },
      { icon: Key, value: '23+', label: 'Cities Across India' },
    ],
  },
  {
    id: 3,
    image: '/assets/hero/slider-3.jpg',
    tagline: "India's Most Trusted",
    title: 'Create. Imagine. Inspire.',
    subtitle: 'Academy Since 1972',
    description: 'Inspiring Creativity. Building Confidence. Shaping Futures.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Happy Student' },
      { icon: MapPin, value: '125+', label: 'Years of Legacy' },
      { icon: Key, value: '23+', label: 'Cities Across India' },
    ],
  },
];

const floatingStats = [
  { icon: Star, value: '27+', label1: 'Years', label2: 'Experience' },
  { icon: Users, value: '150,000+', label1: 'Happy Students', label2: '' },
  { icon: Building2, value: '150+', label1: 'Learning', label2: 'Centers' },
  { icon: Globe, value: '100+', label1: 'Cities Across', label2: 'India' },
  { icon: GraduationCap, value: '200+', label1: 'Expert Faculty', label2: '' },
  { icon: GraduationCap, value: '10+', label1: 'Certified', label2: 'Courses' },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, next]);

  const goTo = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const slide = slides[current];

  return (
    <div className="relative bg-white pb-16 lg:pb-24">
      {/* Main Hero Slider Container */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(500px, 68vh, 750px)' }}>
        {/* Background Images */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Soft Light-to-Dark Fade Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(253,249,243,0.92) 0%, rgba(253,249,243,0.75) 45%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-site w-full">
            <div className="max-w-2xl text-gray-900">
              {/* Tagline */}
              <p className="text-sm md:text-base font-medium mb-1.5 flex items-center gap-2" style={{ color: '#D4952B' }}>
                <span>—</span>
                <span>{slide.tagline}</span>
              </p>

              {/* Main Title */}
              <h1
                key={`title-${current}`}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight"
                style={{
                  fontFamily: 'var(--font-playfair-var), Georgia, serif',
                  color: '#0A101C',
                  animation: 'slideUp 0.6s ease-out',
                }}
              >
                {slide.title}
              </h1>

              {/* Subtitle */}
              <h2
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-playfair-var), Georgia, serif', color: '#0A101C' }}
              >
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base mb-6 font-medium">
                {slide.description}
              </p>

              {/* Inline Stats Row */}
              <div className="flex flex-wrap items-center gap-5 md:gap-7 mb-8">
                {slide.stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#D4952B' }} />
                      <div>
                        <span className="font-bold text-sm md:text-base mr-1" style={{ color: '#0A101C' }}>
                          {stat.value}
                        </span>
                        <span className="text-xs text-gray-600 font-medium">{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#book-demo"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md text-white font-bold text-xs md:text-sm tracking-wider shadow-md transition-all hover:brightness-105"
                  style={{ backgroundColor: '#D4952B' }}
                >
                  BOOK FREE DEMO
                </a>
                <a
                  href="/our-courses"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md font-bold text-xs md:text-sm tracking-wider border-2 border-gray-800 text-gray-800 transition-all hover:bg-gray-900 hover:text-white"
                >
                  <span>EXPLORE COURSES</span>
                  <span className="w-5 h-5 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Prev/Next Arrows */}
        <button
          onClick={() => { prev(); setAutoPlay(false); setTimeout(() => setAutoPlay(true), 10000); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-md"
          style={{ backgroundColor: '#D4952B' }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => { next(); setAutoPlay(false); setTimeout(() => setAutoPlay(true), 10000); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-md"
          style={{ backgroundColor: '#D4952B' }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                backgroundColor: i === current ? '#D4952B' : 'rgba(0,0,0,0.3)',
              }}
            />
          ))}
        </div>
      </section>

      {/* FLOATING WHITE OVERLAPPING STAT CARD — matches live site centerpiece */}
      <div className="container-site relative z-30 -mt-14 md:-mt-16">
        <div
          className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100"
        >
          {floatingStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center ${i > 0 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <Icon className="w-7 h-7 mb-2" style={{ color: '#D4952B' }} />
                <div
                  className="text-2xl md:text-3xl font-extrabold mb-1"
                  style={{ color: '#0A101C', fontFamily: 'var(--font-poppins-var)' }}
                >
                  {stat.value}
                </div>
                <p className="text-xs text-gray-500 font-medium leading-tight">
                  {stat.label1}
                  {stat.label2 && <><br />{stat.label2}</>}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
