'use client'
import { useActiveSection } from "@/context/ActiveSectionContext";
import { sections } from "@/data/sections";
import Link from "next/link";

export default function SideNav(){

    const {activeSection} = useActiveSection();

    return (
        <header className="hidden lg:flex flex-col fixed right-12 top-1/2 -translate-y-1/2">
            {sections.map( (section, idx) =>{
                return (
                    <Link 
                        key={idx} 
                        href={`#${section.toLowerCase()}`}
                        className={`${activeSection.id === idx ? 'bg-yellow-400' : 'bg-white'} rounded-full my-3 w-4 ${activeSection.id === idx ? 'h-12' : 'h-4'}`} 
                    > </Link>
                );
            })}
        </header>
    )

}