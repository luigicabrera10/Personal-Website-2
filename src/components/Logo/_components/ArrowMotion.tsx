"use client"
// import { motion } from "motion/react"
import { motion } from "framer-motion"
import { useActiveSection } from "@/context/ActiveSectionContext";


export default function ArrowMotion({square} : {square: number}){

    const rotation = 180;
    const {activeSection} = useActiveSection();

    return (
        <motion.img
            key={activeSection.id}
            initial = {{
                rotate: 0
            }}
            animate={{ 
                rotate: activeSection.direction ? -rotation : rotation 
            }} 
            transition={{
                mass: 1.3,
                ease: "easeInOut",
                type: "spring",
                stiffness: 150,
                damping: 6.5
            }}
            className="absolute"
            src='/imgs/logo/logo-arrows.png'
            width={square}
            height={square}
            alt={"Name Logo"}
        />
    );

}