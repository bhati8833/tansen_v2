// src/app/courses/[category]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses, courseCategories, Course } from '@/data/courses';
import { ChevronRight, Clock, Award, ArrowRight, Sparkles } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return courseCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: catSlug } = await params;
  const categoryInfo = courseCategories.find((c) => c.slug === catSlug);
  if (!categoryInfo) return {};

  return {
    title: `${categoryInfo.name} Courses | Tansen Sangeet Mahavidyalaya`,
    description: categoryInfo.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: catSlug } = await params;
  const categoryInfo = courseCategories.find((c) => c.slug === catSlug);

  if (!categoryInfo) {
    notFound();
  }

  const categoryCourses = courses.filter((c) => c.categorySlug === catSlug);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto text-gray-800">
      {/* Hero Banner */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20">
        <div className="container-site relative z-10 max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/courses" className="hover:underline">Courses</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{categoryInfo.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Category Overview</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-4">
            {categoryInfo.name} <span className="text-[#D4952B]">Courses</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Courses in this Category Grid */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCourses.map((course: Course) => (
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
        </div>
      </section>
    </div>
  );
}
