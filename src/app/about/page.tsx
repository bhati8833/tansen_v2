// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { aboutData } from '@/data/about';
import { 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Music, 
  Award, 
  Users, 
  Heart, 
  ShieldCheck, 
  GraduationCap, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Flame,
  Palette,
  Layers,
  Building,
  Target,
  Smile
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Tansen Sangeet Mahavidyalaya',
  description: 'Discover Tansen Sangeet Mahavidyalaya, a premier institution for music, dance, and performing arts education. Unit of Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto text-gray-800">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-24 border-b border-gold-500/20 overflow-hidden">
        {/* Decorative Grid Backdrop */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4952B]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-site relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">About Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{aboutData.unitText}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins text-white tracking-tight leading-tight mb-4">
            {aboutData.title}
          </h1>

          <p className="text-xl md:text-2xl text-[#D4952B] font-semibold font-poppins mb-6">
            {aboutData.tagline}
          </p>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            {aboutData.introParagraphs[0]}
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION & APPROACH */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block">
                Holistic Performing Arts Education
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins leading-snug">
                Nurturing Creativity, Discipline & Confidence Through Art
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {aboutData.introParagraphs[1]}
              </p>

              {/* 5 Core Pillars Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
                {[
                  { title: "Discipline", icon: ShieldCheck },
                  { title: "Concentration", icon: Target },
                  { title: "Creativity", icon: Sparkles },
                  { title: "Confidence", icon: Flame },
                  { title: "Self-Expression", icon: Heart },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="p-3 bg-orange-50/70 border border-orange-100/80 rounded-xl text-center flex flex-col items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#D4952B] mb-1.5" />
                      <span className="text-xs font-bold text-gray-800">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[360px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/assets/courses/vocal-cover.webp"
                  alt="Tansen Sangeet Mahavidyalaya Music Practice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-[#D4952B] text-xs font-bold uppercase tracking-wider mb-1">Empowering Performers</div>
                    <p className="text-sm text-gray-200 leading-snug">Creating a supportive & inspiring atmosphere for artists of all ages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR LEGACY */}
      <section className="py-16 bg-[#FCF7F1]">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Honoring Heritage
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins">
              {aboutData.legacy.title}
            </h2>
            <p className="text-gray-600 mt-2 text-base">
              {aboutData.legacy.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-100 shadow-sm space-y-8">
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              {aboutData.legacy.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              {/* Founder Sons */}
              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                <h3 className="text-lg font-bold text-gray-900 font-poppins mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#D4952B]" />
                  Guidance & Leadership
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.legacy.founders.map((name, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-white border border-orange-200 text-gray-800 text-sm font-semibold rounded-lg shadow-2xs">
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Supporting Management Team */}
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                <h3 className="text-lg font-bold text-gray-900 font-poppins mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#D4952B]" />
                  Dedicated Management Team
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.legacy.team.map((name, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-white border border-amber-200 text-gray-800 text-sm font-semibold rounded-lg shadow-2xs">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-[#0A101C] to-[#162136] text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4952B]/10 rounded-full blur-2xl" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#D4952B]/20 border border-[#D4952B]/40 flex items-center justify-center text-[#D4952B] mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white mb-6">
                  {aboutData.vision.title}
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                  {aboutData.vision.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-[#D4952B] font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Nurturing Lifelong Passion For Performing Arts</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#D4952B] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mb-3">
                  {aboutData.mission.title}
                </h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base font-medium">
                  {aboutData.mission.subtitle}
                </p>

                <ul className="space-y-3">
                  {aboutData.mission.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#D4952B] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. LEARN. PRACTICE. PERFORM. */}
      <section className="py-16 bg-gray-50 border-y border-gray-200/60">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins">
              {aboutData.philosophy.title}
            </h2>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              At Tansen Sangeet Mahavidyalaya, learning is not limited to theoretical knowledge. Consistent practice and real performance experience are essential parts of an artist&apos;s journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                step: "01",
                title: "Learn",
                icon: BookOpen,
                desc: "Gain structured theoretical knowledge, technical foundation, and personalized guidance from expert mentors."
              },
              {
                step: "02",
                title: "Practice",
                icon: Layers,
                desc: "Develop discipline, precision, and stroke/vocal consistency through regular dedicated practice routines."
              },
              {
                step: "03",
                title: "Perform",
                icon: Award,
                desc: "Overcome stage hesitation, build confidence, and experience the pure joy of performing in front of live audiences."
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group">
                  <div className="text-4xl font-extrabold text-orange-200/70 font-poppins absolute top-6 right-6 group-hover:text-[#D4952B]/30 transition-colors">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#D4952B] flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center max-w-3xl mx-auto shadow-2xs">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {aboutData.philosophy.paragraphs[2]}
            </p>
          </div>
        </div>
      </section>

      {/* 6. OUR COURSES */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Comprehensive Curriculum
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">
              {aboutData.courses.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {aboutData.courses.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {aboutData.courses.categories.map((cat, idx) => {
              const iconMap: Record<string, any> = {
                Music: Music,
                Dance: Flame,
                "Creative Arts": Palette
              };
              const IconComp = iconMap[cat.category] || Music;

              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">{cat.category}</h3>
                  </div>

                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium py-1.5 border-b border-gray-50 last:border-0">
                        <CheckCircle2 className="w-4 h-4 text-[#D4952B] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="p-6 bg-orange-50/60 rounded-2xl border border-orange-100 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
            <Smile className="w-5 h-5 text-[#D4952B] flex-shrink-0" />
            <p className="text-sm font-medium text-gray-800">
              {aboutData.courses.note}
            </p>
          </div>
        </div>
      </section>

      {/* 7. A LEARNING ENVIRONMENT FOR EVERY AGE */}
      <section className="py-16 bg-[#FCF7F1]">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Inclusive Learning
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">
              {aboutData.learningForEveryAge.title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We believe there is no fixed age for learning music or performing arts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-amber-100 text-[#D4952B] text-xs font-bold rounded-full mb-4">
                  Ages 3+ to Young Learners
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3">
                  For Young Minds & Children
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  For young learners, music and dance can encourage creativity, coordination, concentration, and confidence in a fun and supportive environment.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-medium text-gray-700 bg-orange-50/50 p-4 rounded-xl">
                <li className="flex items-center gap-2">✓ Enhances memory & cognitive skills</li>
                <li className="flex items-center gap-2">✓ Builds motor coordination & rhythm</li>
                <li className="flex items-center gap-2">✓ Encourages joyful self-expression</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-amber-100 text-[#D4952B] text-xs font-bold rounded-full mb-4">
                  Teens, Adults & Seniors
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3">
                  For Adults & Experienced Learners
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  For older students and adults, learning can become a fulfilling creative pursuit, a way to develop existing skills, or a serious step towards performing arts.
                </p>
              </div>
              <ul className="space-y-2 text-xs font-medium text-gray-700 bg-orange-50/50 p-4 rounded-xl">
                <li className="flex items-center gap-2">✓ Flexible learning pace for busy routines</li>
                <li className="flex items-center gap-2">✓ Stress relief & creative fulfillment</li>
                <li className="flex items-center gap-2">✓ Structured diploma & degree pathways</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STUDENT-FOCUSED LEARNING (METHODOLOGY STAGES) */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Structured Methodology
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins mb-3">
              {aboutData.studentFocused.title}
            </h2>
            <p className="text-gray-600 text-base">
              {aboutData.studentFocused.description}
            </p>
          </div>

          {/* 5-Step Process Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {aboutData.studentFocused.steps.map((s, idx) => (
              <div key={idx} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors flex flex-col justify-between">
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

          <div className="text-center text-sm font-semibold text-gray-700 bg-amber-50/60 p-4 rounded-xl border border-amber-100 max-w-2xl mx-auto">
            {aboutData.studentFocused.conclusion}
          </div>
        </div>
      </section>

      {/* 9. TRADITION & MODERNITY */}
      <section className="py-16 bg-gray-50 border-t border-gray-200/60">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
                Heritage & Innovation
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins mb-6">
                {aboutData.traditionAndModernity.title}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                {aboutData.traditionAndModernity.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#D4952B] flex items-center justify-center mb-3">
                  <Music className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 font-poppins text-base mb-2">Indian Classical</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Deep immersion in Classical Music, Kathak, and Tabla rooted in centuries-old traditions.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D4952B] flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 font-poppins text-base mb-2">Modern & Western</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Contemporary training in Western Dance, Guitar, Piano, Drums, and Fine Arts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PERFORMANCE & RECOGNIZED CERTIFICATIONS */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Performance Card */}
            <div className="p-8 bg-orange-50/50 rounded-3xl border border-orange-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-6 shadow-2xs">
                  <Flame className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  {aboutData.performanceConfidence.title}
                </h2>
                <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {aboutData.performanceConfidence.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-8 bg-amber-50/50 rounded-3xl border border-amber-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-6 shadow-2xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  {aboutData.certifications.title}
                </h2>
                <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  {aboutData.certifications.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="space-y-2">
                  {aboutData.certifications.affiliationsList.map((aff, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-amber-200/60 flex items-center gap-3 text-xs">
                      <Award className="w-4 h-4 text-[#D4952B] flex-shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900">{aff.name}</span> — <span className="text-gray-600">{aff.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. WHY CHOOSE US? */}
      <section className="py-16 bg-[#FCF7F1]">
        <div className="container-site max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              Key Highlights
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins">
              Why Choose Tansen Sangeet Mahavidyalaya?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-amber-100 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D4952B] flex items-center justify-center mb-4">
                    <Star className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OUR COMMITMENT */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-site max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
            Our Promise To Every Student
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins mb-6">
            {aboutData.commitment.title}
          </h2>
          
          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            {aboutData.commitment.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl border border-amber-200/80 shadow-xs relative">
            <p className="text-xl md:text-2xl font-bold text-[#D4952B] font-poppins italic">
              &ldquo;{aboutData.commitment.quote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 13. CALL TO ACTION & CONTACT DETAILS */}
      <section className="py-16 bg-[#0A101C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="container-site max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
              {aboutData.contactInfo.title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              {aboutData.contactInfo.subtitle}
            </p>
            <p className="text-[#D4952B] text-lg font-semibold font-poppins mb-8">
              {aboutData.contactInfo.callout}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-4 px-9 rounded-full transition-colors shadow-lg hover:shadow-xl text-base"
            >
              <span>{aboutData.contactInfo.ctaButtonText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Branch Contact Details Card */}
          <div className="mt-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold font-poppins text-[#D4952B] mb-6 text-center border-b border-white/10 pb-4">
              {aboutData.contactInfo.branchName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-200">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4952B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-1">Address</div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {aboutData.contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4952B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-1">Call Us</div>
                  <div className="space-y-1">
                    {aboutData.contactInfo.phones.map((ph, idx) => (
                      <a key={idx} href={`tel:${ph}`} className="block text-gray-300 hover:text-[#D4952B] text-xs transition-colors">
                        {ph}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4952B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white mb-1">Email Us</div>
                  <a 
                    href={`mailto:${aboutData.contactInfo.email}`} 
                    className="text-gray-300 hover:text-[#D4952B] text-xs transition-colors break-all"
                  >
                    {aboutData.contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
