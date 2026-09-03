// src/app/contact/page.tsx
import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Tansen Sangeet Mahavidyalaya | Courses, Admission & Free Demo',
  description:
    'Contact Tansen Sangeet Mahavidyalaya in Gurugram for course information, admissions, batch timings, fees, and free demo classes for music, dance and creative arts.',
  alternates: {
    canonical: 'https://tansensangeetgurugram.com/contact',
  },
  openGraph: {
    title: 'Contact Tansen Sangeet Mahavidyalaya | Courses, Admission & Free Demo',
    description:
      'Contact Tansen Sangeet Mahavidyalaya in Gurugram for course information, admissions, batch timings, fees, and free demo classes for music, dance and creative arts.',
    url: 'https://tansensangeetgurugram.com/contact',
    siteName: 'Tansen Sangeet Mahavidyalaya',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  // LocalBusiness / EducationalOrganization Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EducationalOrganization'],
    name: 'Tansen Sangeet Mahavidyalaya',
    image: 'https://tansensangeetgurugram.com/assets/logos/tansen-logo.jpeg',
    url: 'https://tansensangeetgurugram.com/contact',
    telephone: ['+919818083588', '+919871833588'],
    email: 'tansengurugram43@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'NS-16, Block-C, Sushant Lok-1, Sector-43',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4593452,
      longitude: 77.0782354,
    },
    priceRange: '₹₹',
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tansensangeetgurugram.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact Us',
        item: 'https://tansensangeetgurugram.com/contact',
      },
    ],
  };

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I enquire about a course?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact the academy by phone, email, WhatsApp, or through the online enquiry form.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I book a free demo class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Students can enquire about a free demo class before choosing a program.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I ask about course fees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can contact the academy to get information about the applicable course fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I ask about available batches and timings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Contact the academy to check current batch availability and class timings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which courses can I enquire about?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can enquire about Classical Vocal Singing, Kathak, Western Dance, Guitar, Keyboard/Piano, Drums, Tabla, Fine Arts, and other available programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can beginners join?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The academy welcomes beginners as well as students with previous experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can adults enquire about courses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Programs are available for different age groups, from children aged 3+ to adults.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I visit the academy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The academy is located at NS-16, Block-C, Sushant Lok-1, Sector-43, Gurugram, Haryana - 122002. It is recommended to contact the academy before visiting.',
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ContactClient />
    </>
  );
}
