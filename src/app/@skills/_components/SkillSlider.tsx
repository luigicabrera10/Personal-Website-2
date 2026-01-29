"use client"
import { motion} from "motion/react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { technologies } from "@/data/techs"
import { sections } from "@/data/sections";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function SkillSlider() {

    const {activeSection} = useActiveSection();
    const [selection, setSelection] = useState(0);

    const skillSectionIndex = sections.findIndex( (s) => s === 'Skills')
    const skillSectionInView = skillSectionIndex === activeSection.id;

    const mapArray = Object.entries(technologies).map( ([key, val]) => {
        return { 'type': key, 'vals': val }
    });

    function slice(direction: -1 | 1){
        setSelection( (prev) => {
            if (direction === -1 && prev === 0) return  mapArray.length -1
            return (prev + direction) % mapArray.length
        })
    }

    const arrowGestures = { 
        hover: { scale: 1.15, color: "#22c55e" },
        click: { scale: 0.85, color: "#109140"  }
    }

    const itemsGestures = {
        hover: { scale: 1.125 },
    }

    const containerStagger = {
        hidden: { opacity: 0.0, },
        visible: { opacity: 1, transition: { staggerChildren: 0.09 } }
    }

    const itemsStagger = {
        hidden: { opacity: 0.0, y:-50 },
        visible: { opacity: 1.0, y:0 , transition: { duration: 0.5} }
    }


    return (

        <div className="w-full h-full grid grid-cols-[1fr_3fr_1fr]">

            <motion.button
                className="flex justify-center items-center h-fit place-self-center" onClick={() => slice(-1)}
                variants={arrowGestures}
                whileHover='hover'
                whileTap='click'
            >
                <ChevronLeft className="w-10 h-10 lg:w-12 lg:h-12"/>
            </motion.button>

            <motion.div 
                key={selection}
                className="flex flex-col justify-center items-center gap-5 lg:gap-7"
                variants={containerStagger}
                initial="hidden"
                animate={skillSectionInView ? "visible" : "hidden" }
            >
                <motion.div
                    className="text-center text-3xl md:text-4xl font-semibold"
                    variants={itemsStagger}           
                >
                    {mapArray[selection]['type']}
                </motion.div>

                <div className="flex flex-col w-fit justify-self-center gap-3 lg:gap-4">
                    {mapArray[selection]['vals'].map((val) => {
                        return (
                            <motion.div 
                                key={val['tech']}
                                variants={itemsStagger}
                            >
                                <motion.div
                                className="flex flex-row items-center"
                                    variants={itemsGestures}
                                    whileHover='hover'
                                >
                                    <img 
                                        src={val['img']}
                                        className="aspect-auto w-8 md:w-12"
                                    />
                                    <div className="text-[1.2rem] md:text-2xl pl-6">
                                        {val['tech']}
                                    </div>
                                </motion.div>
                                
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.button
                className="flex justify-center items-center h-fit place-self-center" onClick={() => slice(+1)}
                variants={arrowGestures}
                whileHover='hover'
                whileTap='click'
            >
                <ChevronRight className="w-10 h-10 lg:w-12 lg:h-12"/>
            </motion.button>

        </div>
    )

}
