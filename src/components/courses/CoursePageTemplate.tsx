// src/components/courses/CoursePageTemplate.tsx — Unified Course Template adhering to design.md
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DetailedCourseData } from '@/data/course-details';
import { PageHeader } from '@/components/layout/PageHeader';
import {
  Clock, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Music, 
  Mic, 
  Users, 
  Calendar, 
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

  return (
    <div className="min-h-screen bg-white flex flex-col font-roboto text-gray-800">
      
      {/* 1. BREADCRUMB & 2. HERO HEADER */}
      <PageHeader
        breadcrumbs={[
          { label: 'Courses', href: '/courses' },
          { label: data.categoryName, href: `/courses/${data.categorySlug}` },
          { label: data.title },
        ]}
        title={data.locationTitle.replace(' in Gurugram', '')}
      />

      {/* 2. COURSE OVERVIEW (HERO BODY) */}
      <section className="bg-band-warm">
        <div className="container-site max-w-6xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="bg-[#E37216] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {data.categoryName}
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3.5 py-1.5 rounded-full border border-gray-200">
                  Certified Program
                </span>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                {data.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#E37216] hover:bg-[#c96213] text-white font-bold py-3.5 px-8 rounded-full transition-colors shadow-lg text-sm"
                >
                  Book Free Demo
                </Link>
                <Link
                  href="/contact#enquiry-form"
                  className="bg-[#0A101C] hover:bg-gray-800 text-white font-bold py-3.5 px-8 rounded-full border border-gray-300 transition-colors text-sm"
                >
                  Enquire Now
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-xs text-gray-500 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E37216]" />
                  <span>Duration: <strong className="text-gray-900">{data.schedule.weeklyHours}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E37216]" />
                  <span>Eligibility: <strong className="text-gray-900">{data.schedule.ageGroup}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E37216]" />
                  <span>Board: <strong className="text-gray-900">Prayag & Trinity Associated</strong></span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
                <Image
                  src={data.heroImage}
                  alt={data.locationTitle}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold text-[#E37216] uppercase tracking-wider block mb-1">
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
      <section className="py-16 bg-band-cool">
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
              <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block">
                Course Introduction
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900 leading-snug">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E37216] hover:bg-[#c96213] text-white font-bold rounded-full text-sm transition-colors shadow-card-soft"
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
      <section className="py-12 bg-band-warm">
        <div className="container-site max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-orange-100 shadow-card-soft flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#E37216]/10 text-[#E37216] flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-3">
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
      <section className="py-16 bg-band-cool">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block mb-2">
              Curriculum & Skill Mastery
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900 mb-3">
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
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-card-soft hover:border-orange-200 transition-all group text-center flex flex-col items-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#E37216] flex items-center justify-center mb-4 group-hover:bg-[#E37216] group-hover:text-white transition-colors">
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
      <section className="py-16 bg-band-warm">
        <div className="container-site max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block mb-2">
              Program Benefits & Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
              {data.title} Course Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.highlights.map((highlight, idx) => (
              <div key={idx} className="p-4 bg-orange-50/50 rounded-xl border border-orange-100/80 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E37216] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-800">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO CAN JOIN? */}
      <section className="py-16 bg-band-cool">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block mb-2">
              Target Audience
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900 mb-3">
              Who Can Join {data.title}?
            </h2>
          </div>

          {/* 4 Consistent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.audienceCards.map((aud, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-card-soft hover:border-orange-200 transition-colors text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-[#E37216]/10 text-[#C2410C] flex items-center justify-center mb-4 font-bold font-poppins text-sm">
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
      <section className="py-16 bg-band-warm">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block mb-2">
              The Tansen Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900 mb-3">
              Why Choose Tansen Sangeet Mahavidyalaya?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyChooseFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-orange-100 shadow-card-soft text-center flex flex-col items-center">
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEARNING JOURNEY */}
      <section className="py-16 bg-band-cool">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block mb-2">
              Progressive Learning Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900 mb-3">
              Learning Journey
            </h2>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.learningJourney.map((s, idx) => (
              <div key={idx} className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 flex flex-col justify-between text-center items-center">
                <div>
                  <span className="text-xs font-extrabold text-[#C2410C] uppercase tracking-wider block mb-2">
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
      <section className="py-16 bg-band-warm">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Schedule Box */}
            <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-card-soft flex flex-col justify-between text-center items-center">
              <div className="w-full">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E37216] flex items-center justify-center mb-6 mx-auto">
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

              <div className="w-full p-3 bg-gray-50 rounded-xl text-xs text-gray-500 text-center">
                Free demo class recommended before enrolling
              </div>
            </div>

            {/* Certification Box */}
            {data.certification && (
              <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-card-soft flex flex-col justify-between text-center items-center">
                <div className="w-full">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#E37216] flex items-center justify-center mb-6 mx-auto">
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
                        <CheckCircle2 className="w-4 h-4 text-[#E37216]" />
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
        <section className="py-16 bg-band-cool">
          <div className="container-site max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block mb-2">
                Studio & Learning Moments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
                Course Gallery
              </h2>
            </div>

            {/* Desktop 4-col, Mobile 2-col */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {data.galleryImages.map((img, idx) => (
                <div key={idx} className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-gray-100 shadow-card-soft group">
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
      <section className="py-16 bg-band-warm">
        <div className="container-site max-w-4xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C2410C] font-semibold text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-gray-900 mb-3">
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
                    isOpen ? 'border-[#E37216] bg-white shadow-card-soft' : 'border-gray-200 bg-white hover:border-orange-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${idx}`}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 font-poppins text-base hover:text-[#C2410C] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#E37216] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div id={`faq-${idx}`} className="px-5 pb-5 pt-1 text-gray-700 text-sm leading-relaxed border-t border-orange-100 bg-orange-50/20">
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:underline"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
