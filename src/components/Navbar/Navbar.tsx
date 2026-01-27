import Logo from "@/components/Logo/Logo";
import NavbarSections from "./_components/NavbarSections";
import SideNav from "./_components/SideNav";


export default function Navbar() {

    return (
        <>
            <header className="flex justify-between px-(--padding-x)">

                <div className="flex justify-center items-center">

                    {/* Responsive Logos */}
                    <div className="lg:hidden" >
                        <Logo size={56} circlePadding={10}/>
                    </div>

                    <div className="hidden lg:block xl:hidden">
                        <Logo size={64} circlePadding={10}/>
                    </div>

                    <div className="hidden xl:block">
                        <Logo size={72} circlePadding={10}/>
                    </div>
                    
                </div>

                <NavbarSections />

            </header>
            <SideNav />
        </>

    );
}