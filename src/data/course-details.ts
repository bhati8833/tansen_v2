// src/data/course-details.ts — Unified Course Data Schema for Design System

export interface LearningModule {
  iconName: string;
  title: string;
  description: string;
}

export interface LearningStep {
  step: string;
  title: string;
  description: string;
}

export interface CourseFAQItem {
  question: string;
  answer: string;
}

export interface DetailedCourseData {
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  locationTitle: string; // e.g. "Keyboard & Piano Classes in Gurugram"
  tagline: string;
  heroDescription: string;
  introTitle: string;
  introDescription: string[];
  whatIsTitle: string;
  whatIsDescription: string[];
  heroImage: string;
  introImage: string;
  learningModules: LearningModule[];
  highlights: string[];
  audienceCards: Array<{
    title: string;
    description: string;
  }>;
  whyChooseFeatures: Array<{
    title: string;
    description: string;
  }>;
  learningJourney: LearningStep[];
  schedule: {
    weeklyHours: string;
    frequency: string;
    batchTimings: string;
    ageGroup: string;
  };
  certification?: {
    show: boolean;
    title: string;
    description: string;
    affiliations: string[];
  };
  galleryImages: string[];
  faqs: CourseFAQItem[];
  seoTitle: string;
  metaDescription: string;
}

export const detailedCoursesData: Record<string, DetailedCourseData> = {
  'classical-vocal-singing': {
    slug: 'classical-vocal-singing',
    categorySlug: 'music',
    categoryName: 'Music & Vocal',
    title: 'Classical Vocal Singing',
    locationTitle: 'Classical Vocal Singing Classes in Gurugram',
    tagline: 'Learn Indian Classical Vocal Music with Structured Training',
    heroDescription: 'Discover the rich and timeless tradition of Indian Classical Vocal Music with structured training at Tansen Sangeet Mahavidyalaya, Gurugram. Our Classical Vocal Singing program is designed for students who want to develop a strong foundation in Indian classical music while improving their voice, pitch, rhythm, musical understanding, and stage confidence.',
    introTitle: 'Indian Classical Vocal Heritage',
    introDescription: [
      'Indian Classical Vocal Music is a traditional form of music built around concepts such as Swar, Raga, Taal, Laya, Aroh, Avroh, and musical expression.',
      'Learning classical vocals helps students understand the fundamentals of music and develop control over their voice, pitch, rhythm, and expression.',
      'At Tansen Sangeet Mahavidyalaya, students are introduced to these concepts through structured learning and regular practice.'
    ],
    whatIsTitle: 'What is Classical Vocal Singing?',
    whatIsDescription: [
      'Classical Vocal Singing is the foundation of Indian music traditions, focusing on voice culture, pitch accuracy, breathing techniques, and ragas. Through structured training in Swars and Alankars, learners build a versatile voice capable of performing both classical and light music forms.'
    ],
    heroImage: '/assets/courses/vocal-cover.jpg',
    introImage: '/assets/courses/vocal-inside.jpg',
    learningModules: [
      { iconName: 'Music', title: 'Swar & Alankar', description: 'Students practice Sa, Re, Ga, Ma, Pa, Dha, Ni and various Alankar patterns for pitch precision and vocal agility.' },
      { iconName: 'Sparkles', title: 'Raga Introduction', description: 'Basic concepts of Ragas, their characteristics, notes, and how to evoke authentic musical expressions.' },
      { iconName: 'Clock', title: 'Taal & Laya', description: 'Understanding rhythm, tempo, beat structures (Teental, Dadra, Keherwa) and Developing rhythmic control.' },
      { iconName: 'BookOpen', title: 'Aroh, Avroh & Pakad', description: 'Mastering the ascending, descending, and catchphrase note patterns of essential morning and evening Ragas.' },
      { iconName: 'Mic', title: 'Voice Culture & Control', description: 'Specialized breathing exercises, vocal warmups, and range expansion to develop healthy singing habits.' },
      { iconName: 'Flame', title: 'Bollywood & Light Music', description: 'Applying classical vocal techniques to semi-classical, ghazals, bhajans, and Bollywood melodies.' },
      { iconName: 'Award', title: 'Stage Performance', description: 'Recital presentation, microphone handling, stage presence, and confidence building for concerts.' }
    ],
    highlights: [
      'Indian Classical Music Fundamentals',
      'Swar Practice',
      'Alankar & Vocal Exercises',
      'Introduction to Ragas',
      'Taal & Laya',
      'Aroh, Avroh & Pakad',
      'Voice Culture',
      'Breathing Techniques',
      'Pitch & Rhythm Development',
      'Bollywood & Light Music',
      'Musical Expression',
      'Stage Performance Preparation'
    ],
    audienceCards: [
      { title: 'Beginners', description: 'No previous musical training required. Start with fundamental Swars and Alankars step-by-step.' },
      { title: 'Young Learners (3+)', description: 'Children develop pitch sensitivity, focus, and musical understanding through engaging practice.' },
      { title: 'Experienced Students', description: 'Refine voice control, advanced Raga improvisation, bandish compositions, and exam preparation.' },
      { title: 'Adults', description: 'Pursue singing as a creative hobby, stress-buster, or structured artistic journey.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Progress through systematic levels and regular practice rather than just memorizing songs.' },
      { title: 'Student-Focused Guidance', description: 'Personalized attention tailored to age, learning speed, and individual vocal pitch range.' },
      { title: 'Strong Musical Foundation', description: 'Deep understanding of Swar, Raga, Taal, Laya, and classical theory.' },
      { title: 'Performance Opportunities', description: 'Annual academy recitals, stage showcases, and cultural events to build live performance confidence.' },
      { title: 'Free Demo Class', description: 'Experience the faculty methodology and studio environment firsthand before enrolling.' }
    ],
    learningJourney: [
      { step: '01', title: 'Foundation', description: 'Basic Swars, pitch alignment, posture, and simple breathing warmups.' },
      { step: '02', title: 'Practice', description: 'Daily Alankar drills, scale exercises, and basic Taal rhythm comprehension.' },
      { step: '03', title: 'Skill Development', description: 'Raga structures, Aroh-Avroh, Pakad, and voice range expansion.' },
      { step: '04', title: 'Musical Expression', description: 'Light music, Bollywood song adaptation, and expressive ornamentations.' },
      { step: '05', title: 'Performance', description: 'Live stage recitals, examination certification, and audience presentation.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 Hours / Week',
      frequency: 'Regular Batches (Weekday & Weekend options)',
      batchTimings: 'Flexible timings based on availability',
      ageGroup: '3+ Years to Adults'
    },
    certification: {
      show: true,
      title: 'Certification & Examination Pathways',
      description: 'Tansen Sangeet Mahavidyalaya is associated with recognized performing arts examination boards, including Prayag Sangeet Samiti and Trinity College London.',
      affiliations: ['Prayag Sangeet Samiti', 'Trinity College London Associated']
    },
    galleryImages: [
      '/assets/courses/vocal-cover.jpg',
      '/assets/courses/vocal-inside.jpg',
      '/assets/hero-bg.jpg',
      '/assets/gallery/hero-student.jpeg'
    ],
    faqs: [
      { question: 'Is Classical Vocal Singing suitable for beginners?', answer: 'Yes. Beginners can start the course without previous musical training. Students begin with Swar and Alankars.' },
      { question: 'What age can children start Classical Vocal Singing?', answer: 'Students can join from 3+ years, with teaching adapted according to their age and learning ability.' },
      { question: 'Will I learn Bollywood songs too?', answer: 'Yes. The program includes exposure to Bollywood and Light Music along with classical fundamentals.' },
      { question: 'Do students get stage performance opportunities?', answer: 'Yes. Students are encouraged to participate in annual recitals and cultural programs.' },
      { question: 'Is a demo class available?', answer: 'Yes. A free demo class is available for students and parents before enrolling.' },
      { question: 'How many hours per week are classes?', answer: 'Students are required to complete a minimum of 2 hours per week.' }
    ],
    seoTitle: 'Classical Vocal Singing Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Learn Indian Classical Vocal Singing in Gurugram with structured training in Swar, Raga, Taal, Laya, Alankar and voice culture. Book a free demo class today.'
  },

  'fine-arts': {
    slug: 'fine-arts',
    categorySlug: 'creative-arts',
    categoryName: 'Creative Arts',
    title: 'Fine Arts',
    locationTitle: 'Fine Arts Classes in Gurugram',
    tagline: 'Explore Creativity Through Art',
    heroDescription: 'Discover the joy of drawing, sketching, painting, and creative expression with the Fine Arts program at Tansen Sangeet Mahavidyalaya, Gurugram. Our Fine Arts program provides students with a creative and supportive environment where they can explore their imagination, develop artistic skills, and express their ideas through different forms of visual art.',
    introTitle: 'Visual Art & Creative Expression',
    introDescription: [
      'Fine Arts is a form of creative expression that allows students to communicate ideas, imagination, observations, and emotions through visual art.',
      'Our Fine Arts program focuses on developing fundamental artistic skills while encouraging students to experiment, explore, and develop their own creative style.',
      'Students are introduced to drawing, sketching, colour, painting, composition, shading, and imaginative art through guided learning and regular practice.'
    ],
    whatIsTitle: 'What is Fine Arts?',
    whatIsDescription: [
      'Fine Arts encompasses visual disciplines including pencil sketching, shading, colour theory, acrylics, watercolours, still life, and imaginative composition. It builds visual observation, spatial understanding, patience, and fine motor precision.'
    ],
    heroImage: '/assets/courses/fine-arts-cover.jpg',
    introImage: '/assets/courses/fine-arts-cover.jpg',
    learningModules: [
      { iconName: 'Brush', title: 'Drawing & Sketching', description: 'Fundamentals of pencil grip, line control, observation, proportion, and object layout.' },
      { iconName: 'Shapes', title: 'Shapes, Lines & Forms', description: 'Exploring 2D shapes, 3D forms, geometric lines, and realistic spatial proportions.' },
      { iconName: 'Palette', title: 'Colour Theory & Mixing', description: 'Understanding primary/secondary colors, warm/cool palettes, and custom shade mixing.' },
      { iconName: 'Layers', title: 'Painting & Mediums', description: 'Techniques in watercolours, poster paints, acrylics, and pastels on paper and canvas.' },
      { iconName: 'Sun', title: 'Shading & Highlighting', description: 'Using graphite grades, cross-hatching, and light source awareness to create depth and texture.' },
      { iconName: 'Eye', title: 'Still Life & Objects', description: 'Observing and sketching real-world objects, fruits, vases, and still-life setups.' },
      { iconName: 'Sparkles', title: 'Nature & Scenery', description: 'Translating landscapes, trees, skies, and environmental compositions onto canvas.' },
      { iconName: 'Award', title: 'Creative & Freehand Art', description: 'Freehand sketching, imaginative artwork, and developing a distinct personal artistic style.' }
    ],
    highlights: [
      'Drawing & Sketching Fundamentals',
      'Shapes, Lines & Forms',
      'Understanding Proportions',
      'Colour Theory',
      'Colour Mixing',
      'Painting Techniques',
      'Exploring Different Art Mediums',
      'Shading & Highlighting',
      'Creating Depth',
      'Still Life Drawing',
      'Object Drawing',
      'Nature & Scenery',
      'Creative Compositions',
      'Freehand Art',
      'Imaginative Art',
      'Developing Individual Artistic Style'
    ],
    audienceCards: [
      { title: 'Children', description: 'Young learners explore imagination through drawing, colors, shapes, and engaging artistic activities.' },
      { title: 'Beginners', description: 'No previous art experience required. Start with basic pencil lines and build skills progressively.' },
      { title: 'Creative Learners', description: 'Students with existing interest refine their sketching precision, painting techniques, and composition.' },
      { title: 'Adults', description: 'Explore Fine Arts as a creative, relaxing, and fulfilling artistic journey.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Progressive curriculum covering fundamentals before moving to complex oil/acrylic paintings.' },
      { title: 'Creative Environment', description: 'A supportive studio space that encourages experimentation and personal expression.' },
      { title: 'Focus on Fundamentals', description: 'Strong grounding in lines, shapes, proportions, light shading, and color harmony.' },
      { title: 'Individual Expression', description: 'Encouragement to develop personal artistic taste and unique visual style.' },
      { title: 'Regular Practice', description: 'Enhances observation, concentration, patience, and visual attention to detail.' },
      { title: 'Free Demo Class', description: 'Experience the studio environment and instructor guidance firsthand before enrolling.' }
    ],
    learningJourney: [
      { step: '01', title: 'Explore', description: 'Understanding basic artistic concepts, lines, shapes, and visual observation.' },
      { step: '02', title: 'Learn', description: 'Mastering proportions, colour theory, shading gradients, and medium techniques.' },
      { step: '03', title: 'Practice', description: 'Guided practice through still life, nature compositions, and object drawings.' },
      { step: '04', title: 'Create', description: 'Applying techniques to construct original paintings and freehand artwork.' },
      { step: '05', title: 'Express', description: 'Developing individual creative style and presenting artwork in exhibitions.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 Hours / Week',
      frequency: 'Regular Batches (Weekday & Weekend options)',
      batchTimings: 'Flexible timings based on availability',
      ageGroup: '3+ Years to Adults'
    },
    certification: {
      show: true,
      title: 'Art Exhibitions & Certification',
      description: 'Students get opportunities to display their creative work in academy exhibitions and pursue certified diploma examinations.',
      affiliations: ['Prayag Sangeet Samiti Art Affiliated', 'Annual Art Showcases']
    },
    galleryImages: [
      '/assets/courses/fine-arts-cover.jpg',
      '/assets/hero-bg.jpg',
      '/assets/gallery/hero-student.jpeg'
    ],
    faqs: [
      { question: 'Is Fine Arts suitable for beginners?', answer: 'Yes. Beginners are welcome and do not need previous art training to start learning.' },
      { question: 'What age can students join Fine Arts classes?', answer: 'Tansen Sangeet Mahavidyalaya welcomes learners from 3+ years to adults.' },
      { question: 'What will students learn in Fine Arts?', answer: 'Students learn drawing, sketching, colour theory, painting, shading, still life, nature, and imaginative art.' },
      { question: 'Do students need to bring their own art materials?', answer: 'Our team will guide you on the simple sketchbooks and pencil/paint sets needed for class.' },
      { question: 'Can beginners attend a demo class?', answer: 'Yes. A free demo class is available for students and parents before enrolling.' },
      { question: 'How many hours per week are classes?', answer: 'Students are required to complete a minimum of 2 hours per week.' }
    ],
    seoTitle: 'Fine Arts Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Explore drawing, sketching, colour theory, painting, shading, still life, and creative art in Gurugram with Tansen Sangeet Mahavidyalaya. Book a free demo class today.'
  },

  'guitar': {
    slug: 'guitar',
    categorySlug: 'instruments',
    categoryName: 'Instruments',
    title: 'Guitar',
    locationTitle: 'Guitar Classes in Gurugram',
    tagline: 'Learn Guitar with Structured Training & Practical Guidance',
    heroDescription: 'Discover the joy of playing guitar with the Guitar program at Tansen Sangeet Mahavidyalaya, Gurugram. Our Guitar course is designed to help students build a strong foundation in guitar playing through a combination of practical training and basic music theory. Students learn proper playing techniques, chords, rhythm, melodies, and songs while developing coordination, timing, and musical confidence.',
    introTitle: 'Structured Guitar Training & Practical Guidance',
    introDescription: [
      'Learning guitar involves developing both practical playing skills and an understanding of basic musical concepts.',
      'Students gradually learn how to hold and play the instrument correctly, develop finger coordination, understand chords and scales, follow rhythm and timing, and apply these skills while playing melodies and songs.',
      'At Tansen Sangeet Mahavidyalaya, our Guitar program combines guided practice with music fundamentals to help students develop confidence and musicality.'
    ],
    whatIsTitle: 'What is Guitar Learning?',
    whatIsDescription: [
      'Learning guitar involves developing both practical playing skills and an understanding of basic musical concepts. Students gradually learn how to hold and play the instrument correctly, develop finger coordination, understand chords and scales, follow rhythm and timing, and apply these skills while playing melodies and songs.'
    ],
    heroImage: '/assets/courses/guitar-cover.png',
    introImage: '/assets/courses/guitar-cover.png',
    learningModules: [
      { iconName: 'Music', title: 'Acoustic Guitar Playing', description: 'Students are introduced to acoustic guitar playing and develop basic skills to play comfortably and confidently.' },
      { iconName: 'Sparkles', title: 'Posture & Hand Positioning', description: 'Correct posture, hand positioning, and playing techniques to build proper lifelong playing habits.' },
      { iconName: 'BookOpen', title: 'Chords & Chord Progressions', description: 'Students learn basic guitar chords and chord progressions, understanding how chords accompany songs.' },
      { iconName: 'Clock', title: 'Strumming Patterns', description: 'Practicing different strumming patterns and rhythm techniques to develop steady timing and coordination.' },
      { iconName: 'Flame', title: 'Melodies, Riffs & Songs', description: 'Learning to play melodies, simple riffs, and popular songs while applying lesson techniques.' },
      { iconName: 'Award', title: 'Rhythm & Timing', description: 'Developing a strong sense of rhythm and timing while playing with consistent tempo and musicality.' },
      { iconName: 'Layers', title: 'Music Theory & Scales', description: 'Introduction to basic music theory and scales to develop a better understanding of how music works.' },
      { iconName: 'Shapes', title: 'Finger Exercises & Coordination', description: 'Regular finger exercises to develop hand coordination and improve fretboard control.' },
      { iconName: 'Sun', title: 'Genres & Playing Styles', description: 'Exploring different musical genres and playing styles for a well-rounded guitar approach.' }
    ],
    highlights: [
      'Acoustic Guitar Playing',
      'Correct Posture & Hand Position',
      'Basic Guitar Chords',
      'Chord Progressions',
      'Strumming Patterns',
      'Rhythm Techniques',
      'Melodies & Riffs',
      'Simple Songs',
      'Rhythm & Timing',
      'Basic Music Theory',
      'Scales',
      'Finger Exercises',
      'Hand Coordination',
      'Different Genres',
      'Different Playing Styles',
      'Musicality & Confidence'
    ],
    audienceCards: [
      { title: 'Kids', description: 'Young learners develop musical interest, hand-eye coordination, rhythm, and confidence.' },
      { title: 'Beginners', description: 'Complete beginners can start from the fundamentals without previous guitar experience.' },
      { title: 'Experienced Learners', description: 'Students who know the basics refine technique, rhythm, chords, scales, and musicality.' },
      { title: 'Adults', description: 'Adults can learn guitar as a creative hobby, personal interest, or serious musical pursuit.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Progress through fundamental guitar techniques and musical concepts in a structured manner.' },
      { title: 'Practical Training', description: 'The course focuses on practical guitar playing along with essential music theory.' },
      { title: 'Strong Foundation', description: 'Develop a foundation in chords, rhythm, timing, scales, melodies, and playing techniques.' },
      { title: 'Regular Practice', description: 'Consistent practice improves finger coordination, rhythm, timing, and overall control.' },
      { title: 'Student-Focused Approach', description: 'Learning progresses according to the student\'s existing level and learning ability.' },
      { title: 'Performance Confidence', description: 'Develop confidence through individual and group performance opportunities.' },
      { title: 'Free Demo Class', description: 'Experience the learning environment through a free demo class before enrollment.' }
    ],
    learningJourney: [
      { step: '01', title: 'Foundation', description: 'Developing basic posture, instrument hold, single-note picking, and hand coordination.' },
      { step: '02', title: 'Technique', description: 'Fretting finger placement, hand warmups, and initial string navigation exercises.' },
      { step: '03', title: 'Chords', description: 'Learning open major and minor chords, chord switches, and simple progressions.' },
      { step: '04', title: 'Rhythm', description: 'Strumming patterns, 4/4 timing, metronome drills, and rhythm synchronization.' },
      { step: '05', title: 'Songs', description: 'Playing melodies, iconic guitar riffs, Bollywood songs, and pop covers.' },
      { step: '06', title: 'Musicality', description: 'Expressive playing, solo riffs, stage confidence, and exam certification pathways.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 Hours / Week',
      frequency: 'Regular Batches (Weekday & Weekend options)',
      batchTimings: 'Flexible timings based on availability',
      ageGroup: '3+ Years to Adults'
    },
    certification: {
      show: true,
      title: 'Trinity College London & Prayag Affiliations',
      description: 'Associated with recognized organizations providing opportunities for structured examination and certification programs.',
      affiliations: ['Trinity College London Associated', 'Prayag Sangeet Samiti']
    },
    galleryImages: [
      '/assets/courses/guitar-cover.png',
      '/assets/hero-bg.jpg',
      '/assets/gallery/hero-student.jpeg'
    ],
    faqs: [
      { question: 'Is Guitar suitable for beginners?', answer: 'Yes. Beginners can start from the fundamentals without previous guitar training.' },
      { question: 'What age can students join Guitar classes?', answer: 'Tansen Sangeet Mahavidyalaya welcomes learners from 3+ years to adults, with teaching adapted according to age and learning ability.' },
      { question: 'What type of guitar is taught?', answer: 'The course includes Acoustic Guitar Playing along with fundamental guitar techniques and music concepts.' },
      { question: 'What will I learn in Guitar classes?', answer: 'Students learn posture, hand positioning, chords, chord progressions, strumming patterns, rhythm, melodies, riffs, songs, basic music theory, scales, finger exercises, and different playing styles.' },
      { question: 'Do I need to bring my own guitar?', answer: 'Students may be advised to have access to a guitar for regular practice. Our team can guide you regarding instrument requirements.' },
      { question: 'Is a demo class available?', answer: 'Yes. Students can enquire about a free demo class before enrolling.' },
      { question: 'How many hours per week are Guitar classes?', answer: 'Students are required to complete a minimum of 2 hours per week. Exact timings depend on batch availability.' },
      { question: 'Can students perform on stage?', answer: 'Yes. Students are encouraged to participate in individual and group performances, events, and cultural programs.' }
    ],
    seoTitle: 'Guitar Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Learn Guitar in Gurugram with structured training in posture, chords, strumming patterns, melodies, riffs, songs, and music theory. Book a free demo class today.'
  },

  'keyboard-piano': {
    slug: 'keyboard-piano',
    categorySlug: 'instruments',
    categoryName: 'Instruments',
    title: 'Keyboard / Piano',
    locationTitle: 'Keyboard & Piano Classes in Gurugram',
    tagline: 'Learn Keyboard & Piano with Structured Training',
    heroDescription: 'Build a strong foundation in Keyboard and Piano through structured lessons, regular practice, and practical guidance. Develop your hand coordination, rhythm, musical understanding, and expression while learning to play musical pieces and songs.',
    introTitle: 'Structured Keyboard & Piano Training',
    introDescription: [
      'Keyboard and Piano learning introduces students to the fundamentals of playing while developing a strong understanding of music. Students learn correct hand positioning, musical notes, rhythm, scales, chords, and basic music theory.',
      'Our program is designed for beginners as well as learners who want to strengthen their existing skills. Learning progresses according to the student\'s level, ability, and pace.'
    ],
    whatIsTitle: 'What is Keyboard & Piano Learning?',
    whatIsDescription: [
      'Keyboard and Piano learning introduces students to the fundamentals of playing while developing a strong understanding of music. Students learn correct hand positioning, musical notes, rhythm, scales, chords, and basic music theory.'
    ],
    heroImage: '/assets/courses/keyboard-cover.png',
    introImage: '/assets/courses/keyboard-cover.png',
    learningModules: [
      { iconName: 'Music', title: 'Introduction to Keyboard & Piano', description: 'Understand the instrument, its fundamentals, white and black keys, and basic playing techniques.' },
      { iconName: 'Sparkles', title: 'Posture & Finger Techniques', description: 'Learn correct posture, hand positioning, finger placement, and techniques for comfortable playing.' },
      { iconName: 'BookOpen', title: 'Musical Notes & Notation', description: 'Develop an understanding of musical notes and basic music notation for reading and playing music.' },
      { iconName: 'Layers', title: 'Scales, Chords & Arpeggios', description: 'Learn essential scales, chords, and arpeggios to build a strong musical foundation.' },
      { iconName: 'Clock', title: 'Music Theory & Rhythm', description: 'Understand basic music theory, rhythm, beats, and timing to improve overall musical understanding.' },
      { iconName: 'Shapes', title: 'Hand Coordination & Finger Strength', description: 'Develop coordination between both hands while improving finger control, strength, and accuracy.' },
      { iconName: 'Eye', title: 'Reading & Playing Musical Pieces', description: 'Learn to read and play simple musical pieces through guided practice.' },
      { iconName: 'Sun', title: 'Melody, Harmony & Chord Progressions', description: 'Understand the relationship between melody and harmony and learn basic chord progressions.' },
      { iconName: 'Flame', title: 'Songs & Musical Styles', description: 'Practice playing songs across different musical styles while developing confidence and musical expression.' },
      { iconName: 'Award', title: 'Timing, Expression & Musicality', description: 'Improve timing, expression, control, and overall musicality through regular practice and performance.' }
    ],
    highlights: [
      'Structured Keyboard & Piano training',
      'Suitable for beginners and experienced learners',
      'Individual-paced learning',
      'Focus on practical playing and music fundamentals',
      'Regular practice-based learning',
      'Development of hand coordination and finger control',
      'Music theory and notation',
      'Song-based learning',
      'Rhythm, timing, and musical expression',
      'Performance and confidence-building opportunities'
    ],
    audienceCards: [
      { title: 'Kids', description: 'A structured and engaging way for children to develop musical skills, coordination, and confidence.' },
      { title: 'Beginners', description: 'No previous Keyboard or Piano experience is required. Students can begin with the fundamentals.' },
      { title: 'Experienced Learners', description: 'Learners with prior experience can work on strengthening their existing skills and improving technique.' },
      { title: 'Adults', description: 'Adults can learn at their own pace while developing practical playing skills and musical understanding.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Lessons follow a systematic approach to help students build their skills progressively.' },
      { title: 'Student-Focused Guidance', description: 'Learning is adapted according to the student\'s level, ability, and pace.' },
      { title: 'Regular Practice', description: 'Consistent practice helps students improve coordination, technique, rhythm, and confidence.' },
      { title: 'Practical Musical Training', description: 'Students get opportunities to apply what they learn through musical pieces and songs.' },
      { title: 'Performance Opportunities', description: 'Students are encouraged to participate in performances, events, and cultural programs.' },
      { title: 'Free Demo Class', description: 'Experience the learning environment before choosing your Keyboard & Piano program.' }
    ],
    learningJourney: [
      { step: '01', title: 'Foundation', description: 'Get familiar with the Keyboard/Piano, posture, hand position, and basic techniques.' },
      { step: '02', title: 'Notes & Technique', description: 'Learn musical notes, finger techniques, and basic notation.' },
      { step: '03', title: 'Scales & Chords', description: 'Build your foundation with scales, chords, and arpeggios.' },
      { step: '04', title: 'Songs & Musical Pieces', description: 'Apply your learning by reading and playing simple musical pieces and songs.' },
      { step: '05', title: 'Musical Expression', description: 'Develop timing, expression, coordination, confidence, and musicality through practice.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 Hours / Week',
      frequency: 'Regular Batches',
      batchTimings: 'Based on program, age group, and batch availability',
      ageGroup: '3+ Years to Adults'
    },
    certification: {
      show: true,
      title: 'Trinity College London & Prayag Affiliations',
      description: 'Trinity College London and Prayag Sangeet Samiti examination and certification pathways.',
      affiliations: ['Trinity College London Associated', 'Prayag Sangeet Samiti']
    },
    galleryImages: [
      '/assets/courses/keyboard-cover.png',
      '/assets/hero-bg.jpg',
      '/assets/gallery/hero-student.jpeg'
    ],
    faqs: [
      { question: 'Is Keyboard & Piano suitable for beginners?', answer: 'Yes. The program is designed for beginners as well as students who already have some experience.' },
      { question: 'What age can students start Keyboard & Piano classes?', answer: 'We welcome learners from 3+ to adults, with teaching adapted according to age, level, and learning ability.' },
      { question: 'What will I learn in Keyboard & Piano classes?', answer: 'Students learn fundamentals of the instrument, posture, finger techniques, musical notes, notation, scales, chords, arpeggios, rhythm, music theory, musical pieces, songs, and musical expression.' },
      { question: 'Do I need previous musical experience?', answer: 'No. Previous training is not required to get started.' },
      { question: 'How many hours of classes are required each week?', answer: 'Students are required to complete a minimum of 2 hours per week. Exact days and timings depend on the program and batch availability.' },
      { question: 'Can students learn songs on Keyboard/Piano?', answer: 'Yes. Students learn to read and play simple musical pieces and songs across different musical styles.' },
      { question: 'Can I attend a demo class before enrolling?', answer: 'Yes. A free demo class is available so students can experience the learning process before enrolling.' },
      { question: 'Will students get performance opportunities?', answer: 'Yes. Students are encouraged to participate in performances, events, and cultural programs.' }
    ],
    seoTitle: 'Keyboard & Piano Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Learn Keyboard & Piano in Gurugram with structured training in posture, finger techniques, notes, scales, chords, arpeggios, and songs. Book a free demo class today.'
  },

  'drums': {
    slug: 'drums',
    categorySlug: 'instruments',
    categoryName: 'Instruments',
    title: 'Drums',
    locationTitle: 'Drums Classes in Gurugram',
    tagline: 'Learn Drums with Structured Training & Practical Guidance',
    heroDescription: 'Build your drumming skills through structured lessons, regular practice, and practical training. Develop rhythm, coordination, timing, control, and confidence while learning essential drum beats and playing along with music.',
    introTitle: 'What is Drums Learning?',
    introDescription: [
      'Drums learning introduces students to the fundamentals of drumming while developing a strong sense of rhythm, timing, coordination, and musical control.',
      'Our Drums program combines structured practice with practical playing, helping students understand the drum kit, learn essential techniques, develop rhythmic accuracy, and gradually build confidence as a performer.',
      'The course is suitable for beginners as well as learners who want to strengthen their existing drumming skills.',
      'Regular practice is an important part of learning drums. Students are encouraged to practise beats, rhythmic patterns, coordination exercises, timing, and songs consistently. With structured guidance and regular practice, students can gradually improve their speed, control, rhythmic accuracy, coordination, and confidence.',
      'Drumming is a practical and performance-oriented musical skill. Students are encouraged to participate in performances, events, and cultural programs. These opportunities allow students to apply their learning, gain stage experience, and develop confidence while performing individually or as part of a group.'
    ],
    whatIsTitle: 'What is Drums Learning?',
    whatIsDescription: [
      'Drums learning introduces students to the fundamentals of drumming while developing a strong sense of rhythm, timing, coordination, and musical control. Our Drums program combines structured practice with practical playing, helping students understand the drum kit, learn essential techniques, develop rhythmic accuracy, and gradually build confidence as a performer.'
    ],
    heroImage: '/assets/courses/drums-cover.jpg',
    introImage: '/assets/courses/drums-cover.jpg',
    learningModules: [
      { iconName: 'Music', title: 'Introduction to the Drum Kit', description: 'Understand the drum kit, its different components, and their basic functions.' },
      { iconName: 'Sparkles', title: 'Posture & Grip', description: 'Learn correct sitting posture, stick grip, hand positioning, and fundamental playing techniques.' },
      { iconName: 'Flame', title: 'Basic Drum Beats', description: 'Learn essential drum beats and rhythmic patterns to develop a strong foundation in drumming.' },
      { iconName: 'Clock', title: 'Tempo, Timing & Rhythm', description: 'Develop an understanding of tempo, timing, beats, and rhythm for accurate playing.' },
      { iconName: 'BookOpen', title: 'Drum Notation & Music Theory', description: 'Learn basic drum notation and music theory to support your practical playing skills.' },
      { iconName: 'Layers', title: 'Hand & Foot Coordination', description: 'Develop coordination between your hands and feet for better control and smoother playing.' },
      { iconName: 'Mic', title: 'Playing Along with Songs', description: 'Practise playing along with songs and explore different musical styles.' },
      { iconName: 'Sun', title: 'Speed & Control', description: 'Improve playing speed, control, accuracy, and rhythmic consistency through regular practice.' },
      { iconName: 'Award', title: 'Stage Performance Skills', description: 'Build confidence through practical playing and individual or group performance opportunities.' }
    ],
    highlights: [
      'Structured Drums training',
      'Suitable for beginners and experienced learners',
      'Introduction to the complete drum kit',
      'Correct posture and grip techniques',
      'Fundamental beats and rhythmic patterns',
      'Tempo, timing, and rhythm training',
      'Basic drum notation and music theory',
      'Hand-foot coordination development',
      'Song-based practical playing',
      'Speed, control, and rhythmic accuracy',
      'Performance and confidence-building opportunities'
    ],
    audienceCards: [
      { title: 'Kids', description: 'A structured introduction to drumming that helps children develop rhythm, coordination, and confidence.' },
      { title: 'Beginners', description: 'No previous drumming experience is required. Students can start with the basic fundamentals.' },
      { title: 'Experienced Learners', description: 'Students with prior experience can strengthen their technique, control, timing, and rhythmic accuracy.' },
      { title: 'Adults', description: 'Adults can learn drums through structured lessons and progress according to their learning level and pace.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Build your drumming skills progressively through systematic training.' },
      { title: 'Practical Training', description: 'Learn through hands-on practice and playing rather than only studying theory.' },
      { title: 'Student-Focused Guidance', description: 'Learning is adapted according to the student\'s level, ability, and progress.' },
      { title: 'Rhythm & Coordination', description: 'Develop timing, rhythmic accuracy, hand-foot coordination, and musical control.' },
      { title: 'Performance Opportunities', description: 'Students are encouraged to participate in performances, events, and cultural programs.' },
      { title: 'Free Demo Class', description: 'Experience the learning environment before choosing your Drums program.' }
    ],
    learningJourney: [
      { step: '01', title: 'Drum Kit Foundation', description: 'Get familiar with the drum kit, posture, grip, and basic playing techniques.' },
      { step: '02', title: 'Beats & Rhythm', description: 'Learn fundamental drum beats, rhythmic patterns, tempo, and timing.' },
      { step: '03', title: 'Coordination & Control', description: 'Develop hand-foot coordination, control, accuracy, and consistency.' },
      { step: '04', title: 'Songs & Musical Styles', description: 'Apply your skills by playing along with songs and exploring different styles.' },
      { step: '05', title: 'Performance & Confidence', description: 'Build confidence and practical experience through regular practice and performance opportunities.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 hours per week',
      frequency: 'Regular basis',
      batchTimings: 'Based on program, age group, and batch availability',
      ageGroup: '3+ to Adults'
    },
    certification: {
      show: true,
      title: 'Certification & Performance Pathways',
      description: 'Structured Drums training at Tansen Sangeet Mahavidyalaya with opportunities for stage performances, cultural events, and certified examinations.',
      affiliations: ['Trinity College London Associated', 'Prayag Sangeet Samiti Affiliated']
    },
    galleryImages: ['/assets/courses/drums-cover.jpg'],
    faqs: [
      { question: 'Are Drums classes suitable for beginners?', answer: 'Yes. The program is suitable for beginners as well as students with prior experience.' },
      { question: 'What age can students start Drums classes?', answer: 'We welcome learners from 3+ to adults, with teaching adapted according to age, level, and learning ability.' },
      { question: 'What will I learn in Drums classes?', answer: 'Students learn the drum kit, posture, grip, basic beats, rhythmic patterns, tempo, timing, notation, music theory, hand-foot coordination, songs, and performance skills.' },
      { question: 'Do I need previous drumming experience?', answer: 'No. Previous training is not required to get started.' },
      { question: 'How many hours of Drums classes are required each week?', answer: 'Students are required to complete a minimum of 2 hours per week. Exact days and timings depend on the program, age group, and batch availability.' },
      { question: 'Can students learn to play along with songs?', answer: 'Yes. Students practise playing along with songs and different musical styles.' },
      { question: 'Can I attend a demo class before enrolling?', answer: 'Yes. A free demo class is available before enrollment.' },
      { question: 'Will students get performance opportunities?', answer: 'Yes. Students are encouraged to participate in performances, events, and cultural programs.' }
    ],
    seoTitle: 'Drums Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Learn Drums in Gurugram with structured training, essential drum beats, posture, grip, timing, hand-foot coordination, and performance skills. Book a free demo class today.'
  },

  'tabla': {
    slug: 'tabla',
    categorySlug: 'instruments',
    categoryName: 'Instruments',
    title: 'Tabla',
    locationTitle: 'Tabla Classes in Gurugram',
    tagline: 'Learn Tabla with Structured Training & Traditional Guidance',
    heroDescription: 'Learn Tabla at Tansen Sangeet Mahavidyalaya, Gurugram, with structured guidance focused on rhythm, technique, coordination, taal and practical playing. Our Tabla classes are suitable for beginners as well as learners who want to improve their existing skills.',
    introTitle: 'Tabla Classes in Gurugram',
    introDescription: [
      'Tabla is one of the most important percussion instruments in Indian classical music. Learning Tabla helps students develop a strong understanding of rhythm, taal, timing and musical coordination.',
      'At Tansen Sangeet Mahavidyalaya, students learn through regular practice and guided training. The learning approach focuses on building proper technique and gradually developing confidence and control.',
      'Tabla requires regular practice to develop rhythm, hand coordination and playing control. Students are encouraged to practise consistently between classes and apply the techniques introduced during their sessions. Progress depends on regular practice, individual learning pace and consistent participation.',
      'Music becomes more meaningful when students get opportunities to apply what they learn. Depending on suitable opportunities, Tabla students may participate in cultural events, stage performances and musical activities. These experiences help students develop confidence, timing and practical performance skills.'
    ],
    whatIsTitle: 'What is Tabla Learning?',
    whatIsDescription: [
      'Tabla is one of the most important percussion instruments in Indian classical music. Learning Tabla helps students develop a strong understanding of rhythm, taal, timing and musical coordination. At Tansen Sangeet Mahavidyalaya, students learn through regular practice and guided training focusing on proper technique, confidence and control.'
    ],
    heroImage: '/assets/courses/tabla-cover.jpg',
    introImage: '/assets/courses/tabla-cover.jpg',
    learningModules: [
      { iconName: 'Music', title: 'Introduction to Tabla', description: 'Understand the Tabla, its structure, basic terminology and the role of the instrument in Indian music.' },
      { iconName: 'Sparkles', title: 'Posture & Hand Position', description: 'Learn the correct sitting posture, hand placement and basic playing techniques for comfortable practice.' },
      { iconName: 'Flame', title: 'Basic Bols & Strokes', description: 'Develop a foundation in essential Tabla bols and playing strokes through systematic practice.' },
      { iconName: 'Clock', title: 'Taal & Rhythm', description: 'Understand common taal patterns, rhythmic cycles, counting and maintaining accurate timing.' },
      { iconName: 'BookOpen', title: 'Basic Theka', description: 'Learn the fundamentals of playing theka and develop familiarity with commonly used rhythmic patterns.' },
      { iconName: 'Layers', title: 'Hand Coordination', description: 'Improve coordination between both hands while developing control, clarity and consistency.' },
      { iconName: 'Sun', title: 'Laya & Tempo', description: 'Build an understanding of different tempos and learn to maintain steady rhythm while playing.' },
      { iconName: 'Eye', title: 'Compositions & Practice', description: 'Progress towards structured rhythmic exercises and compositions through regular guided practice.' },
      { iconName: 'Award', title: 'Accompaniment Skills', description: 'Develop the ability to maintain rhythm while accompanying singing and other musical performances.' }
    ],
    highlights: [
      'Structured Tabla training',
      'Strong focus on rhythm and taal',
      'Progressive learning approach',
      'Regular technique and practice sessions',
      'Suitable for beginners and existing learners',
      'Focus on timing, coordination and control',
      'Opportunities to develop performance confidence',
      'Free demo class available'
    ],
    audienceCards: [
      { title: 'Kids', description: 'A structured introduction to rhythm and Tabla can help children develop coordination, concentration and musical awareness.' },
      { title: 'Beginners', description: 'No previous Tabla training is required. Beginners can start with basic techniques and gradually build their skills.' },
      { title: 'Experienced Learners', description: 'Students with previous experience can continue developing their technique, rhythm and practical playing abilities.' },
      { title: 'Adults', description: 'Adults can learn Tabla at their own pace with regular guided practice.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Follow a progressive learning approach from basic techniques to more advanced rhythmic practice.' },
      { title: 'Student-Focused Guidance', description: 'Learning is designed according to the student\'s current level and pace.' },
      { title: 'Regular Practice', description: 'Consistent practice helps students improve timing, technique, coordination and confidence.' },
      { title: 'Traditional Musical Foundation', description: 'Tabla learning develops a deeper understanding of Indian rhythm and taal.' },
      { title: 'Performance Opportunities', description: 'Students can get opportunities to participate in cultural and stage performances as part of their musical journey.' },
      { title: 'Free Demo Class', description: 'Experience the learning environment before enrolling with a free demo class.' }
    ],
    learningJourney: [
      { step: '01', title: 'Explore', description: 'Understand the Tabla and discover the fundamentals of Indian rhythm.' },
      { step: '02', title: 'Build the Foundation', description: 'Learn posture, hand position, basic bols and essential strokes.' },
      { step: '03', title: 'Develop Rhythm', description: 'Work on taal, laya, tempo and rhythmic coordination.' },
      { step: '04', title: 'Practice & Progress', description: 'Develop consistency through regular exercises and guided practice.' },
      { step: '05', title: 'Perform & Grow', description: 'Build confidence and apply your learning through musical and stage performance opportunities.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 hours per week',
      frequency: 'Regular sessions',
      batchTimings: 'Based on course, age group and batch availability',
      ageGroup: '3+ to Adults'
    },
    certification: {
      show: true,
      title: 'Certification & Examination Pathways',
      description: 'Structured Tabla training at Tansen Sangeet Mahavidyalaya with opportunities for stage performances, cultural events, and Prayag Sangeet Samiti examinations.',
      affiliations: ['Prayag Sangeet Samiti Affiliated']
    },
    galleryImages: ['/assets/courses/tabla-cover.jpg'],
    faqs: [
      { question: 'What age can students start Tabla classes?', answer: 'Students can start from the age of 3+, with learning adjusted according to age and ability.' },
      { question: 'Can beginners join Tabla classes?', answer: 'Yes. Beginners can join without any previous Tabla training.' },
      { question: 'What will I learn in Tabla classes?', answer: 'Students learn basic Tabla techniques, bols, strokes, taal, rhythm, laya, coordination and practical playing.' },
      { question: 'How much time should I practise Tabla?', answer: 'Regular practice is recommended. The minimum course learning commitment is 2 hours per week, while additional individual practice can support faster progress.' },
      { question: 'Can adults learn Tabla?', answer: 'Yes. Tabla classes are available for adults as well as children and younger learners.' },
      { question: 'Will I get opportunities to perform?', answer: 'Students may get opportunities to participate in cultural and stage performances depending on suitable events and activities.' },
      { question: 'Can I join if I already know Tabla?', answer: 'Yes. Existing learners can continue their training and work on improving technique, rhythm, coordination and practical playing.' },
      { question: 'Is a demo class available?', answer: 'Yes. Tansen Sangeet Mahavidyalaya offers a free demo class for prospective students.' }
    ],
    seoTitle: 'Tabla Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Learn Tabla in Gurugram with structured training in bols, strokes, taal, rhythm, laya, coordination and practical playing. Book a free demo class.'
  },

  'kathak': {
    slug: 'kathak',
    categorySlug: 'dance',
    categoryName: 'Dance',
    title: 'Kathak',
    locationTitle: 'Kathak Classes in Gurugram',
    tagline: 'Discover the grace, rhythm, expression, and storytelling of Kathak through structured training and regular practice.',
    heroDescription: 'Whether you are taking your first steps in Indian classical dance or looking to develop your existing skills, our Kathak program provides guided learning in a supportive and student-focused environment.',
    introTitle: 'Learn the Art of Kathak with Structured Training',
    introDescription: [
      'Kathak is one of India\'s celebrated classical dance forms, known for its graceful movements, intricate rhythmic footwork, expressive storytelling, and dynamic spins.',
      'At Tansen Sangeet Mahavidyalaya, students are introduced to Kathak through systematic training that builds a strong foundation in rhythm, movement, expressions, coordination, and stage presentation.',
      'With regular practice and experienced guidance, learners gradually develop greater control, confidence, musicality, and appreciation for Indian classical dance traditions.'
    ],
    whatIsTitle: 'Discover the Elegance of Indian Classical Dance',
    whatIsDescription: [
      'Kathak is a classical Indian dance form that brings together rhythm, movement, expression, and storytelling. The art form uses precise footwork, hand gestures, facial expressions, graceful movements, and rhythmic compositions to communicate ideas and emotions through dance.',
      'Our Kathak classes focus on developing both the technical and expressive aspects of the art. Students learn fundamental movements and gradually build their understanding of rhythm, compositions, expressions, and performance. The learning process is structured to help students progress comfortably according to their age, learning ability, and experience level.'
    ],
    heroImage: '/assets/courses/kathak-cover.png',
    introImage: '/assets/courses/kathak-cover.png',
    learningModules: [
      { iconName: 'Sparkles', title: 'Kathak Fundamentals', description: 'Learn the basic concepts, movements, terminology, and traditions of Kathak while developing a strong foundation for further learning.' },
      { iconName: 'Flame', title: 'Tatkar & Rhythmic Footwork', description: 'Develop rhythmic precision through basic Tatkar and traditional Kathak footwork exercises.' },
      { iconName: 'Music', title: 'Mudras & Hastaks', description: 'Learn traditional hand gestures and movements and understand how they contribute to expression and storytelling.' },
      { iconName: 'Clock', title: 'Taal, Laya & Rhythm', description: 'Build an understanding of rhythm, tempo, and musical timing while learning to coordinate movement with the rhythmic structure.' },
      { iconName: 'BookOpen', title: 'Kathak Compositions', description: 'Explore basic Kathak compositions and sequences and learn how individual movements come together to create a complete performance.' },
      { iconName: 'Sun', title: 'Chakkars & Graceful Movement', description: 'Practice controlled Chakkars and graceful movements while developing balance, coordination, posture, and body control.' },
      { iconName: 'Mic', title: 'Abhinaya & Expressions', description: 'Develop expressive skills through facial expressions and body language, helping students communicate emotions and stories through dance.' },
      { iconName: 'Layers', title: 'Tukdas, Todas & Tihais', description: 'Get introduced to traditional Kathak rhythmic compositions, including Tukdas, Todas, and Tihais.' },
      { iconName: 'Eye', title: 'Coordination & Body Control', description: 'Improve posture, balance, coordination, movement control, and rhythmic accuracy through regular guided practice.' },
      { iconName: 'Award', title: 'Performance Skills', description: 'Develop stage confidence, presentation skills, and performance readiness through practical learning and performance opportunities.' }
    ],
    highlights: [
      'Structured Kathak Learning',
      'Regular Guided Practice',
      'Rhythmic & Technical Skill Development',
      'Expression & Creative Development',
      'Student-Focused Guidance',
      'Performance Opportunities',
      'Stage Confidence Building',
      'Free Demo Class'
    ],
    audienceCards: [
      { title: 'Kids', description: 'A structured introduction to classical dance that helps children explore rhythm, movement, coordination, and creative expression.' },
      { title: 'Beginners', description: 'No previous Kathak experience is required. Beginners can start with the fundamentals and gradually develop their skills.' },
      { title: 'Experienced Learners', description: 'Students with previous dance experience can continue developing their technique, expressions, rhythm, and performance abilities.' },
      { title: 'Adults', description: 'Adults can explore Kathak as a structured classical dance learning journey and develop their skills at their own learning pace.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Follow a systematic learning approach that helps students build their Kathak foundation step by step.' },
      { title: 'Student-Focused Guidance', description: 'Learning is adapted according to the student\'s age, level, and learning ability.' },
      { title: 'Experienced Guidance', description: 'Learn through guided training designed to develop technique, rhythm, expression, and confidence.' },
      { title: 'Regular Practice', description: 'Consistent practice helps students improve coordination, rhythmic precision, movement control, and overall performance skills.' },
      { title: 'Performance Opportunities', description: 'Students are encouraged to participate in performances, events, and cultural programs, helping them gain stage experience and confidence.' },
      { title: 'Free Demo Class', description: 'Experience the learning environment and understand the course before making your enrollment decision.' }
    ],
    learningJourney: [
      { step: '01', title: 'Foundation', description: 'Begin with the fundamentals of Kathak, basic movements, posture, and rhythmic concepts.' },
      { step: '02', title: 'Practice', description: 'Build your skills through Tatkar, footwork, hand gestures, movements, and regular rhythmic practice.' },
      { step: '03', title: 'Skill Development', description: 'Develop coordination, balance, Chakkars, rhythm, body control, and technical understanding.' },
      { step: '04', title: 'Creative Expression', description: 'Explore Abhinaya, facial expressions, storytelling, and expressive movement.' },
      { step: '05', title: 'Performance', description: 'Bring your learning together through Kathak compositions, presentation, and stage performance opportunities.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 Hours',
      frequency: 'Regular',
      batchTimings: 'Based on availability',
      ageGroup: '3+ to Adults'
    },
    certification: {
      show: true,
      title: 'Certification & Learning Opportunities',
      description: 'Tansen Sangeet Mahavidyalaya is associated with recognized music and performing arts organizations, including Prayag Sangeet Samiti and Trinity College, London. Where applicable, students can explore recognized certification and structured learning opportunities through the relevant programs.',
      affiliations: ['Prayag Sangeet Samiti Associated', 'Trinity College London Associated']
    },
    galleryImages: ['/assets/courses/kathak-cover.png'],
    faqs: [
      { question: 'Is the Kathak course suitable for beginners?', answer: 'Yes. The Kathak program is suitable for beginners as well as students with previous dance experience. No previous Kathak training is required to get started.' },
      { question: 'What age can students join Kathak classes?', answer: 'Students from young children aged 3+ to adults can explore the program. Teaching and learning methods are adapted according to the student\'s age, level, and learning ability.' },
      { question: 'What will students learn in Kathak?', answer: 'Students learn Kathak fundamentals, Tatkar, rhythmic footwork, Mudras and Hastaks, Taal and Laya, basic compositions, Chakkars, Abhinaya, facial expressions, Tukdas, Todas, Tihais, coordination, posture, balance, and stage performance skills.' },
      { question: 'How many hours per week are Kathak classes?', answer: 'Students are required to complete a minimum of 2 hours of learning per week. Exact class days and timings depend on the available batches and student requirements.' },
      { question: 'Can I attend a demo class before enrolling?', answer: 'Yes. A free demo class is available so that students can experience the learning environment and understand the teaching process before enrolling.' },
      { question: 'Can adults learn Kathak?', answer: 'Yes. Adults are welcome to explore Kathak. The learning approach can be adapted according to the learner\'s existing level and learning ability.' },
      { question: 'Will students get opportunities to perform?', answer: 'Yes. Students are encouraged to participate in performances, events, and cultural programs. These opportunities help students gain stage experience, confidence, and presentation skills.' },
      { question: 'Can I learn Kathak along with another course?', answer: 'Yes. Students can explore multiple disciplines depending on their interests and the availability of suitable batches.' }
    ],
    seoTitle: 'Kathak Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Learn Kathak in Gurugram with structured training in Tatkar, rhythm, Mudras, Chakkars, Abhinaya, traditional compositions and stage performance. Book a free demo class.'
  },

  'western-dance': {
    slug: 'western-dance',
    categorySlug: 'dance',
    categoryName: 'Dance',
    title: 'Western Dance',
    locationTitle: 'Western Dance Classes in Gurugram',
    tagline: 'Explore movement, rhythm, choreography, and creative expression through structured Western Dance training at Tansen Sangeet Mahavidyalaya.',
    heroDescription: 'Whether you are stepping onto the dance floor for the first time or looking to refine your existing skills, our program provides guided learning in an energetic and supportive environment.',
    introTitle: 'Discover the Energy of Western Dance',
    introDescription: [
      'Western Dance offers an exciting way to explore movement, rhythm, coordination, and self-expression.',
      'At Tansen Sangeet Mahavidyalaya, students learn through structured training that combines dance techniques, rhythmic understanding, choreography, and practical movement.',
      'The program is designed to help learners improve coordination, flexibility, posture, body control, musicality, and confidence while enjoying the creative process of dance.',
      'Whether you are a beginner or already have dance experience, the learning approach can be adapted to your level and learning ability.'
    ],
    whatIsTitle: 'Movement, Rhythm & Creative Expression',
    whatIsDescription: [
      'Western Dance is a dynamic form of dance that brings together movement, music, rhythm, coordination, and individual expression. Through structured practice, students learn different dance movements and techniques while developing better body coordination, flexibility, balance, posture, and musicality.',
      'Our Western Dance program focuses not only on learning choreography but also on helping students understand rhythm, control their movements, express themselves creatively, and develop confidence on the dance floor and stage. The course provides a supportive environment where learners can gradually develop their dance skills and performance abilities.'
    ],
    heroImage: '/assets/courses/western-dance-cover.jpg',
    introImage: '/assets/courses/western-dance-cover.jpg',
    learningModules: [
      { iconName: 'Sparkles', title: 'Western Dance Fundamentals', description: 'Understand the basic principles of Western Dance and develop a strong foundation in movement and technique.' },
      { iconName: 'Flame', title: 'Basic Positions & Movements', description: 'Learn essential dance positions, movements, and techniques required to build control and confidence.' },
      { iconName: 'Layers', title: 'Coordination & Balance', description: 'Develop better body coordination, balance, and movement control through structured dance exercises.' },
      { iconName: 'Sun', title: 'Flexibility & Body Control', description: 'Work on flexibility, posture, and controlled movement to improve overall dance performance.' },
      { iconName: 'Clock', title: 'Rhythm & Musicality', description: 'Learn to understand beats, rhythm, timing, and musicality and apply them naturally through movement.' },
      { iconName: 'BookOpen', title: 'Choreography & Sequences', description: 'Learn choreography and dance sequences while understanding how individual movements come together as a complete routine.' },
      { iconName: 'Music', title: 'Dance Styles & Techniques', description: 'Explore different Western Dance styles and techniques while developing versatility in movement.' },
      { iconName: 'Eye', title: 'Posture & Movement Quality', description: 'Improve body posture, movement control, coordination, and overall presentation.' },
      { iconName: 'Mic', title: 'Creative Expression', description: 'Use movement and music as a way to express creativity and develop your individual performance style.' },
      { iconName: 'Award', title: 'Performance Preparation', description: 'Prepare for individual and group choreography while developing confidence, stage presence, and performance skills.' }
    ],
    highlights: [
      'Structured Dance Training',
      'Regular Guided Practice',
      'Rhythm & Musicality Development',
      'Coordination & Flexibility',
      'Body Control & Posture',
      'Creative Expression',
      'Individual & Group Choreography',
      'Performance Preparation',
      'Confidence & Stage Presence',
      'Free Demo Class'
    ],
    audienceCards: [
      { title: 'Kids', description: 'A fun and structured environment where children can explore movement, rhythm, coordination, and creative expression through dance.' },
      { title: 'Beginners', description: 'No previous dance experience is required. Beginners can start with basic movements and gradually build their confidence and skills.' },
      { title: 'Experienced Learners', description: 'Students with previous dance experience can continue refining their technique, choreography, musicality, and performance skills.' },
      { title: 'Adults', description: 'Adults can explore Western Dance in a supportive learning environment while developing movement, rhythm, coordination, and creative expression.' }
    ],
    whyChooseFeatures: [
      { title: 'Structured Learning', description: 'Learn Western Dance through a structured approach that develops skills progressively.' },
      { title: 'Student-Focused Guidance', description: 'Learning is adapted according to the student\'s age, level, and learning ability.' },
      { title: 'Regular Practice', description: 'Consistent practice helps learners improve coordination, movement control, rhythm, flexibility, and confidence.' },
      { title: 'Creative Expression', description: 'Students are encouraged to express themselves through movement and explore their creativity.' },
      { title: 'Performance Opportunities', description: 'Students are encouraged to participate in performances, events, and cultural programs, helping them develop stage confidence and presentation skills.' },
      { title: 'Free Demo Class', description: 'Experience the class environment and understand the learning process before choosing your course.' }
    ],
    learningJourney: [
      { step: '01', title: 'Foundation', description: 'Start with basic positions, movements, posture, coordination, and fundamental dance techniques.' },
      { step: '02', title: 'Practice', description: 'Develop rhythm, balance, flexibility, musicality, and body control through regular practice.' },
      { step: '03', title: 'Skill Development', description: 'Build stronger movement techniques, coordination, timing, and understanding of different dance styles.' },
      { step: '04', title: 'Creative Expression', description: 'Explore choreography and use movement to express creativity, energy, and individuality.' },
      { step: '05', title: 'Performance', description: 'Bring your skills together through individual and group choreography and prepare for performances.' }
    ],
    schedule: {
      weeklyHours: 'Minimum 2 Hours',
      frequency: 'Regular',
      batchTimings: 'Based on availability',
      ageGroup: '3+ to Adults'
    },
    certification: {
      show: true,
      title: 'Certification & Learning Opportunities',
      description: 'Tansen Sangeet Mahavidyalaya is associated with recognized music and performing arts organizations, including Prayag Sangeet Samiti and Trinity College, London. Where applicable, students can explore recognized certification and structured learning opportunities through relevant programs.',
      affiliations: ['Prayag Sangeet Samiti Associated', 'Trinity College London Associated']
    },
    galleryImages: ['/assets/courses/western-dance-cover.jpg'],
    faqs: [
      { question: 'Is Western Dance suitable for beginners?', answer: 'Yes. The program is suitable for both beginners and students with previous dance experience. Beginners can start with the fundamentals and gradually develop their skills.' },
      { question: 'What age can students join Western Dance classes?', answer: 'Students from young children aged 3+ to adults can explore the program. Teaching methods are adapted according to the student\'s age, level, and learning ability.' },
      { question: 'What will students learn in Western Dance?', answer: 'Students learn basic dance positions and movements, Western Dance techniques, coordination, balance, flexibility, rhythm, musicality, choreography, body control, posture, creative expression, and performance skills.' },
      { question: 'How many hours per week are Western Dance classes?', answer: 'Students are required to complete a minimum of 2 hours of learning per week. Exact days and timings depend on batch availability.' },
      { question: 'Can I attend a demo class before enrolling?', answer: 'Yes. A free demo class is available, allowing students to experience the learning environment and understand the teaching process before enrolling.' },
      { question: 'Can adults join Western Dance classes?', answer: 'Yes. Adults can join the program and develop their dance skills according to their learning level and ability.' },
      { question: 'Will students get performance opportunities?', answer: 'Yes. Students are encouraged to participate in performances, events, and cultural programs, helping them gain practical stage experience and build confidence.' },
      { question: 'Can students learn more than one course?', answer: 'Yes. Students can explore multiple disciplines depending on their interests and the availability of suitable batches.' }
    ],
    seoTitle: 'Western Dance Classes in Gurugram | Tansen Sangeet Mahavidyalaya',
    metaDescription: 'Learn Western Dance in Gurugram with structured training in movement, rhythm, choreography, coordination, flexibility, musicality, creative expression and performance.'
  }
};
