'use client';

// src/components/layout/MainNav.tsx — clean single horizontal row matching live site
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = siteContent.navigation;

  return (
    <nav
      className="bg-white sticky top-0 z-50 transition-shadow duration-300"
      style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none', borderBottom: '1px solid #f3f4f6' }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 py-2">
            <Image
              src="/assets/logo/tansen-logo-1.jpeg"
              alt="Tansen Sangeet Mahavidyalaya"
              width={200}
              height={70}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu — Single Horizontal Row */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-[#D4952B] transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-poppins-var)' }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gray-500"
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg py-2 z-50 border border-gray-100 animate-[fadeIn_0.15s_ease]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#D4952B] transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#D4952B]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-lg">
          <div className="container-site py-4">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-800 font-medium hover:text-[#D4952B] transition-colors text-sm"
                    onClick={() => !item.children && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)
                      }
                      className="p-2 text-gray-500"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openMobileMenu === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openMobileMenu === item.label && (
                  <div className="pl-4 pb-2 bg-gray-50/50 rounded-md my-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-gray-600 hover:text-[#D4952B] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
