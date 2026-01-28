'use client'
import {motion} from "motion/react"
import { useActiveSection } from "@/context/ActiveSectionContext";
import { sections } from "@/data/sections";

export default function SideNav(){

    const {activeSection} = useActiveSection();

    const variants = {
        hidden: {
            opacity: 0.0,
            height: '16px',
            backgroundColor: "#FFFFFF", // Use hex/rgba for smooth transitions
        },
        regular: {
            opacity: 1.0,
        },
        selected: {
            opacity: 1.0,
            height: '48px',
            backgroundColor: "#00c951", 
        },
    }

    return (
        <header className="hidden lg:flex flex-col fixed right-[calc(var(--padding-x)-16px)] top-1/2 -translate-y-1/2">
            {sections.map( (section, idx) => {
                return (
                    <motion.a 
                        key={idx} 
                        variants={variants}
                        initial={"hidden"}
                        animate={activeSection.id === idx ? "selected" : "regular"}
                        href={`#${section.toLowerCase()}`}
                        className="w-[16px] rounded-full my-2"
                    > </motion.a>
                );
            })}
        </header>
    )

}