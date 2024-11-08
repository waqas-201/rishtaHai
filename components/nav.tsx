'use client'
import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MenuIcon } from "./ui/menuIcon";
import Image from "next/image";

const navItemVariants = {
  initial: {
    scale: 1,
    color: "var(--foreground)",
  },
  hover: {
    scale: 1.1,
    color: "var(--primary)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.3,
    },
  },
};

export function Nav() {

  return (
    <header
      className={` sticky top-0 z-50 flex items-center justify-center h-[60px] md:h[80px] transition-colors duration-300 bg-white/30 backdrop-blur-sm
        }`}
    >
      <div className="flex items-center  justify-between  w-full">

        {/* Logo */}
        <Link href="#" className="mr-6 " prefetch={false}>
          <Image
            src="/logo.svg"
            width={150}
            height={150}
            alt="RishtaHai logo"
            className="w-24 h-24 md:w-36 md:h-36"
          />
          <span className="sr-only">RishtaHai</span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex lg:gap-12 md:gap-6 gap-2 mr-[20%]  items-center">
          {["How it Works", "Services", "About us", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="initial"
              whileHover="hover"
              variants={navItemVariants}
              style={{ borderBottom: "2px solid", borderColor: "transparent" }}
            >
              <Link
                href="#"
                className="  lg:text-lg text-sm font-medium text-white hover:text-primary tracking-widest"
                prefetch={false}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="ml-auto md:hidden flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-none text-primary hover:bg-secondary/10 bg-transparent"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r border-secondary">
              <div className="grid gap-6 p-6">
                {["Home", "About", "Services", "Contact"].map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
