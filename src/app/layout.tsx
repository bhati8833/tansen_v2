import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingAction } from '@/components/common/FloatingAction';
import { PageTagline } from '@/components/common/PageTagline';
import './globals.css';

const dmSans = localFont({
  src: '../fonts/DM-Sans-Variable.woff2',
  variable: '--font-dm-sans-var',
  display: 'swap',
});

const spectral = localFont({
  src: [
    { path: '../fonts/Spectral-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Spectral-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Spectral-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/Spectral-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/Spectral-Italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-spectral-var',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tansensangeetgurugram.com'),
  title: 'Tansen Sangeet Mahavidyalaya – Best Music & Dance Academy in India',
  description:
    "Join India's most trusted music and dance academy. Learn Vocal, Guitar, Tabla, Keyboard, Kathak, Western Dance & more. 50+ years of excellence.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Tansen Sangeet Mahavidyalaya – Music & Dance Academy',
    description: "Join India's premier music & dance academy at Sector-43 Gurugram. Learn Vocal, Guitar, Kathak, Western Dance & more.",
    url: 'https://tansensangeetgurugram.com',
    siteName: 'Tansen Sangeet Mahavidyalaya',
    images: [
      {
        url: '/assets/logos/tansen-logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Tansen Sangeet Mahavidyalaya Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tansen Sangeet Mahavidyalaya',
    description: "Premier Music & Dance Academy at Sector-43 Gurugram.",
    images: ['/assets/logos/tansen-logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spectral.variable}`}
    >
      <body
        style={{
          fontFamily: 'var(--font-dm-sans-var), "DM Sans", sans-serif',
          color: '#333333',
          backgroundColor: '#ffffff',
        }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <PageTagline />
        <Footer />
        <FloatingAction />
      </body>
    </html>
  );
}
