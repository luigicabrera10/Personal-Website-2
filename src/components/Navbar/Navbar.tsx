import Logo from "@/components/Logo/Logo";
import NavbarSections from "@/components/Navbar/components/NavbarSections";

export default function Navbar() {

    return (
        <nav className="w-full fixed bg-blue-700/50 flex justify-between">
            <div className="block px-10 py-5 [--logo-size:60px] lg:[--logo-size:80px]">

                {/* Responsive design for logo */}
                <div className="lg:hidden" >
                    <Logo size={60} circlePadding={10}/>
                </div>

                <div className="hidden lg:block" >
                    <Logo size={80} circlePadding={10}/>
                </div>
                
            </div>

            <NavbarSections />

        </nav>
    );
}