"use client"
import { motion} from "motion/react"
import { useState } from "react"
import { technologies } from "@/data/techs"
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function SkillSlider() {

    const [selection, setSelection] = useState(0);

    const mapArray = Object.entries(technologies).map( ([key, val]) => {
        return {
            'type': key,
            'vals': val
        }
    });

    function slice(direction: -1 | 1){
        setSelection( (prev) => {
            if (direction === -1 && prev === 0) return  mapArray.length -1
            return (prev + direction) % mapArray.length
        })
    }


    return (

        <div className="h-full  grid grid-cols-[1fr_3fr_1fr] grid-rows-[1fr_4fr]">

            <div className="col-span-3 text-3xl md:text-4xl flex justify-center items-center">
                {mapArray[selection]['type']}
            </div>

            <button className="row-span-2 flex justify-center items-center" onClick={() => slice(-1)}>
                <ArrowLeft className="w-10 h-10"/>
            </button>

            <div className="flex flex-col overflow-y-auto justify-center-safe w-fit justify-self-center">
                {mapArray[selection]['vals'].map((val) => {
                    return (
                        <div key={val['tech']} className="flex flex-row items-center mb-4">
                            <img 
                                src={val['img']}
                                className="aspect-auto w-8 md:w-10"
                            />
                            <div className="text-[1.2rem] md:text-2xl pl-6">
                                {val['tech']}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="row-span-2 flex justify-center items-center" onClick={() => slice(+1)}>
                <ArrowRight className="w-10 h-10"/>
            </button>

        </div>
    )

}
