import React from 'react';
import { TypographyH1 } from '../ui/typography/TypegraphtH1';
import { P } from '../ui/typography/P';

const TrustedBrand = () => {
    return (
        <div className="text-center max-w-2xl mx-auto py-12">
            {/* Top text */}
            <P className="tracking-widest uppercase mb-4 font-medium">
                Trusted Brand
            </P>

            {/* Main heading container */}
            <div className="relative mb-4">
                <TypographyH1 className=" text-5xl  mb-4">
                    <span className="font-light">Trust by </span>
                    <span className="font-bold">1500</span>
                    <span className="font-light">+ Couples</span>
                </TypographyH1>

                {/* Floral decoration */}
                <div className="flex justify-center items-center">
                    <svg width="200" height="40" viewBox="0 0 200 40" className="text-center">
                        <path
                            d="M100 5 C120 5, 130 35, 160 35 M100 5 C80 5, 70 35, 40 35"
                            stroke="#9DC4B5"
                            fill="none"
                            strokeWidth="1"
                        />
                        {/* Left side flowers */}
                        <circle cx="55" cy="30" r="4" fill="#E8B4B8" />
                        <circle cx="75" cy="15" r="3" fill="#9DC4B5" />
                        {/* Right side flowers */}
                        <circle cx="145" cy="30" r="4" fill="#E8B4B8" />
                        <circle cx="125" cy="15" r="3" fill="#9DC4B5" />
                        {/* Center flower */}
                        <circle cx="100" cy="5" r="5" fill="#E8B4B8" />
                        {/* Leaves */}
                        <path
                            d="M95 8 Q90 5 93 2 M105 8 Q110 5 107 2"
                            stroke="#9DC4B5"
                            fill="none"
                            strokeWidth="1"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TrustedBrand;