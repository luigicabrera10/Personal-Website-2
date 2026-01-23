import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import ScrollWatcher from "@/components/ScrollWatcher/ScrollWatcher";
import SideNav from "@/components/SideNav/SideNav";

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
          <div className="font-[IBM_Plex_Mono] h-screen w-screen grid grid-rows-[var(--navbar-h)_1fr]">
            <ActiveSectionProvider>

              <Navbar />
              <SideNav />

              <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth snap-y snap-mandatory">
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
