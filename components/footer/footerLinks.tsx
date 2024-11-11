import Link from "next/link";

export const FooterLinks = ({ title, links }: { title: string, links: string[] }) => (
    <div className=" border  w-auto border-red-400">
        <h3 className="text-lg font-semibold ">{title}</h3>
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
