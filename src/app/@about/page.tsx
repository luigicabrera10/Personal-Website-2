import { Metadata } from "next";
import * as motion from "motion/react-client"
import RoleTypewritter from "./_components/RoleTypewritter"

export const metadata: Metadata = {
   title: 'Luigi | About',
   description: 'Information about me and the roles I have worked in.',
   openGraph: {
      title: 'Luigi Cabrera | About',
      description: 'Information about me and the roles I have worked in.',
      images: ['/imgs/metadata/og-image.png'], 
   },
};

export default function AboutPage(){

   const sectionStagger = {
      hidden:  {  },
      visible: { opacity:1.0, transition: { staggerChildren: 0.5, } },
   }

   const floatingAnimation = {
      hidden:  { opacity:0.0, y:35 },
      visible: { opacity:1.0, y:0, transition: { duration:0.35 } },
   }

   const containerAnimation = {
      hidden:  { },
      visible: { opacity:1.0, transition: { staggerChildren: 0.2, } },
   }

   const scaleAnimation = {
      hidden: { scale: 0.0 },
      visible: { scale: 1, transition: {duration: 0.2}  },
   }

   return (
      <motion.section
         id="about"
         className="w-full h-full snap-start overflow-y-hidden flex flex-col gap-2 lg:flex-row-reverse justify-center"
         variants={sectionStagger}
         initial="hidden"
         animate="visible"
      >
         <div className="flex justify-center items-end max-h-2/5 lg:max-h-full lg:items-center lg:min-w-4/10">
            <motion.img
               className="px-8 max-h-full"
               src={'/imgs/luigi.png'}
               alt="Yeap.. that's me"
               variants={floatingAnimation}
            />
         </div>

         <motion.div 
            className="flex flex-col gap-3.5 overflow-scroll no-scrollbar justify-center-safe text-center lg:gap-5 lg:text-left "
            variants={containerAnimation}
         >
            <motion.h1
               className="font-bold text-5xl lg:text-7xl"
               variants={scaleAnimation}
            >
               Luigi Cabrera
            </motion.h1>

            <motion.div
               className="text-3xl lg:text-5xl text-green-500 font-[Source_Code_Pro] font-light tracking-tighter"
               variants={scaleAnimation}
            >
               <RoleTypewritter/>
            </motion.div>

            <motion.div
               className="text-xm lg:block lg:text-2xl"
               variants={scaleAnimation}
            >
               Top-ranked Computer Science Graduate.
               <br></br>
               Focused on building complex and scalable, mobile/web solutions with modern technologies.
            </motion.div>

            <motion.div
               className="flex flex-col items-center lg:items-start "
               variants={scaleAnimation}
            >
               <div className="flex flex-col w-fit gap-3 lg:flex-row text-xl lg:text-2xl text-center ">
                  <motion.a
                     href="#contact"
                     className="bg-green-500 border-green-500 border-2 rounded-xl px-4 py-1 font-bold text-black transition-all duration-300 shadow-green-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                     whileTap={{ scale: 0.8, transition: {duration: 0.05} }}
                  >
                     Contact Me
                  </motion.a>
                  <motion.a
                     target="_blank"
                     href='https://drive.google.com/file/d/1CXsuG0SlfAje_4yQGKZeyy3_WRUyXx8H/view?usp=sharing'
                     className=" border-green-500 border-2 rounded-xl px-4 py-1 font-bold text-green-500 transition-all duration-300 shadow-green-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                     whileTap={{ scale: 0.8, transition: {duration: 0.05} }}
                  >
                     See my Resume
                  </motion.a>
               </div>
            </motion.div>

         </motion.div>

      </motion.section>
   )

}