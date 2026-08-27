// src/data/site-content.ts
export const siteContent = {
  site: {
    name: 'Tansen Sangeet Mahavidyalaya',
    tagline: "India's Most Trusted Music & Dance Academy | Since 1972",
    phone: '+91-977-396-5448',
    phoneRaw: '+919773965448',
    email: 'info.tansensangeet2@gmail.com',
    address: 'Sector 106, Gurugram, Haryana - 122006',
    whatsapp: 'https://wa.me/919773965448?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses',
  },

  navigation: [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      href: '/about-us',
      children: [
        { label: 'Our Story', href: '/about-us#story' },
        { label: 'Our Legacy', href: '/about-us#legacy' },
      ],
    },
    {
      label: 'Our Courses',
      href: '/our-courses',
      children: [
        { label: 'Vocal Singing Course', href: '/vocal-singing-course' },
        { label: 'Guitar Classes', href: '/guitar-classes' },
        { label: 'Fine Arts Course', href: '/fine-arts-course' },
        { label: 'Keyboard Course', href: '/keyboard-course' },
        { label: 'Indian Classical Dance', href: '/indian-classical-dance' },
        { label: 'Western Dance Classes', href: '/western-dance-classes' },
        { label: 'Harmonium Classes', href: '/harmonium-classes' },
        { label: 'Tabla Classes', href: '/tabla-classes' },
        { label: 'Drum Classes', href: '/drum-classes' },
      ],
    },
    { label: 'Taanz Centers', href: '/taanz-centers' },
    {
      label: 'Our Achievement',
      href: '/our-achievement',
      children: [
        { label: 'Our Inspiration & Experts', href: '/our-inspiration-experts' },
      ],
    },
    {
      label: 'Gallery',
      href: '#',
      children: [
        { label: 'Our Video Gallery', href: '/our-video-gallery' },
        { label: 'Our Photo Gallery', href: '/our-photo-gallery' },
      ],
    },
    { label: 'Own TSM Franchise', href: '/own-tsm-franchise' },
    { label: 'Contact Us', href: '/contact-us' },
  ],

  stats: [
    { value: 50, suffix: '+', label: 'Years of Legacy' },
    { value: 150000, suffix: '+', label: 'Happy Students' },
    { value: 125, suffix: '+', label: 'Centers Across India' },
    { value: 25, suffix: '+', label: 'Professional Courses' },
  ],

  footer: {
    description:
      "Tansen Sangeet Mahavidyalaya is one of India's most trusted music and dance academies, nurturing talent since 1972 with over 125 centers across 100+ cities.",
    popularCourses: [
      { label: 'Vocal Singing', href: '/vocal-singing-course' },
      { label: 'Guitar', href: '/guitar-classes' },
      { label: 'Keyboard', href: '/keyboard-course' },
      { label: 'Kathak', href: '/indian-classical-dance' },
      { label: 'Western Dance', href: '/western-dance-classes' },
      { label: 'Fine Arts', href: '/fine-arts-course' },
    ],
    quickLinks: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Taanz Centers', href: '/taanz-centers' },
      { label: 'Franchise', href: '/own-tsm-franchise' },
      { label: 'Gallery', href: '/our-photo-gallery' },
      { label: 'Achievements', href: '/our-achievement' },
      { label: 'FAQs', href: '/faq' },
    ],
    socialLinks: [
      { label: 'Facebook', href: 'https://www.facebook.com/tansensangetmahavidyalaya', icon: 'facebook' },
      { label: 'LinkedIn', href: 'https://in.linkedin.com/company/tansen-sangeet-mahavidyalaya---india', icon: 'linkedin' },
      { label: 'YouTube', href: 'https://www.youtube.com/@tansensangeetmahavidyalaya3467', icon: 'youtube' },
      { label: 'Twitter', href: 'http://x.com/tansen_in', icon: 'twitter' },
      { label: 'Instagram', href: 'https://www.instagram.com/tansensangeet_mahavidyalayaa/', icon: 'instagram' },
    ],
  },
};
