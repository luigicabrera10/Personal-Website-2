'use client'
import { useState } from "react";
import { sections } from "@/data/sections";
import LinkBlock from "@/components/Navbar/components/LinkBlock";

export default function NavbarSections(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col justify-center lg:hidden items-end">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-5xl focus:outline-none font-bold px-12"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {isOpen && (
                <div className="bg-blue-500/50 fixed w-full lg:hidden px-12 mt-28 text-4xl md:text-5xl">
                    {sections.map( (sectionName: string, sectionIndex: number) => {
                        return (
                            <LinkBlock 
                                key={sectionIndex}
                                sectionName={sectionName}
                                sectionId={sectionIndex}
                                closeMenu={() => setIsOpen(false)}
                            />
                        )
                    })}
                </div>
            )}

            <div className="hidden lg:flex flex-row justify-end items-center">
                {
                    sections.map( (sectionName: string, sectionIndex: number) => {
                        return (
                            <LinkBlock
                                key={sectionIndex}
                                sectionName={sectionName}
                                sectionId={sectionIndex}
                            />
                        )
                    })
                }
            </div>
        </>

    )
}