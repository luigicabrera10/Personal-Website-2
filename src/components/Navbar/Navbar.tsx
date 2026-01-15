import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Navbar() {

    const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

    return (
        <nav className="w-full fixed bg-blue-700/50 flex justify-between">
            <div className="block px-5 py-4">
                <Logo 
                    size={80}
                    circlePadding={10}
                />
            </div>
            <div className="flex flex-row justify-end">
                {
                    sections.map( (sectionName: string, sectionIndex: number) => {
                        return (
                            <div key={sectionIndex}>
                                <Link 
                                    className="block px-5 py-4"
                                    href={`/`}
                                >
                                    {sectionName}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    );
}