// src/app/disclaimer/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  AlertTriangle,
  Info,
  Building2,
  BookOpen,
  CreditCard,
  Gift,
  CheckCircle,
  Award,
  Activity,
  Lock,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { siteContent } from '@/data/site-content';

export const metadata: Metadata = {
  title: 'Disclaimer | Tansen Sangeet Mahavidyalaya',
  description:
    'Official Disclaimer for Tansen Sangeet Mahavidyalaya. Important notice regarding website information accuracy, course availability, admissions, fees, and third-party links.',
  alternates: {
    canonical: 'https://tansensangeetgurugram.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | Tansen Sangeet Mahavidyalaya',
    description:
      'Disclaimer detailing website information accuracy, course availability, demo requests, and admissions policy at Tansen Sangeet Mahavidyalaya.',
    url: 'https://tansensangeetgurugram.com/disclaimer',
    siteName: 'Tansen Sangeet Mahavidyalaya',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DisclaimerPage() {
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
        name: 'Disclaimer',
        item: 'https://tansensangeetgurugram.com/disclaimer',
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Disclaimer',
    description:
      'Official website disclaimer for Tansen Sangeet Mahavidyalaya regarding course information, fees, demo classes, and admissions.',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Tansen Sangeet Mahavidyalaya',
    },
  };

  const sections = [
    { id: 'sec-1', title: '1. About Tansen Sangeet Mahavidyalaya' },
    { id: 'sec-2', title: '2. General Information Disclaimer' },
    { id: 'sec-3', title: '3. Course Availability & Schedules' },
    { id: 'sec-4', title: '4. Fees & Payment Verification' },
    { id: 'sec-5', title: '5. Free Demo & Enquiry Forms' },
    { id: 'sec-6', title: '6. Admissions & Enrollment Policy' },
    { id: 'sec-7', title: '7. Outcomes & Certifications Disclaimer' },
    { id: 'sec-8', title: '8. Physical Activity & Health Guidelines' },
    { id: 'sec-9', title: '9. Intellectual Property & Copyright' },
    { id: 'sec-10', title: '10. Third-Party Links & External Platforms' },
    { id: 'sec-11', title: '11. Limitation of Liability' },
    { id: 'sec-12', title: '12. Updates & Modifications' },
    { id: 'sec-13', title: '13. Contact Us for Verification' },
    { id: 'sec-14', title: '14. Related Legal Policies' },
    { id: 'sec-15', title: '15. Consent & Acceptance' },
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
              <span className="text-gray-300">Disclaimer</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-bold uppercase tracking-widest mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>OFFICIAL LEGAL NOTICE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight mb-4">
              Website Disclaimer
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
                  This Disclaimer applies to the official website of <strong>Tansen Sangeet Mahavidyalaya</strong> (a unit of Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.) located at <strong>NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002</strong>.
                </p>
                <p>
                  The information provided on this website is for general informational and educational purposes only. Visitors are encouraged to confirm specific course details, batch schedules, and fee structures directly with the academy management.
                </p>
                <p className="font-semibold text-gray-900">
                  By accessing or browsing this website, you acknowledge and accept the terms outlined in this Disclaimer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT AREA */}
        <section className="py-14 bg-white flex-grow">
          <div className="container-site max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* SIDEBAR QUICK INDEX */}
              <div className="lg:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 sticky top-24 space-y-4 max-h-[80vh] overflow-y-auto hidden lg:block">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
                  <BookOpen className="w-4 h-4 text-[#D4952B]" />
                  <h3 className="font-bold text-gray-900 font-poppins text-xs uppercase tracking-wider">
                    Disclaimer Index
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

              {/* MAIN DISCLAIMER DOCUMENT BODY */}
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
                    Tansen Sangeet Mahavidyalaya is a unit of <strong>Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.</strong> The institution offers structured learning opportunities in music, dance, fine arts, and performing arts.
                  </p>
                  <p>
                    Our programs include Classical Vocal Singing, Kathak, Western Dance, Guitar, Keyboard/Piano, Drums, Tabla, and Fine Arts.
                  </p>
                </article>

                {/* 2. General Information Disclaimer */}
                <article id="sec-2" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Info className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      2. General Information Disclaimer
                    </h2>
                  </div>
                  <p>
                    All information published on this website is provided in good faith for general guidance and informational purposes. While we strive to maintain accurate, up-to-date, and helpful content, Tansen Sangeet Mahavidyalaya makes no warranties or guarantees regarding the absolute completeness, timeliness, or accuracy of any information displayed online.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Website content is subject to modification, update, or withdrawal at any time without prior notice.
                  </p>
                </article>

                {/* 3. Course Availability & Schedules */}
                <article id="sec-3" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <BookOpen className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      3. Course Availability &amp; Schedules
                    </h2>
                  </div>
                  <p>
                    Course descriptions, batch timings, class availability, instructor assignments, and curriculum outlines presented on the website are representative and subject to operational requirements.
                  </p>
                  <p>
                    Information displayed online should not be construed as a binding offer or guarantee that a specific course, batch time, or instructor will be available at any given time.
                  </p>
                  <p className="font-medium text-[#D4952B]">
                    Please contact the academy directly to confirm current batch availability and schedule options.
                  </p>
                </article>

                {/* 4. Fees & Payment Verification */}
                <article id="sec-4" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <CreditCard className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      4. Fees &amp; Payment Verification
                    </h2>
                  </div>
                  <p>
                    Course fee structures, registration charges, payment schedules, and discounts (if applicable) are communicated directly by academy representatives through the official enquiry and admission process.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Visitors and prospective students must verify applicable course fees directly with Tansen Sangeet Mahavidyalaya before making any financial transaction.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    The academy is not responsible for misinterpretations or outdated third-party statements regarding course fees.
                  </p>
                </article>

                {/* 5. Free Demo & Enquiry Forms */}
                <article id="sec-5" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Gift className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      5. Free Demo &amp; Enquiry Forms
                    </h2>
                  </div>
                  <p>
                    Submitting an enquiry form or requesting a free demo class through the website expresses interest and enables our team to contact you.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Submitting a demo request form does not automatically confirm admission, enrollment, or a fixed demo class appointment.
                  </p>
                  <p>
                    Demo class scheduling is subject to batch capacity, faculty availability, and institutional confirmation.
                  </p>
                </article>

                {/* 6. Admissions & Enrollment Policy */}
                <article id="sec-6" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      6. Admissions &amp; Enrollment Policy
                    </h2>
                  </div>
                  <p>
                    Official admission and enrollment are finalized upon completing the formal registration process, submitting required student information, and fulfilling applicable academy guidelines.
                  </p>
                  <p>
                    Tansen Sangeet Mahavidyalaya reserves the right to accept or decline admission applications based on batch availability and institutional criteria.
                  </p>
                </article>

                {/* 7. Outcomes & Certifications Disclaimer */}
                <article id="sec-7" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Award className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      7. Outcomes &amp; Certifications Disclaimer
                    </h2>
                  </div>
                  <p>
                    Learning progress in music, dance, instruments, and fine arts depends on individual effort, practice, attendance, and natural aptitude. While our experienced faculty provides structured guidance and examination preparation, Tansen Sangeet Mahavidyalaya does not guarantee specific individual skill levels or examination outcomes.
                  </p>
                  <p>
                    Official certifications, diplomas, or examination credentials are awarded based on formal examination guidelines established by recognized examining bodies.
                  </p>
                </article>

                {/* 8. Physical Activity & Health Guidelines */}
                <article id="sec-8" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Activity className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      8. Physical Activity &amp; Health Guidelines
                    </h2>
                  </div>
                  <p>
                    Performing arts programs—particularly dance disciplines like Kathak and Western Dance—involve physical movement, stamina, and coordination.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Students and parents/guardians are responsible for ensuring that the student is physically fit to participate in chosen activities.
                  </p>
                  <p>
                    Any pre-existing medical conditions, allergies, or physical restrictions should be communicated to the academy prior to class participation.
                  </p>
                </article>

                {/* 9. Intellectual Property & Copyright */}
                <article id="sec-9" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Lock className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      9. Intellectual Property &amp; Copyright Notice
                    </h2>
                  </div>
                  <p>
                    All text, branding, logos, graphics, images, design layouts, and digital content on this website are the property of or licensed to <strong>Tansen Sangeet Mahavidyalaya / TIPA Pvt. Ltd.</strong>
                  </p>
                  <p>
                    Unauthorized copying, reproduction, distribution, scraping, or commercial exploitation of any material from this website without prior written authorization is strictly prohibited.
                  </p>
                </article>

                {/* 10. Third-Party Links & External Platforms */}
                <article id="sec-10" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      10. Third-Party Links &amp; External Platforms
                    </h2>
                  </div>
                  <p>
                    This website may provide links to external websites, interactive Google Maps, or communication platforms (such as WhatsApp).
                  </p>
                  <p>
                    Tansen Sangeet Mahavidyalaya does not control and is not responsible for the content, privacy practices, terms, or availability of third-party websites or services. Accessing third-party links is at your own discretion.
                  </p>
                </article>

                {/* 11. Limitation of Liability */}
                <article id="sec-11" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      11. Limitation of Liability
                    </h2>
                  </div>
                  <p>
                    To the maximum extent permitted by applicable Indian law, Tansen Sangeet Mahavidyalaya and its management shall not be held liable for any direct, indirect, incidental, or consequential damages arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-gray-700 text-xs sm:text-sm">
                    <li>Temporary website downtime, technical glitches, or maintenance interruptions.</li>
                    <li>Reliance on outdated online information prior to direct verification.</li>
                    <li>Technical issues or security breaches beyond our reasonable control.</li>
                  </ul>
                </article>

                {/* 12. Updates & Modifications */}
                <article id="sec-12" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <RefreshCw className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      12. Updates &amp; Modifications
                    </h2>
                  </div>
                  <p>
                    We reserve the right to revise, update, or modify this Disclaimer at any time without prior announcement.
                  </p>
                  <p>
                    Any changes will take effect immediately upon publication on this page, indicated by the revised &quot;Last Updated&quot; date.
                  </p>
                </article>

                {/* 13. Contact Us for Verification */}
                <article id="sec-13" className="scroll-mt-28 space-y-4 p-6 sm:p-8 bg-orange-50/60 rounded-3xl border border-orange-200/80">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      13. Contact Us for Verification
                    </h2>
                  </div>
                  <p>
                    To verify course details, fees, admissions, or demo availability, please contact our Gurugram center team directly:
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
                </article>

                {/* 14. Related Legal Policies */}
                <article id="sec-14" className="scroll-mt-28 space-y-4 pt-4">
                  <h2 className="text-xl font-bold font-poppins text-gray-900">
                    14. Related Legal Policies &amp; Links
                  </h2>
                  <p className="text-sm text-gray-600">
                    For additional details regarding website governance and policies, please refer to:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      href="/terms"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Terms of Service</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>

                    <Link
                      href="/privacy"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Privacy Policy</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>

                    <Link
                      href="/cookie-policy"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Cookie Policy</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>

                    <Link
                      href="/contact"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Contact Us</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>
                  </div>
                </article>

                {/* 15. Consent & Acceptance */}
                <article id="sec-15" className="scroll-mt-28 space-y-4 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      15. Consent and Acceptance
                    </h2>
                  </div>
                  <p>
                    By using this website, you acknowledge that you have read, understood, and agreed to the disclaimers and terms stated on this page.
                  </p>

                  <div className="pt-8 text-center space-y-1">
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
