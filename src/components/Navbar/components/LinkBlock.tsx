"use client"
import { useActiveSection } from "@/context/ActiveSectionContext";
import Link from "next/link";

export default function LinkBlock({sectionName, sectionId} : { sectionName: string, sectionId: number}){
    const {activeSection} = useActiveSection();
    console.log(`Fetched section ${sectionName}: ${activeSection}`)
    return (
        <Link 
            className={`block px-7 py-4 text-4xl`}
            style={activeSection === sectionId ? {color: "green"} : {}}
            href={`#${sectionName.toLowerCase()}`}
        >
            {sectionName}
        </Link>
    );
}