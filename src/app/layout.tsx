// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { kaBlam, kaBlamFill, komigo, lato, momo, oups, oupsClean, oupsOutline } from '@/constants/fonts';
import DynamicMeshBackground from '@/components/ui/DynamicMeshBackground';
import FloatingOrbs from '@/components/ui/FloatingOrbs';
import Beams from '@/components/ui/Beams';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.manzanohq.com'),
  title: {
    default: 'ManzanoHQ',
    template: '%s · ManzanoHQ',
  },
  description:
    'We craft high-polish apps, storefronts, and reusable UI/motion systems across iOS, Android, and Web.',
  keywords: [
    'ManzanoHQ',
    'Ruben Manzano',
    'iOS',
    'Android',
    'Next.js',
    'Expo',
    'Stripe',
    'Supabase',
    'Design Systems',
    'Framer Motion',
  ],
  applicationName: 'ManzanoHQ',
  authors: [{ name: 'ManzanoHQ', url: 'https://www.manzanohq.com' }],
  creator: 'ManzanoHQ',
  openGraph: {
    type: 'website',
    url: 'https://www.manzanohq.com',
    siteName: 'ManzanoHQ',
    title: 'ManzanoHQ',
    description:
      'We craft high-polish apps, storefronts, and reusable UI/motion systems across iOS, Android, and Web.',
    images: [
      {
        url: '/images/logo/logo-main.png',
        width: 1200,
        height: 630,
        alt: 'ManzanoHQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ManzanoHQ',
    description:
      'High-polish apps & storefronts with performance, animation, and longevity.',
    images: ['/images/devLogos/devzano.png'],
    creator: '@devzano',
  },
  alternates: {
    canonical: 'https://www.manzanohq.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    apple: [{ url: '/favicon.ico' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html
      lang="en"
      className={[
        komigo.variable,
        momo.variable,
        lato.variable,
        oups.variable,
        oupsOutline.variable,
        oupsClean.variable,
        kaBlam.variable,
        kaBlamFill.variable,
        "h-full w-full",
      ].join(" ")}
    >
      <body className="h-full bg-black text-white antialiased">
        <DynamicMeshBackground />
        <FloatingOrbs />
        <Beams />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}