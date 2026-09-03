// src/app/privacy/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  Building2,
  Database,
  Globe,
  CheckCircle,
  Gift,
  Lock,
  Share2,
  ExternalLink,
  Cookie,
  UserCheck,
  Clock,
  Sliders,
  Mail,
  RefreshCw,
  ShieldAlert,
  Calendar,
  FileText,
  Phone,
  MapPin,
  Info,
  BookOpen,
} from 'lucide-react';
import { siteContent } from '@/data/site-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tansen Sangeet Mahavidyalaya',
  description:
    'Official Privacy Policy for Tansen Sangeet Mahavidyalaya. Learn how we collect, use, protect, and handle personal information for course enquiries, admissions, and demo classes.',
  alternates: {
    canonical: 'https://tansensangeetgurugram.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Tansen Sangeet Mahavidyalaya',
    description:
      'Privacy Policy detailing how personal data, enquiries, and demo requests are collected, stored, and protected at Tansen Sangeet Mahavidyalaya.',
    url: 'https://tansensangeetgurugram.com/privacy',
    siteName: 'Tansen Sangeet Mahavidyalaya',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrivacyPage() {
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
        name: 'Privacy Policy',
        item: 'https://tansensangeetgurugram.com/privacy',
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description:
      'Privacy Policy governing the collection, protection, and use of personal data at Tansen Sangeet Mahavidyalaya.',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Tansen Sangeet Mahavidyalaya',
    },
  };

  const sections = [
    { id: 'sec-1', title: '1. About Tansen Sangeet Mahavidyalaya' },
    { id: 'sec-2', title: '2. Information We May Collect' },
    { id: 'sec-3', title: '3. Information Collected Automatically' },
    { id: 'sec-4', title: '4. How We Use Your Information' },
    { id: 'sec-5', title: '5. Free Demo and Course Enquiries' },
    { id: 'sec-6', title: '6. How We Protect Your Information' },
    { id: 'sec-7', title: '7. Sharing of Personal Information' },
    { id: 'sec-8', title: '8. Third-Party Services and Links' },
    { id: 'sec-9', title: '9. Cookies and Similar Technologies' },
    { id: 'sec-10', title: "10. Children's and Students' Information" },
    { id: 'sec-11', title: '11. How Long We Keep Information' },
    { id: 'sec-12', title: '12. Your Choices' },
    { id: 'sec-13', title: '13. Marketing Communications' },
    { id: 'sec-14', title: '14. Data Accuracy' },
    { id: 'sec-15', title: '15. Website Security and Fraud Prevention' },
    { id: 'sec-16', title: '16. Changes to This Privacy Policy' },
    { id: 'sec-17', title: '17. External Privacy Policies' },
    { id: 'sec-18', title: '18. Contact Us About Privacy' },
    { id: 'sec-19', title: '19. Related Policies' },
    { id: 'sec-20', title: '20. Consent and Acceptance' },
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
              <span className="text-gray-300">Privacy Policy</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DATA PROTECTION &amp; PRIVACY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight mb-4">
              Privacy Policy
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
              Last Updated: <span className="text-white font-semibold">September 3, 2026</span>
            </p>
          </div>
        </section>

        {/* PREAMBLE NOTICE */}
        <section className="py-8 bg-orange-50/70 border-b border-orange-100">
          <div className="container-site max-w-5xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D4952B] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-gray-800 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Tansen Sangeet Mahavidyalaya</strong> (&quot;Tansen Sangeet Mahavidyalaya&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to handling your personal information responsibly.
                </p>
                <p>
                  This Privacy Policy explains what information may be collected when you visit or use our website, how that information may be used, and the choices available to you.
                </p>
                <p className="font-semibold text-gray-900">
                  By using this website or submitting information through our enquiry, contact, or demo-class forms, you acknowledge this Privacy Policy.
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
                    Privacy Index
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

              {/* MAIN PRIVACY DOCUMENT BODY */}
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
                    Tansen Sangeet Mahavidyalaya is a unit of <strong>Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.</strong>
                  </p>
                  <p>
                    Our website provides information about music, dance, fine arts, and performing arts courses, along with information relating to enquiries, admissions, demo classes, schedules, and contacting the institution.
                  </p>
                </article>

                {/* 2. Information We May Collect */}
                <article id="sec-2" className="scroll-mt-28 space-y-4 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Database className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      2. Information We May Collect
                    </h2>
                  </div>
                  <p>
                    Depending on how you interact with our website, we may collect information that you voluntarily provide to us.
                  </p>

                  <div className="space-y-3 pl-2">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-2">Contact Information</h3>
                      <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-gray-700">
                        <li>Full name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Contact preferences</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-2">Student / Course Information</h3>
                      <p className="text-xs text-gray-600 mb-2">Where relevant to an enquiry, we may collect:</p>
                      <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-gray-700">
                        <li>Student age or age group</li>
                        <li>Course of interest</li>
                        <li>Enquiry type</li>
                        <li>Preferred batch or timing information</li>
                        <li>Information included in your message or enquiry</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-2">Communication Information</h3>
                      <p className="text-xs sm:text-sm text-gray-700">
                        If you contact us directly, we may retain the information necessary to understand and respond to your enquiry.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-amber-700 font-semibold italic bg-amber-50 p-3 rounded-lg border border-amber-200">
                    You should avoid submitting unnecessary sensitive or confidential information through website forms.
                  </p>
                </article>

                {/* 3. Information Collected Automatically */}
                <article id="sec-3" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      3. Information Collected Automatically
                    </h2>
                  </div>
                  <p>
                    When you visit our website, certain technical information may be collected automatically by the website, hosting provider, analytics services, security tools, or other technologies used on the website.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Depending on the services actually enabled on the website, this information may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Approximate visit date and time</li>
                    <li>Referring website or page</li>
                    <li>Basic website usage information</li>
                  </ul>
                  <p className="text-xs text-gray-500 italic">
                    We will not claim that a particular analytics, tracking, advertising, or cookie technology is being used unless that technology is actually implemented on the website.
                  </p>
                </article>

                {/* 4. How We Use Your Information */}
                <article id="sec-4" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      4. How We Use Your Information
                    </h2>
                  </div>
                  <p className="font-semibold text-gray-900">
                    Information submitted through our website may be used to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Respond to your enquiries.</li>
                    <li>Contact you regarding a requested demo class.</li>
                    <li>Provide information about courses.</li>
                    <li>Respond to admission-related questions.</li>
                    <li>Discuss course availability and schedules.</li>
                    <li>Respond to requests submitted through contact forms.</li>
                    <li>Provide relevant information requested by you.</li>
                    <li>Maintain website security and functionality.</li>
                    <li>Improve our website and user experience where appropriate.</li>
                    <li>Comply with applicable legal requirements.</li>
                  </ul>
                  <p className="font-medium text-gray-900">
                    We will use information for purposes reasonably connected with the reason it was provided.
                  </p>
                </article>

                {/* 5. Free Demo and Course Enquiries */}
                <article id="sec-5" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Gift className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      5. Free Demo and Course Enquiries
                    </h2>
                  </div>
                  <p>
                    If you submit a request for a free demo class or course enquiry, the information you provide may be used by Tansen Sangeet Mahavidyalaya to contact you regarding your request.
                  </p>
                  <p>
                    Submitting a form does not automatically confirm admission or a demo-class appointment.
                  </p>
                  <p>
                    The institution may contact you to discuss available courses, batches, schedules, and other relevant information.
                  </p>
                </article>

                {/* 6. How We Protect Your Information */}
                <article id="sec-6" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Lock className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      6. How We Protect Your Information
                    </h2>
                  </div>
                  <p>
                    We take reasonable measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss.
                  </p>
                  <p>
                    However, no website, internet transmission, or electronic storage system can be guaranteed to be completely secure.
                  </p>
                  <p>
                    You should therefore avoid submitting sensitive information that is not necessary for your enquiry.
                  </p>
                </article>

                {/* 7. Sharing of Personal Information */}
                <article id="sec-7" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Share2 className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      7. Sharing of Personal Information
                    </h2>
                  </div>
                  <p className="font-bold text-gray-900">
                    We do not intend to sell your personal information.
                  </p>
                  <p>
                    Personal information may be accessed or shared where reasonably necessary to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                    <li>Respond to your enquiry.</li>
                    <li>Operate and maintain the website.</li>
                    <li>Provide website hosting or technical services.</li>
                    <li>Maintain website security.</li>
                    <li>Use service providers supporting website functionality.</li>
                    <li>Comply with applicable law or lawful requests.</li>
                  </ul>
                  <p className="text-xs text-gray-500">
                    Where third-party services are used on the website, those services may process information according to their own applicable privacy policies.
                  </p>
                </article>

                {/* 8. Third-Party Services and Links */}
                <article id="sec-8" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      8. Third-Party Services and Links
                    </h2>
                  </div>
                  <p>
                    Our website may contain links to third-party websites or services, including external platforms used for maps, communication, social media, or other purposes.
                  </p>
                  <p>
                    If you follow a link to a third-party website, that website will operate under its own terms and privacy practices.
                  </p>
                  <p>
                    Tansen Sangeet Mahavidyalaya is not responsible for the privacy practices, security, or content of third-party websites.
                  </p>
                  <p>
                    We encourage you to review the privacy policy of any third-party service before providing personal information to it.
                  </p>
                </article>

                {/* 9. Cookies and Similar Technologies */}
                <article id="sec-9" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Cookie className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      9. Cookies and Similar Technologies
                    </h2>
                  </div>
                  <p>
                    The website may use cookies or similar technologies where required for website functionality, security, analytics, or other legitimate website purposes.
                  </p>
                  <p>
                    Cookies are small files or pieces of information stored on your device by websites.
                  </p>
                  <p>
                    The exact cookies and technologies used may depend on the services currently implemented on the website.
                  </p>
                  <p>
                    Where applicable, you may be able to control certain cookies through your browser or available website settings. Disabling certain cookies may affect some website functionality.
                  </p>
                </article>

                {/* 10. Children's and Students' Information */}
                <article id="sec-10" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <UserCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      10. Children&apos;s and Students&apos; Information
                    </h2>
                  </div>
                  <p>
                    Our courses may be available to children as well as adults.
                  </p>
                  <p>
                    Where information relating to a minor is submitted through the website, parents or legal guardians should provide information where appropriate.
                  </p>
                  <p>
                    We do not require unnecessary personal information about children through our website enquiry forms. Parents or guardians should ensure that information submitted about a child is accurate and necessary for the relevant enquiry.
                  </p>
                  <p>
                    If you believe that unnecessary information relating to a child has been submitted to us, please contact us so that we can review the matter.
                  </p>
                </article>

                {/* 11. How Long We Keep Information */}
                <article id="sec-11" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      11. How Long We Keep Information
                    </h2>
                  </div>
                  <p>
                    We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including responding to enquiries, maintaining relevant records, fulfilling operational requirements, or complying with applicable legal obligations.
                  </p>
                  <p>
                    The actual retention period may depend on the type of information and the reason it was collected.
                  </p>
                  <p>
                    When information is no longer reasonably required, it may be deleted or otherwise handled in accordance with applicable requirements.
                  </p>
                </article>

                {/* 12. Your Choices */}
                <article id="sec-12" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Sliders className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      12. Your Choices
                    </h2>
                  </div>
                  <p className="font-semibold text-gray-900">
                    Depending on applicable law and the circumstances, you may have rights relating to your personal information, including the ability to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                    <li>Ask what personal information we may hold about you.</li>
                    <li>Request correction of inaccurate information.</li>
                    <li>Request deletion of information where applicable.</li>
                    <li>Ask questions about how your information is being used.</li>
                    <li>Withdraw consent where processing is based on consent and withdrawal is legally applicable.</li>
                  </ul>
                  <p>
                    To make a privacy-related request, please contact us using the details provided below. We may need sufficient information to verify and properly respond to a request.
                  </p>
                </article>

                {/* 13. Marketing Communications */}
                <article id="sec-13" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      13. Marketing Communications
                    </h2>
                  </div>
                  <p>
                    If we contact you regarding your enquiry, course, demo class, or admission request, such communication may be directly related to the request you submitted.
                  </p>
                  <p>
                    We will not state that you have subscribed to marketing communications unless the relevant subscription or consent mechanism is actually provided and used.
                  </p>
                  <p>
                    If you receive optional promotional communications and wish to stop receiving them, you may contact us using the details below.
                  </p>
                </article>

                {/* 14. Data Accuracy */}
                <article id="sec-14" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <RefreshCw className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      14. Data Accuracy
                    </h2>
                  </div>
                  <p>
                    We rely on the information provided by users to respond to enquiries and provide relevant information.
                  </p>
                  <p>
                    Please ensure that information submitted through website forms is accurate and up to date.
                  </p>
                  <p>
                    If you discover that information you submitted is incorrect, you may contact us to request an appropriate correction.
                  </p>
                </article>

                {/* 15. Website Security and Fraud Prevention */}
                <article id="sec-15" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      15. Website Security and Fraud Prevention
                    </h2>
                  </div>
                  <p>
                    We may use reasonable technical and organizational measures to protect the website and its forms against spam, abuse, unauthorized access, and other security threats.
                  </p>
                  <p>
                    Security systems may collect limited technical information when necessary to detect or prevent suspicious activity.
                  </p>
                </article>

                {/* 16. Changes to This Privacy Policy */}
                <article id="sec-16" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      16. Changes to This Privacy Policy
                    </h2>
                  </div>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our website, services, data practices, technology, or applicable legal requirements.
                  </p>
                  <p>
                    When changes are made, the updated version will be published on this page and the &quot;Last Updated&quot; date may be revised.
                  </p>
                  <p>
                    We encourage visitors to review this page periodically.
                  </p>
                </article>

                {/* 17. External Privacy Policies */}
                <article id="sec-17" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      17. External Privacy Policies
                    </h2>
                  </div>
                  <p>
                    Certain services or platforms connected to our website may have their own privacy policies. These may include services used for:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Website hosting</li>
                    <li>Maps</li>
                    <li>Analytics</li>
                    <li>Communication</li>
                    <li>Social media</li>
                    <li>Security</li>
                    <li>Form processing</li>
                    <li>Other website functionality</li>
                  </ul>
                  <p className="text-xs text-gray-500">
                    Where applicable, users should review the privacy policies of those third-party services.
                  </p>
                </article>

                {/* 18. Contact Us About Privacy */}
                <article id="sec-18" className="scroll-mt-28 space-y-4 p-6 sm:p-8 bg-orange-50/60 rounded-3xl border border-orange-200/80">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      18. Contact Us About Privacy
                    </h2>
                  </div>
                  <p>
                    If you have a question, concern, correction request, or other privacy-related enquiry, please contact us:
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

                  <p className="text-xs text-gray-700 font-semibold italic">
                    For privacy-related requests, please clearly mention that your enquiry relates to Privacy / Personal Information.
                  </p>
                </article>

                {/* 19. Related Policies */}
                <article id="sec-19" className="scroll-mt-28 space-y-4 pt-4">
                  <h2 className="text-xl font-bold font-poppins text-gray-900">
                    19. Related Policies &amp; Direct Links
                  </h2>
                  <p className="text-sm text-gray-600">
                    For additional information, please refer to:
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
                      href="/courses"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Course Information</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>
                  </div>
                </article>

                {/* 20. Consent and Acceptance */}
                <article id="sec-20" className="scroll-mt-28 space-y-4 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      20. Consent and Acceptance
                    </h2>
                  </div>
                  <p>
                    By using this website and voluntarily submitting personal information through our forms, you acknowledge that you have read this Privacy Policy.
                  </p>
                  <p>
                    Where applicable, specific consent or permission may be requested separately for particular uses of personal information.
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
