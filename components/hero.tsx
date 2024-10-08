'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg'
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={image}
                        alt={`Background ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="animate-zoom"
                    />
                </div>
            ))}

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 bg-black bg-opacity-40">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                    Discover the World
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8">
                    Embark on unforgettable journeys
                </p>
                <div className="space-x-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                        Get Started
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
}