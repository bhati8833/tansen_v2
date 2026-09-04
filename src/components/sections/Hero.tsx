'use client';

// src/components/sections/Hero.tsx — exact layout with bottom floating stat card matching live site
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Shield, Users, MapPin, Key, Star, Building2, Globe, GraduationCap, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/assets/hero/vocal-hero.jpeg',
    tagline: "India's largest music & dance school",
    title: 'Music & Vocal Academy',
    subtitle: '50+ Years of Legacy',
    description: 'Nurturing Talent. Building Confidence. Creating Futures.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Students Trained' },
      { icon: MapPin, value: 'Gurugram', label: 'Sector-43 Center' },
      { icon: Key, value: 'ISO 9001:2008', label: 'Certified' },
    ],
  },
  {
    id: 2,
    image: '/assets/hero/western-dance-hero.webp',
    tagline: "India's largest music & dance school",
    title: 'Western & Modern Dance',
    subtitle: '50+ Years of Legacy',
    description: 'Discover Passion. Master Skills. Achieve Excellence.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Students Trained' },
      { icon: MapPin, value: 'Gurugram', label: 'Sector-43 Center' },
      { icon: Key, value: 'ISO 9001:2008', label: 'Certified' },
    ],
  },
  {
    id: 3,
    image: '/assets/hero/kathak-hero.webp',
    tagline: "India's largest music & dance school",
    title: 'Classical Kathak Dance',
    subtitle: '50+ Years of Legacy',
    description: 'Graceful Rhythm. Authentic Heritage. Certified Degrees.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Students Trained' },
      { icon: MapPin, value: 'Gurugram', label: 'Sector-43 Center' },
      { icon: Key, value: 'ISO 9001:2008', label: 'Certified' },
    ],
  },
  {
    id: 4,
    image: '/assets/hero/keyboard-hero.webp',
    tagline: "India's largest music & dance school",
    title: 'Keyboard & Piano Academy',
    subtitle: '50+ Years of Legacy',
    description: 'Learn Notation. Master Chords. Perform Songs.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Students Trained' },
      { icon: MapPin, value: 'Gurugram', label: 'Sector-43 Center' },
      { icon: Key, value: 'ISO 9001:2008', label: 'Certified' },
    ],
  },
  {
    id: 5,
    image: '/assets/hero/drums-hero.webp',
    tagline: "India's largest music & dance school",
    title: 'Drums & Percussion',
    subtitle: '50+ Years of Legacy',
    description: 'Master Beats. Groove Rhythm. Professional Training.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Students Trained' },
      { icon: MapPin, value: 'Gurugram', label: 'Sector-43 Center' },
      { icon: Key, value: 'ISO 9001:2008', label: 'Certified' },
    ],
  },
  {
    id: 6,
    image: '/assets/hero/guitar-hero.webp',
    tagline: "India's largest music & dance school",
    title: 'Guitar Masterclasses',
    subtitle: '50+ Years of Legacy',
    description: 'Acoustic & Electric. Leads & Fingerpicking.',
    stats: [
      { icon: Shield, value: '50+', label: 'Years of Legacy' },
      { icon: Users, value: '1,00,000+', label: 'Students Trained' },
      { icon: MapPin, value: 'Gurugram', label: 'Sector-43 Center' },
      { icon: Key, value: 'ISO 9001:2008', label: 'Certified' },
    ],
  },
];

const floatingStats = [
  { icon: Star, value: '50+ Years', label: 'Legacy of Excellence' },
  { icon: Users, value: '1 Lakh+', label: 'Trained Students' },
  { icon: Shield, value: 'ISO Certified', label: '9001:2008 Academy' },
  { icon: MapPin, value: 'Sector-43', label: 'Gurugram Center' },
  { icon: Globe, value: 'Online & Offline', label: 'Flexible Batches' },
  { icon: GraduationCap, value: 'Govt. Certified', label: 'Diplomas & Degrees' },
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-white font-bold text-xs md:text-sm tracking-wider shadow-md transition-all hover:bg-[#b8842b] hover:shadow-lg"
                  style={{ backgroundColor: '#D4952B' }}
                >
                  BOOK FREE DEMO
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm tracking-wider border-2 border-gray-900 text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
                >
                  <span>EXPLORE COURSES</span>
                  <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs border border-gray-200 text-gray-800 flex items-center justify-center hover:bg-[#D4952B] hover:text-white hover:border-[#D4952B] shadow-md transition-all duration-200 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => { next(); setAutoPlay(false); setTimeout(() => setAutoPlay(true), 10000); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs border border-gray-200 text-gray-800 flex items-center justify-center hover:bg-[#D4952B] hover:text-white hover:border-[#D4952B] shadow-md transition-all duration-200 focus:outline-none"
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

      {/* FLOATING ELEGANT OVERLAPPING BADGES BAR */}
      <div className="container-site relative z-30 -mt-12 md:-mt-14">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-xl border border-gray-100/90 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 divide-y sm:divide-y-0 divide-gray-100">
          {floatingStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center group ${i > 0 ? 'pt-3 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-amber-200/50 flex items-center justify-center text-[#D4952B] mb-2 group-hover:scale-105 group-hover:bg-[#D4952B] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-sm md:text-base font-bold text-gray-900 font-poppins tracking-tight">
                  {stat.value}
                </div>
                <p className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
