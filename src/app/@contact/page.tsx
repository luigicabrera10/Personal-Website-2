import { Metadata } from "next";
import BracketWrapper from "@/components/BracketWrapper/BracketWrapper"
import ContactForm from "./_components/ContactForm"
import { socialMedia } from "@/data/social"

export const metadata: Metadata = {
  title: 'Luigi | Contact',
  description: 'Social media links and a form to reach out to me.',
  openGraph: {
    title: 'Luigi Cabrera | Contact',
    description: 'Social media links and a form to reach out to me.',
    images: ['/imgs/metadata/og-image.png'], 
  },
};


export default function ContactPage(){

    const ContactText = () => {
        return (
            <div className="flex flex-col justify-end my-6 text-xl lg:text-3xl xl:text-4xl"> 
                <div>Have a Project in Mind?</div>
                <div>I'm always open for new oportunities!</div>
            </div>
        );
    }

    const SocialMedia = () => {
        return (
            <div
                className="flex flex-col w-fit my-6 text-xl lg:text-xl xl:text-4xl"
            >
                {socialMedia.map( (val, idx) => {
                    return (
                        <a 
                            key={idx} 
                            href={val.link} 
                            target="_blank" 
                            className="flex flex-row items-center my-1.5 hover:text-green-500 transition-all duration-500"
                        >
                            <img className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mr-2" src={val.img}/>
                            <div>{val.username}</div>
                        </a>
                    )
                })}
            </div>
        );
    }

    return (
        <section className="w-full h-full snap-start"  id="contact">
            <BracketWrapper name="CONTACT">
                <div className="h-full content-center">
                    <div className=" flex flex-col justify-center-safe text-[1.0rem] min-w-64 max-w-lg lg:max-w-full lg:hidden">
                        <ContactText />
                        <ContactForm />
                        <SocialMedia />
                    </div>

                    <div className="hidden text-2xl lg:grid lg:grid-cols-[6fr_3fr]">
                        <div className="flex flex-col justify-center mx-2">
                            <ContactText />
                            <SocialMedia />
                        </div>
                        <ContactForm  />
                    </div>
                </div>

            </BracketWrapper>
        </section>
    )

}