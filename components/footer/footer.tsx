import React from "react";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const FooterText = () => (
    <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <h2 className="text-2xl md:text-3xl text-primary font-bold mb-4">
            RISHATA HAI.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Way to Nikah is one of the prominent matrimonial sites in India. We understand
            the importance of marriage in our Indian society and hence blend technology
            with tradition efficiently for a secure matchmaking experience for all our members.
        </p>
    </div>
);

const FooterLinks = ({ title, links }: { title: string; links: string[] }) => (
    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base"
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const DownloadSection = () => (
    <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
        <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
        <div className="flex flex-col space-y-4">
            <a href="#" className="inline-block w-36">
                <img
                    src="/api/placeholder/120/40"
                    alt="Download on App Store"
                    className="h-10 w-full object-contain"
                />
            </a>
            <a href="#" className="inline-block w-36">
                <img
                    src="/api/placeholder/120/40"
                    alt="Get it on Google Play"
                    className="h-10 w-full object-contain"
                />
            </a>
        </div>
    </div>
);

const SocialLinks = () => (
    <div className="flex justify-center sm:justify-start space-x-4 mt-4 sm:mt-0">
        {[CiFacebook, CiTwitter, CiInstagram].map((Icon, index) => (
            <a
                key={index}
                href="#"
                className="bg-primary/10 p-2.5 rounded-full hover:bg-primary/40 transition-colors duration-200"
            >
                <Icon className="w-5 h-5" />
            </a>
        ))}
    </div>
);

const Footer = () => {
    const exploreLinks = ["About Us", "Success Stories", "Contact Us"];
    const supportLinks = ["Help Center", "Privacy Policy", "Terms of Service"];

    return (
        <footer className="w-full py-12 lg:py-16">
            <div className="container mx-auto px-4">
                {/* Main footer content */}
                <div className="flex flex-wrap justify-between gap-10">
                    <FooterText />

                    {/* Links section wrapper */}
                    <div className="flex flex-col sm:flex-row w-full md:w-full lg:w-[60%] gap-8">
                        <FooterLinks title="Explore" links={exploreLinks} />
                        <FooterLinks title="Support" links={supportLinks} />
                        <DownloadSection />
                    </div>

                </div>

                {/* Social section */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
