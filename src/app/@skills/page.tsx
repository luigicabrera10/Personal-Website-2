import SkillSlider from './_components/SkillSlider'
import BracketWrapper from '@/components/BracketWrapper/BracketWrapper'

export default function SkillsPage(){

   return (
      <section className="w-full h-full bg-cyan-500 snap-start" id="skills">    

         <BracketWrapper name='SKILLS'>

            <div className='h-full overflow-y-auto lg:grid lg:grid-cols-[1fr_1fr] gap-10'>
               <div className='hidden lg:flex ml-14 text-3xl items-center'>
                  I excel in dissecting complex problems into manageable tasks, essential for crafting robust, maintainable code in large-scale projects. I'm driven by challenges, always seeking opportunities to enhance my skills. My self-directed learning approach empowers me to quickly grasp and adapt to new technologies autonomously. 
               </div>

               <SkillSlider  />

            </div>

         </BracketWrapper>


      </section>
  )

}