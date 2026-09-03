// src/app/terms/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  FileText,
  ShieldCheck,
  Building2,
  Lock,
  UserCheck,
  BookOpen,
  Gift,
  CheckCircle,
  CreditCard,
  Calendar,
  HeartHandshake,
  AlertTriangle,
  Scale,
  Globe,
  Info,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { siteContent } from '@/data/site-content';

export const metadata: Metadata = {
  title: 'Terms of Service | Tansen Sangeet Mahavidyalaya',
  description:
    'Official Terms of Service for Tansen Sangeet Mahavidyalaya. Learn about our website terms, course enquiries, demo classes, admissions, and student guidelines.',
  alternates: {
    canonical: 'https://tansensangeetgurugram.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Tansen Sangeet Mahavidyalaya',
    description:
      'Official Terms of Service governing website use, course enquiries, demo classes, admissions, and student guidelines at Tansen Sangeet Mahavidyalaya.',
    url: 'https://tansensangeetgurugram.com/terms',
    siteName: 'Tansen Sangeet Mahavidyalaya',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TermsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tansensangeetgurugram.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Terms of Service',
        item: 'https://tansensangeetgurugram.com/terms',
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    description:
      'Terms of Service governing the use of the Tansen Sangeet Mahavidyalaya website, course enquiries, demo classes, and admissions.',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Tansen Sangeet Mahavidyalaya',
    },
  };

  const sections = [
    { id: 'sec-1', title: '1. About Tansen Sangeet Mahavidyalaya' },
    { id: 'sec-2', title: '2. Use of This Website' },
    { id: 'sec-3', title: '3. Eligibility' },
    { id: 'sec-4', title: '4. Course Information' },
    { id: 'sec-5', title: '5. Free Demo Classes and Enquiries' },
    { id: 'sec-6', title: '6. Admissions and Registration' },
    { id: 'sec-7', title: '7. Fees and Payments' },
    { id: 'sec-8', title: '8. Class Schedules and Changes' },
    { id: 'sec-9', title: '9. Student and Parent/Guardian Responsibilities' },
    { id: 'sec-10', title: '10. Participation and Conduct' },
    { id: 'sec-11', title: '11. Intellectual Property' },
    { id: 'sec-12', title: '12. Website Content and Accuracy' },
    { id: 'sec-13', title: '13. Third-Party Websites and Services' },
    { id: 'sec-14', title: '14. Privacy and Personal Information' },
    { id: 'sec-15', title: '15. Website Availability' },
    { id: 'sec-16', title: '16. Limitation of Liability' },
    { id: 'sec-17', title: '17. Prohibited Activities' },
    { id: 'sec-18', title: '18. Suspension or Termination' },
    { id: 'sec-19', title: '19. Changes to These Terms' },
    { id: 'sec-20', title: '20. Governing Law and Jurisdiction' },
    { id: 'sec-21', title: '21. Contact Us' },
    { id: 'sec-22', title: '22. Related Policies' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="min-h-screen bg-gray-50 flex flex-col font-roboto text-gray-800">
        
        {/* 1. HERO BANNER */}
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
              <span className="text-gray-300">Terms of Service</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-bold uppercase tracking-widest mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>LEGAL POLICIES &amp; GOVERNANCE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight mb-4">
              Terms of Service
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Last Updated: <span className="text-white font-semibold">September 3, 2026</span>
            </p>
          </div>
        </section>

        {/* PREAMBLE NOTICE */}
        <section className="py-8 bg-amber-50/70 border-b border-amber-100">
          <div className="container-site max-w-5xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D4952B] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-gray-800 text-sm sm:text-base leading-relaxed">
                <p>
                  Welcome to the official website of <strong>Tansen Sangeet Mahavidyalaya</strong>. These Terms of Service (&quot;Terms&quot;) govern your use of our website, information available through the website, course enquiries, demo-class requests, and other services or interactions provided through this website.
                </p>
                <p className="font-semibold text-gray-900">
                  By accessing or using this website, you agree to these Terms. If you do not agree with any part of these Terms, please do not use the website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT AREA: TWO-COLUMN LAYOUT WITH QUICK INDEX */}
        <section className="py-14 bg-white flex-grow">
          <div className="container-site max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* SIDEBAR QUICK INDEX (LG: COL-SPAN-4 STICKY) */}
              <div className="lg:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 sticky top-24 space-y-4 max-h-[80vh] overflow-y-auto hidden lg:block">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
                  <BookOpen className="w-4 h-4 text-[#D4952B]" />
                  <h3 className="font-bold text-gray-900 font-poppins text-xs uppercase tracking-wider">
                    Table of Contents
                  </h3>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="block py-1 px-2 rounded-lg hover:bg-orange-100/60 hover:text-[#D4952B] transition-colors line-clamp-1"
                      >
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MAIN DOCUMENT BODY (LG: COL-SPAN-8) */}
              <div className="lg:col-span-8 space-y-12 text-gray-700 text-sm sm:text-base leading-relaxed">
                
                {/* 1. About Tansen Sangeet Mahavidyalaya */}
                <article id="sec-1" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Building2 className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      1. About Tansen Sangeet Mahavidyalaya
                    </h2>
                  </div>
                  <p>
                    Tansen Sangeet Mahavidyalaya is a unit of <strong>Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.</strong> The institution provides learning opportunities in music, dance, fine arts, and other performing arts.
                  </p>
                  <p>
                    Our courses may include Classical Vocal Singing, Kathak, Western Dance, Guitar, Drums, Keyboard/Piano, Tabla, and Fine Arts.
                  </p>
                  <p>
                    Course availability, schedules, batches, and other details may vary from time to time.
                  </p>
                </article>

                {/* 2. Use of This Website */}
                <article id="sec-2" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      2. Use of This Website
                    </h2>
                  </div>
                  <p>
                    This website is intended to provide information about Tansen Sangeet Mahavidyalaya, its courses, learning opportunities, contact information, demo sessions, and admission-related enquiries.
                  </p>
                  <p className="font-semibold text-gray-900">
                    You agree to use this website only for lawful purposes and in a manner that does not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Violate any applicable law or regulation.</li>
                    <li>Interfere with the normal operation of the website.</li>
                    <li>Attempt to gain unauthorized access to the website or its systems.</li>
                    <li>Misuse enquiry or contact forms.</li>
                    <li>Submit false, misleading, abusive, or fraudulent information.</li>
                    <li>Copy, reproduce, modify, or distribute website content without permission.</li>
                  </ul>
                </article>

                {/* 3. Eligibility */}
                <article id="sec-3" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <UserCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      3. Eligibility
                    </h2>
                  </div>
                  <p>
                    The website may be used by students, parents or guardians, prospective students, and other visitors interested in learning about our courses and services.
                  </p>
                  <p>
                    For students who are minors, parents or legal guardians may be responsible for submitting enquiries, completing admission-related processes, and providing required information.
                  </p>
                  <p>
                    The institution may request appropriate information before confirming admission or participation in a course or activity.
                  </p>
                </article>

                {/* 4. Course Information */}
                <article id="sec-4" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <BookOpen className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      4. Course Information
                    </h2>
                  </div>
                  <p>
                    We make reasonable efforts to keep course descriptions and other information on the website accurate and useful.
                  </p>
                  <p>
                    However, course content, availability, batch structure, schedules, instructors, learning activities, and other details may change when required.
                  </p>
                  <p>
                    Information displayed on the website should not be considered a guarantee that a particular course, batch, instructor, timing, or activity will always be available.
                  </p>
                  <p className="font-medium text-[#D4952B]">
                    For the latest information regarding admissions, fees, schedules, and availability, please contact Tansen Sangeet Mahavidyalaya directly.
                  </p>
                </article>

                {/* 5. Free Demo Classes and Enquiries */}
                <article id="sec-5" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Gift className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      5. Free Demo Classes and Enquiries
                    </h2>
                  </div>
                  <p>
                    The website may provide an option to request a free demo class or submit a course enquiry.
                  </p>
                  <p>
                    Submitting a demo or enquiry form does not automatically confirm admission, enrollment, or a particular class schedule.
                  </p>
                  <p>
                    A member of the institution may contact you to discuss available courses, batches, schedules, and other relevant information.
                  </p>
                  <p>
                    Demo availability may depend on course availability, batch schedules, and other operational factors.
                  </p>
                </article>

                {/* 6. Admissions and Registration */}
                <article id="sec-6" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      6. Admissions and Registration
                    </h2>
                  </div>
                  <p>
                    Submitting an enquiry or expressing interest in a course does not constitute confirmed admission.
                  </p>
                  <p>
                    Admission or enrollment is subject to the applicable admission process and availability of the relevant course or batch.
                  </p>
                  <p>
                    The institution reserves the right to request additional information or documentation where reasonably required for admission or registration.
                  </p>
                </article>

                {/* 7. Fees and Payments */}
                <article id="sec-7" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <CreditCard className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      7. Fees and Payments
                    </h2>
                  </div>
                  <p>
                    Applicable course fees, payment schedules, and other financial terms will be communicated by the institution through the appropriate admission or enquiry process.
                  </p>
                  <p>
                    Because course fees and payment arrangements may vary, visitors should confirm the applicable fees and payment terms directly with Tansen Sangeet Mahavidyalaya before making any payment.
                  </p>
                  <p>
                    Any refund, cancellation, transfer, or fee-adjustment policy applicable to a particular course or enrollment will be communicated according to the institution&apos;s applicable policy.
                  </p>
                </article>

                {/* 8. Class Schedules and Changes */}
                <article id="sec-8" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      8. Class Schedules and Changes
                    </h2>
                  </div>
                  <p>
                    Class schedules and timings may vary depending on course, batch, age group, instructor availability, and other operational requirements.
                  </p>
                  <p>
                    The institution may change, reschedule, combine, or discontinue a class or batch when reasonably necessary.
                  </p>
                  <p>
                    Where applicable, students or parents will be informed about significant schedule changes through the contact information provided during enquiry or admission.
                  </p>
                </article>

                {/* 9. Student and Parent/Guardian Responsibilities */}
                <article id="sec-9" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <HeartHandshake className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      9. Student and Parent/Guardian Responsibilities
                    </h2>
                  </div>
                  <p>
                    Students are expected to participate responsibly and respectfully in classes and related activities.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Students and parents/guardians should:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide accurate information during enquiry or admission.</li>
                    <li>Follow applicable class and institutional guidelines.</li>
                    <li>Respect instructors, staff, and other students.</li>
                    <li>Attend classes according to the applicable schedule.</li>
                    <li>Follow reasonable instructions relating to classroom activities and safety.</li>
                    <li>Inform the institution when important circumstances may affect attendance or participation.</li>
                  </ul>
                  <p>
                    Parents or guardians may be responsible for supervising younger students before and after classes as appropriate.
                  </p>
                </article>

                {/* 10. Participation and Conduct */}
                <article id="sec-10" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      10. Participation and Conduct
                    </h2>
                  </div>
                  <p>
                    Tansen Sangeet Mahavidyalaya aims to maintain a positive, respectful, and supportive learning environment.
                  </p>
                  <p>
                    Any behavior that materially disrupts classes, threatens or harasses others, damages property, or otherwise violates applicable institutional rules may result in appropriate action.
                  </p>
                  <p>
                    The institution may take reasonable steps to protect students, instructors, staff, and property.
                  </p>
                </article>

                {/* 11. Intellectual Property */}
                <article id="sec-11" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Lock className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      11. Intellectual Property
                    </h2>
                  </div>
                  <p>
                    Unless otherwise stated, the website and its content—including text, graphics, logos, photographs, design elements, page layouts, and other materials—are owned by or used with permission by Tansen Sangeet Mahavidyalaya or its relevant rights holders.
                  </p>
                  <p>
                    You may access and use the website for personal and informational purposes.
                  </p>
                  <p>
                    You must not reproduce, republish, modify, distribute, sell, publicly display, or commercially exploit website content without prior written permission, except where permitted by applicable law.
                  </p>
                </article>

                {/* 12. Website Content and Accuracy */}
                <article id="sec-12" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <FileText className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      12. Website Content and Accuracy
                    </h2>
                  </div>
                  <p>
                    We aim to provide useful and current information on the website. However, information may occasionally contain errors, omissions, outdated details, or changes that have not yet been reflected online.
                  </p>
                  <p>
                    Tansen Sangeet Mahavidyalaya reserves the right to correct, update, modify, or remove website content at any time.
                  </p>
                  <p>
                    For important decisions relating to admissions, fees, schedules, course availability, or other commitments, please confirm the information directly with the institution.
                  </p>
                </article>

                {/* 13. Third-Party Websites and Services */}
                <article id="sec-13" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      13. Third-Party Websites and Services
                    </h2>
                  </div>
                  <p>
                    The website may contain links or references to third-party websites, platforms, maps, social media profiles, or other external services.
                  </p>
                  <p>
                    Such third-party websites are operated independently and may have their own terms and privacy policies.
                  </p>
                  <p>
                    Tansen Sangeet Mahavidyalaya is not responsible for the availability, content, security, or policies of third-party websites.
                  </p>
                </article>

                {/* 14. Privacy and Personal Information */}
                <article id="sec-14" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      14. Privacy and Personal Information
                    </h2>
                  </div>
                  <p>
                    When you submit information through our website, such as your name, phone number, email address, student information, course interest, or enquiry details, the information may be used to respond to your enquiry and provide relevant admission or course information.
                  </p>
                  <p>
                    For information about how personal information is collected, used, stored, or handled, please refer to our Privacy Policy.
                  </p>
                </article>

                {/* 15. Website Availability */}
                <article id="sec-15" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      15. Website Availability
                    </h2>
                  </div>
                  <p>
                    We aim to keep the website available and functioning properly, but uninterrupted availability cannot be guaranteed.
                  </p>
                  <p>
                    The website may occasionally be unavailable due to maintenance, technical problems, hosting issues, updates, security measures, or circumstances beyond our reasonable control.
                  </p>
                </article>

                {/* 16. Limitation of Liability */}
                <article id="sec-16" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      16. Limitation of Liability
                    </h2>
                  </div>
                  <p>
                    To the extent permitted by applicable law, Tansen Sangeet Mahavidyalaya shall not be responsible for losses or damages arising solely from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Temporary website unavailability.</li>
                    <li>Reliance on outdated or incomplete website information.</li>
                    <li>Third-party websites or services.</li>
                    <li>Technical interruptions outside our reasonable control.</li>
                    <li>Unauthorized use of the website by a visitor.</li>
                  </ul>
                  <p>
                    Nothing in these Terms is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law.
                  </p>
                </article>

                {/* 17. Prohibited Activities */}
                <article id="sec-17" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      17. Prohibited Activities
                    </h2>
                  </div>
                  <p className="font-semibold text-gray-900">
                    You must not use the website to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Submit intentionally false information.</li>
                    <li>Attempt unauthorized access to website systems.</li>
                    <li>Introduce malicious code, viruses, or harmful software.</li>
                    <li>Interfere with website security or functionality.</li>
                    <li>Scrape, copy, or reproduce website content for unauthorized commercial use.</li>
                    <li>Abuse, harass, threaten, or impersonate another person.</li>
                    <li>Use enquiry forms for spam or unlawful purposes.</li>
                  </ul>
                </article>

                {/* 18. Suspension or Termination */}
                <article id="sec-18" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      18. Suspension or Termination
                    </h2>
                  </div>
                  <p>
                    We may restrict or suspend access to the website where reasonably necessary, including in response to misuse, security concerns, unlawful activity, or technical requirements.
                  </p>
                  <p>
                    Where a user&apos;s conduct materially violates applicable institutional rules, appropriate action may also be taken in relation to their participation in institutional activities, subject to applicable policies and law.
                  </p>
                </article>

                {/* 19. Changes to These Terms */}
                <article id="sec-19" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      19. Changes to These Terms
                    </h2>
                  </div>
                  <p>
                    Tansen Sangeet Mahavidyalaya may update these Terms from time to time to reflect changes in the website, services, operational practices, or applicable legal requirements.
                  </p>
                  <p>
                    The updated version will be published on this page with a revised &quot;Last Updated&quot; date.
                  </p>
                  <p>
                    Your continued use of the website after an updated version is published constitutes acceptance of the updated Terms, to the extent permitted by applicable law.
                  </p>
                </article>

                {/* 20. Governing Law and Jurisdiction */}
                <article id="sec-20" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Scale className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      20. Governing Law and Jurisdiction
                    </h2>
                  </div>
                  <p>
                    These Terms shall be governed by the laws applicable in India.
                  </p>
                  <p>
                    Any dispute arising in connection with these Terms or use of the website shall be subject to the jurisdiction of the competent courts having jurisdiction over the relevant matter and location, subject to applicable law.
                  </p>
                </article>

                {/* 21. Contact Us */}
                <article id="sec-21" className="scroll-mt-28 space-y-4 p-6 sm:p-8 bg-orange-50/60 rounded-3xl border border-orange-200/80">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      21. Contact Us
                    </h2>
                  </div>
                  <p>
                    If you have questions regarding these Terms of Service, website use, courses, admissions, or related matters, you can contact us:
                  </p>

                  <div className="space-y-3 bg-white p-5 rounded-2xl border border-orange-100 text-sm">
                    <p className="font-bold text-gray-900 font-poppins text-base">
                      Tansen Sangeet Mahavidyalaya
                    </p>
                    <div className="flex items-start gap-2.5 text-gray-700">
                      <MapPin className="w-4 h-4 text-[#D4952B] flex-shrink-0 mt-0.5" />
                      <span>{siteContent.footer.contact.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-700">
                      <Phone className="w-4 h-4 text-[#D4952B] flex-shrink-0" />
                      <span>Phone: 9818083588 / 9871833588</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-700">
                      <Mail className="w-4 h-4 text-[#D4952B] flex-shrink-0" />
                      <a href={`mailto:${siteContent.footer.contact.email}`} className="hover:text-[#D4952B] underline">
                        {siteContent.footer.contact.email}
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 italic">
                    For course admissions, schedules, fees, demo sessions, or other specific information, please contact the institution directly.
                  </p>
                </article>

                {/* 22. Related Policies & Quick Links */}
                <article id="sec-22" className="scroll-mt-28 space-y-4 pt-4">
                  <h2 className="text-xl font-bold font-poppins text-gray-900">
                    22. Related Policies &amp; Direct Links
                  </h2>
                  <p className="text-sm text-gray-600">
                    For additional information, please refer to the following pages where available:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      href="/contact"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Contact Us</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>

                    <Link
                      href="/faq"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Frequently Asked Questions (FAQ)</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>

                    <Link
                      href="/contact"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Book Free Demo</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>

                    <Link
                      href="/courses"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Course Information</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>
                  </div>

                  {/* Brand Footnote */}
                  <div className="pt-8 border-t border-gray-100 text-center space-y-1">
                    <p className="font-bold font-poppins text-[#D4952B] text-base">
                      Tansen Sangeet Mahavidyalaya
                    </p>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                      Music • Dance • Performing Arts
                    </p>
                  </div>
                </article>

              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
