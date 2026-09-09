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
import { PageHeader } from '@/components/layout/PageHeader';

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
    <div className="min-h-screen bg-white flex flex-col font-roboto text-gray-800 pb-20 md:pb-0">
      
      {/* 1. BREADCRUMB & 2. HERO SECTION */}
      <PageHeader
        breadcrumbs={[{ label: 'Contact Us' }]}
        title="Contact Us"
      />

      {/* 3. CONTACT INTRODUCTION */}
      <section className="py-12 bg-band-warm">
        <div className="container-site max-w-5xl">
          <div className="bg-orange-50/60 rounded-3xl p-6 sm:p-10 border border-orange-100/80 shadow-card-soft text-center">
            <span className="text-[#C2410C] font-bold text-xs uppercase tracking-widest block mb-2">
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
      <section className="py-16 bg-band-cool flex-grow" id="contact-main">
        <div className="container-site">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 shadow-card-soft h-full flex flex-col">
              
              {/* Section Header */}
              <div className="mb-6 pb-6 border-b border-gray-100 text-center">
                <span className="text-[#C2410C] font-bold text-xs uppercase tracking-widest block mb-2">
                  Direct Reach
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mb-2">
                  Connect With Tansen
                </h2>
                <p className="text-sm text-gray-600">
                  Choose your preferred way to connect with our Gurugram center.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4 flex-grow">
                
                {/* 1. Call Us Card */}
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-card-soft hover:shadow-card-lift transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#E37216] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-bold text-gray-900 font-poppins text-lg">Call Us</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Speak directly with our team for course, admission, batch, and schedule enquiries.
                      </p>
                      <div className="pt-1 flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-gray-900">
                        <a href="tel:9818083588" className="hover:text-[#E37216] transition-colors flex items-center gap-1.5">
                          <span>9818083588</span>
                        </a>
                        <span className="text-gray-300">|</span>
                        <a href="tel:9871833588" className="hover:text-[#E37216] transition-colors flex items-center gap-1.5">
                          <span>9871833588</span>
                        </a>
                      </div>
                      <div className="pt-2">
                        <a
                          href="tel:9818083588"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#E37216] hover:bg-[#c96213] text-white text-xs font-bold rounded-lg transition-colors shadow-2xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Email Us Card */}
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-card-soft hover:shadow-card-lift transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#E37216] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-bold text-gray-900 font-poppins text-lg">Email Us</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Send us your enquiry and our team can provide information about courses, admissions, batches, and other details.
                      </p>
                      <a
                        href="mailto:tansengurugram43@gmail.com"
                        className="inline-block text-sm font-semibold text-gray-900 hover:text-[#E37216] transition-colors break-all"
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
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-card-soft hover:shadow-card-lift transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#E37216] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h3 className="font-bold text-gray-900 font-poppins text-lg">Visit Us</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Come and connect with us at our academy.
                      </p>
                      <p className="text-sm font-medium text-gray-800 leading-relaxed bg-gray-50 p-2.5 rounded-lg border border-gray-100">
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



            </div>

            {/* RIGHT COLUMN: Contact / Enquiry Form */}
            <div id="enquiry-form" className="h-full">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 shadow-card-soft relative h-full flex flex-col">
                
                <div className="mb-6 pb-6 border-b border-gray-100 text-center">
                  <span className="text-[#C2410C] font-bold text-xs uppercase tracking-widest block mb-1">
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
                  <div className="p-8 sm:p-12 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-center shadow-card-soft">
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
                      className="px-6 py-2.5 bg-[#E37216] hover:bg-[#c96213] text-white font-bold rounded-full text-xs transition-colors shadow-md"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E37216] focus:bg-white transition-all"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E37216] focus:bg-white transition-all"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E37216] focus:bg-white transition-all"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E37216] focus:bg-white transition-all"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E37216] focus:bg-white transition-all"
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
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E37216] focus:bg-white transition-all"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E37216] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Row 6: Consent Checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="consent-check"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 text-[#E37216] border-gray-300 rounded focus:ring-[#E37216]"
                      />
                      <label htmlFor="consent-check" className="text-xs text-gray-600 cursor-pointer select-none leading-relaxed">
                        I agree to be contacted by Tansen Sangeet Mahavidyalaya regarding my enquiry.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#E37216] hover:bg-[#c96213] disabled:bg-gray-400 text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 active:scale-[0.99]"
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



      {/* 9. LOCATION SECTION */}
      <section className="py-16 bg-band-warm">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#C2410C] font-bold text-xs uppercase tracking-widest block mb-2">
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
          <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-card-soft border border-gray-200">
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
                className="px-6 py-3 bg-[#E37216] hover:bg-[#c96213] text-white text-xs font-bold rounded-full transition-colors flex items-center gap-2 flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OPENING / AVAILABILITY INFORMATION */}
      <section className="py-16 bg-band-cool">
        <div className="container-site max-w-4xl">
          <div className="bg-orange-50/50 rounded-3xl p-8 sm:p-10 border border-orange-200/70 shadow-card-soft">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#E37216] text-white flex items-center justify-center">
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
                  <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-orange-100 shadow-card-soft">
                    <Check className="w-4 h-4 text-[#E37216] flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 border-t border-orange-200/60">
              <a
                href="tel:9818083588"
                className="px-6 py-3 bg-[#E37216] hover:bg-[#c96213] text-white font-bold rounded-full text-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => handleQuickEnquire('General Enquiry')}
                className="px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-full text-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-[#E37216]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHY CONTACT TANSEN? */}
      <section className="py-16 bg-band-warm">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C2410C] font-bold text-xs uppercase tracking-widest block mb-2">
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
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#E37216] shadow-card-soft hover:shadow-card-lift transition-all text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#E37216] flex items-center justify-center mb-4">
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
      <section className="py-16 bg-band-cool">
        <div className="container-site max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#C2410C] font-bold text-xs uppercase tracking-widest block mb-2">
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
                    isOpen ? 'border-[#E37216] bg-orange-50/20 shadow-card-soft' : 'border-gray-200 bg-white hover:border-orange-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 font-bold text-gray-900 font-poppins text-base sm:text-lg hover:text-[#E37216] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'bg-[#E37216] text-white rotate-180' : 'bg-gray-100 text-gray-600'
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



      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-2.5 md:hidden shadow-2xl flex items-center justify-around gap-2">
        <a
          href="tel:9818083588"
          className="flex-1 py-2.5 px-3 bg-[#E37216] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
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
          <Gift className="w-3.5 h-3.5 text-[#E37216]" />
          <span>Demo</span>
        </button>
      </div>

    </div>
  );
}
