import Link from "next/link"
export default function AboutPage(){

   return (
      <section 
         className="w-full h-full snap-start overflow-y-hidden bg-red-500/0 flex flex-col lg:flex-row-reverse justify-center"
         id="about"
      >
         <div className="flex justify-center items-end max-h-2/5 lg:max-h-full lg:items-center lg:min-w-4/10">
            <img
               className="px-8 max-h-full"
               src={'/imgs/luigi.png'}
               alt="Yeap.. that's me"
            />
         </div>

         <div className="text-center mx-5 lg:mx-12 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <div className="font-bold text-5xl pb-5 lg:py-5 lg:text-7xl">
               Luigi Cabrera
            </div>

            <div className="text-3xl lg:text-4xl font-bold pb-5">
               Full Stack Developer
            </div>

            <div className="hidden lg:block text-[20px]">
               Top-ranked Computer Science Graduate.
               <br></br>
               Focused on building complex and scalable, mobile/web solutions with modern technologies.
            </div>

            <div className="text-2xl py-2 flex flex-row justify-center lg:justify-start lg:mt-5 lg:text-3xl">
               <Link 
                  href="#contact"
                  className="bg-purple-600 rounded-2xl p-2 text-[15px] lg:text-[17px] font-bold px-6 m-2 lg:py-3 lg:ml-0"
               >
                  Contact <br className="lg:hidden"></br> Me
               </Link>
               <button className="bg-purple-600 rounded-2xl p-2 text-[15px] lg:text-[17px] font-bold px-6 m-2">
                  See my <br className="lg:hidden"></br> Resume
               </button>
            </div>

         </div>

      </section>
   )

}