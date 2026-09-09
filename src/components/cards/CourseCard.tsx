'use client';

// src/components/cards/CourseCard.tsx — sleek fully clickable course card
import Image from 'next/image';
import Link from 'next/link';
import { Music, Sparkles, Palette, Drum, ArrowRight } from 'lucide-react';
import type { Course } from '@/data/courses';

const categoryIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  'Classical Vocal Singing': Music,
  'Kathak': Sparkles,
  'Western Dance': Sparkles,
  'Guitar': Music,
  'Keyboard / Piano': Music,
  'Drums': Drum,
  'Tabla': Drum,
  'Fine Arts': Palette,
};

export function CourseCard({ title, category, image, fullSlug }: Course) {
  const Icon = categoryIcons[title] || categoryIcons[category] || Music;

  return (
    <Link
      href={fullSlug}
      className="block group bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 hover:border-orange-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between h-full cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
        <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        </div>

        {/* Floating Category Icon Badge at bottom center */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md border-2 border-orange-100 flex items-center justify-center group-hover:border-[#E37216] transition-colors">
          <Icon className="w-5 h-5" style={{ color: '#E37216' }} />
        </div>
      </div>

      {/* Content */}
      <div className="pt-8 pb-6 px-5 text-center flex flex-col items-center flex-grow justify-center">
        <h3
          className="text-lg font-bold transition-colors group-hover:text-[#C2410C] inline-flex items-center gap-1.5 justify-center"
          style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
        >
          <span>{title}</span>
          <ArrowRight className="w-4 h-4 text-[#E37216] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1 group-hover:translate-x-0" />
        </h3>
      </div>
    </Link>
  );
}
