'use client'
import { useActiveSection } from "@/context/ActiveSectionContext";
import { sections } from "@/data/sections";
import Link from "next/link";

export default function SideNav(){

    const {activeSection} = useActiveSection();

    return (
        <div className="flex flex-col">
            {sections.map( (section, idx) =>{
                return (
                    <Link 
                        key={idx} 
                        href={`#${section.toLowerCase()}`}
                        className={`${activeSection.id === idx ? 'bg-yellow-400' : 'bg-white'} rounded-full my-3 w-6 h-6`} 
                    > </Link>
                );
            })}
        </div>
    )

}