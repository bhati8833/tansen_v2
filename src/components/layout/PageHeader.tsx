import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  highlight?: string;
  subtitle?: string;
}

export function PageHeader({ breadcrumbs, title, highlight, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20">
      <div className="container-site relative z-10">
        <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-3">
          <Link href="/" className="hover:underline">Home</Link>
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {item.href ? (
                <Link href={item.href} className="hover:underline">{item.label}</Link>
              ) : (
                <span className="text-gray-300">{item.label}</span>
              )}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-4">
          {title} {highlight && <span className="text-[#D4952B]">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}