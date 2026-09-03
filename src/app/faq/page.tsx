// src/app/faq/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs, faqPageHeader, faqFooterContact, FAQItem } from '@/data/faq';
import { 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Sparkles,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<number | null>(1);

  const categories = [
    'All',
    'General & Admissions',
    'Courses & Curriculum',
    'Eligibility & Age',
    'Performance & Certifications'
  ];

  const filteredFaqs = faqs.filter((faq: FAQItem) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.bullets && faq.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto text-gray-800">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4952B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10 max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">FAQ</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4952B]/15 border border-[#D4952B]/30 text-[#D4952B] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help & Support Center</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white tracking-tight leading-tight mb-3">
            {faqPageHeader.title}
          </h1>
          <p className="text-lg md:text-xl text-[#D4952B] font-semibold font-poppins mb-4">
            {faqPageHeader.subtitle}
          </p>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            {faqPageHeader.description}
          </p>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORY FILTER BAR */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-20 z-30 shadow-2xs">
        <div className="container-site max-w-4xl mx-auto px-4 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. age, beginners, guitar, demo class, fees)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-base focus:outline-none focus:border-[#D4952B] focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-200/60 px-2 py-1 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#D4952B] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACCORDION FAQS LIST */}
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container-site max-w-4xl mx-auto px-4 space-y-4">
          
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Showing {filteredFaqs.length} of {faqs.length} questions</span>
            {activeCategory !== 'All' && (
              <span className="font-semibold text-[#D4952B]">Category: {activeCategory}</span>
            )}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 shadow-2xs">
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800 font-poppins mb-1">No matching questions found</h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;. Please try searching with a different term or feel free to contact us.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="px-5 py-2.5 bg-[#D4952B] text-white font-bold rounded-full text-sm hover:bg-[#b8842b] transition-colors"
              >
                Reset Search & Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq: FAQItem) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#D4952B] shadow-md' : 'border-gray-200 shadow-2xs hover:border-orange-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 font-bold text-gray-900 font-poppins text-base sm:text-lg hover:text-[#D4952B] transition-colors"
                  >
                    <span className="flex-grow leading-snug">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#D4952B] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-orange-50/10">
                      <div className="whitespace-pre-line mb-3">
                        {faq.answer}
                      </div>

                      {faq.bullets && faq.bullets.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-orange-100/80">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            {faq.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-800 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-[#D4952B] flex-shrink-0 mt-1" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 4. STILL HAVE QUESTIONS & DIRECT CONTACT BANNER */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container-site max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#D4952B] font-semibold text-xs uppercase tracking-widest block mb-2">
              We Are Here To Help
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-poppins text-gray-900 mb-3">
              {faqFooterContact.title}
            </h2>
            <p className="text-gray-600 text-base">
              {faqFooterContact.subtitle}
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Phone Card */}
            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-base mb-1">Call Us</h3>
              <div className="text-xs text-gray-600 space-y-1 mb-3">
                {faqFooterContact.phones.map((ph, idx) => (
                  <a key={idx} href={`tel:${ph}`} className="block font-semibold text-gray-800 hover:text-[#D4952B] transition-colors">
                    +91 {ph}
                  </a>
                ))}
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-base mb-1">Email Us</h3>
              <a 
                href={`mailto:${faqFooterContact.email}`}
                className="text-xs font-semibold text-gray-800 hover:text-[#D4952B] transition-colors break-all mb-3"
              >
                {faqFooterContact.email}
              </a>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#D4952B] flex items-center justify-center mb-4 shadow-2xs">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 font-poppins text-base mb-1">Visit Us</h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
                {faqFooterContact.address}
              </p>
            </div>

          </div>

          {/* Book Your Free Demo Class Box */}
          <div className="bg-[#0A101C] text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-10 h-10 rounded-full bg-[#D4952B]/20 border border-[#D4952B]/40 text-[#D4952B] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white mb-3">
                {faqFooterContact.ctaTitle}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-8">
                {faqFooterContact.ctaSubtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-3.5 px-8 rounded-full text-sm transition-colors shadow-lg"
                >
                  Book Free Demo Class
                </Link>
                <a
                  href="https://wa.me/919818083588?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses%20and%20book%20a%20demo%20class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-full text-sm transition-colors shadow-lg flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
