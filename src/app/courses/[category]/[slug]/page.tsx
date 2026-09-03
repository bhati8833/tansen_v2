// src/app/courses/[category]/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import { detailedCoursesData } from '@/data/course-details';
import { CoursePageTemplate } from '@/components/courses/CoursePageTemplate';

interface CourseDetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    category: course.categorySlug,
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps) {
  const { category: catSlug, slug } = await params;
  const detailedData = detailedCoursesData[slug];
  
  if (detailedData) {
    return {
      title: detailedData.seoTitle,
      description: detailedData.metaDescription,
      openGraph: {
        title: detailedData.seoTitle,
        description: detailedData.metaDescription,
        images: [{ url: detailedData.heroImage, alt: detailedData.title }],
      },
    };
  }

  const course = courses.find((c) => c.categorySlug === catSlug && c.slug === slug);
  if (!course) return {};

  return {
    title: `${course.title} Classes & Certification | Tansen Sangeet Mahavidyalaya`,
    description: course.description,
    openGraph: {
      title: `${course.title} Classes | Tansen Sangeet Mahavidyalaya`,
      description: course.description,
      images: [{ url: course.coverImage || course.image, alt: course.title }],
    },
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { category: catSlug, slug } = await params;
  const detailedData = detailedCoursesData[slug];

  if (detailedData && detailedData.categorySlug === catSlug) {
    return <CoursePageTemplate data={detailedData} />;
  }

  const course = courses.find((c) => c.categorySlug === catSlug && c.slug === slug);
  if (!course) {
    notFound();
  }

  // Fallback template for any course without custom detailed data
  const fallbackData = {
    slug: course.slug,
    categorySlug: course.categorySlug,
    categoryName: course.category,
    title: course.title,
    locationTitle: `${course.title} Classes in Gurugram`,
    tagline: `Master ${course.title} with Structured Training`,
    heroDescription: course.description,
    introTitle: `Learn ${course.title}`,
    introDescription: [
      `Our ${course.title} program offers structured training designed to build strong artistic fundamentals, rhythm comprehension, performance confidence, and formal certification.`
    ],
    whatIsTitle: `What is ${course.title}?`,
    whatIsDescription: [
      `${course.title} training builds technical skill, posture, discipline, and performance excellence.`
    ],
    heroImage: course.image,
    introImage: course.image,
    learningModules: [
      { iconName: 'Music', title: 'Fundamentals & Posture', description: 'Core principles, posture, and foundational exercises.' },
      { iconName: 'Sparkles', title: 'Technique & Rhythm', description: 'Building control, precision, speed, and rhythm synchronization.' },
      { iconName: 'Award', title: 'Performance & Expression', description: 'Stage presentation, repertoire practice, and examination preparation.' }
    ],
    highlights: [
      'Structured Learning',
      'Regular Practice',
      'Skill Development',
      'Creative Expression',
      'Performance Opportunities',
      'Free Demo Class'
    ],
    audienceCards: [
      { title: 'Kids', description: 'Children explore creativity, rhythm, and confidence early.' },
      { title: 'Beginners', description: 'No previous training required. Learn step-by-step from scratch.' },
      { title: 'Experienced Learners', description: 'Refine techniques, speed, advanced repertoire, and exams.' },
      { title: 'Adults', description: 'Pursue your passion or hobby with flexible batch timings.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Step-by-step curriculum and progressive guidance.' },
      { title: 'Student-Focused Guidance', description: 'Personalized attention from experienced faculty.' },
      { title: 'Performance Opportunities', description: 'Stage recitals and annual academy showcases.' },
      { title: 'Free Demo Class', description: 'Experience the class environment before enrolling.' }
    ],
    learningJourney: [
      { step: '01', title: 'Foundation', description: 'Basic principles and posture fundamentals.' },
      { step: '02', title: 'Practice', description: 'Technique drills and rhythm synchronization.' },
      { step: '03', title: 'Skill Development', description: 'Building repertoire, speed, and precision.' },
      { step: '04', title: 'Creative Expression', description: 'Individual style and artistic interpretation.' },
      { step: '05', title: 'Performance', description: 'Stage showcases and diploma examination.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 Hours / Week',
      frequency: 'Regular Batches',
      batchTimings: 'Based on availability',
      ageGroup: '3+ Years to Adults'
    },
    certification: {
      show: true,
      title: 'Certification & Examination Pathways',
      description: 'Opportunities for diploma examinations through Prayag Sangeet Samiti and Trinity College London.',
      affiliations: ['Prayag Sangeet Samiti Affiliated', 'Trinity College London Associated']
    },
    galleryImages: [course.image],
    faqs: [
      { question: `Is ${course.title} suitable for beginners?`, answer: 'Yes! Beginners start from basic fundamentals.' },
      { question: 'What age can students join?', answer: 'Students can join from 3+ years to adults.' },
      { question: 'Is a demo class available?', answer: 'Yes, a free demo class is available.' },
      { question: 'How many hours per week are classes?', answer: 'Minimum 2 hours per week.' }
    ],
    seoTitle: `${course.title} Classes in Gurugram | Tansen Sangeet Mahavidyalaya`,
    metaDescription: course.description
  };

  return <CoursePageTemplate data={fallbackData} />;
}
