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
    name: 'Anu Kapoor',
    title: 'Renowned Bollywood Host & Singer',
    image: '/assets/testimonials/anu-kapoor.jpg',
    quote:
      'Tansen Sangeet Mahavidyalaya is doing excellent work in nurturing musical talent across India. Their dedication to preserving Indian classical music tradition is commendable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Saroj Khan',
    title: 'Legendary Bollywood Choreographer',
    image: '/assets/testimonials/saroj_khan.jpg',
    quote:
      'A wonderful institution that genuinely cares about students. The quality of teaching and the passion for arts is extraordinary. I highly recommend Tansen to aspiring artists.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Master Ji',
    title: 'Classical Music Maestro',
    image: '/assets/testimonials/master-ji.jpg',
    quote:
      'I recommend Tansen Sangeet Mahavidyalaya to anyone serious about music and dance education. Their systematic approach and experienced faculty make all the difference.',
    rating: 5,
  },
];

export const celebrities = [
  {
    id: 1,
    name: 'Anu Kapoor',
    title: 'Bollywood Host & Singer',
    image: '/assets/testimonials/anu-kapoor.jpg',
  },
  {
    id: 2,
    name: 'Saroj Khan',
    title: 'Legendary Choreographer',
    image: '/assets/testimonials/saroj_khan.jpg',
  },
];
