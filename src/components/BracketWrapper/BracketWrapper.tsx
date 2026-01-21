export default function BracketWrapper({children, name} : {children: React.ReactNode, name:string}){

    return (
        <div className="w-full h-full grid grid-rows-[1fr_8fr_1fr]">
            <div className='flex items-center pl-8'>
                <div className='inline-block text-4xl font-bold'> 
                    {name} 
                </div>   
                <div className='inline-block pl-5 text-4xl font-bold'>
                    {"{"}  
                </div>  
            </div>
            
            {children}

            <div className='flex items-center pl-8 text-4xl font-bold'>
                {"}"}  
            </div>  
        </div>
    )

}