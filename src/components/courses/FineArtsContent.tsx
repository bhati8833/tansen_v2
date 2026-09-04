// src/components/courses/FineArtsContent.tsx
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
  Palette, 
  Brush, 
  Users, 
  Calendar, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ArrowRight,
  Sun,
  Eye,
  Shapes,
  Layers,
  GraduationCap
} from 'lucide-react';

export function FineArtsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      q: "Is Fine Arts suitable for beginners?",
      a: "Yes. Beginners are welcome and do not need previous art training to start learning. Our instructors start with basic lines, shapes, and sketching techniques before moving to complex compositions."
    },
    {
      id: 2,
      q: "What age can students join Fine Arts classes?",
      a: "Tansen Sangeet Mahavidyalaya welcomes learners from 3+ years to adults, with teaching methods adapted according to age, motor skills, and learning ability."
    },
    {
      id: 3,
      q: "What will students learn in Fine Arts?",
      a: "Students learn drawing, sketching, shapes, lines, forms, proportions, colour theory, colour mixing, painting, shading, highlighting, still life, nature, scenery, creative compositions, freehand art, and imaginative art."
    },
    {
      id: 4,
      q: "Do students need to bring their own art materials?",
      a: "Material requirements may vary according to the course level and specific medium being explored. Students and parents can contact our team for complete guidance regarding required sketchbooks, pencils, or paint sets."
    },
    {
      id: 5,
      q: "Can beginners attend a demo class?",
      a: "Yes. A free demo class is available for students and parents who want to experience the learning environment, studio atmosphere, and teaching methodology before enrollment."
    },
    {
      id: 6,
      q: "How many hours per week are classes?",
      a: "Students are required to complete a minimum of 2 hours per week. Exact class timings and batch days depend on batch availability and student schedule."
    }
  ];

  // Structured Data (JSON-LD Schemas)
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Fine Arts Classes in Gurugram",
    "description": "Explore drawing, sketching, colour theory, painting, shading, still life, and creative art in Gurugram with Tansen Sangeet Mahavidyalaya. Book a free demo class today.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Tansen Sangeet Mahavidyalaya",
      "sameAs": "https://tansensangeet.com"
    },
    "url": "https://tansensangeet.com/courses/creative-arts/fine-arts",
    "courseCode": "FA-01",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["In-Person"],
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
        "name": "Creative Arts",
        "item": "https://tansensangeet.com/courses/creative-arts"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Fine Arts",
        "item": "https://tansensangeet.com/courses/creative-arts/fine-arts"
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
            <Link href="/courses/creative-arts" className="hover:underline">Creative Arts</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">Fine Arts</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#D4952B] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Creative Arts
                </span>
                <span className="bg-white/10 text-gray-200 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/20">
                  Certified Program
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight mb-3">
                Fine Arts Classes in Gurugram
              </h1>

              <p className="text-lg md:text-xl text-[#D4952B] font-semibold font-poppins mb-4">
                Explore Creativity Through Art
              </p>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Discover the joy of drawing, sketching, painting, and creative expression with the Fine Arts program at Tansen Sangeet Mahavidyalaya, Gurugram. Our Fine Arts program provides students with a creative and supportive environment where they can explore their imagination, develop artistic skills, and express their ideas through different forms of visual art.
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
                  src="/assets/courses/fine-arts-cover.webp"
                  alt="Fine Arts Classes in Gurugram"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold text-[#D4952B] uppercase tracking-wider block mb-1">Visual Art & Painting Studio</span>
                    <p className="text-sm text-gray-200">Drawing, Sketching, Shading, Colour Theory & Composition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS FINE ARTS? (INTRODUCTION) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/assets/courses/fine-arts-cover.webp"
                  alt="Creative Fine Arts Studio at Tansen Gurugram"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <h3 className="font-bold text-lg font-poppins">Creative Expression & Mastery</h3>
                    <p className="text-xs text-gray-200">Building observation, patience, concentration & artistic style.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block">
                Visual Expression
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 leading-snug">
                What is Fine Arts?
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-base">
                Fine Arts is a form of creative expression that allows students to communicate ideas, imagination, observations, and emotions through visual art.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-base">
                Our Fine Arts program focuses on developing fundamental artistic skills while encouraging students to experiment, explore, and develop their own creative style.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                Students are introduced to <strong>drawing, sketching, colour, painting, composition, shading, and imaginative art</strong> through guided learning and regular practice.
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

      {/* 3. WHAT WILL YOU LEARN IN FINE ARTS? (8 MODULES) */}
      <section className="py-16 bg-gray-50">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Comprehensive Art Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              What Will You Learn in Fine Arts?
            </h2>
            <p className="text-gray-600 text-base">
              Our Fine Arts program covers essential artistic concepts and practical skills that help students develop a strong foundation in visual art.
            </p>
          </div>

          {/* 8 Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Brush className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Drawing & Sketching</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students learn the fundamentals of drawing and sketching while developing hand control, observation, proportion, and attention to detail.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Shapes className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Shapes, Lines & Forms</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students explore different types of lines, shapes, forms, and proportions to understand how 3D objects are represented on paper.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Colour Theory & Mixing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students are introduced to colour wheels, primary/secondary tones, and mixing techniques to create vibrant, custom shades.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Painting & Mediums</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students explore watercolours, poster paints, acrylics, and oil pastels as part of their hands-on creative learning journey.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Shading & Highlighting</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students learn how light, shading gradients, and highlights create realistic depth, dimension, and texture in artwork.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Still Life & Objects</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students practice observing and drawing real-world objects and still-life setups, building precise visual accuracy.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Nature & Scenery</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students explore landscapes, seascapes, trees, and environmental compositions, translating natural observations into art.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-2xs hover:border-orange-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Creative & Freehand Art</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students are encouraged to experiment with freehand and imaginative art, developing confidence and unique artistic expression.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FINE ARTS COURSE HIGHLIGHTS */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-site max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900">
              Fine Arts Course Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Drawing & Sketching Fundamentals",
              "Shapes, Lines & Forms",
              "Understanding Proportions",
              "Colour Theory",
              "Colour Mixing",
              "Painting Techniques",
              "Exploring Different Art Mediums",
              "Shading & Highlighting",
              "Creating Depth & Texture",
              "Still Life Drawing",
              "Object Drawing",
              "Nature & Scenery",
              "Creative Compositions",
              "Freehand Art",
              "Imaginative Art",
              "Developing Individual Style"
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
              Explore → Learn → Practice → Create → Express
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Explore", desc: "Understanding basic artistic concepts, lines, shapes, and visual observations." },
              { step: "02", title: "Learn", desc: "Mastering proportions, colour theory, shading, and medium techniques." },
              { step: "03", title: "Practice", desc: "Guided practice through still life, nature compositions, and object drawings." },
              { step: "04", title: "Create", desc: "Applying techniques to construct original paintings and freehand artwork." },
              { step: "05", title: "Express", desc: "Developing individual creative style and presenting artwork with confidence." }
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

      {/* 6. WHO CAN JOIN FINE ARTS CLASSES? */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              All Learners Welcome
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Who Can Join Fine Arts Classes?
            </h2>
            <p className="text-gray-600 text-base">
              The Fine Arts program is suitable for learners who want to explore drawing, painting, and creative art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                01
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Children</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Young learners can explore their imagination and creativity through drawing, colours, shapes, and fun artistic activities.
              </p>
            </div>

            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                02
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Beginners</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                No previous art experience is required. Students can begin with fundamental concepts and gradually develop their skills.
              </p>
            </div>

            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                03
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Creative Learners</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students who already enjoy drawing, painting, or sketching can use the program to further refine their artistic abilities.
              </p>
            </div>

            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs font-bold font-poppins text-sm">
                04
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Adults & Hobbyists</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Adults can explore Fine Arts as a creative, relaxing, and fulfilling activity while developing serious painting skills.
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
              Why Learn Fine Arts at Tansen Sangeet Mahavidyalaya?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Structured Learning</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students learn fundamental artistic concepts through guided practice, clear feedback, and progressive learning steps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Creative Environment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our learning environment encourages students to experiment, explore new ideas, and express themselves without fear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Focus on Fundamentals</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students build their artistic foundation through drawing, sketching, colour theory, proportion, shading, painting, and composition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Individual Expression</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students are encouraged to develop their own creative ideas and gradually discover their unique artistic style.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Regular Practice</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Consistent practice helps students improve observation, patience, concentration, creativity, and attention to detail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs">
              <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">Free Demo Class</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Students and parents can experience the learning studio and teaching approach through a free demo class before enrolling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. COURSE SCHEDULE & PERFORMANCE OPPORTUNITIES */}
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
                  Fine Arts classes are conducted on a regular basis, with a requirement of a minimum of <strong>2 hours of learning per week</strong>.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  Exact class days and timings may vary depending on the student&apos;s age, batch availability, and course schedule. For current batch timings and fee details, please contact our team.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-orange-200 text-xs font-semibold text-gray-800">
                📞 Call our desk at 9818083588 | 9871833588 for current batch availability.
              </div>
            </div>

            {/* Opportunities Box */}
            <div className="p-8 bg-amber-50/50 rounded-3xl border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-6 shadow-2xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  Performance & Creative Opportunities
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Fine Arts students can develop their creativity through practical artwork, compositions, exhibitions, and guided projects.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  The learning process encourages students to present and express their ideas through visual art while developing confidence in their creative abilities.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200 text-xs font-semibold text-gray-800">
                🎨 Annual Art Exhibitions & Certification Opportunities Available.
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
              Start Your Creative Journey
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              Art gives students the freedom to observe, imagine, create, and express. At Tansen Sangeet Mahavidyalaya, our Fine Arts program helps learners build fundamental artistic skills while encouraging creativity and individual expression.
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
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
