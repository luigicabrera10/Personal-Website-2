'use client'
import {motion, AnimatePresence} from "motion/react"
import {Fragment} from 'react';
import {works} from '@/data/works'
import { useState } from 'react';

interface JobDetails {
    position: string; 
    description: string; 
    company: string; 
    date: string;
}

export default function TimeLineBlocks(){

    const [selection, setSelection] = useState<
        {idx?: number, priority:boolean}
    >({idx: undefined, priority: false});

    const variantsBlock = {
        hidden_bottom: { opacity: 0.0, y:-20 },
        hidden_top: { opacity: 0.0, y:20 },
        visible: { opacity: 1.0, y:0, transition: { duration: 0.55 } },
        exit: { opacity: 0.0 }
    }

    const EmptyTimeLineDiv = () => {
        return <div className="w-[70vw] md:w-[42vw] lg:w-0"></div>
    }

    const Line = ({idx}: {idx:number}) => {
        return (
            <div 
                key={idx}
                className={
                    `bg-green-500 h-2 grow rounded-2xl ${idx !== 0 && idx !== works.length ? 'scale-x-200 -translate-x-1/2' : ''}`
                }
            />
        );
    }

    const Dot = ({idx} : {idx:number}) => {
        return (
            <div className='h-full w-full flex flex-row items-center'>
                <Line idx={idx} />
                <div className="bg-white h-6 w-6 rounded-full snap-center"></div>
                { idx+1 === works.length ? 
                    <Line idx={idx+1} /> 
                    : 
                    <div className='grow'></div>
                }
            </div>
        )
    }

    const JobDescription = ( 
        {description, isTop, idx} 
        : 
        { description: JobDetails, isTop: boolean, idx: number} 
    ) => {

        const isSelected = idx === selection.idx;

        return ( 
            <div className='w-full flex justify-center items-center'>

                <AnimatePresence mode="wait" >

                    { isSelected ? 
                        (
                            <motion.div 
                                variants={variantsBlock}
                                initial={isTop ? 'hidden_top' : 'hidden_bottom'}
                                animate='visible'
                                exit='exit'
                                className={
                                    `gap-2 flex flex-col text-center
                                    ${isTop ? 'place-self-end' : 'place-self-start'}  lg:-mx-[60%] xl:-mx-[15%]`
                                }
                            >
                                <div className="text-green-500 font-bold text-xl">{description.position}</div>
                                
                                <div className={`text-sm opacity-85 `}>{description.description}</div>
                                <div className={``}>
                                    <div className={`font-semibold`}>{description.company}</div>
                                    <div className={`text-xs `}>{description.date}</div>
                                </div>
                                
                            </motion.div>
                        ):(
                            <div className={`font-bold text-xl text-center place-self-${isTop ? 'end' : 'start'}`} >
                                {description.position}
                            </div> 
                        )
                    }


                </AnimatePresence>
                        
            </div>
            
        );
    }

    const Block = ({idx, jobVal} : {idx:number, jobVal: JobDetails}) => {
        const isTop = idx % 2 === 0; 

        const handleClick = () => {
            // if (idx === selection.idx && selection.priority) setSelection({'idx': undefined, 'priority': false});
            // else setSelection({'idx': idx, 'priority': true});
            // console.log(`Clicked ${selection.idx} - ${selection.priority}`);

        }

        const handleHover = (enter: Boolean) => {
            if (enter && !selection.priority){
                setSelection({'idx': idx, 'priority': false});
                // console.log(`Hover ${idx}: ${selection.idx} - ${selection.priority}`);
            }
        }

        return (
            <div 
                onClick={handleClick}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className='w-full grid grid-rows-subgrid row-span-3'
            >
                {isTop ? 
                    <JobDescription description={jobVal} isTop={isTop} idx={idx}/> 
                    : <EmptyTimeLineDiv />
                }
                <Dot idx={idx}/>
                {isTop ? 
                    <EmptyTimeLineDiv /> 
                    : <JobDescription description={jobVal} isTop={isTop} idx={idx}/>
                }
            </div>
        );
    }

    return (
        <Fragment>
            {works.map((val, idx) => {
                return <Block key={idx} idx={idx} jobVal={val}/>
            })}
        </Fragment>
    )

}
