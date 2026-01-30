'use client'
import { motion } from "motion/react"
import { useState } from "react";
import { sections } from "@/data/sections";
import { Menu, X } from 'lucide-react';
import LinkBlock from "@/components/Navbar/_components/LinkBlock";
import { socialMedia } from "@/data/social";

const container = {
    hidden: { },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.175,
        }
    }
};


export default function NavbarSections(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex lg:hidden  z-110 ">
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
                <aside className="bg-black/85 backdrop-blur-xs z-100 fixed w-full h-full left-0 overflow-y-scroll pt-[calc(16px+var(--navbar-h))] px-8 text-4xl lg:hidden">
                    <motion.div variants={container} initial="hidden" animate="visible">
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
                    </motion.div>

                    <hr className="my-8"></hr>

                    <div>
                        <div className="pb-8 text-5xl font-bold">
                            Luigi Cabrera
                        </div>
                        <div className="flex flex-row pb-8">
                            {socialMedia.map( (val, idx) => {
                                return (
                                    <a href={val.link} target="_blank" key={idx}>
                                        <img className="rounded-full border-2 border-white w-15 h-15 mr-8" src={val.img} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </aside>
            )}

            <motion.div
                className="hidden lg:flex flex-row justify-end items-center text-xl xl:text-3xl"
                variants={container}
                initial="hidden"
                animate="visible"
            >
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

            </motion.div>
        </>

    )
}