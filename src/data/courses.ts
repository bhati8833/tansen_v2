// src/data/courses.ts

export interface CourseCategoryInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Course {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  slug: string;
  fullSlug: string;
  image: string;
  coverImage?: string;
  description: string;
  duration: string;
  level: string;
}

export const courseCategories: CourseCategoryInfo[] = [
  {
    id: 'music',
    name: 'Music & Vocal',
    slug: 'music',
    description: 'Learn Hindustani classical vocal, light music, swar, alankar, and voice culture.'
  },
  {
    id: 'instruments',
    name: 'Instruments',
    slug: 'instruments',
    description: 'Master acoustic & electric instruments including Guitar, Keyboard, Drums, and Tabla.'
  },
  {
    id: 'dance',
    name: 'Dance',
    slug: 'dance',
    description: 'Express through grace and rhythm in Kathak classical and Western dance forms.'
  },
  {
    id: 'creative-arts',
    name: 'Creative Arts',
    slug: 'creative-arts',
    description: 'Explore drawing, sketching, painting, and visual arts creations.'
  }
];

export const courses: Course[] = [
  {
    id: 1,
    title: 'Classical Vocal Singing',
    category: 'Music',
    categorySlug: 'music',
    slug: 'classical-vocal-singing',
    fullSlug: '/courses/music/classical-vocal-singing',
    image: '/assets/courses/vocal-cover.webp',
    coverImage: '/assets/courses/vocal-cover.webp',
    description: 'Comprehensive Hindustani classical, light vocal, swar, alankar, ragas, voice culture, and modern singing techniques taught by veteran vocal gurus.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 2,
    title: 'Guitar',
    category: 'Instruments',
    categorySlug: 'instruments',
    slug: 'guitar',
    fullSlug: '/courses/instruments/guitar',
    image: '/assets/courses/guitar-cover.webp',
    coverImage: '/assets/courses/guitar-cover.webp',
    description: 'Acoustic guitar lessons covering posture, hand positioning, basic chords, strumming patterns, rhythm, melodies, riffs, and music theory.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 3,
    title: 'Keyboard / Piano',
    category: 'Instruments',
    categorySlug: 'instruments',
    slug: 'keyboard-piano',
    fullSlug: '/courses/instruments/keyboard-piano',
    image: '/assets/courses/keyboard-cover.webp',
    coverImage: '/assets/courses/keyboard-cover.webp',
    description: 'Learn musical notes, scales, chords, arpeggios, rhythm, music theory, hand coordination, finger techniques, melody, and chord progressions.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 4,
    title: 'Drums',
    category: 'Instruments',
    categorySlug: 'instruments',
    slug: 'drums',
    fullSlug: '/courses/instruments/drums',
    image: '/assets/courses/drums-cover.webp',
    coverImage: '/assets/courses/drums-cover.webp',
    description: 'Build your drumming skills through structured lessons, regular practice, and practical training. Develop rhythm, coordination, timing, control, and confidence.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 5,
    title: 'Tabla',
    category: 'Instruments',
    categorySlug: 'instruments',
    slug: 'tabla',
    fullSlug: '/courses/instruments/tabla',
    image: '/assets/courses/tabla-cover.webp',
    coverImage: '/assets/courses/tabla-cover.webp',
    description: 'Learn Tabla with structured guidance focused on rhythm, technique, coordination, taal and practical playing for beginners and experienced learners.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 6,
    title: 'Kathak',
    category: 'Dance',
    categorySlug: 'dance',
    slug: 'kathak',
    fullSlug: '/courses/dance/kathak',
    image: '/assets/courses/kathak-cover.webp',
    coverImage: '/assets/courses/kathak-cover.webp',
    description: 'Discover the grace, rhythm, expression, and storytelling of Kathak through structured training and regular practice in a supportive environment.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 7,
    title: 'Western Dance',
    category: 'Dance',
    categorySlug: 'dance',
    slug: 'western-dance',
    fullSlug: '/courses/dance/western-dance',
    image: '/assets/courses/western-dance-cover.webp',
    coverImage: '/assets/courses/western-dance-cover.webp',
    description: 'Explore movement, rhythm, choreography, and creative expression through structured Western Dance training at Tansen Sangeet Mahavidyalaya.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
  {
    id: 8,
    title: 'Fine Arts',
    category: 'Creative Arts',
    categorySlug: 'creative-arts',
    slug: 'fine-arts',
    fullSlug: '/courses/creative-arts/fine-arts',
    image: '/assets/courses/fine-arts-cover.webp',
    coverImage: '/assets/courses/fine-arts-cover.webp',
    description: 'Nurture creative expression with drawing, sketching, colour theory, painting, shading, still-life, nature scenery, and freehand art.',
    duration: '3 Months Onwards (for all courses)',
    level: 'Age 3+ (for all courses)',
  },
];
