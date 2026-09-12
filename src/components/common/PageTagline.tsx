'use client';

import { usePathname } from 'next/navigation';

export function PageTagline() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <section className="py-8 bg-band-cool border-t border-gray-100">
      <div className="container-site text-center">
        <p className="text-2xl md:text-3xl font-poppins font-extrabold text-[#E37216]">
          Tansen Sangeet Mahavidyalaya
        </p>
        <p className="text-base md:text-lg font-medium text-sky-500 mt-1">
          ...A Complete Music & Dance School
        </p>
      </div>
    </section>
  );
}
