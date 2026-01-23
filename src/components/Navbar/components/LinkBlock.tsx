"use client"
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
    return (
        <Link 
            className="block py-4 whitespace-nowrap px-4 xl:px-6"
            style={activeSection.id === sectionId ? {color: "green"} : {}}
            href={`#${sectionName.toLowerCase()}`}
            onClick={() => {if (closeMenu !== undefined) closeMenu()}}
        >
            {(setNumbers ? (sectionId+1) + '. ' : '') + sectionName}
        </Link>
    );
}