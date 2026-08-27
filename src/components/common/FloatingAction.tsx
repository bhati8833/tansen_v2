'use client';

// src/components/common/FloatingAction.tsx
import { MessageCircle, Phone } from 'lucide-react';

export function FloatingAction() {
  const whatsappUrl =
    'https://wa.me/919773965448?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses';

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Book Demo / Phone */}
      <a
        href="#book-demo"
        aria-label="Book Free Demo"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: '#E37216' }}
        title="Book Free Demo"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
