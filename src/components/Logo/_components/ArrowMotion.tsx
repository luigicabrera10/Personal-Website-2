"use client"
import { motion } from "motion/react"
import { useActiveSection } from "@/context/ActiveSectionContext";


export default function ArrowMotion({square} : {square: number}){

    const {activeSection} = useActiveSection();

    return (
        <motion.img
            key={activeSection}
            initial = {{
                rotate: 0
            }}
            animate={{ 
                rotate: 360 
            }} 
            transition={{
                duration: 0.85,
                ease: "easeInOut",
                type: "spring",
                stiffness: 150,
                damping: 8.5
            }}
            className="absolute"
            src='/imgs/logo/logo-arrows.png'
            width={square}
            height={square}
            alt={"Name Logo"}
        />
    );

}