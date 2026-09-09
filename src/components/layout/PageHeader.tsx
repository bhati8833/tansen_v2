import { Fragment } from 'react';
import Link from 'next/link';
import { ChevronRight, Guitar, Mic, Drum, Music, Piano, Headphones } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
}

export function PageHeader({ breadcrumbs, title }: PageHeaderProps) {
  return (
    <section className="relative bg-band-warm overflow-hidden py-14 md:py-20 lg:py-24 border-b border-orange-100">
      {/* Soft white-to-orange gradient flowing from the left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(240,120,40,0.95) 0%, rgba(255,170,102,0.9) 18%, rgba(255,214,178,0.55) 38%, rgba(255,255,255,0) 62%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Playful geometric scattered shapes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Triangles */}
        <polygon points="340,0 0,0 0,200" fill="rgba(227,114,22,0.12)" />
        <polygon points="240,80 0,80 0,280" fill="rgba(227,114,22,0.15)" />
        <polygon points="140,160 0,160 0,320" fill="rgba(227,114,22,0.18)" />

        {/* Circles */}
        <circle cx="290" cy="100" r="60" fill="rgba(255,150,64,0.15)" />
        <circle cx="90" cy="200" r="40" fill="rgba(255,120,30,0.18)" />
        <circle cx="190" cy="50" r="30" fill="rgba(233,102,24,0.12)" />

        {/* Diamonds */}
        <polygon points="260,220 230,190 200,220 230,250" fill="rgba(226,95,18,0.2)" />
        <polygon points="60,120 40,100 20,120 40,140" fill="rgba(227,114,22,0.15)" />
      </svg>

      {/* Right side music instrument icons — scattered light decorative */}
      <Guitar className="absolute right-10 md:right-18 lg:right-28 top-4 md:top-6 w-12 h-12 md:w-16 md:h-16 text-orange-200/50 rotate-[-15deg] pointer-events-none" strokeWidth={1.2} />
      <Mic className="absolute right-4 md:right-8 lg:right-14 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-orange-300/45 rotate-[12deg] pointer-events-none" strokeWidth={1.2} />
      <Drum className="absolute right-16 md:right-28 lg:right-48 bottom-6 md:bottom-8 w-14 h-14 md:w-20 md:h-20 text-orange-200/40 rotate-[20deg] pointer-events-none" strokeWidth={1.2} />
      <Music className="absolute right-20 md:right-36 lg:right-56 top-10 md:top-14 w-5 h-5 md:w-7 md:h-7 text-orange-300/40 rotate-[-8deg] pointer-events-none" strokeWidth={1.2} />
      <Piano className="absolute right-6 md:right-14 lg:right-24 bottom-14 md:bottom-20 w-9 h-9 md:w-12 md:h-12 text-orange-200/45 rotate-[30deg] pointer-events-none" strokeWidth={1.2} />
      <Headphones className="absolute right-12 md:right-22 lg:right-36 top-1/3 w-7 h-7 md:w-10 md:h-10 text-orange-300/40 rotate-[-20deg] pointer-events-none" strokeWidth={1.2} />

      {/* Content */}
      <div className="container-site relative z-10">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm font-semibold text-[#C2410C] mb-6">
          <Link href="/" className="hover:underline text-[#C2410C] shrink-0">Home</Link>
          {breadcrumbs.map((item, i) => (
            <Fragment key={i}>
              {i === 2 && <div className="basis-full h-0" />}
              <span className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                {item.href ? (
                  <Link href={item.href} className="hover:underline text-[#C2410C]">{item.label}</Link>
                ) : (
                  <span className="text-[#9A3412] line-clamp-2">{item.label}</span>
                )}
              </span>
            </Fragment>
          ))}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-[#1C1917] tracking-tight text-center max-w-4xl mx-auto">
          {title}
        </h1>
      </div>
    </section>
  );
}
