'use client'
import BracketWrapper from "@/components/BracketWrapper/BracketWrapper"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"
import { useState } from "react"

export default function ProjectsPage(){

    const [index, setIndex] = useState(0);

    function slice(direction: -1 | 1){
        setIndex( (prev) => {
            if (direction === -1 && prev === 0) return  projects.length -1
            return (prev + direction) % projects.length
        })
    }

    return (
        <section className="w-full h-full bg-cyan-500 snap-start"  id="projects">
            <BracketWrapper name='PROJECTS'>
                <div className="w-full h-full grid grid-cols-[1fr_8fr_1fr] lg:grid-cols-[1fr_600px_1fr] px-8 place-items-center overflow-y-scroll no-scrollbar">

                    <button onClick={() => slice(-1)}>
                        < ArrowLeft className="w-10 h-10" />
                    </button>

                    {/* <div className="w-full h-full text-center grid grid-rows-[1fr_1fr] gap-5 mx-6">
                        <div className="w-full  flex items-end">
                            <img src={projects[index].img[0]} />
                        </div>
                        <div className="w-full">
                            <div className="max-w-150">
                                <div className="text-3xl font-semibold">{projects[index].tittle}</div>
                                <div className="text-xl">{projects[index].description}</div>
                            </div>

                        </div>
                    </div> */}

                    <div className="w-full h-full text-center flex flex-col justify-center gap-5 mx-6">
                        <div className="w-full  flex items-end">
                            <img src={projects[index].img[0]} />
                        </div>
                        <div className="w-full">
                            <div className="max-w-150">
                                <div className="text-xl font-semibold">{projects[index].tittle}</div>
                                <div className="text-xs">{projects[index].description}</div>
                            </div>

                        </div>
                    </div>

                    <button onClick={() => slice(+1)}>
                        < ArrowRight className="w-10 h-10" />
                    </button>

                </div>
            </BracketWrapper>
        </section>
    )

}