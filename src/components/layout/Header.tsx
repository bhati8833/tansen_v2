'use client';

// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300">
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-14 opacity-100'
        }`}
      >
        <TopBar />
      </div>
      <MainNav />
    </header>
  );
}
