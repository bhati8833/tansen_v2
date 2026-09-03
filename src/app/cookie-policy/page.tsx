// src/app/cookie-policy/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Cookie,
  Info,
  ShieldCheck,
  Globe,
  Lock,
  Sliders,
  ExternalLink,
  Gift,
  Building2,
  FileText,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  BookOpen,
  Settings,
  AlertCircle,
  Calendar,
  UserCheck,
} from 'lucide-react';
import { siteContent } from '@/data/site-content';

export const metadata: Metadata = {
  title: 'Cookie Policy | Tansen Sangeet Mahavidyalaya',
  description:
    'Official Cookie Policy for Tansen Sangeet Mahavidyalaya. Learn how cookies and similar technologies are used on our website for essential functionality, security, and performance.',
  alternates: {
    canonical: 'https://tansensangeetgurugram.com/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Tansen Sangeet Mahavidyalaya',
    description:
      'Understand how cookies and local storage technologies are utilized across the Tansen Sangeet Mahavidyalaya website to ensure secure, efficient, and reliable browsing.',
    url: 'https://tansensangeetgurugram.com/cookie-policy',
    siteName: 'Tansen Sangeet Mahavidyalaya',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CookiePolicyPage() {
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
        name: 'Cookie Policy',
        item: 'https://tansensangeetgurugram.com/cookie-policy',
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cookie Policy',
    description:
      'Official Cookie Policy explaining the use of cookies, local storage, and technical scripts at Tansen Sangeet Mahavidyalaya.',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Tansen Sangeet Mahavidyalaya',
    },
  };

  const sections = [
    { id: 'sec-1', title: '1. What Are Cookies?' },
    { id: 'sec-2', title: '2. Why We Use Cookies' },
    { id: 'sec-3', title: '3. Types of Cookies We Use' },
    { id: 'sec-4', title: '4. First-Party vs Third-Party Cookies' },
    { id: 'sec-5', title: '5. Maps & Embedded Services' },
    { id: 'sec-6', title: '6. Demo Requests & Form Security' },
    { id: 'sec-7', title: '7. How to Control & Disable Cookies' },
    { id: 'sec-8', title: '8. Impact of Disabling Cookies' },
    { id: 'sec-9', title: "9. Children's Privacy Protection" },
    { id: 'sec-10', title: '10. Do Not Track (DNT) Signals' },
    { id: 'sec-11', title: '11. Updates to This Cookie Policy' },
    { id: 'sec-12', title: '12. Third-Party Cookie Policies' },
    { id: 'sec-13', title: '13. Contact Us About Cookies' },
    { id: 'sec-14', title: '14. Related Policies & Links' },
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
              <span className="text-gray-300">Cookie Policy</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-bold uppercase tracking-widest mb-4">
              <Cookie className="w-3.5 h-3.5" />
              <span>TECHNICAL POLICIES &amp; PRIVACY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight mb-4">
              Cookie Policy
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
                  This Cookie Policy applies to the official website of <strong>Tansen Sangeet Mahavidyalaya</strong> (a unit of Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.).
                </p>
                <p>
                  This policy describes how we use cookies, local storage, and similar web technologies to provide a smooth, secure, and reliable user experience when you explore our courses, submit enquiries, or book free demo classes.
                </p>
                <p className="font-semibold text-gray-900">
                  By continuing to browse or use our website, you agree to our use of cookies as described in this Cookie Policy and our Privacy Policy.
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
                    Cookie Index
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

              {/* MAIN COOKIE POLICY DOCUMENT BODY */}
              <div className="lg:col-span-8 space-y-12 text-gray-700 text-sm sm:text-base leading-relaxed">
                
                {/* 1. What Are Cookies? */}
                <article id="sec-1" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Cookie className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      1. What Are Cookies?
                    </h2>
                  </div>
                  <p>
                    Cookies are small text files or data fragments stored on your computer, tablet, or mobile device by websites that you visit. They are widely used to make websites work properly, improve user efficiency, and provide useful technical information to site administrators.
                  </p>
                  <p>
                    Cookies can be <strong>Session Cookies</strong> (which expire automatically when you close your browser) or <strong>Persistent Cookies</strong> (which remain stored on your device for a set period or until manually deleted).
                  </p>
                </article>

                {/* 2. Why We Use Cookies */}
                <article id="sec-2" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      2. Why We Use Cookies
                    </h2>
                  </div>
                  <p>
                    Tansen Sangeet Mahavidyalaya uses cookies and local browser storage for legitimate operational purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                    <li>Ensuring core website navigation and layout stability.</li>
                    <li>Protecting contact and demo enquiry forms from automated spam or fraud.</li>
                    <li>Remembering user choices such as active course filters or enquiry categories.</li>
                    <li>Ensuring fast page load speeds and overall performance optimization.</li>
                    <li>Supporting interactive features such as location maps and course selection shortcuts.</li>
                  </ul>
                </article>

                {/* 3. Types of Cookies We Use */}
                <article id="sec-3" className="scroll-mt-28 space-y-4 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Sliders className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      3. Types of Cookies We Use
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">A. Essential / Necessary Cookies</h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        These cookies are strictly required to enable core features such as page navigation, security verification, and form submission. The website cannot function properly without these cookies.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">B. Functional / Preference Cookies</h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        These cookies allow our website to remember choices you make (such as preferred course enquiry category or selected contact option) to provide a tailored, user-friendly experience.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">C. Performance &amp; Analytics Cookies</h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        These cookies collect aggregated, non-personally identifiable technical information (such as average load time or visited pages) to help us analyze site usage and improve performance.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">D. Security &amp; Fraud Prevention Cookies</h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        These cookies help detect suspicious activity, protect website forms against malicious bot traffic, and safeguard server infrastructure.
                      </p>
                    </div>
                  </div>
                </article>

                {/* 4. First-Party vs Third-Party Cookies */}
                <article id="sec-4" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      4. First-Party vs Third-Party Cookies
                    </h2>
                  </div>
                  <p>
                    <strong>First-Party Cookies</strong> are placed directly by Tansen Sangeet Mahavidyalaya (`tansensangeetgurugram.com`) to manage core site functionality.
                  </p>
                  <p>
                    <strong>Third-Party Cookies</strong> may be set by external services integrated into our website, such as Google Maps for academy location display or external media platforms. We do not control third-party cookies directly.
                  </p>
                </article>

                {/* 5. Maps & Embedded Services */}
                <article id="sec-5" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      5. Maps &amp; Embedded Services
                    </h2>
                  </div>
                  <p>
                    Our Contact Us and Location pages embed interactive Google Maps to help students and parents locate our academy at <strong>NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram</strong>.
                  </p>
                  <p>
                    Google Maps may use cookies or local storage to store user map preferences and technical rendering data in accordance with Google&apos;s Privacy Policy.
                  </p>
                </article>

                {/* 6. Demo Requests & Form Security */}
                <article id="sec-6" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Gift className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      6. Demo Requests &amp; Form Security
                    </h2>
                  </div>
                  <p>
                    When you submit a course enquiry or book a free demo class through our online form, temporary session cookies or browser state identifiers are used to prevent duplicate submissions and preserve form state.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Form cookies are temporary and are used strictly for processing your submitted request.
                  </p>
                </article>

                {/* 7. How to Control & Disable Cookies */}
                <article id="sec-7" className="scroll-mt-28 space-y-4 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Settings className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      7. How to Control &amp; Disable Cookies
                    </h2>
                  </div>
                  <p>
                    You have the right to decide whether to accept or reject non-essential cookies. You can set or modify your web browser controls to accept or refuse cookies.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Browser Specific Cookie Management Guides:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-gray-700 text-sm">
                    <li>
                      <strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies.
                    </li>
                    <li>
                      <strong>Mozilla Firefox:</strong> Options → Privacy &amp; Security → Cookies and Site Data.
                    </li>
                    <li>
                      <strong>Apple Safari:</strong> Preferences → Privacy → Block all cookies.
                    </li>
                    <li>
                      <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies.
                    </li>
                  </ul>
                </article>

                {/* 8. Impact of Disabling Cookies */}
                <article id="sec-8" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      8. Impact of Disabling Cookies
                    </h2>
                  </div>
                  <p>
                    If you choose to block or disable all cookies, you will still be able to browse information on our website.
                  </p>
                  <p className="text-amber-800 bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs sm:text-sm font-medium">
                    Note: Blocking essential cookies may affect interactive features, such as embedded location maps, pre-selected course buttons, or enquiry form submission validations.
                  </p>
                </article>

                {/* 9. Children's Privacy Protection */}
                <article id="sec-9" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <UserCheck className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      9. Children&apos;s Privacy Protection
                    </h2>
                  </div>
                  <p>
                    Tansen Sangeet Mahavidyalaya offers courses for children aged 3+ as well as adults. We do not use cookies or tracking technologies to profile, target, or track children.
                  </p>
                  <p>
                    Enquiry forms for minor students must be completed by parents or legal guardians.
                  </p>
                </article>

                {/* 10. Do Not Track (DNT) Signals */}
                <article id="sec-10" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Lock className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      10. Do Not Track (DNT) Signals
                    </h2>
                  </div>
                  <p>
                    Some web browsers transmit &quot;Do Not Track&quot; (DNT) signals to websites. Because there is currently no industry-standard consensus for interpreting DNT signals, our website responds to browser settings and cookie preference controls.
                  </p>
                </article>

                {/* 11. Updates to This Cookie Policy */}
                <article id="sec-11" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Calendar className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      11. Updates to This Cookie Policy
                    </h2>
                  </div>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technical standards, operational practices, or legal requirements.
                  </p>
                  <p>
                    The updated policy will be published on this page with an updated &quot;Last Updated&quot; date.
                  </p>
                </article>

                {/* 12. Third-Party Cookie Policies */}
                <article id="sec-12" className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <ExternalLink className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      12. Third-Party Cookie Policies
                    </h2>
                  </div>
                  <p>
                    For detailed information regarding third-party services linked from our website (such as Google Maps or WhatsApp), please review their respective privacy and cookie policies.
                  </p>
                </article>

                {/* 13. Contact Us About Cookies */}
                <article id="sec-13" className="scroll-mt-28 space-y-4 p-6 sm:p-8 bg-orange-50/60 rounded-3xl border border-orange-200/80">
                  <div className="flex items-center gap-2.5 text-[#D4952B]">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-900">
                      13. Contact Us About Cookies
                    </h2>
                  </div>
                  <p>
                    If you have questions, concerns, or requests regarding our use of cookies or technical policies, please contact us:
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

                {/* 14. Related Policies & Quick Links */}
                <article id="sec-14" className="scroll-mt-28 space-y-4 pt-4">
                  <h2 className="text-xl font-bold font-poppins text-gray-900">
                    14. Related Policies &amp; Direct Links
                  </h2>
                  <p className="text-sm text-gray-600">
                    For additional information, please refer to:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      href="/privacy"
                      className="p-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-[#D4952B] transition-all flex items-center justify-between group"
                    >
                      <span className="font-bold text-sm text-gray-900 group-hover:text-[#D4952B]">Privacy Policy</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D4952B]" />
                    </Link>

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
                    By using this website, you acknowledge that you have read and understood this Cookie Policy and consent to the use of cookies as outlined herein.
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
