import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

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
    <section className="relative bg-white overflow-hidden py-14 md:py-20 lg:py-24 border-b border-orange-100">
      {/* Soft white-to-orange gradient flowing from the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 38%, rgba(255,214,178,0.55) 62%, rgba(255,170,102,0.9) 82%, rgba(240,120,40,0.95) 100%)',
        }}
      />

      {/* Layered translucent abstract ribbon waves sweeping from the right */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Back layer — soft, wide ribbon */}
        <path
          d="M720,320 C880,240 1060,120 1440,300 L1440,320 Z"
          fill="rgba(255,183,107,0.28)"
        />
        <path
          d="M760,320 C940,180 1160,60 1440,240 L1440,320 Z"
          fill="rgba(255,150,64,0.30)"
        />
        {/* Mid layer — curved ribbon */}
        <path
          d="M820,320 C1000,140 1220,20 1440,180 L1440,320 Z"
          fill="rgba(255,120,30,0.34)"
        />
        <path
          d="M880,320 C1060,80 1260,-20 1440,120 L1440,320 Z"
          fill="rgba(233,102,24,0.32)"
        />
        {/* Front layer — strong orange ribbon */}
        <path
          d="M940,320 C1140,60 1320,-40 1440,60 L1440,320 Z"
          fill="rgba(226,95,18,0.38)"
        />
      </svg>

      {/* Content */}
      <div className="container-site relative z-10">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C2410C] mb-3">
          <Link href="/" className="hover:underline text-[#C2410C]">Home</Link>
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
              {item.href ? (
                <Link href={item.href} className="hover:underline text-[#C2410C]">{item.label}</Link>
              ) : (
                <span className="text-[#9A3412]">{item.label}</span>
              )}
            </span>
          ))}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-[#1C1917] tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
