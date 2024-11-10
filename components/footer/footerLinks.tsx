import Link from "next/link";

export const FooterLinks = ({ title, links }: { title: string, links: string[] }) => (
    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
