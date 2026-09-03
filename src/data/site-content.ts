// src/data/site-content.ts
export const siteContent = {
  site: {
    name: 'Tansen Sangeet Mahavidyalaya',
    tagline: 'Music • Dance • Performing Arts',
    phone: '9818083588',
    phoneSecondary: '9871833588',
    phoneRaw: '+919818083588',
    email: 'tansengurugram43@gmail.com',
    address: 'NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002',
    whatsapp: 'https://wa.me/919818083588?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses',
    directionsUrl: 'https://maps.google.com/?q=Tansen+Sangeet+Mahavidyalaya+Sector+43+Gurugram',
  },

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { 
      label: 'Courses', 
      href: '/courses',
      categories: [
        {
          name: 'Instruments',
          href: '/courses/instruments',
          items: [
            { label: 'Guitar', href: '/courses/instruments/guitar' },
            { label: 'Keyboard / Piano', href: '/courses/instruments/keyboard-piano' },
            { label: 'Drums', href: '/courses/instruments/drums' },
            { label: 'Tabla', href: '/courses/instruments/tabla' },
          ]
        },
        {
          name: 'Music & Vocal',
          href: '/courses/music',
          items: [
            { label: 'Classical Vocal Singing', href: '/courses/music/classical-vocal-singing' },
          ]
        },
        {
          name: 'Dance',
          href: '/courses/dance',
          items: [
            { label: 'Kathak', href: '/courses/dance/kathak' },
            { label: 'Western Dance', href: '/courses/dance/western-dance' },
          ]
        },
        {
          name: 'Creative Arts',
          href: '/courses/creative-arts',
          items: [
            { label: 'Fine Arts', href: '/courses/creative-arts/fine-arts' },
          ]
        }
      ]
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],

  stats: [
    { value: 'Certified', suffix: '', label: 'Structured Curriculum' },
    { value: 'Gurugram', suffix: '', label: 'Sector-43 Center' },
    { value: 'Expert', suffix: '', label: 'Faculty Guidance' },
    { value: 'All Ages', suffix: '', label: 'Kids & Adults' },
  ],

  footer: {
    brandName: 'Tansen Sangeet Mahavidyalaya',
    brandTagline: 'Music • Dance • Performing Arts',
    brandDescription:
      'Nurturing creativity, confidence, discipline, and artistic expression through structured learning in music, dance, instruments, and fine arts. Tansen Sangeet Mahavidyalaya is a unit of Tansen Institute of Performing Arts (TIPA) Pvt. Ltd. and is committed to making performing arts accessible through quality training and a supportive learning environment.',
    ctaBanner: {
      heading: 'Your Musical Journey Starts Here',
      subtitle: 'Ready to Begin?',
      description:
        'Explore your passion for music, dance, and the performing arts with structured learning and guided practice. Book a free demo class and discover the right learning path for you.',
      primaryBtnText: 'Book Free Demo',
      primaryBtnHref: '/contact',
      secondaryBtnText: 'Contact Us',
      secondaryBtnHref: '/contact',
    },
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Book Free Demo', href: '/contact' },
    ],
    courseCategories: [
      {
        category: 'Instruments',
        items: [
          { label: 'Guitar', href: '/courses/instruments/guitar' },
          { label: 'Keyboard / Piano', href: '/courses/instruments/keyboard-piano' },
          { label: 'Drums', href: '/courses/instruments/drums' },
          { label: 'Tabla', href: '/courses/instruments/tabla' },
        ],
      },
      {
        category: 'Music & Vocal',
        items: [
          { label: 'Classical Vocal Singing', href: '/courses/music/classical-vocal-singing' },
        ],
      },
      {
        category: 'Dance',
        items: [
          { label: 'Kathak', href: '/courses/dance/kathak' },
          { label: 'Western Dance', href: '/courses/dance/western-dance' },
        ],
      },
      {
        category: 'Creative Arts',
        items: [
          { label: 'Fine Arts', href: '/courses/creative-arts/fine-arts' },
        ],
      },
    ],
    contact: {
      phone1: '9818083588',
      phone2: '9871833588',
      email: 'tansengurugram43@gmail.com',
      address: 'NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002',
      mapUrl: 'https://maps.google.com/?q=Tansen+Sangeet+Mahavidyalaya+Sector+43+Gurugram',
    },
    socialLinks: [
      { label: 'Instagram', href: 'https://www.instagram.com/tansensangeet_mahavidyalayaa/', icon: 'instagram' },
      { label: 'Facebook', href: 'https://www.facebook.com/tansensangetmahavidyalaya', icon: 'facebook' },
      { label: 'YouTube', href: 'https://www.youtube.com/@tansensangeetmahavidyalaya3467', icon: 'youtube' },
      { label: 'WhatsApp', href: 'https://wa.me/919818083588?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses', icon: 'whatsapp' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'FAQ', href: '/faq' },
    ],
    copyright: '© 2026 Tansen Sangeet Mahavidyalaya. All Rights Reserved.',
    unitInfo: 'Tansen Sangeet Mahavidyalaya is a unit of Tansen Institute of Performing Arts (TIPA) Pvt. Ltd.',
  },
};
