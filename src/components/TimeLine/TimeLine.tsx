import {Fragment} from 'react';
import {works} from '@/data/works'

export default function TimeLine( {startYear, endYear} : {startYear: string, endYear: string}){

    const YellowLine = () => {
        return (
            <div  className='bg-yellow-300 h-2 rounded-2xl w-[50vw] md:w-[35vw] lg:grow lg:w-auto'></div>
        );
    }

    return (
        <div className='flex flex-row lg:w-full lg:grid lg:grid-cols-[1fr_8fr_1fr]'>
            <div className='pr-6 text-2xl snap-start'>
                {startYear}
            </div>

            <div className='flex flex-row items-center-safe lg:w-full'>
                {works.map((val, idx) => {
                    const isTop = idx % 2 === 0; 
                    return (
                        <Fragment key={idx} >
                            <YellowLine />

                            <div className='bg-white h-5 w-5 rounded-full snap-center relative'>
                                
                                <div className={`
                                    absolute left-1/2 -translate-x-1/2 w-[80vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw]
                                    flex flex-col items-center-safe text-center
                                    ${isTop ? 'bottom' : 'top'}-8
                                `}>
                                    <div className="font-bold text-xl">{val.position}</div>
                                    <div className="text-sm opacity-80 my-2">{val.description}</div>
                                    <div>
                                        <div className="font-semibold">{val.company}</div>
                                        <div className="text-xs">{val.date}</div>
                                    </div>
                                </div>
                            </div>
                        </ Fragment>
                    );
                })}

                <YellowLine />

            </div>

            <div className='pl-6 text-2xl snap-start'>
                {endYear}
            </div>
        </div>
    );
}