import { Metadata } from "next";
import BracketWrapper from "@/components/BracketWrapper/BracketWrapper"
import ProjectSlider from "./_components/ProjectSlider"

export const metadata: Metadata = {
  title: 'Luigi | Projects',
  description: "Some of the most notable projects I've built and am proud of.",
  openGraph: {
    title: 'Luigi Cabrera | Projects',
    description: "Some of the most notable projects I've built and am proud of.",
    images: ['/imgs/metadata/og-image.png'], 
  },
};


export default function ProjectsPage(){

    return (
        <section className="w-full h-full snap-start"  id="projects">
            <BracketWrapper name='PROJECTS'>
                <ProjectSlider />
            </BracketWrapper>
        </section>
    )

}