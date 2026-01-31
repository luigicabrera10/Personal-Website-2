import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageSlider(
    {imgs, imageIndex, sliceImage, onClick = () => null, className=''} : 
    {
        imgs: string[],
        imageIndex: number,
        sliceImage: (direction: 1 | -1) => void
        onClick?: () => void,
        className?:string
    }
){

    const imgIdxs = imgs.map((v,i) => i);

    const imageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1.0, transition: { type: "spring" as const } },
        exit: { opacity: 0, scale: 1.10 },
        hover:{borderColor: '#22c55e'}
    };

    return (
        <div 
            className={`${className}`}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    onClick={onClick}
                    key={imgs[imageIndex]}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover='hover'
                    className="max-h-full border-3 rounded-xl aspect-video object-cover object-center relative cursor-pointer"
                >
                    <Image 
                        src={imgs[imageIndex]}
                        alt={'Luigi Cabrera | Project'}
                        width={1920}
                        height={1080}
                        className=" rounded-xl"
                    />
                </motion.div>

            </AnimatePresence>
            <ChevronLeft 
                onClick={() => sliceImage(-1)}
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/60 rounded-full text-black/85 w-7 h-7 cursor-pointer"
            />
            <ChevronRight 
                onClick={() => sliceImage(+1)}
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/60 rounded-full text-black/85 w-7 h-7 cursor-pointer"
            />
            <div
                className="right-1/2 translate-x-1/2 bottom-2 absolute flex flex-row gap-1"
            >
                {imgIdxs.map((i) => {
                    return (
                        <div key={i} className={`w-2 h-2 rounded-full bg-white ${i===imageIndex ? '' : 'opacity-35'}`} />
                    )
                })}
            </div>
        </div>
    )
}