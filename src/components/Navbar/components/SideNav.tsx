'use client'
import { useActiveSection } from "@/context/ActiveSectionContext";
import { sections } from "@/data/sections";
import Link from "next/link";

export default function SideNav(){

    const {activeSection} = useActiveSection();

    return (
        <header className="hidden lg:flex flex-col fixed right-[calc(var(--padding-x)-16px)] top-1/2 -translate-y-1/2">
            {sections.map( (section, idx) =>{
                return (
                    <Link 
                        key={idx} 
                        href={`#${section.toLowerCase()}`}
                        className={
                            `${activeSection.id === idx ? 'bg-yellow-400 h-[48px]' : 'bg-white h-[16px]'} w-[16px] rounded-full my-2`
                        }
                    > </Link>
                );
            })}
        </header>
    )

}