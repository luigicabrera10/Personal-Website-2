import BracketWrapper from "@/components/BracketWrapper/BracketWrapper"
import ProjectSlider from "./_components/ProjectSlider"

export default function ProjectsPage(){

    return (
        <section className="w-full h-full snap-start"  id="projects">
            <BracketWrapper name='PROJECTS'>
                <ProjectSlider />
            </BracketWrapper>
        </section>
    )

}