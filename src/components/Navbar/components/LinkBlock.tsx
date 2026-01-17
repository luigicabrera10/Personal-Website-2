"use client"
import { useActiveSection } from "@/context/ActiveSectionContext";
import Link from "next/link";

export default function LinkBlock({sectionName, sectionId} : { sectionName: string, sectionId: number}){
    const {activeSection} = useActiveSection();
    return (
        <Link 
            className={`block px-7 py-4 text-4xl`}
            style={activeSection.id === sectionId ? {color: "green"} : {}}
            href={`#${sectionName.toLowerCase()}`}
        >
            {sectionName}
        </Link>
    );
}