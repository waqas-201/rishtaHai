/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from "./TestimonialCard"
import { testimonialData } from "@/constants/constents"




export function TestimonialCarousel() {
    return (
        <div className="w-full">
            <Carousel
                opts={{
                    loop: true,
                }}
                className="w-full overflow-visible"
            >
                <CarouselContent className="-ml-2 md:-ml-4" >
                    {testimonialData.map((testimonial) => (
                        <CarouselItem
                            key={testimonial.id}
                            className=" py-8 sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-4 "
                        >
                            <div className="p-1">
                                <TestimonialCard
                                    name={testimonial.name}
                                    location={testimonial.location}
                                    image={testimonial.image}
                                    testimonial={testimonial.testimonial}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Adjust controls position on smaller screens */}
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:left-4 sm:top-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 sm:right-4 sm:top-1/2" />
            </Carousel>
        </div>
    )
}







