// src/components/sections/Franchise.tsx — matches live site
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const points = [
  'Proven Business Model',
  'Complete Training & Support',
  'High ROI & Growing Demand',
];

export function Franchise() {
  return (
    <section className="py-16" style={{ backgroundColor: '#0A101C' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/assets/hero/slider-3.jpg"
              alt="Open Your Own Music Academy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay badge */}
            <div
              className="absolute bottom-6 left-6 right-6 rounded-xl px-5 py-4"
              style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
            >
              <p className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-poppins-var)' }}>
                Join India&apos;s Largest Music Academy Network
              </p>
              <p className="text-sm mt-1" style={{ color: '#E37216' }}>125+ Centers | 50+ Years of Legacy</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-poppins-var)' }}
            >
              Open Your Own Music Academy
            </h2>
            <div className="space-y-4 mb-8">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#E37216' }} />
                  <span className="text-gray-300 text-base">{point}</span>
                </div>
              ))}
            </div>
            <Link
              href="/own-tsm-franchise"
              className="inline-flex items-center px-10 py-3.5 rounded-md font-bold tracking-widest text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: '#E37216', color: '#ffffff' }}
            >
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
