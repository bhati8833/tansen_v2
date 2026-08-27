'use client';

// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const popularCourses = [
  { label: 'Fine Arts Course', href: '/fine-arts-course' },
  { label: 'Guitar Classes', href: '/guitar-classes' },
  { label: 'Harmonium Classes', href: '/harmonium-classes' },
  { label: 'Keyboard Course', href: '/keyboard-course' },
  { label: 'Vocal Singing Course', href: '/vocal-singing-course' },
  { label: 'Indian Classical Dance', href: '/indian-classical-dance' },
  { label: 'Western Dance Classes', href: '/western-dance-classes' },
];

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Courses', href: '/our-courses' },
  { label: 'Taanz Centers', href: '/taanz-centers' },
  { label: 'Own TSM Franchise', href: '/own-tsm-franchise' },
  { label: "FAQ's", href: '/faqs' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/tansensangetmahavidyalaya', icon: FaFacebookF },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/tansen-sangeet-mahavidyalaya---india', icon: FaLinkedinIn },
  { label: 'YouTube', href: 'https://www.youtube.com/@tansensangeetmahavidyalaya3467', icon: FaYoutube },
  { label: 'Twitter', href: 'http://x.com/tansen_in', icon: FaXTwitter },
  { label: 'Instagram', href: 'https://www.instagram.com/tansensangeet_mahavidyalayaa/', icon: FaInstagram },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A101C', color: '#ffffff' }}>
      {/* Main Footer */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Social */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/assets/logo/tansen-logo-1.jpeg"
                alt="Tansen Sangeet Mahavidyalaya"
                width={180}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9ca3af' }}>
              Tansen Sangeet Mahavidyalaya is India&apos;s most trusted music and dance academy, nurturing talent since 1972 with over 125 centers across India.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: '#1f2937' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E37216')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1f2937')}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Popular Courses */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'var(--font-poppins-var)' }}>
              POPULAR COURSES
            </h3>
            <ul className="space-y-2.5">
              {popularCourses.map((course) => (
                <li key={course.label} className="flex items-center gap-2">
                  <span style={{ color: '#E37216' }}>›</span>
                  <Link
                    href={course.href}
                    className="text-sm transition-colors"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E37216')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'var(--font-poppins-var)' }}>
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span style={{ color: '#E37216' }}>›</span>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E37216')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider mb-5" style={{ fontFamily: 'var(--font-poppins-var)' }}>
              CONTACT US
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#E37216' }} />
                <span className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                  Near Dev Hospital, Opposite Haryana Gramin Bank, plaza 106 vala Road, Sector 106, Gurgaon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#E37216' }} />
                <a
                  href="tel:+919560193882"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E37216')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                >
                  +91-9560193882 | 9773965448
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#E37216' }} />
                <a
                  href="mailto:info.tansensangeet2@gmail.com"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E37216')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                >
                  info.tansensangeet2@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div style={{ borderTop: '1px solid #1f2937' }}>
        <div className="container-site py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm" style={{ color: '#6b7280' }}>
              © 2026 Tansen Sangeet Mahavidyalaya – All Rights Reserved
            </p>
            <div className="flex gap-5 text-sm">
              <Link
                href="/privacy-policy"
                className="transition-colors"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E37216')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
              >
                Privacy Policy
              </Link>
              <Link
                href="/faqs"
                className="transition-colors"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E37216')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
              >
                FAQ’s
              </Link>
              <Link
                href="/own-tsm-franchise"
                className="transition-colors"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E37216')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
              >
                Own TSM Franchise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
