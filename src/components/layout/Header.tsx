'use client';

// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          scrolled ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
        }`}
      >
        <div className="overflow-hidden">
          <TopBar />
        </div>
      </div>
      <MainNav />
    </header>
  );
}
