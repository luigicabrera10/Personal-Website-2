import Link from "next/link";

export default function Navbar() {

    const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

    return (
        <div className="w-full fixed bg-blue-700/50 flex flex-row justify-end">
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
    );
}