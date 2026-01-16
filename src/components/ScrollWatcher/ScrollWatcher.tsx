"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function ScrollWatcher({ children, index }: { children: React.ReactNode, index: number }) {
   const { activeSection,  setActiveSection } = useActiveSection();
   
   const { ref, inView } = useInView({
      threshold: 0.6, // Trigger as soon as 10% is visible
   });

   useEffect(() => {
      console.log(inView)
      if (inView && activeSection !== index){
         console.log(`Context set to index ${index}`);
         setActiveSection(index);
      }
   }, [inView]);

   return (
      <div ref={ref} className="h-full max-w-full">
         {children}
      </div>
   );

}