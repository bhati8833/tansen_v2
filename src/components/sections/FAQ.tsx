'use client';

// src/components/sections/FAQ.tsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faq';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-tag justify-center">Got Questions?</p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-poppins)', color: '#1f2937' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl overflow-hidden border transition-all"
              style={{
                borderColor: open === faq.id ? '#E37216' : '#e5e7eb',
              }}
            >
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                style={{
                  backgroundColor: open === faq.id ? '#FFF3E0' : '#ffffff',
                }}
              >
                <span
                  className="font-semibold text-sm md:text-base pr-4"
                  style={{
                    color: open === faq.id ? '#E37216' : '#1f2937',
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform"
                  style={{
                    color: '#E37216',
                    transform: open === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {open === faq.id && (
                <div className="px-6 pb-5 pt-2 text-sm text-gray-500 leading-relaxed bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
