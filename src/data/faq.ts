// src/data/faq.ts
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What courses does Tansen Sangeet Mahavidyalaya offer?',
    answer:
      'We offer a wide range of music and dance courses including Vocal Singing, Guitar, Keyboard, Tabla, Harmonium, Drum, Indian Classical Dance (Kathak), Western Dance, and Fine Arts. All courses are available for beginners to advanced learners.',
  },
  {
    id: 2,
    question: 'How long are the courses at Tansen?',
    answer:
      'Course durations vary from 3 months to 12 months depending on the level and program. We offer short-term certificate courses as well as long-term diploma programs. Custom schedules are also available.',
  },
  {
    id: 3,
    question: 'Do you provide online classes?',
    answer:
      'Yes, we offer both online and offline classes to cater to students across India and internationally. Our online classes are conducted via Zoom/Google Meet with the same quality instruction as our in-center classes.',
  },
  {
    id: 4,
    question: 'What is the age requirement for enrollment?',
    answer:
      'We welcome students of all age groups — from young children (as young as 5 years) to adults and senior citizens. We have specially designed programs for each age group.',
  },
  {
    id: 5,
    question: 'How can I enroll or book a free demo class?',
    answer:
      'You can enroll by calling us at +91-977-396-5448, emailing info.tansensangeet2@gmail.com, or filling the contact form on our website. A free demo class is available for all new students — simply reach out to schedule yours.',
  },
  {
    id: 6,
    question: 'Does Tansen offer franchise opportunities?',
    answer:
      'Yes! We offer franchise opportunities across India. Owning a Tansen Sangeet Mahavidyalaya franchise lets you run a premium music and dance academy under our established brand with full training, support, and curriculum provided.',
  },
  {
    id: 7,
    question: 'Are the courses affiliated with any recognized institution?',
    answer:
      'Yes, our courses are recognized by leading institutions including Pracheen Kala Kendra, Prayag Sangit Samiti, Trinity College London, UGC, and ISO certified. Our certificates hold national and international recognition.',
  },
  {
    id: 8,
    question: 'How many centers does Tansen have?',
    answer:
      'Tansen Sangeet Mahavidyalaya has over 125+ centers spread across 100+ cities in India, making us one of the largest music and dance academy networks in the country.',
  },
];
