import BracketWrapper from "@/components/BracketWrapper/BracketWrapper"
import TimeLine from "@/components/TimeLine/TimeLine"

export default function ExperiencePage(){

    const currentYear = String(new Date().getFullYear());

    return (
        <section className="w-full h-full snap-start"  id="experience">
            <BracketWrapper name="EXPERIENCE">
                <div className="h-full flex items-center-safe overflow-scroll no-scrollbar scroll-smooth snap-x snap-mandatory lg:overflow-visible">
                    <TimeLine startYear="2022" endYear={currentYear}/>
                </div>
            </BracketWrapper>
        </section>
    )

}