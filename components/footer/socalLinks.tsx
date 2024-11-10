import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

export const SocialLinks = () => (
    <div className="flex space-x-4 mt-6">
        <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/40 transition-colors duration-200">
            <CiFacebook className="w-5 h-5 " />
        </a>
        <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/40 transition-colors duration-200">
            <CiTwitter className="w-5 h-5 " />
        </a>
        <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/40 transition-colors duration-200">
            <CiInstagram className="w-5 h-5 " />
        </a>
    </div>
);