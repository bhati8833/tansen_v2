// src/components/sections/WhyChooseUs.tsx — exact live site layout with light overlay and 6 cards
import { Star, BadgeCheck, Music, Users, MonitorSmartphone, Baby } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: '50+ Years',
    subtitle: 'of Legacy',
  },
  {
    icon: BadgeCheck,
    title: 'Certified',
    subtitle: 'Courses',
  },
  {
    icon: Music,
    title: 'Stage',
    subtitle: 'Performances',
  },
  {
    icon: Users,
    title: 'Expert',
    subtitle: 'Faculty',
  },
  {
    icon: MonitorSmartphone,
    title: 'Online & Offline',
    subtitle: 'Classes',
  },
  {
    icon: Baby,
    title: 'For All Ages',
    subtitle: 'Kids & Adults',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#FDF9F3' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4952B_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#D4952B' }}>
            WHY CHOOSE US
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
          >
            Excellence in Every Note
          </h2>
        </div>

        {/* 6 Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-5 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
                style={{ backgroundColor: '#FFF8EF', border: '1px solid rgba(212,149,43,0.15)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'rgba(212,149,43,0.12)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#D4952B' }} />
                </div>
                <h3
                  className="font-bold text-base md:text-lg leading-snug"
                  style={{ fontFamily: 'var(--font-poppins-var)', color: '#0A101C' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1 font-medium">{feature.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
