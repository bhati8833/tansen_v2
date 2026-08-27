// src/components/sections/CoursesGrid.tsx — exact layout matching live site
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CourseCard } from '@/components/cards/CourseCard';
import { courses } from '@/data/courses';

export function CoursesGrid() {
  const displayCourses = courses;

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container-site">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#D4952B' }}>
              OUR COURSES
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
            >
              Nine Disciplines. Certified Curriculum.
            </h2>
            <p className="text-sm text-gray-600 mt-2 font-medium">
              Duration: 3 Months Onwards (for all courses) &nbsp;|&nbsp; Age: 3+ (for all courses)
            </p>
          </div>
        </div>

        {/* Cards Grid — 3 columns on desktop (9 courses total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
