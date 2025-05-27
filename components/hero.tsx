'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Nav } from './nav';
import { TypographyH1 } from './ui/typography/TypegraphtH1';
import { TypographyBlockquote } from './ui/typography/blockQoute';
import UserForm from './userForm';

const images = ['/image-6.jpeg'];
const message = `Most trusted matrimonial service focused on Guardian to Guardian Connection`;

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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="animate-zoom"
            priority
          />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-between h-full bg-black/60">
        <Nav />

        <div className="flex flex-col items-center justify-center px-4 text-center space-y-8 max-w-4xl mx-auto">
          <TypographyH1 className="text-background/90 tracking-wider animate-fade-in">
            Your <span className="text-primary">perfect</span> match awaits here!
          </TypographyH1>

          <TypographyBlockquote className="text-background/90 md:text-xl tracking-wide border-primary animate-slide-up hidden md:block">
            {message}
          </TypographyBlockquote>

          <div className="md:hidden animate-slide-up">
            <TypographyBlockquote className="text-background/90 text-lg border-none">
              RishtaHai..! Guardian to Guardian
            </TypographyBlockquote>
            <TypographyBlockquote className="text-primary border-none text-lg mt-2">
              Connection
            </TypographyBlockquote>
          </div>
        </div>

        <div className="w-full xl:w-[60%] p-4 sm:p-8 bg-background/20 backdrop-blur-sm animate-scale-in">
          <UserForm />
        </div>
      </div>
    </div>
  );
}