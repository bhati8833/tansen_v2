'use client';

// src/components/sections/CoursesGrid.tsx — 3.5-card horizontal slider with autoplay & arrow controls
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CourseCard } from '@/components/cards/CourseCard';
import { courses } from '@/data/courses';

export function CoursesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth / 3.5;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (direction === 'right') {
        if (container.scrollLeft >= maxScroll - 15) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft <= 15) {
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      }
    }
  }, []);

  // Autoplay auto-sliding every 2.5 seconds
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      scroll('right');
    }, 2500);
    return () => clearInterval(interval);
  }, [paused, scroll]);

  return (
    <section id="courses" className="py-16 bg-band-warm">
      <div className="container-site">
        {/* Section Header — Centered */}
        <div className="text-center mb-10">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-2" style={{ color: '#E37216' }}>
            OUR COURSES
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
          >
            Eight Disciplines. Certified Curriculum.
          </h2>

          {/* Slider Controls — Uniform Arrow Styling */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              aria-label="Previous courses"
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#E37216] hover:text-white hover:border-[#E37216] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next courses"
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#E37216] hover:text-white hover:border-[#E37216] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3.5-Card Horizontal Carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 pt-2 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="snap-start flex-[0_0_85%] sm:flex-[0_0_calc(100%/2.5-14px)] lg:flex-[0_0_calc(100%/3.5-16px)] min-w-0"
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
