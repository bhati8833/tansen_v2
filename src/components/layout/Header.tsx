'use client';

// src/components/layout/Header.tsx
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 w-full bg-white">
        <MainNav />
      </header>
    </>
  );
}
