'use client'
import {motion, AnimatePresence} from "motion/react"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from "@/data/projects"
import { useState, useEffect } from "react"
import ImageSlider from './ImageSlider';
import ModalSlider from "./ModalSlider";

export default function ProjectSlider() {

    const [[projectIndex, direction], setProject] = useState([0, 0]);
    const [imageIndex, setImageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false)

    function sliceProject(newDirection: -1 | 1) {
        if (projectIndex === 0 && newDirection === -1) setProject([projects.length-1, newDirection]);
        else setProject([Math.abs((projectIndex + newDirection) % projects.length), newDirection]);
    }

    function sliceImage(direction: -1 | 1){
        setImageIndex( (prev) => {
            if (direction === -1 && prev === 0) return  projects[projectIndex].imgs.length -1
            return (prev + direction) % projects[projectIndex].imgs.length
        })
    }

    useEffect(() => {
        if (imageIndex >= projects[projectIndex].imgs.length) setImageIndex(0);
    }, [projectIndex]);


    const sliderVariants = {
        initial: (direction: -1|1) => ({
            opacity: 0,  x: direction > 0 ? 100 : -100,
        }),
        visible: {
            opacity: 1,  x: 0,
        },
        exit: (direction: -1|1) => ({
            opacity: 0,  x: direction > 0 ? -100 : 100,
        }),
    };

    const buttonGesture = {
        hover: { scale: 1.15, color: "#22c55e" },
        click: { scale: 0.85, color: "#109140"  }
    }

    return (
        <div 
            className="w-full h-full place-items-center grid grid-cols-[1fr_12fr_1fr] md:grid-cols-[1fr_4fr_1fr] lg:grid-cols-[1fr_500px_1fr] xl:grid-cols-[1fr_650px_1fr]"
        >

            <motion.button 
                variants={buttonGesture}
                whileHover='hover'
                whileTap='click'
                className='h-full' onClick={() => sliceProject(-1)}
            >
                < ChevronLeft className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer" />
            </motion.button>

            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={`project-${projectIndex}`}
                    custom={direction}
                    variants={sliderVariants}
                    initial="initial"
                    animate="visible"
                    exit="exit"

                    transition={{ ease: "linear", duration:0.2}}
                    className="w-full h-full text-center flex flex-col justify-center content-center gap-5 overflow-x-visible no-scrollbar"
                >
                    <ImageSlider
                        imgs={projects[projectIndex].imgs}
                        imageIndex={imageIndex}
                        sliceImage={sliceImage}
                        onClick={() => setModalOpen(true)}
                        className="h-fit relative "    
                    />

                    <div className="w-full overflow-y-scroll no-scrollbar">
                        <div className="text-2xl font-semibold">{projects[projectIndex].tittle}</div>
                        <div className="text-md opacity-80">{projects[projectIndex].description}</div>
                    </div>
                   
                    
                </motion.div>
            </AnimatePresence>
            

            <motion.button 
                variants={buttonGesture}
                whileHover='hover'
                whileTap='click'
                onClick={() => sliceProject(+1)}
            >
                < ChevronRight className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer" />
            </motion.button>

            <ModalSlider isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ImageSlider 
                    imgs={projects[projectIndex].imgs}
                    imageIndex={imageIndex}
                    sliceImage={sliceImage}
                    className="h-full relative place-content-center"
                />
            </ModalSlider>

        </div>
    )

}
