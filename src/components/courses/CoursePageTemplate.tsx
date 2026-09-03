// src/components/courses/CoursePageTemplate.tsx — Unified Course Template adhering to design.md
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DetailedCourseData } from '@/data/course-details';
import { 
  ChevronRight, 
  Clock, 
  Award, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Music, 
  Mic, 
  Users, 
  Calendar, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ArrowRight,
  Flame,
  BookOpen,
  GraduationCap,
  Brush,
  Shapes,
  Palette,
  Layers,
  Sun,
  Eye,
  HelpCircle
} from 'lucide-react';

interface CoursePageTemplateProps {
  data: DetailedCourseData;
}

// Icon mapper for dynamic module icons
const iconMap: Record<string, React.ElementType> = {
  Music,
  Sparkles,
  Clock,
  BookOpen,
  Mic,
  Flame,
  Award,
  Brush,
  Shapes,
  Palette,
  Layers,
  Sun,
  Eye,
  Users
};

export function CoursePageTemplate({ data }: CoursePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Structured Data (JSON-LD Schemas)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": data.locationTitle,
    "description": data.metaDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Tansen Sangeet Mahavidyalaya",
      "sameAs": "https://tansensangeet.com"
    },
    "url": `https://tansensangeet.com/courses/${data.categorySlug}/${data.slug}`,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["In-Person", "Online"],
      "location": {
        "@type": "Place",
        "name": "Tansen Sangeet Mahavidyalaya Gurugram",
        "address": "NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana – 122002"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tansensangeet.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://tansensangeet.com/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.categoryName,
        "item": `https://tansensangeet.com/courses/${data.categorySlug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": data.title,
        "item": `https://tansensangeet.com/courses/${data.categorySlug}/${data.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto text-gray-800">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. BREADCRUMB & 2. HERO SECTION */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4952B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10 max-w-6xl mx-auto px-4">
          {/* Clickable Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/courses" className="hover:underline">Courses</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/courses/${data.categorySlug}`} className="hover:underline">{data.categoryName}</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Desktop Left / Mobile Top: Text Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#D4952B] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {data.categoryName}
                </span>
                <span className="bg-white/10 text-gray-200 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/20">
                  Certified Program
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight">
                {data.locationTitle}
              </h1>

              <p className="text-lg md:text-xl text-[#D4952B] font-semibold font-poppins">
                {data.tagline}
              </p>

              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                {data.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-3.5 px-8 rounded-full transition-colors shadow-lg text-sm"
                >
                  Book Free Demo
                </Link>
                <a
                  href="#contact-form"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-full border border-white/20 transition-colors text-sm"
                >
                  Enquire Now
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-xs text-gray-300 border-t border-white/10 pt-4 mt-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4952B]" />
                  <span>Duration: <strong className="text-white">{data.schedule.weeklyHours}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4952B]" />
                  <span>Eligibility: <strong className="text-white">{data.schedule.ageGroup}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4952B]" />
                  <span>Board: <strong className="text-white">Prayag & Trinity Associated</strong></span>
                </div>
              </div>
            </div>

            {/* Desktop Right / Mobile Bottom: Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src={data.heroImage}
                  alt={data.locationTitle}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold text-[#D4952B] uppercase tracking-wider block mb-1">
                      Tansen Academy Studio
                    </span>
                    <p className="text-sm text-gray-200">
                      Structured learning with experienced faculty & live practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSE INTRODUCTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={data.introImage}
                  alt={data.introTitle}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Text (100-150 words) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block">
                Course Introduction
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 leading-snug">
                {data.introTitle}
              </h2>
              
              {data.introDescription.map((para, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed text-base">
                  {para}
                </p>
              ))}

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-full text-sm transition-colors shadow-sm"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHAT IS [COURSE]? */}
      <section className="py-12 bg-orange-50/40 border-b border-gray-100">
        <div className="container-site max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-orange-100 shadow-2xs flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#D4952B]/10 text-[#D4952B] flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
                {data.whatIsTitle}
              </h2>
              {data.whatIsDescription.map((para, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WILL YOU LEARN? (LEARNING MODULES GRID) */}
      <section className="py-16 bg-gray-50">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Curriculum & Skill Mastery
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              What Will You Learn in {data.title}?
            </h2>
            <p className="text-gray-600 text-base">
              Structured modules designed to build complete technique and musical understanding.
            </p>
          </div>

          {/* Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.learningModules.map((mod, idx) => {
              const IconComp = iconMap[mod.iconName] || Sparkles;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4 group-hover:bg-[#D4952B] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COURSE HIGHLIGHTS */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-site max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Program Benefits & Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900">
              {data.title} Course Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.highlights.map((highlight, idx) => (
              <div key={idx} className="p-4 bg-orange-50/50 rounded-xl border border-orange-100/80 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4952B] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-800">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO CAN JOIN? */}
      <section className="py-16 bg-gray-50">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Target Audience
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Who Can Join {data.title}?
            </h2>
          </div>

          {/* 4 Consistent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.audienceCards.map((aud, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#D4952B]/10 text-[#D4952B] flex items-center justify-center mb-4 font-bold font-poppins text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">{aud.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{aud.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE TANSEN? */}
      <section className="py-16 bg-[#FCF7F1]">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              The Tansen Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Why Choose Tansen Sangeet Mahavidyalaya?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyChooseFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEARNING JOURNEY */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Progressive Learning Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Learning Journey
            </h2>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.learningJourney.map((s, idx) => (
              <div key={idx} className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-[#D4952B] uppercase tracking-wider block mb-2">
                    Step {s.step}
                  </span>
                  <h3 className="font-bold text-gray-900 font-poppins text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. COURSE SCHEDULE & 11. CERTIFICATION */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Schedule Box */}
            <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  Course Schedule
                </h3>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Minimum Weekly Learning:</span>
                    <strong className="text-gray-900">{data.schedule.weeklyHours}</strong>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Class Frequency:</span>
                    <strong className="text-gray-900">{data.schedule.frequency}</strong>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Batch Timings:</span>
                    <strong className="text-gray-900">{data.schedule.batchTimings}</strong>
                  </li>
                  <li className="flex items-center justify-between pb-2">
                    <span className="text-gray-500">Age Group:</span>
                    <strong className="text-gray-900">{data.schedule.ageGroup}</strong>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full py-3.5 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-xl text-center text-sm transition-colors block"
              >
                Enquire About Batches
              </Link>
            </div>

            {/* Certification Box */}
            {data.certification && (
              <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                    {data.certification.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {data.certification.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {data.certification.affiliations.map((aff, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-800 bg-orange-50/60 p-2.5 rounded-lg border border-orange-100">
                        <CheckCircle2 className="w-4 h-4 text-[#D4952B]" />
                        <span>{aff}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-500 text-center">
                  Official Affiliations & Verified Examination Pathways
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 12. GALLERY */}
      {data.galleryImages && data.galleryImages.length > 0 && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container-site max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
                Studio & Learning Moments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900">
                Course Gallery
              </h2>
            </div>

            {/* Desktop 4-col, Mobile 2-col */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {data.galleryImages.map((img, idx) => (
                <div key={idx} className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-gray-100 shadow-2xs group">
                  <Image
                    src={img}
                    alt={`${data.title} gallery image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 13. FAQ SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container-site max-w-4xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#D4952B] bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-orange-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 font-poppins text-base hover:text-[#D4952B] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#D4952B] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-gray-700 text-sm leading-relaxed border-t border-orange-100 bg-orange-50/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4952B] hover:underline"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA & 15. CONTACT / FOOTER BAR */}
      <section id="contact-form" className="py-16 bg-[#0A101C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="container-site max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
              Ready to Begin Your {data.title} Journey?
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Book a free demo class and discover the right learning path for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-4 px-9 rounded-full transition-colors shadow-lg text-base"
              >
                Book Free Demo
              </Link>
              <a
                href="tel:9818083588"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-9 rounded-full border border-white/20 transition-colors text-base"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-200">
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4952B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-1">Call Us</div>
                  <a href="tel:9818083588" className="block text-gray-300 hover:text-[#D4952B] text-xs transition-colors">9818083588</a>
                  <a href="tel:9871833588" className="block text-gray-300 hover:text-[#D4952B] text-xs transition-colors">9871833588</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4952B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-1">Email Us</div>
                  <a href="mailto:tansengurugram43@gmail.com" className="text-gray-300 hover:text-[#D4952B] text-xs transition-colors break-all">
                    tansengurugram43@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4952B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-1">Location</div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana – 122002
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
            <span className="block font-semibold text-gray-300 mb-3 uppercase tracking-wider">Explore Other Performing Arts Courses:</span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link href="/courses/music/classical-vocal-singing" className="hover:text-[#D4952B] transition-colors">Classical Vocal Singing</Link>
              <span>•</span>
              <Link href="/courses/dance/kathak" className="hover:text-[#D4952B] transition-colors">Kathak Classes</Link>
              <span>•</span>
              <Link href="/courses/instruments/tabla" className="hover:text-[#D4952B] transition-colors">Tabla Classes</Link>
              <span>•</span>
              <Link href="/courses/instruments/guitar" className="hover:text-[#D4952B] transition-colors">Guitar Classes</Link>
              <span>•</span>
              <Link href="/courses/instruments/keyboard-piano" className="hover:text-[#D4952B] transition-colors">Keyboard / Piano Classes</Link>
              <span>•</span>
              <Link href="/courses/dance/western-dance" className="hover:text-[#D4952B] transition-colors">Western Dance Classes</Link>
              <span>•</span>
              <Link href="/courses/creative-arts/fine-arts" className="hover:text-[#D4952B] transition-colors">Fine Arts Classes</Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
