import {Fragment} from 'react';
import {works} from '@/data/works'

interface JobDetails {
    position: string; 
    description: string; 
    company: string; 
    date: string;
}

export default function TimeLine( {startYear, endYear} : {startYear: string, endYear: string}){

    const EmptyTimeLineDiv = () => {
        return <div className={
            `w-[70vw] md:w-[42vw] lg:w-0`
        }></div>
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

    const JobDescription = ( {description, isTop} : { description: JobDetails, isTop: boolean } ) => {
        return (
            <div 
                className={`gap-2 flex flex-col items-center ${isTop ? 'place-self-end' : 'place-self-start'} text-center lg:-mx-[60%] xl:-mx-[15%]`}
            >
                <div className="font-bold text-xl">{description.position}</div>
                <div className="text-sm opacity-85">{description.description}</div>
                <div>
                    <div className="font-semibold">{description.company}</div>
                    <div className="text-xs">{description.date}</div>
                </div>
            </div>
        );
    }

    const TimeLineBlock = ({idx, jobVal} : {idx:number, jobVal: JobDetails}) => {
        const isTop = idx % 2 === 0; 
        return (
            <Fragment>
                {isTop ? 
                    <JobDescription description={jobVal} isTop={isTop} /> 
                    : <EmptyTimeLineDiv />
                }
                <Dot idx={idx}/>
                {isTop ? 
                    <EmptyTimeLineDiv /> 
                    : <JobDescription description={jobVal} isTop={isTop} />
                }
            </Fragment>
        );
    }

    return (

        <div className='h-full flex flex-row place-items-center'>

            <div 
                className="h-full w-full justify-evenly grid grid-flow-col place-items-center grid-cols grid-rows-[5fr_1fr_5fr]"    
            >
                
                <div></div>
                <div className='text-2xl snap-start text-left pr-3'>
                    {startYear}
                </div>
                <div></div>

                {works.map((val, idx) => {
                    return <TimeLineBlock key={idx} idx={idx} jobVal={val}/>
                })}
                
                <div></div>
                <div className='text-2xl snap-start text-right pl-3'>
                    {endYear}
                </div>
                <div></div>

            </div>

        </div>
    );
}