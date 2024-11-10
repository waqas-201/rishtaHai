/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialCard = ({ name, location, image, testimonial }: { name: string, location: string, image: string, testimonial: string }) => {
    return (
        <div className="relative min-w-[350px]   p-6 ">


            <Card className="relative overflow-visible pb-12 pt-20 flex items-center justify-center">
                <div
                    className="absolute top-[-50px] left-1/4 transform -translate-x-1/2 w-24 h-24 overflow-hidden"
                    style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                >
                    <img
                        src={image}
                        alt="Testimonial author"
                        className="w-full h-full object-cover"
                    />
                </div>



                {/* Decorative squares */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-red-300" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-300" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-yellow-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-300" />

                <CardContent className="flex flex-col items-center gap-4">
                    {/* Testimonial text */}
                    <p className="text-center text-gray-700">
                        {testimonial}
                    </p>

                    {/* Author info */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 uppercase">
                            {name}
                        </h3>
                        <p className="text-gray-600">
                            {location}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TestimonialCard;





