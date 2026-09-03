'use client';

// src/components/sections/Stats.tsx
import { useEffect, useRef, useState } from 'react';
import { Shield, Users, MapPin, Award } from 'lucide-react';
import { siteContent } from '@/data/site-content';

const icons = [Shield, Users, MapPin, Award];

function formatNumber(num: number): string {
  if (num >= 100000) return (num / 1000).toFixed(0) + ',000';
  return num.toLocaleString('en-IN');
}

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  return (
    <div className="text-4xl md:text-5xl font-bold" style={{ color: '#D4952B' }}>
      {value}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section style={{ backgroundColor: '#0A101C' }} className="py-14">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteContent.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center text-white flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(227,114,22,0.15)' }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#E37216' }} />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-medium" style={{ color: '#9ca3af' }}>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
