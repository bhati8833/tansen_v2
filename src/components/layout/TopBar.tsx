// src/components/layout/TopBar.tsx — light cream background matching live site exactly
import Link from 'next/link';
import { Phone, Mail, Calendar, Music } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export function TopBar() {
  return (
    <div className="hidden md:block border-b border-orange-100/60" style={{ backgroundColor: '#FDF9F3', color: '#333333' }}>
      <div className="container-site">
        <div className="flex items-center justify-between py-2 text-xs lg:text-sm font-medium">
          {/* Left: Notices */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-gray-700">
              <Music className="w-3.5 h-3.5" style={{ color: '#D4952B' }} />
              <span>Admissions Open for 2026-2027</span>
            </div>
            <span className="text-gray-300">|</span>
            <Link
              href="#book-demo"
              className="flex items-center gap-1.5 text-gray-700 hover:text-[#D4952B] transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" style={{ color: '#D4952B' }} />
              <span>Book a Free Demo Class Today!</span>
            </Link>
          </div>

          {/* Right: Contact & Social */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 text-gray-700">
              <a
                href="mailto:Tansengurugram43@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#D4952B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" style={{ color: '#D4952B' }} />
                <span>Tansengurugram43@gmail.com</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="tel:+919818083588"
                className="flex items-center gap-1.5 hover:text-[#D4952B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" style={{ color: '#D4952B' }} />
                <span>+91 98180 83588</span>
              </a>
            </div>

            {/* Social Icons in brand colored squares */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.facebook.com/tansensangetmahavidyalaya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-6 h-6 rounded flex items-center justify-center text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#3b5998' }}
              >
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a
                href="https://in.linkedin.com/company/tansen-sangeet-mahavidyalaya---india"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded flex items-center justify-center text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0077b5' }}
              >
                <FaLinkedinIn className="w-3 h-3" />
              </a>
              <a
                href="https://www.youtube.com/@tansensangeetmahavidyalaya3467"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-6 h-6 rounded flex items-center justify-center text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#ff0000' }}
              >
                <FaYoutube className="w-3 h-3" />
              </a>
              <a
                href="http://x.com/tansen_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="w-6 h-6 rounded flex items-center justify-center text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#000000' }}
              >
                <FaXTwitter className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/tansensangeet_mahavidyalayaa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded flex items-center justify-center text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#111111' }}
              >
                <FaInstagram className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
