import React from 'react';
import { FooterText } from './footerText';
import { FooterLinks } from './footerLinks';
import { exploreLinks, supportLinks } from '@/constants/constents';
import { DownloadSection } from './downloadSection';
import { SocialLinks } from './socalLinks';






const Footer = () => {


    return (
        <footer className="bg-primary/10 py-12 px-4 md:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 w-full">
                        <div className="flex flex-wrap">
                            <FooterText />

                            <FooterLinks title="Explore" links={exploreLinks} />
                            <FooterLinks title="Support" links={supportLinks} />

                            <DownloadSection />
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <h3 className="text-lg font-semibold mb-4 md:mb-0">Follow Us</h3>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;