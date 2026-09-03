'use client';

// src/components/layout/MainNav.tsx — Mega menu navigation for Categories & Subcategories
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { siteContent } from '@/data/site-content';

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = siteContent.navigation;

  return (
    <nav
      className="bg-white transition-shadow duration-300 relative z-50"
      style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none', borderBottom: '1px solid #f3f4f6' }}
    >
      <div className="container-site max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 py-2">
            <Image
              src="/assets/logos/tansen-logo.jpeg"
              alt="Tansen Sangeet Mahavidyalaya"
              width={200}
              height={70}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              const hasCategories = item.categories && item.categories.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => hasCategories && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#D4952B] transition-colors whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-poppins-var)' }}
                  >
                    {item.label}
                    {hasCategories && (
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gray-500"
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown for Courses */}
                  {hasCategories && activeDropdown === item.label && (
                    <div className="absolute top-full right-1/2 translate-x-1/2 lg:right-auto lg:translate-x-0 w-[680px] bg-white shadow-2xl rounded-2xl p-6 z-50 border border-gray-100 animate-[fadeIn_0.15s_ease]">
                      <div className="grid grid-cols-4 gap-6">
                        {item.categories?.map((cat) => (
                          <div key={cat.name} className="space-y-2">
                            {/* Category Title Header */}
                            <Link
                              href={cat.href}
                              onClick={() => setActiveDropdown(null)}
                              className="font-bold text-xs uppercase tracking-wider text-[#D4952B] font-poppins hover:underline block pb-1 border-b border-orange-100"
                            >
                              {cat.name}
                            </Link>

                            {/* Subcategory Course Links */}
                            <ul className="space-y-1.5 pt-1">
                              {cat.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-xs text-gray-700 hover:text-[#D4952B] font-medium transition-colors block py-0.5"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Dropdown Footer */}
                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs bg-orange-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                        <span className="text-gray-600 font-medium">Explore all 8 certified performing arts disciplines</span>
                        <Link
                          href="/courses"
                          onClick={() => setActiveDropdown(null)}
                          className="font-bold text-[#D4952B] hover:underline flex items-center gap-1"
                        >
                          <span>View All Courses</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[85vh] overflow-y-auto shadow-lg">
          <div className="container-site py-4 px-4">
            {menuItems.map((item) => {
              const hasCategories = item.categories && item.categories.length > 0;
              const isCoursesOpen = openMobileMenu === item.label;

              return (
                <div key={item.label} className="border-b border-gray-100 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-800 font-bold hover:text-[#D4952B] transition-colors text-sm"
                      onClick={() => !hasCategories && setIsOpen(false)}
                    >
                      {item.label}
                    </Link>

                    {hasCategories && (
                      <button
                        onClick={() =>
                          setOpenMobileMenu(isCoursesOpen ? null : item.label)
                        }
                        className="p-2 text-gray-500 hover:text-[#D4952B]"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180 text-[#D4952B]' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Accordion for Categories & Subcategories */}
                  {hasCategories && isCoursesOpen && (
                    <div className="pl-3 pb-3 space-y-3 bg-gray-50/70 rounded-xl my-2 p-3 border border-gray-100">
                      {item.categories?.map((cat) => (
                        <div key={cat.name} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <Link
                              href={cat.href}
                              className="text-xs font-bold text-[#D4952B] uppercase tracking-wider block py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {cat.name}
                            </Link>
                          </div>

                          <div className="pl-2 space-y-1 border-l-2 border-orange-200">
                            {cat.items.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block py-1 text-xs text-gray-700 hover:text-[#D4952B] font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
