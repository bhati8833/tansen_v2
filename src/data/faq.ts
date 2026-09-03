// src/data/faq.ts

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: 'General & Admissions' | 'Courses & Curriculum' | 'Eligibility & Age' | 'Performance & Certifications';
  bullets?: string[];
}

export const homeFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What age group can join Tansen Sangeet Mahavidyalaya?",
    answer: "We welcome students from 3+ years to adults. Our teaching approach is adapted according to the student's age, learning level, and ability."
  },
  {
    id: 2,
    question: "Do you offer classes for beginners?",
    answer: "Yes! Our courses are suitable for complete beginners as well as experienced learners. No previous training is required to get started."
  },
  {
    id: 3,
    question: "What courses do you offer?",
    answer: "We offer training in Classical Vocal Singing, Kathak, Western Dance, Guitar, Keyboard/Piano, Drums, Tabla, and Fine Arts."
  },
  {
    id: 4,
    question: "Can I attend a demo class before enrolling?",
    answer: "Yes. We offer a free demo class so students and parents can experience the learning environment and understand the course before enrolling."
  },
  {
    id: 5,
    question: "How many hours of classes are conducted per week?",
    answer: "Students are required to complete a minimum of 2 hours per week. Exact days and timings depend on the selected course and available batches."
  },
  {
    id: 6,
    question: "Do students get stage performance opportunities?",
    answer: "Yes. Students are encouraged to participate in stage performances, cultural events, and programs, helping them build confidence and stage presence."
  },
  {
    id: 7,
    question: "Can a student learn more than one course?",
    answer: "Yes. Students can explore multiple disciplines, depending on their interests and the availability of suitable batches."
  },
  {
    id: 8,
    question: "How can I enquire about admission and fees?",
    answer: "You can contact our team through phone, WhatsApp, email, or our online enquiry form for information about admissions, fees, batches, and schedules."
  }
];

export const homeFaqFooter = {
  text: "Have more questions? Explore our complete FAQ or contact us today.",
  exploreFaqButton: "Explore Complete FAQ",
  contactUsButton: "Contact Us Today"
};

export const faqPageHeader = {
  title: "Frequently Asked Questions",
  subtitle: "Everything You Need to Know About Tansen Sangeet Mahavidyalaya",
  description: "Choosing the right music and performing arts academy is an important decision. Here are answers to some of the most frequently asked questions about our courses, age groups, classes, demo sessions, performances, and admissions."
};

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "1. What age group can join Tansen Sangeet Mahavidyalaya?",
    category: "Eligibility & Age",
    answer: "Tansen Sangeet Mahavidyalaya welcomes learners from 3+ years to adults. Our programs and teaching methods are adapted according to the student's age, learning ability, and experience.\n\nWhether you are introducing your young child to music and dance or an adult looking to develop a new creative skill, we have learning opportunities for different age groups."
  },
  {
    id: 2,
    question: "2. Do you offer classes for beginners?",
    category: "General & Admissions",
    answer: "Yes. Our courses are suitable for both beginners and students who already have previous experience.\n\nYou do not need any previous training to start. Beginners are guided through the fundamentals and gradually progress according to their learning level and ability."
  },
  {
    id: 3,
    question: "3. Which courses are offered at Tansen Sangeet Mahavidyalaya?",
    category: "Courses & Curriculum",
    answer: "We offer training across music, dance, instruments, and creative arts. Students can choose a course according to their interests, goals, age, and learning level.",
    bullets: [
      "Classical Vocal Singing",
      "Kathak",
      "Western Dance",
      "Guitar",
      "Keyboard / Piano",
      "Drums",
      "Tabla",
      "Fine Arts"
    ]
  },
  {
    id: 4,
    question: "4. Can I attend a demo class before enrolling?",
    category: "General & Admissions",
    answer: "Yes. Students can enquire about a free demo class before making their enrollment decision.\n\nThe demo class gives students and parents an opportunity to experience the learning environment, understand the teaching approach, and get a better idea of the selected course."
  },
  {
    id: 5,
    question: "5. Do students need to bring their own instruments?",
    category: "Courses & Curriculum",
    answer: "For instrument-based courses such as Guitar, Keyboard/Piano, Drums, and Tabla, students may be advised to have access to the respective instrument for regular practice.\n\nRegular practice is an important part of developing musical skills. Our team can guide students and parents regarding the instrument requirements for their selected course."
  },
  {
    id: 6,
    question: "6. How often are the classes conducted?",
    category: "General & Admissions",
    answer: "Classes are conducted on a regular basis, and students are required to complete a minimum of 2 hours of learning per week.\n\nThe exact class days and timings may vary depending on the selected program, student's age, batch availability, and course schedule. For specific batch timings, students or parents can contact our team."
  },
  {
    id: 7,
    question: "7. Will students get opportunities to perform on stage?",
    category: "Performance & Certifications",
    answer: "Yes. Students are encouraged to participate in stage performances, cultural events, and other performances.\n\nThese opportunities allow students to apply what they learn in class while developing confidence, stage presence, presentation skills, and performance experience."
  },
  {
    id: 8,
    question: "8. Can students learn more than one course?",
    category: "General & Admissions",
    answer: "Yes. Students can explore multiple disciplines depending on their interests and the availability of suitable batches.\n\nFor example, a student interested in both music and dance may explore more than one discipline, subject to suitable batch availability. Our team can help you understand the available options."
  },
  {
    id: 9,
    question: "9. How can I enquire about admissions and course fees?",
    category: "General & Admissions",
    answer: "You can contact Tansen Sangeet Mahavidyalaya through phone, WhatsApp, email, or our online enquiry form. For personalized information, we recommend contacting our team directly.",
    bullets: [
      "Admissions",
      "Available courses",
      "Batch timings",
      "Course fees",
      "Class schedules",
      "Demo classes"
    ]
  },
  {
    id: 10,
    question: "10. Are the courses affiliated with any universities or organizations?",
    category: "Performance & Certifications",
    answer: "Yes. According to the institute's information, Tansen Sangeet Mahavidyalaya is affiliated or associated with major UGC-accredited universities and renowned music societies in India, including Prayag Sangeet Samiti.\n\nThe institution is also associated with Trinity College London, providing opportunities for globally recognized certification programs in music and performing arts."
  },
  {
    id: 11,
    question: "11. Is Tansen Sangeet Mahavidyalaya suitable for children?",
    category: "Eligibility & Age",
    answer: "Yes. The academy welcomes young learners from 3+ years and adapts teaching according to their age and learning ability.\n\nMusic, dance, and creative arts can provide children with an opportunity to explore their creativity and develop their skills through structured learning and regular practice."
  },
  {
    id: 12,
    question: "12. Can adults join the academy?",
    category: "Eligibility & Age",
    answer: "Yes. Tansen Sangeet Mahavidyalaya welcomes adult learners as well.\n\nWhether you are a complete beginner or already have some experience, you can explore courses according to your interests and learning goals."
  },
  {
    id: 13,
    question: "13. Do students need previous musical or dance experience?",
    category: "Eligibility & Age",
    answer: "No. Previous experience is not mandatory.\n\nBeginners can start with the fundamentals of their selected discipline and progress gradually. Students with previous experience can also receive guidance according to their existing skill level."
  },
  {
    id: 14,
    question: "14. How does the academy help students develop confidence?",
    category: "Performance & Certifications",
    answer: "Confidence is developed through a combination of regular practice, structured learning, guidance, and performance opportunities.\n\nStudents are encouraged to participate in individual and group performances, cultural programs, and stage events. Such experiences help students become more comfortable performing in front of an audience."
  },
  {
    id: 15,
    question: "15. What can students learn in Classical Vocal Singing?",
    category: "Courses & Curriculum",
    answer: "The Classical Vocal Singing program introduces students to the fundamentals of Indian classical music. The program is suitable for beginners as well as learners looking to improve their existing vocal skills.",
    bullets: [
      "Swar — Sa, Re, Ga, Ma, Pa, Dha, Ni",
      "Alankar and vocal exercises",
      "Introduction to Ragas",
      "Taal and Laya",
      "Voice culture and breathing techniques",
      "Aroh, Avroh, and Pakad",
      "Bollywood and Light Music",
      "Pitch and rhythm development",
      "Stage performance and musical expression"
    ]
  },
  {
    id: 16,
    question: "16. What can students learn in Kathak?",
    category: "Courses & Curriculum",
    answer: "The Kathak program introduces students to the fundamentals and traditional elements of this Indian classical dance form.\n\nTraining includes areas such as Tatkar, Mudras, Hastaks, Taal, Laya, Chakkars, Abhinaya, Tukdas, Todas, and Tihais, along with posture, coordination, balance, stage presentation, and performance skills."
  },
  {
    id: 17,
    question: "17. What can students learn in Western Dance?",
    category: "Courses & Curriculum",
    answer: "The Western Dance program focuses on movement, rhythm, coordination, flexibility, musicality, and creative expression.\n\nStudents learn basic movements and techniques, choreography, dance sequences, rhythm and beats, body control, posture, stage presence, and performance preparation."
  },
  {
    id: 18,
    question: "18. What can students learn in Guitar classes?",
    category: "Courses & Curriculum",
    answer: "Guitar students develop a foundation in both practical playing and basic music theory.",
    bullets: [
      "Acoustic guitar playing",
      "Correct posture and hand positioning",
      "Basic chords and chord progressions",
      "Strumming patterns",
      "Rhythm and timing",
      "Melodies, riffs, and simple songs",
      "Basic scales and music theory",
      "Finger exercises",
      "Different genres and playing styles"
    ]
  },
  {
    id: 19,
    question: "19. What can students learn in Keyboard and Piano classes?",
    category: "Courses & Curriculum",
    answer: "The Keyboard/Piano program introduces students to the fundamentals of playing while developing their understanding of music.\n\nStudents can learn musical notes, scales, chords, arpeggios, rhythm, music theory, hand coordination, finger techniques, melody, harmony, chord progressions, and songs across different musical styles."
  },
  {
    id: 20,
    question: "20. What can students learn in Drums classes?",
    category: "Courses & Curriculum",
    answer: "The Drums program focuses on rhythm, timing, coordination, and control.\n\nStudents learn about the drum kit, correct posture and grip, fundamental beats, rhythmic patterns, tempo, timing, basic notation, hand-and-foot coordination, and playing along with songs and different musical styles."
  },
  {
    id: 21,
    question: "21. What can students learn in Tabla classes?",
    category: "Courses & Curriculum",
    answer: "The Tabla program introduces students to the traditional rhythmic foundations of Indian classical music.\n\nStudents learn the structure of the Tabla, sitting posture, hand positioning, basic Bols, Taal, Laya, fundamental Taals, rhythmic patterns, hand coordination, timing, speed, clarity, and rhythmic accuracy."
  },
  {
    id: 22,
    question: "22. What is taught in Fine Arts classes?",
    category: "Courses & Curriculum",
    answer: "The Fine Arts program provides students with a creative environment to explore drawing, sketching, painting, and imaginative art.",
    bullets: [
      "Drawing and sketching fundamentals",
      "Shapes, lines, forms, and proportions",
      "Colour theory and colour mixing",
      "Painting and different mediums",
      "Shading and highlighting",
      "Still-life drawing",
      "Nature and scenery",
      "Creative compositions",
      "Freehand and imaginative art"
    ]
  },
  {
    id: 23,
    question: "23. How do I book a free demo class?",
    category: "General & Admissions",
    answer: "You can contact our team through phone, WhatsApp, email, or the online enquiry form to enquire about a free demo class.\n\nOur team will guide you regarding the available course, suitable batch, schedule, and demo session. Start your learning journey with Tansen Sangeet Mahavidyalaya today!"
  }
];

export const faqFooterContact = {
  title: "Still Have Questions?",
  subtitle: "If you couldn't find the answer you're looking for, our team is happy to help.",
  phones: ["9818083588", "9871833588"],
  email: "tansengurugram43@gmail.com",
  address: "NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana – 122002",
  ctaTitle: "Book Your Free Demo Class",
  ctaSubtitle: "Discover your passion for music, dance, and the performing arts with Tansen Sangeet Mahavidyalaya."
};
