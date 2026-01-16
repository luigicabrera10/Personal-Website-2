import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import ScrollWatcher from "@/components/ScrollWatcher/ScrollWatcher";

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
      <body className="overflow-hidden">
        <main>
          <div className="snap-y snap-mandatory scroll-smooth overflow-y-scroll h-screen w-screen font-[IBM_Plex_Mono]">
            <ActiveSectionProvider>
              <Navbar />
              {children}
              <ScrollWatcher index={0}>{about}</ScrollWatcher>
              <ScrollWatcher index={1}>{skills}</ScrollWatcher>
              <ScrollWatcher index={2}>{experience}</ScrollWatcher>
              <ScrollWatcher index={3}>{projects}</ScrollWatcher>
              <ScrollWatcher index={4}>{contact}</ScrollWatcher>
            </ ActiveSectionProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
