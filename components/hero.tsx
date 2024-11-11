'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import UserForm from './userForm';
import { TypographyBlockquote } from './ui/typography/blockQoute';
import { Nav } from './nav';
import { TypographyH1 } from './ui/typography/TypegraphtH1';


type imageType = string[]

const images: imageType = [
    '/image-6.jpeg',
];

const message = `Most trusted matrimonial service who focused on Guardian to Guardian Connection `;





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
            {images && images?.map((image, index) => (
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




            <div className="relative z-10 flex flex-col items-center justify-center md:justify-center h-full text-center  bg-black/60  ">
                {/* Content overlay */}


                <div className='flex flex-col justify-between  h-[100vh]  items-center w-full' >

                    {/* Navbar  */}
                    <div className='w-full'>
                        <Nav />

                    </div>

                    {/* lefte secion  */}
                    <div className='  flex flex-col items-center lg:gap-16 gap-0  '>

                        <TypographyH1 className="scroll-m-20   w-[98%] md:w-full font-extrabold text-background/90 tracking-wider">
                            Your <span className='text-primary'> perfect</span> match await&apos;s here!
                        </TypographyH1>

                        <div className='flex flex-col items-center gap-6' >
                            <TypographyBlockquote className="lg:w-[70%] hidden md:block w-[70%] border-primary md:text-xl md:leading-10 tracking-wide  text-background/90  md:border-l-2 pl-6 italic">
                            {message}
                            </TypographyBlockquote>
                            <div className='flex flex-col ' >
                                <TypographyBlockquote className=' md:hidden  text-lg text-background/90 border-none  block '>
                                    RishtaHai..!  Guardian to Guardian
                            </TypographyBlockquote>
                                <TypographyBlockquote className='md:hidden bold mt-4  text-primary  border-none text-lg block  '>
                                    Connection
                                </TypographyBlockquote>
                            </div>

                    </div>
                    </div>

                    {/* form section  */}
                    <div className='bg-background/20 md-[0px]  md:mb-[100px]   w-full xl:w-[60%] lg:w-[80%]    p-2  text-white sm:p-8 '>
                        <UserForm />
                    </div>   
                </div>






            </div>
        </div>
    );
}
