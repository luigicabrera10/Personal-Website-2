import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import ScrollWatcher from "@/components/ScrollWatcher/ScrollWatcher";
import LiquidEther from '@/components/Background/LiquidEther'

export const metadata: Metadata = {
  title: "Luigi Cabrera",
  description: "Luigi Cabrera Personal Design",
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
              mouseForce={8}
              cursorSize={85}
              isViscous={false}
              viscous={20}
              colors={["#00bbfa","#49dee9","#17e84b","#22d340"]}
              autoDemo
              autoSpeed={0.2}
              autoIntensity={1.1}
              isBounce={false}
              resolution={0.4}
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
