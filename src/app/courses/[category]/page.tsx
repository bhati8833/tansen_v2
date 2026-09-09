// src/app/courses/[category]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses, courseCategories, Course } from '@/data/courses';
import { Clock, Award, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';

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
    <div className="min-h-screen bg-white flex flex-col font-roboto text-gray-800">
      {/* Hero Banner */}
      <PageHeader
        breadcrumbs={[{ label: 'Courses', href: '/courses' }, { label: categoryInfo.name }]}
        title={categoryInfo.name}
      />

      {/* Courses in this Category Grid */}
      <section className="py-16 bg-band-warm flex-grow">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCourses.map((course: Course) => (
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
        </div>
      </section>
    </div>
  );
}
