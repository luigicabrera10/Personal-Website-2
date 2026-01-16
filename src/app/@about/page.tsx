import Image from "next/image"

export default function AboutPage(){

   return (
      <section className="w-full h-full bg-red-500 flex justify-evenly items-center snap-start" id="about">


         <div className="px-10">
         <div className="text-7xl font-bold py-10">
            Luigi Cabrera
         </div>

         <div className="text-4xl font-bold py-5">
            Full Stack Developer
         </div>

         <div className="text-3xl py-2">
            Top-ranked computer science graduate.
            <br></br>
            Focused on building complex and scalable, mobile/web solutions with modern technologies.
         </div>
         </div>

         <Image
            className="px-10 self-end"
            width={650}
            height={650}
            src={'/imgs/luigi.png'}
            alt="Yeap.. that's me"
         />

      </section>
   )

}