import Image from 'next/image'
import { technologies } from "@/data/techs"

export default function SkillsPage(){

   return (
      <section className="w-full h-full bg-cyan-500 snap-start"  id="skills">    

         <div className='inline-block mx-10 my-15 text-4xl'> 
            SKILLS 
         </div>     

         <div className='flex flex-row justify-evenly content-center'>
            <div className='flex items-center justify-center'>
               Some random text
            </div>

            <div className="flex flex-row justify-evenly items-start">
               {
                  Object.entries(technologies).map( ( [ key, val_list ], idx) => {
                     return (
                        <div key={idx} className='px-10'>
                           <div className='text-4xl py-6'>
                              {key}
                           </div>
                           <div>
                              {val_list.map( (ele, idx) => {
                                 return (
                                    <div key={idx} className='flex flex-row items-center py-4'>
                                    <Image 
                                       className='mr-5'
                                       src={ele.img} 
                                       width={50} 
                                       height={50} 
                                       alt={ele.tech} 
                                    />
                                    <div className='text-2xl'>
                                       {ele.tech} 
                                    </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>                            
                     );
                  })
               }

            </div>
         </div>

      </section>
  )

}