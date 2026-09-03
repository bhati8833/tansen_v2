// src/data/blog.ts

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Cognitive & Mental Health Benefits of Learning Classical Music',
    slug: 'benefits-of-learning-classical-music',
    excerpt: 'Discover how practicing Indian Hindustani vocal & classical instruments enhances memory, concentration, emotional resilience, and brain development.',
    content: `
      <p>Music is far more than an art form — it is one of the most powerful workouts for the human brain. Decades of cognitive science research demonstrate that active musical training engages every major area of the central nervous system simultaneously.</p>
      
      <h3>1. Enhanced Neuroplasticity and Memory Retention</h3>
      <p>Learning Hindustani Classical Raagas and intricate Taal structures builds strong neural pathways. Musician students exhibit significantly higher verbal memory recall and spatial reasoning capacities compared to non-musicians.</p>

      <h3>2. Stress Reduction and Emotional Balance</h3>
      <p>Singing or playing soothing instruments like Hindustani Vocal, Flute, or Harmonium lowers cortisol levels and promotes alpha brainwaves associated with deep relaxation and meditative focus.</p>

      <h3>3. Discipline and Motor Coordination</h3>
      <p>Playing instruments such as Guitar, Keyboard, or Tabla requires complex hand-eye coordination, fine motor dexterity, and strict rhythmic discipline.</p>

      <h3>4. Boosting Academic and Analytical Performance</h3>
      <p>Studies consistently reveal that children engaged in structured music education score higher in mathematical problem-solving and linguistic comprehension.</p>
    `,
    coverImage: '/assets/courses/vocal-cover.jpg',
    author: 'Pandit Shastri',
    date: 'August 14, 2026',
    readTime: '4 min read',
    category: 'Music Theory',
    tags: ['Vocal', 'Brain Health', 'Classical Music', 'Education'],
  },
  {
    id: 2,
    title: 'Kathak & Indian Classical Dance: A Journey Through Grace and Rhythm',
    slug: 'kathak-classical-dance-journey',
    excerpt: 'Explore the storytelling heritage, Tatkar footwork, and expressive Abhinaya that make Kathak one of the most celebrated classical dance forms worldwide.',
    content: `
      <p>Derived from the Sanskrit word <em>Katha</em> (meaning story), Kathak is the legendary classical dance form of Northern India. At Tansen Sangeet Mahavidyalaya, our Kathak curriculum follows the prestigious syllabus of Prayag Sangit Samiti & Pracheen Kala Kendra.</p>

      <h3>The Foundation of Kathak: Tatkar & Chakkars</h3>
      <p>Every Kathak dancer starts with mastering <strong>Tatkar</strong> — the intricate footwork executed in synchronization with the Tabla or Pakhawaj. Rapid spins, known as <em>Chakkars</em>, showcase balance, control, and rhythm.</p>

      <h3>Nava Rasas and Emotional Expression</h3>
      <p>Through <em>Abhinaya</em>, dancers convey nine fundamental human emotions (Nava Rasas). This expressive art form nurtures deep emotional intelligence and confidence in young performers.</p>
    `,
    coverImage: '/assets/courses/kathak-cover.png',
    author: 'Vidushi Sunita Sharma',
    date: 'July 28, 2026',
    readTime: '5 min read',
    category: 'Dance',
    tags: ['Kathak', 'Classical Dance', 'Culture', 'Indian Art'],
  },
  {
    id: 3,
    title: 'Beginners Guide to Buying Your First Guitar & Keyboard',
    slug: 'beginners-guide-buying-first-instrument',
    excerpt: 'Essential tips from Tansen senior faculty on choosing acoustic vs electric guitars and selecting the right 61-key touch sensitive keyboard for music lessons.',
    content: `
      <p>Starting your musical voyage begins with selecting the right instrument. Here is an official guide compiled by Tansen senior instrument faculty to help students select their first Guitar or Keyboard.</p>

      <h3>Choosing Your First Guitar</h3>
      <p>For beginners, an <strong>Acoustic Dreadnought or Concert Guitar</strong> with nylon or medium gauge steel strings is ideal. Ensure proper action height so fingers do not strain while learning basic chords.</p>

      <h3>Choosing Your First Keyboard</h3>
      <p>Look for a keyboard with at least <strong>61 full-sized keys</strong> and touch-sensitive dynamic response. Brands like Yamaha, Casio, and Roland offer excellent starter models equipped with sustain pedal compatibility.</p>
    `,
    coverImage: '/assets/courses/guitar-cover.png',
    author: 'Mahesh Kumar',
    date: 'June 19, 2026',
    readTime: '6 min read',
    category: 'Instruments',
    tags: ['Guitar', 'Keyboard', 'Beginner Guide', 'Instruments'],
  },
];
