'use client'
import { useState } from "react";
import { sections } from "@/data/sections";
import { Menu, X } from 'lucide-react';
import LinkBlock from "@/components/Navbar/components/LinkBlock";

export default function NavbarSections(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex lg:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white px-8"
                >
                    {isOpen ? 
                        <X className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"/> 
                        : 
                        <Menu className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"/>
                    }
                </button>
            </div>

            {isOpen && (
                <aside className="bg-blue-800 fixed w-full overflow-y-scroll mt-(--navbar-h) h-[calc(100vh-var(--navbar-h))] pt-8 px-8 text-4xl lg:hidden">
                    <div>
                        {sections.map( (sectionName: string, sectionIndex: number) => {
                            return (
                                <LinkBlock 
                                    key={sectionIndex}
                                    sectionName={sectionName}
                                    sectionId={sectionIndex}
                                    setNumbers={true}
                                    closeMenu={() => setIsOpen(false)}
                                />
                            )
                        })}
                    </div>
                    
                    <hr className="my-8"></hr>

                    <div>
                        <div className="pb-8 text-5xl font-bold">
                            Luigi Cabrera
                        </div>
                        <div className="flex flex-row pb-8">
                            <button>
                                <img className="w-15 h-15 mr-8" src={'/imgs/icons/linkedin.png'} />
                            </button>
                            <button>
                                <img className="w-15 h-15 mr-8" src={'/imgs/icons/github.png'} />
                            </button>
                            <button>
                                <img className="w-15 h-15 mr-8" src={'/imgs/icons/email.png'} />
                            </button>
                        </div>
                    </div>
                    
                </aside>
            )}

            <div className="hidden lg:flex flex-row justify-end items-center text-3xl xl:text-4xl">
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