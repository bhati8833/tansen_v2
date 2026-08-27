// src/components/sections/BookDemo.tsx — matches live site (2 CTAs, no form)
// Live site uses Elementor popup; we mirror the section layout with two buttons

export function BookDemo() {
  return (
    <section
      id="contact"
      className="py-20 text-center"
      style={{
        background: 'linear-gradient(135deg, #E37216 0%, #c96213 100%)',
      }}
    >
      <div className="container-site">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-poppins-var)' }}
        >
          Book Your Free Demo Class
        </h2>
        <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
          Experience the joy of learning with India&apos;s leading music &amp; dance academy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <a
            href="tel:+919773965448"
            className="inline-flex items-center justify-center px-10 py-4 rounded-md font-bold tracking-widest text-sm transition-all bg-white hover:bg-gray-50"
            style={{ color: '#E37216' }}
          >
            BOOK FREE DEMO
          </a>

          {/* Secondary CTA */}
          <a
            href="/own-tsm-franchise"
            className="inline-flex items-center justify-center px-10 py-4 rounded-md font-bold tracking-widest text-sm border-2 border-white text-white transition-all hover:bg-white hover:text-[#E37216]"
          >
            FRANCHISE OPPORTUNITY
          </a>
        </div>
      </div>
    </section>
  );
}
