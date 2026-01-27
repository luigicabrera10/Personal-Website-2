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
      if (inView && activeSection.id !== index){
         setActiveSection({
            id: index, 
            direction: activeSection.id < index ? false : true
         });
      }
   }, [inView]);

   return (
      <div ref={ref} className="h-full w-full">
         {children}
      </div>
   );

}