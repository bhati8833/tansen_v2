// src/components/courses/ClassicalVocalContent.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  GraduationCap
} from 'lucide-react';

export function ClassicalVocalContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      q: "Is Classical Vocal Singing suitable for beginners?",
      a: "Yes. Beginners can start the course without previous musical training. Students begin with the fundamentals of Swar and Alankars and progress gradually according to their learning level."
    },
    {
      id: 2,
      q: "What age can children start Classical Vocal Singing?",
      a: "Students can join from 3+ years, with teaching methods adapted according to their age, concentration span, and learning ability."
    },
    {
      id: 3,
      q: "Will I learn Bollywood songs too?",
      a: "Yes. The Classical Vocal Singing program includes exposure to Bollywood and Light Music along with classical fundamentals, allowing students to apply their vocal skills to popular songs."
    },
    {
      id: 4,
      q: "Do students get stage performance opportunities?",
      a: "Yes. Students are encouraged to participate in stage performances, cultural events, and academy programs to build confidence and stage presence."
    },
    {
      id: 5,
      q: "Is a demo class available?",
      a: "Yes. A free demo class is available for students and parents who want to experience the learning environment and teaching approach before enrollment."
    },
    {
      id: 6,
      q: "How many hours per week are classes?",
      a: "Students are required to complete a minimum of 2 hours of learning per week. Exact batch timings depend on availability and student schedule."
    }
  ];

  // Structured Data (JSON-LD Schemas)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Classical Vocal Singing Classes in Gurugram",
    "description": "Learn Indian Classical Vocal Singing in Gurugram with structured training in Swar, Raga, Taal, Laya, Alankar and voice culture. Book a free demo class today.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Tansen Sangeet Mahavidyalaya",
      "sameAs": "https://tansensangeet.com"
    },
    "url": "https://tansensangeet.com/courses/music/classical-vocal-singing",
    "courseCode": "CVS-01",
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
        "name": "Music & Vocal",
        "item": "https://tansensangeet.com/courses/music"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Classical Vocal Singing",
        "item": "https://tansensangeet.com/courses/music/classical-vocal-singing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
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

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4952B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10 max-w-6xl mx-auto px-4">
          {/* Breadcrumb Trail */}
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/courses" className="hover:underline">Courses</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/courses/music" className="hover:underline">Music & Vocal</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">Classical Vocal Singing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#D4952B] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Music & Vocal
                </span>
                <span className="bg-white/10 text-gray-200 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/20">
                  Certified Program
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight mb-3">
                Classical Vocal Singing Classes in Gurugram
              </h1>

              <p className="text-lg md:text-xl text-[#D4952B] font-semibold font-poppins mb-4">
                Learn Indian Classical Vocal Music with Structured Training
              </p>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Discover the rich and timeless tradition of Indian Classical Vocal Music with structured training at Tansen Sangeet Mahavidyalaya, Gurugram. Our Classical Vocal Singing program is designed for students who want to develop a strong foundation in Indian classical music while improving their voice, pitch, rhythm, musical understanding, and stage confidence.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-3.5 px-8 rounded-full transition-colors shadow-lg text-sm"
                >
                  Book Free Demo Class
                </Link>
                <a
                  href="#contact-form"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-full border border-white/20 transition-colors text-sm"
                >
                  Enquire Now
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-xs text-gray-300 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4952B]" />
                  <span>Duration: <strong className="text-white">Min 2 hrs/week</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4952B]" />
                  <span>Eligibility: <strong className="text-white">Age 3+ to Adults</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4952B]" />
                  <span>Board: <strong className="text-white">Prayag & Trinity Associated</strong></span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative h-[340px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/assets/courses/vocal-cover.webp"
                  alt="Classical Vocal Singing Classes in Gurugram"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold text-[#D4952B] uppercase tracking-wider block mb-1">Authentic Gurukul Tradition</span>
                    <p className="text-sm text-gray-200">Swar, Alankar, Raga, and Voice Culture Training by Veteran Gurus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS CLASSICAL VOCAL SINGING? (INTRODUCTION) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/assets/courses/vocal-inside.webp"
                  alt="Indian Classical Vocal Music Practice Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <h3 className="font-bold text-lg font-poppins">Traditional Vocal Excellence</h3>
                    <p className="text-xs text-gray-200">Developing voice control, pitch accuracy, and musical expression.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block">
                Understanding The Art
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 leading-snug">
                What is Classical Vocal Singing?
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-base">
                Indian Classical Vocal Music is a traditional form of music built around concepts such as <strong>Swar, Raga, Taal, Laya, Aroh, Avroh, and musical expression</strong>.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-base">
                Learning classical vocals helps students understand the fundamentals of music and develop control over their voice, pitch, rhythm, and expression.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                At Tansen Sangeet Mahavidyalaya, students are introduced to these concepts through structured learning and regular practice, providing a solid foundation for both classical and light music forms.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-full text-sm transition-colors shadow-sm"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-full text-sm transition-colors"
                >
                  <span>Learn About Us</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WILL YOU LEARN IN CLASSICAL VOCAL SINGING? */}
      <section className="py-16 bg-gray-50">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Comprehensive Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              What Will You Learn in Classical Vocal Singing?
            </h2>
            <p className="text-gray-600 text-base">
              Our Classical Vocal Singing course covers important fundamentals of Indian classical music along with practical vocal training.
            </p>
          </div>

          {/* 7 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Swar & Alankar</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students are introduced to Sa, Re, Ga, Ma, Pa, Dha, Ni and practice different vocal exercises and Alankars to develop pitch accuracy, voice control, and musical understanding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Raga Introduction</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students learn the basic concepts of Ragas, their characteristics, and how different notes are used to create rich musical expressions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Taal & Laya</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Understanding rhythm is an important part of music. Students are introduced to Taal and Laya and learn to develop a better sense of rhythm and tempo.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Aroh, Avroh & Pakad</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students learn the structure and movement of different Ragas through Aroh, Avroh, and Pakad, helping them understand and perform compositions more effectively.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Mic className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Voice Culture & Control</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                The course includes voice exercises, breathing techniques, and vocal control to help students develop better singing habits and musical expression.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Bollywood & Light Music</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Along with classical fundamentals, students can also explore Bollywood and Light Music, allowing them to apply their vocal skills to different musical styles.
              </p>
            </div>

            {/* Card 7 (Full width on LG) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors md:col-span-2 lg:col-span-3 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D4952B] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-1">Stage Performance & Expression</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Students are encouraged to participate in performances and cultural programs, helping them develop confidence, stage presence, presentation skills, and musical expression.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CLASSICAL VOCAL SINGING COURSE HIGHLIGHTS */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-site max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900">
              Classical Vocal Singing Course Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Indian Classical Music Fundamentals",
              "Swar Practice",
              "Alankar & Vocal Exercises",
              "Introduction to Ragas",
              "Taal & Laya",
              "Aroh, Avroh & Pakad",
              "Voice Culture",
              "Breathing Techniques",
              "Pitch & Rhythm Development",
              "Bollywood & Light Music",
              "Musical Expression",
              "Stage Performance Preparation"
            ].map((highlight, idx) => (
              <div key={idx} className="p-4 bg-orange-50/50 rounded-xl border border-orange-100/80 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4952B] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-800">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEARNING JOURNEY (5-STEP PROCESS) */}
      <section className="py-16 bg-gray-50">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Progressive Learning Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Your 5-Step Learning Journey
            </h2>
            <p className="text-gray-600 text-base">
              A structured progression that builds student confidence and vocal mastery step-by-step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Foundation", desc: "Basic Swar, pitch exercises, and breathing techniques." },
              { step: "02", title: "Practice", desc: "Regular Alankar practice and rhythm (Taal) drills." },
              { step: "03", title: "Skill Development", desc: "Raga structure, Aroh, Avroh, Pakad, and voice control." },
              { step: "04", title: "Musical Expression", desc: "Compositions, Bollywood integration, and Light music." },
              { step: "05", title: "Performance", desc: "Live stage confidence, recital presentation, and certification." }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-[#D4952B] uppercase tracking-wider block mb-2">
                    Step {s.step}
                  </span>
                  <h3 className="font-bold text-gray-900 font-poppins text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO CAN JOIN THIS COURSE? */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              All Learners Welcome
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Who Can Join This Course?
            </h2>
            <p className="text-gray-600 text-base">
              The Classical Vocal Singing program is suitable for children aged 3+ as well as adult learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                01
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Beginners</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                No previous musical training is required. Students can begin with the fundamentals and gradually develop their vocal skills.
              </p>
            </div>

            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                02
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Young Learners</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Children (aged 3+) can explore music through structured practice while developing their musical understanding and confidence.
              </p>
            </div>

            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                03
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Experienced Learners</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students with previous knowledge can continue developing their pitch, voice control, raga understanding, rhythm, and performance skills.
              </p>
            </div>

            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                04
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Adults & Seniors</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Adults can learn classical singing as a fulfilling creative pursuit, hobby, or as part of a more serious musical journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY LEARN AT TANSEN SANGEET MAHAVIDYALAYA? */}
      <section className="py-16 bg-[#FCF7F1]">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              The Tansen Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Why Learn Classical Vocal Singing at Tansen Sangeet Mahavidyalaya?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Structured Learning</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students progress through fundamental concepts and regular practice rather than simply learning individual songs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Student-Focused Guidance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Learning is adapted according to the student&apos;s age, level, concentration, and learning ability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Strong Musical Foundation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students develop their understanding of Swar, Raga, Taal, Laya, and other fundamental concepts of Indian classical music.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Performance Opportunities</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students are encouraged to participate in stage performances, cultural events, and programs to develop confidence and stage presence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs sm:col-span-2 lg:col-span-2">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Free Demo Class Before Enrollment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students and parents can experience the learning environment, faculty methodology, and studio atmosphere through a free demo class before making an enrollment decision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. COURSE DURATION & CERTIFICATION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Schedule Box */}
            <div className="p-8 bg-orange-50/50 rounded-3xl border border-orange-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-6 shadow-2xs">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  Course Duration & Class Schedule
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Classes are conducted on a regular basis, with a requirement of a minimum of <strong>2 hours of learning per week</strong>.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  The exact days and timings may vary depending on the student&apos;s age, selected program, and available batches. For current batch timings and fee details, please contact our team.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-orange-200 text-xs font-semibold text-gray-800">
                📞 Call our desk at 9818083588 | 9871833588 for current batch availability.
              </div>
            </div>

            {/* Certification Box */}
            <div className="p-8 bg-amber-50/50 rounded-3xl border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-6 shadow-2xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  Certification & Examination
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Tansen Sangeet Mahavidyalaya is associated with recognized music and performing arts organizations, including <strong>Prayag Sangeet Samiti</strong> and <strong>Trinity College London</strong>.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  Students interested in pursuing music more seriously can enquire about available diploma, degree, and certification examination opportunities.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200 text-xs font-semibold text-gray-800">
                🎓 Government recognized & internationally accredited diploma pathways available.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. DETAILED FAQ ACCORDION */}
      <section className="py-16 bg-gray-50">
        <div className="container-site max-w-4xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#D4952B] bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-orange-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 font-poppins text-base hover:text-[#D4952B] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#D4952B] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-gray-700 text-sm leading-relaxed border-t border-orange-100 bg-orange-50/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. STRONG CTA & CONTACT DETAILS */}
      <section id="contact-form" className="py-16 bg-[#0A101C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="container-site max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
              Start Your Classical Music Journey
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              Music is not only about singing a song. It is about understanding Swar, rhythm, expression, discipline, and musicality. Begin your journey into Indian Classical Vocal Music with Tansen Sangeet Mahavidyalaya, Gurugram.
            </p>
            <p className="text-[#D4952B] text-xl font-bold font-poppins mb-8">
              Book Your Free Demo Class Today
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-4 px-9 rounded-full transition-colors shadow-lg text-base"
            >
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Contact Info Card */}
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

          {/* Internal Links to Other Courses */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
            <span className="block font-semibold text-gray-300 mb-3 uppercase tracking-wider">Explore Other Performing Arts Courses:</span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
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
