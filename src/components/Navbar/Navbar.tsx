import Logo from "@/components/Logo/Logo";
import NavbarSections from "@/components/Navbar/components/NavbarSections";

export default function Navbar() {

    return (
        <nav className="w-full fixed bg-blue-700/50 flex justify-between">
            <div className="block px-10 py-5">
                <Logo 
                    size={80}
                    circlePadding={10}
                />
            </div>

            <NavbarSections />

        </nav>
    );
}