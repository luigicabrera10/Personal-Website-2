'use client'
import { TextScramble } from "@/components/motion-primitives/text-scramble"
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function TextScrollScramble({name} : {name: string}){
    const {activeSection} = useActiveSection();

    return (
        <TextScramble 
            key={activeSection.id}
            speed={0.0005}
            duration={0.17}
            className='inline-block text-4xl lg:text-5xl font-semibold text-[#00c951]'
            characterSet='ABCDEFGHIJKLMNOPQRSTUVWXY0123456789'
        > 
            {name} 
        </TextScramble>   
    )
    
}