// src/data/about.ts

export interface CourseCategory {
  category: string;
  items: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

export const aboutData = {
  title: "About Tansen Sangeet Mahavidyalaya",
  tagline: "Where Passion Meets the Art of Learning",
  unitText: "A proud unit of Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.",
  
  introParagraphs: [
    "Tansen Sangeet Mahavidyalaya is a leading institution dedicated to the learning, practice, and promotion of music, dance, and performing arts. As a proud unit of Tansen Institute of Performing Arts (TIPA) Pvt. Ltd., the academy is committed to creating a supportive and inspiring environment where students can discover their creativity, develop their skills, and build confidence through the performing arts.",
    "Our approach goes beyond classroom training. We believe that music and dance can play an important role in developing discipline, concentration, creativity, confidence, and self-expression. Through structured learning, regular practice, experienced guidance, and performance opportunities, we encourage students to enjoy the learning process while developing a strong artistic foundation."
  ],

  legacy: {
    title: "Our Legacy",
    subtitle: "Carrying Forward a Vision of Performing Arts Excellence",
    paragraphs: [
      "Tansen Sangeet Mahavidyalaya was founded in the memory of Late Sh. M. L. Verma, whose vision and dedication continue to inspire the institution.",
      "The academy continues to grow under the guidance of his sons — Madan Lal Verma, L. S. Verma, S. K. Verma, and K. G. Verma. While the elder members have established their own professional ventures, the younger members, along with their spouses, remain actively involved in managing and expanding the institution and carrying forward its vision.",
      "The institution is further supported by a dedicated team including Mr. Ravi Kumar Verma, Mr. D. K. Verma, Mr. V. K. Verma, and Mr. Puneet Verma, who contribute towards making Tansen Sangeet Mahavidyalaya a dynamic and inclusive platform for music and dance education."
    ],
    founders: ["Madan Lal Verma", "L. S. Verma", "S. K. Verma", "K. G. Verma"],
    team: ["Mr. Ravi Kumar Verma", "Mr. D. K. Verma", "Mr. V. K. Verma", "Mr. Puneet Verma"]
  },

  vision: {
    title: "Our Vision",
    paragraphs: [
      "Our vision is to make quality performing arts education accessible to learners and encourage a lifelong connection with music, dance, and creativity.",
      "We aim to create an environment where every student — whether a beginner or an experienced learner — gets the opportunity to learn at their own pace, develop their abilities, and express themselves confidently.",
      "We believe that every learner has unique creative potential. Our role is to identify that potential, nurture it through proper guidance, and provide opportunities for students to grow as confident individuals and performers."
    ]
  },

  mission: {
    title: "Our Mission",
    subtitle: "Our mission is to provide structured, engaging, and student-focused training in music, dance, and creative arts.",
    points: [
      "Building strong fundamentals and technical skills",
      "Encouraging regular practice and discipline",
      "Developing confidence and stage presence",
      "Providing personalized guidance according to the learner's level",
      "Connecting students with Indian classical and contemporary forms of art",
      "Encouraging creativity and individual expression",
      "Providing opportunities to participate in performances and cultural programs",
      "Creating a positive and supportive learning environment"
    ]
  },

  philosophy: {
    title: "Learn. Practice. Perform.",
    paragraphs: [
      "At Tansen Sangeet Mahavidyalaya, learning is not limited to theoretical knowledge. We believe that consistent practice and real performance experience are essential parts of an artist's journey.",
      "Our students are encouraged to participate in performances, events, and cultural programs. These opportunities help them overcome stage hesitation, improve confidence, develop presentation skills, and experience the joy of performing in front of an audience.",
      "Whether a student wants to learn music as a hobby, develop a creative skill, participate in performances, or pursue performing arts more seriously, our programs are designed to provide a strong foundation for their journey."
    ]
  },

  courses: {
    title: "Our Courses",
    subtitle: "We offer training across a diverse range of musical, dance, and creative disciplines, allowing students to explore their interests and discover their artistic strengths.",
    categories: [
      {
        category: "Music",
        items: ["Classical Vocal Singing", "Guitar", "Keyboard & Piano", "Drums", "Tabla"]
      },
      {
        category: "Dance",
        items: ["Kathak", "Western Dance"]
      },
      {
        category: "Creative Arts",
        items: ["Fine Arts"]
      }
    ],
    note: "Our programs are suitable for young children, teenagers, adults, and learners at different levels of experience. Beginners are welcome, and no previous training is required to start learning."
  },

  learningForEveryAge: {
    title: "A Learning Environment for Every Age",
    paragraphs: [
      "We believe there is no fixed age for learning music or performing arts.",
      "Our programs welcome learners from 3+ years to adults, with teaching approaches adapted according to the student's age, ability, experience, and learning level.",
      "For young learners, music and dance can encourage creativity, coordination, concentration, and confidence. For older students and adults, learning can become a fulfilling creative pursuit, a way to develop existing skills, or a serious step towards performing arts."
    ]
  },

  studentFocused: {
    title: "Student-Focused Learning",
    description: "Every student learns differently. That's why our teaching approach focuses on understanding the individual learner and progressing according to their level.",
    subText: "From basic concepts and fundamentals to advanced practice and performance preparation, students are guided through a structured learning process.",
    steps: [
      { step: "01", title: "Fundamentals", desc: "Building strong foundational techniques and theoretical basics." },
      { step: "02", title: "Regular Practice", desc: "Disciplined routines to refine pitch, rhythm, body movement, or strokes." },
      { step: "03", title: "Skill Development", desc: "Advancing through intricate compositions, styles, and ragas/routines." },
      { step: "04", title: "Creative Expression", desc: "Encouraging improvisation, emotion, and personal artistic interpretation." },
      { step: "05", title: "Performance", desc: "Showcasing talents live on stage to build confidence and stage presence." }
    ],
    conclusion: "This approach helps students build their abilities progressively while enjoying the learning journey."
  },

  traditionAndModernity: {
    title: "Classical Tradition with a Modern Learning Approach",
    paragraphs: [
      "Tansen Sangeet Mahavidyalaya respects India's rich artistic heritage while providing students with opportunities to explore a wide variety of musical and performing arts disciplines.",
      "Students can experience the depth of Indian Classical Music, Kathak, and Tabla, while also exploring Western Dance, Guitar, Keyboard/Piano, Drums, and Fine Arts.",
      "This diverse learning environment allows students to discover different forms of expression and choose the disciplines that best match their interests and goals."
    ]
  },

  performanceConfidence: {
    title: "Performance & Confidence Building",
    paragraphs: [
      "We believe that an artist grows not only through practice but also through experience.",
      "Students are encouraged to take part in stage performances, cultural events, and group performances. These experiences help students develop confidence, coordination, presentation skills, and stage presence.",
      "For many learners, performing on stage becomes an important milestone in their artistic journey."
    ]
  },

  certifications: {
    title: "Recognized Learning & Certification Opportunities",
    paragraphs: [
      "Tansen Sangeet Mahavidyalaya is associated with renowned music and performing arts organizations and provides opportunities for students to pursue structured learning and certification.",
      "The institution's affiliations and associations include organizations such as Prayag Sangeet Samiti and Trinity College London, offering students opportunities to work towards recognized certification programs in music and performing arts.",
      "These opportunities can help students take their learning beyond regular classes and explore performing arts as a serious area of study and development."
    ],
    affiliationsList: [
      { name: "Prayag Sangeet Samiti", detail: "Government Recognized Examination Body for Music & Dance Diplomas" },
      { name: "Trinity College London", detail: "International Accreditation for Western Music & Performing Arts" }
    ]
  },

  whyChooseUs: [
    {
      title: "Experienced Guidance",
      description: "Learn through structured programs and guidance designed for different levels of learners."
    },
    {
      title: "Multiple Art Forms",
      description: "Explore music, dance, instruments, and fine arts under one platform."
    },
    {
      title: "Beginner-Friendly",
      description: "No previous experience is required to begin your learning journey."
    },
    {
      title: "Regular Practice",
      description: "Consistent learning and practice help students build strong fundamentals."
    },
    {
      title: "Performance Opportunities",
      description: "Students get opportunities to participate in performances and cultural events."
    },
    {
      title: "All-Age Learning",
      description: "Programs are available for young children as well as adult learners."
    },
    {
      title: "Creative Development",
      description: "Our learning environment encourages creativity, confidence, discipline, and self-expression."
    }
  ],

  commitment: {
    title: "Our Commitment",
    paragraphs: [
      "At Tansen Sangeet Mahavidyalaya, our commitment is to make learning music and performing arts an enriching and meaningful experience.",
      "We want every student to leave the classroom with more than just a new skill — with greater confidence, discipline, creativity, and appreciation for the arts."
    ],
    quote: "From the first Sa Re Ga Ma to the first stage performance, every step of the journey matters."
  },

  contactInfo: {
    title: "Begin Your Musical Journey",
    subtitle: "Whether you are looking to introduce your child to music and dance, learn an instrument, explore Indian classical arts, develop an existing passion, or simply discover a new creative pursuit, Tansen Sangeet Mahavidyalaya is here to guide you.",
    callout: "Take the first step towards discovering your potential.",
    ctaButtonText: "Book a Free Demo Class",
    branchName: "Tansen Sangeet Mahavidyalaya",
    address: "NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana – 122002",
    phones: ["9818083588", "9871833588"],
    email: "tansengurugram43@gmail.com"
  }
};
