import Logo from "@/components/Logo/Logo";
import NavbarSections from "@/components/Navbar/components/NavbarSections";
import SideNav from "./components/SideNav";


export default function Navbar() {

    return (
        <>
            <header className="flex justify-between px-(--padding-x)">

                <div className="flex justify-center items-center">

                    {/* Responsive Logos */}
                    <div className="lg:hidden" >
                        <Logo size={45} circlePadding={10}/>
                    </div>

                    <div className="hidden lg:block xl:hidden">
                        <Logo size={60} circlePadding={10}/>
                    </div>

                    <div className="hidden xl:block">
                        <Logo size={75} circlePadding={10}/>
                    </div>
                    
                </div>

                <NavbarSections />

            </header>
            <SideNav />
        </>

    );
}