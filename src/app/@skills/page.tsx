import { Metadata } from 'next';
import SkillSlider from './_components/SkillSlider'
import BracketWrapper from '@/components/BracketWrapper/BracketWrapper'

export const metadata: Metadata = {
  title: 'Luigi | Skills',
  description: "Frameworks an technologies I have worked with and feel comfortable using.",
  openGraph: {
    title: 'Luigi Cabrera | Skills',
    description: "Frameworks an technologies I have worked with and feel comfortable using.",
    images: ['/imgs/metadata/og-image.png'], 
  },
};


export default function SkillsPage(){

   return (
      <section className="w-full h-full snap-start" id="skills">    

         <BracketWrapper name='SKILLS'>

            <div className='h-full overflow-y-auto no-scrollbar grid grid-rows-[1fr_3fr] gap-4 lg:grid-rows-1 lg:grid-cols-[1fr_1fr] lg:gap-10 place-items-center'>
               <div className='text-xm items-center text-center md:text-xl lg:text-left lg:flex lg:text-3xl'>
                  I stand out for my problem-solving skills and my adaptability to work with different frameworks. <br className='hidden lg:block'></br>I'm always seeking opportunities to enhance my skills and learn new technologies.
               </div>

               <SkillSlider  />

            </div>

         </BracketWrapper>


      </section>
  )

}