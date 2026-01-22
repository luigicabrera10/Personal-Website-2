import BracketWrapper from "@/components/BracketWrapper/BracketWrapper"
import TimeLine from "@/components/TimeLine/TimeLine"

export default function ExperiencePage(){

    const currentYear = String(new Date().getFullYear());

    return (
        <section className="w-full h-full bg-red-500 snap-start"  id="experience">
            <BracketWrapper name="EXPERIENCE">
                <div className="flex items-center-safe overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory px-8 lg:max-w-full">
                    <TimeLine startYear="2022" endYear={currentYear}/>
                </div>
            </BracketWrapper>
        </section>
    )

}