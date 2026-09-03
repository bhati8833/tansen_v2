'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  GraduationCap,
  Music,
  Gift,
  ChevronDown,
  Sparkles,
  MessageSquare,
  Compass,
  Clock,
  Award,
  Users,
  Check,
  ExternalLink,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { siteContent } from '@/data/site-content';

interface ContactClientProps {
  // Pass any initial data if needed
}

export function ContactClient(_props: ContactClientProps) {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [interestedCourse, setInterestedCourse] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [preferredContact, setPreferredContact] = useState<'Phone Call' | 'WhatsApp' | 'Email'>('Phone Call');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First open by default

  const handleQuickEnquire = (type: string, course?: string) => {
    setEnquiryType(type);
    if (course) {
      setInterestedCourse(course);
    }
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!fullName.trim() || !phoneNumber.trim() || !interestedCourse || interestedCourse === 'Select Course' || !consent) {
      setErrorMsg('Please check the highlighted fields and try again.');
      return;
    }

    setIsSubmitting(true);
    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const coursesList = [
    {
      title: 'Classical Vocal Singing',
      description: 'Develop your voice, pitch, rhythm, musical understanding, and expression through structured classical vocal training.',
      href: '/courses/music/classical-vocal-singing',
      icon: '🎤',
    },
    {
      title: 'Kathak',
      description: 'Discover rhythm, graceful movement, expressions, traditional compositions, and storytelling through Kathak.',
      href: '/courses/dance/kathak',
      icon: '💃',
    },
    {
      title: 'Western Dance',
      description: 'Explore movement, rhythm, choreography, coordination, flexibility, and creative expression.',
      href: '/courses/dance/western-dance',
      icon: '🕺',
    },
    {
      title: 'Guitar',
      description: 'Build a strong foundation in guitar through practical training, chords, rhythm, melodies, and music fundamentals.',
      href: '/courses/instruments/guitar',
      icon: '🎸',
    },
    {
      title: 'Keyboard / Piano',
      description: 'Develop musical understanding, hand coordination, rhythm, notes, chords, and playing skills.',
      href: '/courses/instruments/keyboard-piano',
      icon: '🎹',
    },
    {
      title: 'Drums',
      description: 'Develop rhythm, timing, coordination, control, and practical drumming skills.',
      href: '/courses/instruments/drums',
      icon: '🥁',
    },
    {
      title: 'Tabla',
      description: 'Explore Indian classical rhythm through Bols, Taals, Laya, hand coordination, and traditional Tabla practice.',
      href: '/courses/instruments/tabla',
      icon: '🪘',
    },
    {
      title: 'Fine Arts',
      description: 'Explore drawing, sketching, colour, painting, creative composition, and artistic expression.',
      href: '/courses/creative-arts/fine-arts',
      icon: '🎨',
    },
  ];

  const faqs = [
    {
      q: 'How can I enquire about a course?',
      a: 'You can contact the academy by phone, email, WhatsApp, or through the online enquiry form.',
    },
    {
      q: 'Can I book a free demo class?',
      a: 'Yes. Students can enquire about a free demo class before choosing a program.',
    },
    {
      q: 'Can I ask about course fees?',
      a: 'Yes. You can contact the academy to get information about the applicable course fees.',
    },
    {
      q: 'Can I ask about available batches and timings?',
      a: 'Yes. Contact the academy to check current batch availability and class timings.',
    },
    {
      q: 'Which courses can I enquire about?',
      a: 'You can enquire about Classical Vocal Singing, Kathak, Western Dance, Guitar, Keyboard/Piano, Drums, Tabla, Fine Arts, and other available programs.',
    },
    {
      q: 'Can beginners join?',
      a: 'Yes. The academy welcomes beginners as well as students with previous experience.',
    },
    {
      q: 'Can adults enquire about courses?',
      a: 'Yes. Programs are available for different age groups, from children aged 3+ to adults.',
    },
    {
      q: 'How can I visit the academy?',
      a: 'The academy is located at NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002. It is recommended to contact the academy before visiting.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Multiple Learning Options',
      desc: 'Explore music, dance, instruments, and creative arts under one academy.',
      icon: Music,
    },
    {
      title: 'Beginner Friendly',
      desc: 'Courses are designed for beginners as well as learners with previous experience.',
      icon: Users,
    },
    {
      title: 'Free Demo',
      desc: 'Experience a class before deciding on enrolment.',
      icon: Gift,
    },
    {
      title: 'Guidance for Students & Parents',
      desc: 'Get information about courses, batches, schedules, and learning options.',
      icon: Compass,
    },
    {
      title: 'Performance Opportunities',
      desc: 'Students are encouraged to participate in performances, events, and cultural programs.',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto text-gray-800 pb-20 md:pb-0">
      
      {/* 1. BREADCRUMB & 2. HERO SECTION */}
      <section className="relative bg-[#0A101C] text-white py-14 md:py-20 border-b border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4952B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">Contact Us</span>
          </nav>

          {/* Hero Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white tracking-tight leading-tight mb-4">
            Let’s Begin Your Musical &amp; Artistic Journey
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-xl max-w-3xl leading-relaxed mb-8">
            Have a question about our courses, batches, admissions, fees, or demo classes? Our team is here to help you find the right learning opportunity for you or your child.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleQuickEnquire('Free Demo Class')}
              className="px-7 py-3.5 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-full text-sm transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 flex items-center gap-2"
            >
              <Gift className="w-4 h-4" />
              <span>Book Free Demo</span>
            </button>
            <button
              onClick={() => handleQuickEnquire('General Enquiry')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-sm border border-white/20 transition-all active:scale-95 flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#D4952B]" />
              <span>Enquire Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. CONTACT INTRODUCTION */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-site max-w-5xl">
          <div className="bg-orange-50/60 rounded-3xl p-6 sm:p-10 border border-orange-100/80 shadow-2xs">
            <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-2">
              Welcome to Tansen Sangeet Mahavidyalaya
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mb-4">
              We’re Here to Help
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Choosing the right music or dance program is an important first step.
              </p>
              <p>
                Whether you are looking for Classical Vocal Singing, Kathak, Western Dance, Guitar, Keyboard/Piano, Drums, Tabla, or Fine Arts, our team can help you understand the available courses, batches, schedules, and admission process.
              </p>
              <p className="font-semibold text-gray-900">
                Get in touch with Tansen Sangeet Mahavidyalaya and take the first step toward your musical and artistic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT INFORMATION & 6. ENQUIRY FORM (DESKTOP TWO-COLUMN LAYOUT) */}
      <section className="py-16 bg-gray-50 flex-grow" id="contact-main">
        <div className="container-site">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Contact Details & Quick Contact Cards (Lg: col-span-5) */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Section Header */}
              <div>
                <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-2">
                  Direct Reach
                </span>
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-2">
                  Connect With Tansen
                </h2>
                <p className="text-sm text-gray-600">
                  Choose your preferred way to connect with our Gurugram center.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                
                {/* 1. Call Us Card */}
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#D4952B] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-bold text-gray-900 font-poppins text-lg">Call Us</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Speak directly with our team for course, admission, batch, and schedule enquiries.
                      </p>
                      <div className="pt-1 flex flex-col gap-1 text-sm font-semibold text-gray-900">
                        <a href="tel:9818083588" className="hover:text-[#D4952B] transition-colors flex items-center gap-2">
                          <span>9818083588</span>
                        </a>
                        <a href="tel:9871833588" className="hover:text-[#D4952B] transition-colors flex items-center gap-2">
                          <span>9871833588</span>
                        </a>
                      </div>
                      <div className="pt-2">
                        <a
                          href="tel:9818083588"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4952B] hover:bg-[#b8842b] text-white text-xs font-bold rounded-lg transition-colors shadow-2xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Email Us Card */}
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-[#D4952B] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-bold text-gray-900 font-poppins text-lg">Email Us</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Send us your enquiry and our team can provide information about courses, admissions, batches, and other details.
                      </p>
                      <a
                        href="mailto:tansengurugram43@gmail.com"
                        className="inline-block text-sm font-semibold text-gray-900 hover:text-[#D4952B] transition-colors break-all"
                      >
                        tansengurugram43@gmail.com
                      </a>
                      <div className="pt-2">
                        <a
                          href="mailto:tansengurugram43@gmail.com"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors shadow-2xs"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Visit Us Card */}
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#D4952B] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-bold text-gray-900 font-poppins text-lg">Visit Us</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Come and connect with us at our academy.
                      </p>
                      <p className="text-xs font-medium text-gray-800 leading-relaxed bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002
                      </p>
                      <div className="pt-2">
                        <a
                          href="https://maps.google.com/?q=Tansen+Sangeet+Mahavidyalaya+Sector+43+Gurugram"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors shadow-2xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Get Directions</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* 5. QUICK CONTACT CARDS */}
              <div className="pt-4 space-y-4">
                <div>
                  <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-1">
                    Quick Options
                  </span>
                  <h3 className="text-xl font-bold font-poppins text-gray-900">
                    How Can We Help You?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Card 1: Course Enquiry */}
                  <button
                    type="button"
                    onClick={() => handleQuickEnquire('Course Information')}
                    className="p-4 bg-white rounded-xl border border-gray-200 text-left hover:border-[#D4952B] hover:shadow-md transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D4952B] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Music className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">🎵 Course Enquiry</h4>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      Want to know more about a particular music, dance, or creative arts course?
                    </p>
                    <span className="text-xs font-bold text-[#D4952B] group-hover:underline inline-flex items-center gap-1">
                      Enquire About Courses →
                    </span>
                  </button>

                  {/* Card 2: Admission Enquiry */}
                  <button
                    type="button"
                    onClick={() => handleQuickEnquire('Admission')}
                    className="p-4 bg-white rounded-xl border border-gray-200 text-left hover:border-[#D4952B] hover:shadow-md transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#D4952B] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">🎓 Admission Enquiry</h4>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      Looking to join Tansen Sangeet Mahavidyalaya?
                    </p>
                    <span className="text-xs font-bold text-[#D4952B] group-hover:underline inline-flex items-center gap-1">
                      Ask About Admission →
                    </span>
                  </button>

                  {/* Card 3: Batch & Timing */}
                  <button
                    type="button"
                    onClick={() => handleQuickEnquire('Batch & Timings')}
                    className="p-4 bg-white rounded-xl border border-gray-200 text-left hover:border-[#D4952B] hover:shadow-md transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D4952B] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">📅 Batch &amp; Timing</h4>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      Want to know available batch days and class timings?
                    </p>
                    <span className="text-xs font-bold text-[#D4952B] group-hover:underline inline-flex items-center gap-1">
                      Check Available Batches →
                    </span>
                  </button>

                  {/* Card 4: Free Demo Class */}
                  <button
                    type="button"
                    onClick={() => handleQuickEnquire('Free Demo Class')}
                    className="p-4 bg-white rounded-xl border border-gray-200 text-left hover:border-[#D4952B] hover:shadow-md transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Gift className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">🎁 Free Demo Class</h4>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      Experience the learning environment before enrolling.
                    </p>
                    <span className="text-xs font-bold text-[#D4952B] group-hover:underline inline-flex items-center gap-1">
                      Book Free Demo →
                    </span>
                  </button>

                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact / Enquiry Form (Lg: col-span-7) */}
            <div className="lg:col-span-7" id="enquiry-form">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl relative">
                
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-1">
                    Online Form
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mb-2">
                    Send Us Your Enquiry
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fill in the form below and tell us how we can help.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 sm:p-12 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-center shadow-2xs">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 font-poppins text-xl sm:text-2xl mb-3">
                      Enquiry Received!
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
                      Thank you for contacting Tansen Sangeet Mahavidyalaya. Your enquiry has been received. Our team will get in touch with you regarding your request.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setPhoneNumber('');
                        setEmailAddress('');
                        setStudentAge('');
                        setMessage('');
                        setConsent(false);
                      }}
                      className="px-6 py-2.5 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-full text-xs transition-colors shadow-md"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {errorMsg && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-xs sm:text-sm font-medium">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1.5">
                          Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1.5">
                          Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address & Student Age */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1.5">
                          Student Age / Age Group
                        </label>
                        <input
                          type="text"
                          value={studentAge}
                          onChange={(e) => setStudentAge(e.target.value)}
                          placeholder="Enter age or select age group"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Interested Course & Enquiry Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1.5">
                          Interested Course<span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={interestedCourse}
                          onChange={(e) => setInterestedCourse(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all"
                        >
                          <option value="">Select Course</option>
                          <option value="Classical Vocal Singing">Classical Vocal Singing</option>
                          <option value="Kathak">Kathak</option>
                          <option value="Western Dance">Western Dance</option>
                          <option value="Guitar">Guitar</option>
                          <option value="Keyboard / Piano">Keyboard / Piano</option>
                          <option value="Drums">Drums</option>
                          <option value="Tabla">Tabla</option>
                          <option value="Fine Arts">Fine Arts</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-800 mb-1.5">
                          Enquiry Type
                        </label>
                        <select
                          value={enquiryType}
                          onChange={(e) => setEnquiryType(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all"
                        >
                          <option value="">Select Enquiry Type</option>
                          <option value="Course Information">Course Information</option>
                          <option value="Admission">Admission</option>
                          <option value="Batch & Timings">Batch &amp; Timings</option>
                          <option value="Course Fees">Course Fees</option>
                          <option value="Free Demo Class">Free Demo Class</option>
                          <option value="Certification">Certification</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {(['Phone Call', 'WhatsApp', 'Email'] as const).map((method) => (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setPreferredContact(method)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                              preferredContact === method
                                ? 'bg-[#D4952B] text-white border-[#D4952B] shadow-2xs'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <span className={`w-2 h-2 rounded-full ${preferredContact === method ? 'bg-white' : 'bg-gray-400'}`} />
                            <span>{method}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what you would like to know..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Row 6: Consent Checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="consent-check"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 text-[#D4952B] border-gray-300 rounded focus:ring-[#D4952B]"
                      />
                      <label htmlFor="consent-check" className="text-xs text-gray-600 cursor-pointer select-none leading-relaxed">
                        I agree to be contacted by Tansen Sangeet Mahavidyalaya regarding my enquiry.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#D4952B] hover:bg-[#b8842b] disabled:bg-gray-400 text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FREE DEMO CTA */}
      <section className="py-16 bg-[#0A101C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#D4952B]/20 border border-[#D4952B]/40 text-[#D4952B] flex items-center justify-center mx-auto mb-4">
            <Gift className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-white mb-4">
            Experience the Class Before You Enrol
          </h2>
          <div className="space-y-3 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            <p>Not sure which course is right for you?</p>
            <p>
              Book a free demo class and get an opportunity to experience the learning environment and understand how the classes work.
            </p>
            <p className="text-white font-medium">
              Whether you&apos;re interested in music, dance, or creative arts, our team can help you take the right first step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button
              onClick={() => handleQuickEnquire('Free Demo Class')}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-full text-base transition-all shadow-xl hover:shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <Gift className="w-5 h-5" />
              <span>Book Free Demo</span>
            </button>
          </div>
          <p className="text-xs text-gray-400 font-medium">
            No complicated process. Just choose your course and send your enquiry.
          </p>
        </div>
      </section>

      {/* 8. COURSES YOU CAN ENQUIRE ABOUT */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-2">
              Programs Offered
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Explore Our Courses
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              You can enquire about any of our specialized music, dance, and creative arts programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coursesList.map((c, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#D4952B] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2 group-hover:text-[#D4952B] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {c.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4952B] group-hover:underline"
                  >
                    <span>Explore Course</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCATION SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-2">
              Visit Tansen Sangeet Mahavidyalaya
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Our Location
            </h2>
            <p className="text-gray-700 font-semibold text-base sm:text-lg mb-1">
              NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002
            </p>
          </div>

          {/* Map & Location Box */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <div className="w-full h-80 sm:h-96 relative">
              <iframe
                title="Tansen Sushant Lok Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.319349887711!2d77.0782354!3d28.4593452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d4512e022f%3A0xb351aa82413a26fa!2sTansen%20Sangeet%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1689123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 bg-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white font-poppins text-base mb-1">
                  Tansen Sangeet Mahavidyalaya Sector-43 Gurugram
                </h4>
                <p className="text-xs text-gray-400">
                  NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Tansen+Sangeet+Mahavidyalaya+Sector+43+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#D4952B] hover:bg-[#b8842b] text-white text-xs font-bold rounded-full transition-colors flex items-center gap-2 flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OPENING / AVAILABILITY INFORMATION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-4xl">
          <div className="bg-orange-50/50 rounded-3xl p-8 sm:p-10 border border-orange-200/70 shadow-2xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4952B] text-white flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900">
                Plan Your Visit
              </h2>
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              For the best experience, students and parents are encouraged to contact the academy before visiting.
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
                Our team can help you with:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Available courses',
                  'Current batches',
                  'Class timings',
                  'Admission information',
                  'Course fees',
                  'Demo class availability',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-orange-100">
                    <Check className="w-4 h-4 text-[#D4952B] flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 border-t border-orange-200/60">
              <a
                href="tel:9818083588"
                className="px-6 py-3 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-full text-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => handleQuickEnquire('General Enquiry')}
                className="px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-full text-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-[#D4952B]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHY CONTACT TANSEN? */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-2">
              Why Connect With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              One Conversation Can Start Your Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D4952B] shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#D4952B] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-poppins text-base mb-2">
                    {w.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-site max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#D4952B] font-bold text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Contact &amp; Admission FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen ? 'border-[#D4952B] bg-orange-50/20 shadow-sm' : 'border-gray-200 bg-white hover:border-orange-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 font-bold text-gray-900 font-poppins text-base sm:text-lg hover:text-[#D4952B] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'bg-[#D4952B] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-orange-100/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-16 bg-[#0A101C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
            Have a question, looking for the right course, or ready to book your free demo? Get in touch with Tansen Sangeet Mahavidyalaya today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleQuickEnquire('Free Demo Class')}
              className="px-8 py-4 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold rounded-full text-sm transition-all shadow-xl hover:shadow-amber-500/20 active:scale-95 flex items-center gap-2"
            >
              <Gift className="w-4 h-4" />
              <span>Book Free Demo</span>
            </button>
            <a
              href="tel:9818083588"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-sm border border-white/20 transition-all active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4952B]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-2.5 md:hidden shadow-2xl flex items-center justify-around gap-2">
        <a
          href="tel:9818083588"
          className="flex-1 py-2.5 px-3 bg-[#D4952B] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>
        <a
          href={siteContent.site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => handleQuickEnquire('Free Demo Class')}
          className="flex-1 py-2.5 px-3 bg-gray-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
        >
          <Gift className="w-3.5 h-3.5 text-[#D4952B]" />
          <span>Demo</span>
        </button>
      </div>

    </div>
  );
}
