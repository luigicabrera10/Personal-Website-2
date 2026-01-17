// import Image from "next/image"

export default function AboutPage(){

   return (
      <section 
         className="w-full h-full bg-red-500 flex flex-col-reverse lg:flex-row justify-center items-center snap-start pt-28"
         id="about"
      >

         <div className="w-full px-6 mb-5 lg:w-3/5 text-center lg:text-left lg:ml-15">
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

            <div className="text-2xl py-2 flex flex-row justify-center lg:justify-start lg:mt-5">
               <button className="bg-purple-600 rounded-2xl p-2 text-[15px] lg:text-[17px] font-bold px-6 m-2 lg:py-3">
                  Contact <br className="lg:hidden"></br> Me
               </button>
               <button className="bg-purple-600 rounded-2xl p-2 text-[15px] lg:text-[17px] font-bold px-6 m-2">
                  See my <br className="lg:hidden"></br> Resume
               </button>
            </div>

         </div>

         <div className="w-full self-end h-3/7 lg:h-9/10 flex justify-center">
            <img
               // className="h-full"
               src={'/imgs/luigi.png'}
               alt="Yeap.. that's me"
            />
         </div>

      </section>
   )

}