import TextScrollScramble from "./_components/text-scroll-scramble"

export default function BracketWrapper({children, name} : {children: React.ReactNode, name:string}){

    return (
        <div className="w-full h-full grid grid-rows-[1fr_8fr_1fr]">
            <div className='flex items-center font-[Source_Code_Pro]'>
                <TextScrollScramble name={name}/>
                <div className='inline-block pl-5 text-4xl font-bold'>
                    {"{"}  
                </div>  
            </div>
            
            <div className="w-full h-full px-8 lg:px-16 overflow-scroll no-scrollbar">
                {children}
            </div>

            <div className='flex items-center text-4xl font-bold font-[Source_Code_Pro]'>
                {"}"}  
            </div>  
        </div>
    )

}