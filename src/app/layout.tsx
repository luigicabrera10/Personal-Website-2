import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import ScrollWatcher from "@/components/ScrollWatcher/ScrollWatcher";
import LiquidEther from '@/components/Background/LiquidEther'

export const metadata: Metadata = {
  metadataBase: new URL('https://luigi-cabrera.com'),

  title: 'Luigi Cabrera | Full Stack Developer',
  description: 'Full Stack Developer specializing in high-performance web/mobile applications.',
  icons: [ '/icon.png' ],
  keywords: [
    'Luigi Cabrera',
    'Full Stack Developer',
    'React Developer',
    'Next.js Portfolio',
    'Software Engineer',
    'Developer',
    'Luigi',
    'Cabrera'
  ],

  authors: [{ name: 'Luigi Cabrera', url: 'https://luigi-cabrera.com' }],
  creator: 'Luigi Cabrera',
  publisher: 'Luigi Cabrera',

  openGraph: {
    title: 'Luigi Cabrera | Full Stack Developer',
    description: 'Full Stack Developer specializing in high-performance web/mobile applications.',
    url: 'https://luigi-cabrera.com',
    siteName: 'Luigi Cabrera Portfolio',
    images: [
      {
        url: '/imgs/metadata/og-image.png',
        width: 2493,
        height: 1368,
        alt: 'Luigi Cabrera Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Luigi Cabrera | Full Stack Developer',
    description: 'Full Stack Developer.',
    // creator: '@twitterhandle',
    images: ['/imgs/metadata/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
  about,
  experience,
  projects,
  skills,
  contact,
}: Readonly<{
  children: React.ReactNode;
  about: React.ReactNode;
  experience: React.ReactNode;
  projects: React.ReactNode;
  skills: React.ReactNode;
  contact: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="font-[Fira_Sans] h-screen w-screen grid grid-rows-[var(--navbar-h)_1fr] select-none">

            <div className="w-full h-full absolute -z-1">
              <LiquidEther
                mouseForce={12}
                cursorSize={16}
                isViscous={false}
                viscous={20}
                colors={["#00bbfa","#49dee9","#17e84b","#22d340"]}
                autoSpeed={0.1}
                autoIntensity={1.0}
                isBounce={false}
                resolution={0.075}
              />
            </div>
            
            <ActiveSectionProvider>
              <Navbar />
              <div className="px-(--padding-x) h-full overflow-y-auto no-scrollbar scroll-smooth snap-y snap-mandatory">
                <ScrollWatcher index={0}>{about}</ScrollWatcher>
                <ScrollWatcher index={1}>{skills}</ScrollWatcher>
                <ScrollWatcher index={2}>{experience}</ScrollWatcher>
                <ScrollWatcher index={3}>{projects}</ScrollWatcher>
                <ScrollWatcher index={4}>{contact}</ScrollWatcher>
              </div>

            </ ActiveSectionProvider>
          </div>
        </main>       
      </body>
    </html>
  );
}
