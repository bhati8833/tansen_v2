// src/data/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Annu Kapoor',
    title: 'Renowned Actor, Host & Music Connoisseur',
    image: '/assets/testimonials/annu-kapoor.webp',
    quote:
      'Tansen Sangeet Mahavidyalaya is doing extraordinary work in preserving and propagating classical Indian music and performing arts across generations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Late Shri Mati Saroj Khan',
    title: 'Legendary Bollywood Choreographer',
    image: '/assets/testimonials/saroj-khan.webp',
    quote:
      'A wonderful institution that genuinely cares about students. The discipline in dance and passion for arts here is truly inspirational.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Shakti Kapoor',
    title: 'Veteran Film Actor',
    image: '/assets/testimonials/shakti-kapoor.webp',
    quote:
      'I highly recommend Tansen Sangeet Mahavidyalaya to every young artist. Their systematic curriculum and expert faculty make learning music a joy.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ismail Darbar',
    title: 'Acclaimed Bollywood Music Director',
    image: '/assets/testimonials/ismail-darbar.webp',
    quote:
      'Tansen’s contribution to nurturing young musical talent is unparalleled. Their student performances reflect true classical rigor and soul.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Marzi Pestonji',
    title: 'Celebrity Dance Judge & Choreographer',
    image: '/assets/testimonials/marzi-pestonji.webp',
    quote:
      'The energy and technical perfection of Tansen dance students is exceptional. A top-tier academy for western and classical dance enthusiasts.',
    rating: 5,
  },
];

export const celebrities = [
  {
    id: 1,
    name: 'Annu Kapoor',
    title: 'Bollywood Host & Singer',
    image: '/assets/testimonials/annu-kapoor.webp',
  },
  {
    id: 2,
    name: 'Late Shri Mati Saroj Khan',
    title: 'Legendary Choreographer',
    image: '/assets/testimonials/saroj-khan.webp',
  },
  {
    id: 3,
    name: 'Shakti Kapoor',
    title: 'Veteran Film Actor',
    image: '/assets/testimonials/shakti-kapoor.webp',
  },
  {
    id: 4,
    name: 'Ismail Darbar',
    title: 'Music Composer',
    image: '/assets/testimonials/ismail-darbar.webp',
  },
  {
    id: 5,
    name: 'Marzi Pestonji',
    title: 'Dance Maestro',
    image: '/assets/testimonials/marzi-pestonji.webp',
  },
];
