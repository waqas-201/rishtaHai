/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { P } from '../ui/typography/P';
import { TypographyH1 } from '../ui/typography/TypegraphtH1';
import { TypographyH4 } from '../ui/typography/TypoGraphyH4';

const ShowApp = () => {
    return (
        <div className="w-full   flex items-center justify-center  px-4 py-8">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                {/* Text Section - takes full width on mobile, shrinks on larger screens */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
                    <TypographyH1 className="text-center md:text-left text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl">
                        Happiness is just an app away!
                    </TypographyH1>

                    <P className="text-center md:text-left text-sm sm:text-base md:text-lg max-w-md">
                        Meet your Partner with RISHTA HAI APPS.
                        From Any Time and Any Where...
                    </P>

                    <TypographyH4 className="text-lg sm:text-xl md:text-2xl">
                        Download Our App
                    </TypographyH4>

                    {/* Google Play Button - responsive sizing */}
                    <div className="transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-center bg-black text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3">
                            <div className="mr-3">
                                <svg
                                    viewBox="30 336.7 120.9 129.2"
                                    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                                >
                                    <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                                    <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                                    <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs sm:text-sm">GET IT ON</div>
                                <div className="text-sm sm:text-base md:text-lg font-semibold -mt-1">Google Play</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section - takes full width on mobile, half on larger screens */}
                <div className="w-full  md:w-1/2 flex justify-center md:justify-end">
                    <img src="https://www.waytonikah.com/images/waytonikah/download-app.png" alt="app preview" />
                </div>
            </div>
        </div>
    );
};

export default ShowApp;