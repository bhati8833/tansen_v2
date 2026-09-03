'use client';

// src/components/sections/FAQ.tsx
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { homeFaqs, homeFaqFooter } from '@/data/faq';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="container-site max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[#D4952B] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-3.5">
          {homeFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#D4952B] shadow-md bg-white' 
                    : 'border-gray-200/80 hover:border-orange-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                >
                  <span
                    className={`font-bold text-base sm:text-lg pr-4 font-poppins transition-colors ${
                      isOpen ? 'text-[#D4952B]' : 'text-gray-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#D4952B] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-orange-100/60 bg-orange-50/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Home FAQ Footer Callout */}
        <div className="mt-12 p-8 bg-gradient-to-r from-amber-50/80 via-orange-50/60 to-amber-50/80 rounded-3xl border border-amber-200/70 text-center">
          <p className="text-base sm:text-lg font-bold font-poppins text-gray-900 mb-6">
            {homeFaqFooter.text}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-3 px-6 rounded-full text-sm transition-all shadow-sm hover:shadow-md"
            >
              <span>{homeFaqFooter.exploreFaqButton}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold py-3 px-6 rounded-full text-sm transition-all shadow-2xs"
            >
              <span>{homeFaqFooter.contactUsButton}</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
