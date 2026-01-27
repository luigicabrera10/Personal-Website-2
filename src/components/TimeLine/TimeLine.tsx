import TimeLineBlocks from './_components/TimeLineBlocks'

export default function TimeLine( {startYear, endYear} : {startYear: string, endYear: string}){

    return (

        <div className='h-full w-full flex flex-row place-items-center'>

            <div 
                className="h-full w-full justify-evenly grid grid-flow-col place-items-center grid-cols grid-rows-[5fr_1fr_5fr] lg:grid-cols-[1fr_repeat(4,4fr)_1fr]"
            >
                
                <div></div>
                <div className='text-2xl snap-start text-left pr-3'>
                    {startYear}
                </div>
                <div></div>

                <TimeLineBlocks />
                
                <div></div>
                <div className='text-2xl snap-start text-right pl-3'>
                    {endYear}
                </div>
                <div></div>

            </div>

        </div>
    );
}