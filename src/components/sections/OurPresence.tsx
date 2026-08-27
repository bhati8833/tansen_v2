// src/components/sections/OurPresence.tsx — Combined side-by-side Centers + Franchise section matching live site
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const franchiseBullets = [
  'Proven Business Model',
  'Complete Training & Support',
  'High ROI & Growing Demand',
];

export function OurPresence() {
  return (
    <section className="py-20" style={{ backgroundColor: '#FDF9F3' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Centers Across India */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#D4952B' }}>
              Our Presence
            </p>
            <h2
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
            >
              Centers Across<br />India
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              125+ centers in 23+ cities and growing. Find a center near you.
            </p>
            <Link
              href="/taanz-centers"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-bold text-xs tracking-wider shadow-md transition-all hover:brightness-105"
              style={{ backgroundColor: '#D4952B' }}
            >
              FIND CENTER NEAR YOU
            </Link>
          </div>

          {/* Center Column: India Map Graphic */}
          <div className="lg:col-span-4 flex items-center justify-center py-6 lg:py-0">
            <div className="relative w-64 h-72 md:w-80 md:h-80">
              <Image
                src="/assets/hero/slider-1.jpg"
                alt="India Map Centers"
                fill
                className="object-contain rounded-2xl opacity-80"
              />
              <div className="absolute inset-0 bg-navy-900/40 rounded-2xl flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                  <p className="font-bold text-lg text-gray-900">125+ Centers</p>
                  <p className="text-xs text-gray-600">Across 23+ Cities in India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Franchise Opportunity */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#D4952B' }}>
              Franchise Opportunity
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
            >
              Open Your Own<br />Music Academy
            </h2>
            <ul className="space-y-2.5 mb-6">
              {franchiseBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#D4952B' }} />
                  <span className="text-sm text-gray-700 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/own-tsm-franchise"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-bold text-xs tracking-wider shadow-md transition-all hover:brightness-105"
              style={{ backgroundColor: '#D4952B' }}
            >
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
