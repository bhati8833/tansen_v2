'use client';

// src/components/cards/CourseCard.tsx — matches live site card design with floating category icon
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ArrowRight, Music, Sparkles, Palette, Drum } from 'lucide-react';
import type { Course } from '@/data/courses';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Vocal Music': Music,
  'Classical Dance': Sparkles,
  'Western Dance': Sparkles,
  'Fine Arts': Palette,
  'Tabla': Drum,
  'Guitar': Music,
  'Keyboard': Music,
  'Harmonium': Music,
  'Drum': Drum,
};

export function CourseCard({ title, category, image, slug }: Course) {
  const Icon = categoryIcons[title] || categoryIcons[category] || Music;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden group transition-all duration-300 border border-gray-100 flex flex-col justify-between"
      style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 35px rgba(0,0,0,0.12)')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)')
      }
    >
      {/* Image Container */}
      <div className="relative overflow-hidden w-full" style={{ aspectRatio: '3/4' }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />

        {/* Floating Category Icon Badge at bottom center */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md border-2 border-orange-100 flex items-center justify-center">
          <Icon className="w-5 h-5" style={{ color: '#D4952B' }} />
        </div>
      </div>

      {/* Content */}
      <div className="pt-8 pb-6 px-5 text-center flex flex-col items-center flex-grow justify-between">
        <h3
          className="text-lg font-bold mb-3 transition-colors group-hover:text-[#D4952B]"
          style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
        >
          {title}
        </h3>

        {/* Details badges */}
        <div className="space-y-1.5 mb-5 w-full">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 font-medium">
            <Clock className="w-3.5 h-3.5" style={{ color: '#D4952B' }} />
            <span>Duration: 3 Months Onwards</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 font-medium">
            <Users className="w-3.5 h-3.5" style={{ color: '#D4952B' }} />
            <span>Age: 3+</span>
          </div>
        </div>

        {/* Action Link */}
        <Link
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider hover:gap-2.5 transition-all"
          style={{ color: '#D4952B' }}
        >
          <span>LEARN MORE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
