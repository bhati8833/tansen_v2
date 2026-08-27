// src/data/courses.ts
export interface Course {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  duration?: string;
  level?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Vocal Singing',
    slug: 'vocal-singing-course',
    image: '/assets/courses/Vocal-Music.jpg',
    category: 'Music',
    description: 'Learn classical and modern vocal techniques from expert instructors. Master Hindustani and Carnatic vocal traditions.',
    duration: '3-12 Months',
    level: 'Beginner to Advanced',
  },
  {
    id: 2,
    title: 'Dance',
    slug: 'dance-course',
    image: '/assets/courses/dance.jpg',
    category: 'Dance',
    description: 'Master various dance forms including Bollywood, Hip-Hop, Classical Kathak, and Contemporary styles.',
    duration: '3-12 Months',
    level: 'All Levels',
  },
  {
    id: 3,
    title: 'Drum',
    slug: 'drum-classes',
    image: '/assets/courses/Drum.jpg',
    category: 'Music',
    description: 'Learn rhythm and percussion from professional drummers. Western and fusion drumming styles covered.',
    duration: '3-12 Months',
    level: 'Beginner to Advanced',
  },
  {
    id: 4,
    title: 'Fine Arts',
    slug: 'fine-arts-course',
    image: '/assets/courses/fine-arts.jpg',
    category: 'Visual Arts',
    description: 'Explore your creativity with painting, drawing, sketching, and mixed media art forms.',
    duration: '3-12 Months',
    level: 'All Levels',
  },
  {
    id: 5,
    title: 'Guitar',
    slug: 'guitar-classes',
    image: '/assets/courses/guitar.jpg',
    category: 'Music',
    description: 'Master acoustic and electric guitar from beginner to advanced. Learn chords, scales, and popular songs.',
    duration: '3-12 Months',
    level: 'Beginner to Advanced',
  },
  {
    id: 6,
    title: 'Harmonium',
    slug: 'harmonium-classes',
    image: '/assets/courses/Harmonium.jpg',
    category: 'Music',
    description: 'Learn the art of harmonium playing for devotional and classical music. Ideal for Bhajans and Kirtan.',
    duration: '3-12 Months',
    level: 'Beginner to Intermediate',
  },
  {
    id: 7,
    title: 'Tabla',
    slug: 'tabla-classes',
    image: '/assets/courses/tabla.jpg',
    category: 'Music',
    description: 'Master the rhythmic foundation of Indian classical music with expert tabla training.',
    duration: '3-12 Months',
    level: 'All Levels',
  },
  {
    id: 8,
    title: 'Keyboard',
    slug: 'keyboard-course',
    image: '/assets/courses/keyboard.jpg',
    category: 'Music',
    description: 'Learn keyboard and piano playing. From basic notes to complex compositions and music theory.',
    duration: '3-12 Months',
    level: 'Beginner to Advanced',
  },
  {
    id: 9,
    title: 'Western Dance',
    slug: 'western-dance-classes',
    image: '/assets/courses/Western-Dance.jpg',
    category: 'Dance',
    description: 'Explore Hip-Hop, Contemporary, Jazz, and Freestyle dance with experienced instructors.',
    duration: '3-12 Months',
    level: 'All Levels',
  },
];
