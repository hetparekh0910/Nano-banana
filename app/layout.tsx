import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Nano Banana | Future of Freshness',
  description: 'Premium cold-pressed juice blends with revolutionary scrollytelling experience.',
  openGraph: {
    title: 'Nano Banana | Future of Freshness',
    description: 'Premium cold-pressed juice blends with revolutionary scrollytelling experience.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-outfit">
        {children}
      </body>
    </html>
  );
}
