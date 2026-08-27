// src/app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { CoursesGrid } from '@/components/sections/CoursesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Gallery } from '@/components/sections/Gallery';
import { Accreditation } from '@/components/sections/Accreditation';
import { OurPresence } from '@/components/sections/OurPresence';
import { Franchise } from '@/components/sections/Franchise';
import { BookDemo } from '@/components/sections/BookDemo';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesGrid />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Accreditation />
      <OurPresence />
      <Franchise />
      <BookDemo />
      <FAQ />
    </>
  );
}

