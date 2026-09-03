'use client';

// src/components/layout/Footer.tsx — Global Unified Footer Component
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, ChevronRight, Gift, Sparkles } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { siteContent } from '@/data/site-content';

export function Footer() {
  const { footer, site } = siteContent;

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return FaInstagram;
      case 'facebook':
        return FaFacebookF;
      case 'youtube':
        return FaYoutube;
      case 'whatsapp':
        return FaWhatsapp;
      default:
        return FaInstagram;
    }
  };

  return (
    <footer className="relative bg-[#0A101C] text-white pt-12 border-t border-gold-500/20" aria-label="Global Footer">
      {/* 2. MAIN FOOTER NAVIGATION GRID */}
      <div className="container-site pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COLUMN 1 — BRAND (30-35% / lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#D4952B] rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logos/tansen-logo.jpeg"
                  alt="Tansen Sangeet Mahavidyalaya Logo"
                  width={180}
                  height={65}
                  className="h-14 w-auto object-contain rounded"
                />
                <div>
                  <h3 className="font-bold font-poppins text-lg text-white leading-tight">
                    {footer.brandName}
                  </h3>
                  <span className="text-xs font-semibold text-[#D4952B] tracking-wider uppercase block">
                    {footer.brandTagline}
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {footer.brandDescription}
            </p>

            <div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4952B] hover:text-amber-400 transition-colors group"
              >
                <span>Explore Our Courses</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Media Section */}
            {footer.socialLinks && footer.socialLinks.length > 0 && (
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3 font-poppins">
                  Follow Tansen
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  {footer.socialLinks.map((social) => {
                    const IconComponent = getSocialIcon(social.icon);
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow Tansen Sangeet Mahavidyalaya on ${social.label}`}
                        className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#D4952B] hover:border-[#D4952B] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4952B]"
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* COLUMN 2 — QUICK LINKS (15-20% / lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider font-poppins text-white border-b border-gray-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#D4952B] transition-colors flex items-center gap-1.5 py-0.5 focus:outline-none focus:underline"
                  >
                    <span className="text-[#D4952B] font-bold">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — OUR COURSES (20-25% / lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider font-poppins text-white border-b border-gray-800 pb-2">
              Our Courses
            </h3>
            <div className="space-y-3">
              {footer.courseCategories?.map((catGroup) => (
                <div key={catGroup.category} className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-[#D4952B] font-poppins">
                    {catGroup.category}
                  </h4>
                  <ul className="space-y-1 pl-1">
                    {catGroup.items.map((course) => (
                      <li key={course.label}>
                        <Link
                          href={course.href}
                          className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 py-0.5 focus:outline-none focus:underline"
                        >
                          <span className="text-[#D4952B] font-bold text-xs">›</span>
                          <span>{course.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 4 — CONTACT US (25-30% / lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider font-poppins text-white border-b border-gray-800 pb-2">
              Contact Us
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-gray-400">
              
              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#D4952B]" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white text-xs uppercase tracking-wider">Call Us</span>
                  <a
                    href={`tel:${footer.contact.phone1}`}
                    className="hover:text-[#D4952B] font-medium transition-colors focus:outline-none focus:underline"
                  >
                    {footer.contact.phone1}
                  </a>
                  <a
                    href={`tel:${footer.contact.phone2}`}
                    className="hover:text-[#D4952B] font-medium transition-colors focus:outline-none focus:underline"
                  >
                    9871833588
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#D4952B]" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white text-xs uppercase tracking-wider">Email Us</span>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="hover:text-[#D4952B] font-medium transition-colors break-all focus:outline-none focus:underline"
                  >
                    {footer.contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#D4952B]" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white text-xs uppercase tracking-wider">Visit Us</span>
                  <p className="leading-relaxed text-gray-300">
                    {footer.contact.address}
                  </p>
                  <a
                    href={footer.contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#D4952B] hover:underline pt-1"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 3. FOOTER BOTTOM / LEGAL & COPYRIGHT */}
      <div className="border-t border-gray-900 bg-[#060A12] py-6">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-xs text-gray-400 font-medium">
                {footer.copyright}
              </p>
              <p className="text-[11px] text-gray-500">
                {footer.unitInfo}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400">
              {footer.legalLinks.map((legal) => (
                <Link
                  key={legal.label}
                  href={legal.href}
                  className="hover:text-[#D4952B] transition-colors focus:outline-none focus:underline"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
