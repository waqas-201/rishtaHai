'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MultiStepForm } from './multistep/parent';

const images = [
    // '/image1.jpg',
    // '/image2.jpg',
    // '/image3.jpg',
    // '/image4.jpg',
    // '/image5.jpg'
];

const message = `RishtaHai platform is dedicated to helping individuals connect with compatible partners and make it easier to Meet and Interact with Them. Start Your Search Today Because "Yahi'n Aap Ka RishtaHai".`;

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
            {/* Background images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
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

            {/* Registration form */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 bg-black bg-opacity-40">
                {/* Content overlay */}
                <div className='flex items-center justify-center flex-col md:flex-row gap-8'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-4xl font-bold text-white mb-4'>
                            Join No.1 Muslim Matrimonial
                        </h1>
                        <p className='text-lg text-gray-300'>
                            {message}
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <MultiStepForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
