// src/app/courses/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { courses, Course } from '@/data/courses';
import { Search, ChevronRight, Clock, Award, Filter, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto text-gray-800">
      {/* Hero Banner */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20">
        <div className="container-site relative z-10">
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">Courses</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-4">
            Our Performing & <span className="text-[#D4952B]">Creative Arts Courses</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Explore our 8 certified programs categorized across Music & Vocal, Instruments, Dance, and Creative Arts designed for beginners to advanced performers.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-[#D4952B] hidden sm:block flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D4952B] text-white shadow-md'
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
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#D4952B] focus:ring-1 focus:ring-[#D4952B] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container-site">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 max-w-lg mx-auto">
              <p className="text-gray-500 font-medium mb-4">No courses match your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-[#D4952B] font-bold text-sm hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course: Course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#D4952B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-poppins text-gray-900 group-hover:text-[#D4952B] transition-colors mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {course.description}
                    </p>

                    <div className="space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D4952B]" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#D4952B]" />
                        <span>Eligibility: {course.level}</span>
                      </div>
                    </div>

                    <Link
                      href={course.fullSlug}
                      className="w-full py-3 px-4 bg-orange-50 hover:bg-[#D4952B] text-[#D4952B] hover:text-white font-bold rounded-xl text-center text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn"
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
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#0A101C] to-slate-900 text-white p-8 md:p-12 rounded-3xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-2">Not Sure Which Course to Pick?</h3>
            <p className="text-gray-300 text-sm md:text-base">Speak with our counselor for personalized guidance or schedule a free demo session.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-3.5 px-8 rounded-full whitespace-nowrap transition-colors shadow-lg"
          >
            Get Free Counseling
          </Link>
        </div>
      </section>
    </div>
  );
}
