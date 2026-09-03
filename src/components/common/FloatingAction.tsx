'use client';

// src/components/common/FloatingAction.tsx — sleek WhatsApp floating widget
import { FaWhatsapp } from 'react-icons/fa6';
import { siteContent } from '@/data/site-content';

export function FloatingAction() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Official WhatsApp Button with Pulse Ring & Badge */}
      <a
        href={siteContent.site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group flex items-center gap-2 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Animated Green Pulse Ripple Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Official WhatsApp Icon */}
        <FaWhatsapp className="w-7 h-7 sm:w-6 sm:h-6 flex-shrink-0 relative z-10 text-white" />

        {/* Text Label */}
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide font-poppins relative z-10 pr-1">
          Chat on WhatsApp
        </span>

        {/* Online Green Indicator Dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full z-20" />
      </a>
    </div>
  );
}
