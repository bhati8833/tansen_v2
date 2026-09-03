import type { Metadata } from 'next';
import { Roboto, Roboto_Slab, Poppins, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingAction } from '@/components/common/FloatingAction';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto-var',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab-var',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins-var',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-var',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tansensangeetgurugram.com'),
  title: 'Tansen Sangeet Mahavidyalaya – Best Music & Dance Academy in India',
  description:
    "Join India's most trusted music and dance academy. Learn Vocal, Guitar, Tabla, Keyboard, Kathak, Western Dance & more. 50+ years of excellence.",
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
      className={`${roboto.variable} ${robotoSlab.variable} ${poppins.variable} ${playfair.variable}`}
    >
      <body
        style={{
          fontFamily: 'var(--font-roboto-var), Roboto, sans-serif',
          color: '#333333',
          backgroundColor: '#ffffff',
        }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingAction />
      </body>
    </html>
  );
}
