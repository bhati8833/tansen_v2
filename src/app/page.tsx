import { Hero } from '@/components/sections/Hero';
import { CoursesGrid } from '@/components/sections/CoursesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CelebrityRecognition } from '@/components/sections/CelebrityRecognition';
import { StudentSuccessStories } from '@/components/sections/StudentSuccessStories';
import { Gallery } from '@/components/sections/Gallery';
import { Accreditation } from '@/components/sections/Accreditation';
import { BookDemo } from '@/components/sections/BookDemo';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesGrid />
      <WhyChooseUs />
      <CelebrityRecognition />
      <StudentSuccessStories />
      <Gallery />
      <Accreditation />
      <BookDemo />
      <FAQ />
    </>
  );
}

