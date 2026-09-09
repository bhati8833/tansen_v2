// src/data/testimonials.ts

export interface StudentTestimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Celebrity {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const studentTestimonials: StudentTestimonial[] = [
  {
    id: 1,
    name: 'Stuti Tiwari',
    role: 'Fine & Arts Student',
    quote:
      'Highly recommended! Excellent dance training, supportive teachers, and a very professional setup. My child loves the classes and the environment is extremely safe',
    avatar: '/assets/students/stuti-tiwari.webp',
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    role: 'Guitar Student',
    quote:
      'Tansen Sangeet Mahavidyalaya has transformed my guitar playing completely. The structured curriculum and personal attention from faculty are unmatched.',
    avatar: '/assets/students/rohan-sharma.webp',
  },
  {
    id: 3,
    name: 'Arti Verma',
    role: 'Vocal Music Student',
    quote:
      'Learning Hindustani classical vocal at Tansen has been a deeply inspiring journey. The faculty is immensely patient and knowledgeable.',
    avatar: '/assets/students/arti.webp',
  },
];

export const celebrities: Celebrity[] = [
  {
    id: 1,
    name: 'Shri Annu Kapoor',
    role: 'Actor & Host',
    image: '/assets/testimonials/annu-kapoor.webp',
  },
  {
    id: 2,
    name: 'Late Smt. Saroj Khan',
    role: 'Choreographer',
    image: '/assets/testimonials/saroj-khan.webp',
  },
  {
    id: 3,
    name: 'Shri Shakti Kapoor',
    role: 'Veteran Actor',
    image: '/assets/testimonials/shakti-kapoor.webp',
  },
  {
    id: 4,
    name: 'Shri Ismail Darbar',
    role: 'Music Composer',
    image: '/assets/testimonials/ismail-darbar.webp',
  },
  {
    id: 5,
    name: 'Master Marzi Pestonji',
    role: 'Dance Maestro',
    image: '/assets/testimonials/marzi-pestonji.webp',
  },
];
