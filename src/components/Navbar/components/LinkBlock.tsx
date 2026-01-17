"use client"
import { useActiveSection } from "@/context/ActiveSectionContext";
import Link from "next/link";

export default function LinkBlock({
    sectionName, 
    sectionId,
    closeMenu
} : { 
    sectionName: string, 
    sectionId: number,
    closeMenu?: () => void
}){
    const {activeSection} = useActiveSection();
    return (
        <Link 
            className={`block py-4 lg:p-5 xl:px-7 lg:text-3xl xl:text-4xl`}
            style={activeSection.id === sectionId ? {color: "green"} : {}}
            href={`#${sectionName.toLowerCase()}`}
            onClick={() => {if (closeMenu !== undefined) closeMenu(); console.log("click")}}
        >
            {sectionName}
        </Link>
    );
}