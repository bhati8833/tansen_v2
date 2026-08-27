// src/components/sections/CoursesGrid.tsx — exact layout matching live site
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CourseCard } from '@/components/cards/CourseCard';
import { courses } from '@/data/courses';

export function CoursesGrid() {
  const displayCourses = courses.slice(0, 5);

  return (
    <section className="py-16 bg-white">
      <div className="container-site">
        {/* Section Header — Left aligned title, Right aligned CTA button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#D4952B' }}>
              EXPLORE
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
            >
              Our Popular Courses
            </h2>
          </div>

          <Link
            href="/our-courses"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-bold text-xs tracking-wider border-2 border-gray-800 text-gray-800 transition-all hover:bg-gray-900 hover:text-white self-start md:self-auto"
          >
            <span>VIEW ALL COURSES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards Grid — 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
