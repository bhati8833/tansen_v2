// src/components/layout/Header.tsx
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />
      <MainNav />
    </header>
  );
}
