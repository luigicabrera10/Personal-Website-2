"use client"
import * as motion from "motion/react-client"
import { useActiveSection } from "@/context/ActiveSectionContext";
import Link from "next/link";


export default function LinkBlock({
    sectionName,
    sectionId,
    setNumbers = false,
    closeMenu
} : {
    sectionName: string,
    sectionId: number,
    setNumbers?: boolean,
    closeMenu?: () => void
}){

    const {activeSection} = useActiveSection();
    const isSelected = activeSection.id === sectionId;
    const selectionStyle = isSelected ? "font-bold" : "";

    const itemStagger = {
        hidden: { opacity: 0, y: -40 },
        visible: { 
            opacity: 1, y: 0, 
            scale: isSelected ? 1.1 : 1.0,
            color: isSelected ? "#22c55e" : "#ffffff"
        },
    };

    const itemsGestures = {
        hover: { scale: 1.1 },
        click: { scale: 0.9 },
    }

    return (
        <motion.div
            variants={itemStagger}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
            }}
        >
            <motion.div
                variants={itemsGestures}
                transition={{
                    duration: 0.1,
                    ease: "easeInOut"
                }}
                whileHover="hover"
                whileTap="click"
            >
                <Link
                    className={`block py-4 whitespace-nowrap px-4 xl:px-6 ${selectionStyle}`}
                    href={`#${sectionName.toLowerCase()}`}
                    onClick={() => {if (closeMenu !== undefined) closeMenu()}}
                >
                    {(setNumbers ? (sectionId+1) + '. ' : '') + sectionName.toUpperCase()}
                </Link>
            </motion.div>
        </motion.div>
    );
}

