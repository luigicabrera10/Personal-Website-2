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
    const selectionStyle = activeSection.id === sectionId ? "text-green-500 font-bold" : "";
    return (
        <Link 
            className={`block py-4 whitespace-nowrap px-4 xl:px-6 ${selectionStyle}`}
            href={`#${sectionName.toLowerCase()}`}
            onClick={() => {if (closeMenu !== undefined) closeMenu()}}
        >
            {(setNumbers ? (sectionId+1) + '. ' : '') + sectionName.toUpperCase()}
        </Link>
    );
}