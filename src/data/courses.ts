// src/data/courses.ts
export interface Course {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  duration: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Western Dance',
    slug: 'western-dance-classes',
    image: '/assets/courses/Western-Dance.jpg',
    category: 'Dance',
    description: 'Master modern Western dance styles including Hip-Hop, Contemporary, Jazz, and Freestyle under expert guidance.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 2,
    title: 'Classical Dance',
    slug: 'classical-dance-course',
    image: '/assets/courses/dance.jpg',
    category: 'Dance',
    description: 'Immerse in grace and rhythm with authentic Kathak and Indian classical dance training certified by Prayag & Prachin Kala Kendra.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 3,
    title: 'Vocal Music',
    slug: 'vocal-singing-course',
    image: '/assets/courses/Vocal-Music.jpg',
    category: 'Music',
    description: 'Comprehensive Hindustani classical, light vocal, and modern singing techniques taught by veteran vocal gurus.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 4,
    title: 'Keyboard',
    slug: 'keyboard-course',
    image: '/assets/courses/keyboard.jpg',
    category: 'Music',
    description: 'Learn piano and electronic keyboard notation, music theory, scales, chords, and solo performance skills.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 5,
    title: 'Drums',
    slug: 'drum-classes',
    image: '/assets/courses/Drum.jpg',
    category: 'Music',
    description: 'Develop rhythmic precision, beat coordination, and percussion technique on acoustic and electric drum kits.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 6,
    title: 'Guitar',
    slug: 'guitar-classes',
    image: '/assets/courses/guitar.jpg',
    category: 'Music',
    description: 'Acoustic, electric, and bass guitar lessons covering chords, fingerpicking, tabs, lead solos, and music notation.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 7,
    title: 'Fine Arts',
    slug: 'fine-arts-course',
    image: '/assets/courses/fine-arts.jpg',
    category: 'Visual Arts',
    description: 'Nurture creative expression with professional sketch, oil painting, watercolor, clay modeling, and visual arts.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 8,
    title: 'Harmonium',
    slug: 'harmonium-classes',
    image: '/assets/courses/Harmonium.jpg',
    category: 'Music',
    description: 'Traditional harmonium technique for classical raagas, bhajans, kirtans, and vocal accompaniment.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 9,
    title: 'Tabla',
    slug: 'tabla-classes',
    image: '/assets/courses/tabla.jpg',
    category: 'Music',
    description: 'Master Indian classical percussion, taals, bols, and rhythm theory with structured certification examinations.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
];
