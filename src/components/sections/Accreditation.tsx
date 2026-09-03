// src/components/sections/Accreditation.tsx — 5 square framed cards matching live site
import Image from 'next/image';

const accreditations = [
  { src: '/assets/affiliations/ugc.webp', alt: 'UGC Recognized' },
  { src: '/assets/affiliations/trinity.webp', alt: 'Trinity College London' },
  { src: '/assets/affiliations/prayag.webp', alt: 'Prayag Sangit Samiti' },
  { src: '/assets/affiliations/pracheen.webp', alt: 'Pracheen Kala Kendra' },
  { src: '/assets/affiliations/iso-certified.webp', alt: 'Certified ISO 9001' },
];

export function Accreditation() {
  return (
    <section id="accreditation" className="py-16 bg-white border-t border-gray-100">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#D4952B' }}>
            Tansen Sangeet Mahavidyalaya
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
          >
            Accreditation &amp; Affiliations
          </h2>
        </div>

        {/* 5 Framed Square Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {accreditations.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border-2 border-orange-100 flex items-center justify-center aspect-square shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
