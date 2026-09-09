// src/app/courses/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { courses, Course } from '@/data/courses';
import { Search, Clock, Award, Filter, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Music', 'Instruments', 'Dance', 'Creative Arts'];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col font-roboto text-gray-800">
      {/* Hero Banner */}
      <PageHeader
        breadcrumbs={[{ label: 'Courses' }]}
        title="Courses"
      />

      {/* Search & Filter Bar */}
      <section className="py-8 bg-band-warm sticky top-20 z-30 shadow-sm">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-[#E37216] hidden sm:block flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#E37216] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses (e.g. Guitar, Tabla, Kathak)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#E37216] focus:ring-1 focus:ring-[#E37216] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-band-cool flex-grow">
        <div className="container-site">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-card-soft max-w-lg mx-auto">
              <p className="text-gray-500 font-medium mb-4">No courses match your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-[#E37216] font-bold text-sm hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course: Course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card-soft hover:shadow-card-lift transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#E37216] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow text-center items-center">
                    <h3 className="text-xl font-bold font-poppins text-gray-900 group-hover:text-[#E37216] transition-colors mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {course.description}
                    </p>

                    <div className="space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500 mb-6 w-full flex flex-col items-center">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#E37216]" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#E37216]" />
                        <span>Eligibility: {course.level}</span>
                      </div>
                    </div>

                    <Link
                      href={course.fullSlug}
                      className="w-full py-3 px-4 bg-orange-50 hover:bg-[#E37216] text-[#E37216] hover:text-white font-bold rounded-xl text-center text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Explore Course</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-12 bg-band-warm">
        <div className="container-site flex flex-col items-center justify-center gap-6 p-8 md:p-12 rounded-3xl text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-2 text-gray-900">Not Sure Which Course to Pick?</h3>
            <p className="text-gray-600 text-sm md:text-base">Speak with our counselor for personalized guidance or schedule a free demo session.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#E37216] hover:bg-[#c96213] text-white font-bold py-3.5 px-8 rounded-full whitespace-nowrap transition-colors shadow-lg"
          >
            Get Free Counseling
          </Link>
        </div>
      </section>
    </div>
  );
}
