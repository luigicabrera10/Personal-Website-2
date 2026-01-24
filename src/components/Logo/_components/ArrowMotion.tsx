"use client"
import { motion } from "framer-motion"
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function ArrowMotion({children} : {children: React.ReactNode}){

    const rotation = 180;
    const {activeSection} = useActiveSection();

    return (
        <motion.div
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
        >
            {children}
        </motion.div>
    );

}