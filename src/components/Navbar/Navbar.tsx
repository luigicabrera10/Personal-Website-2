// import Link from "next/link";
import Logo from "../Logo/Logo";
import { sections } from "@/data/sections";
import LinkBlock from "./components/LinkBlock";


export default function Navbar() {

    return (
        <nav className="w-full fixed bg-blue-700/50 flex justify-between">
            <div className="block px-10 py-5">
                <Logo 
                    size={80}
                    circlePadding={10}
                />
            </div>
            <div className="flex flex-row justify-end items-center">
                {
                    sections.map( (sectionName: string, sectionIndex: number) => {
                        return (
                            <LinkBlock key={sectionIndex} sectionName={sectionName} sectionId={sectionIndex}/>
                        )
                    })
                }
            </div>
        </nav>
    );
}