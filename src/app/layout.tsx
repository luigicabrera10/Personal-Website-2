import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";

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
          <Navbar />
          {children}
          {about}
          {experience}
          {projects}
          {skills}
          {contact}
        </main>
      </body>
    </html>
  );
}
