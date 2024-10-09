"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MenuIcon } from "./ui/menuIcon";
import Image from "next/image";

// Animation variants for navbar items
const navItemVariants = {
  initial: {
    scale: 1,
    color: "var(--foreground)", // Use foreground color from CSS variables
    borderColor: "transparent", // Initially transparent border
  },
  hover: {
    scale: 1.1, // Slightly increase size on hover
    color: "var(--primary)", // Change text color to primary
    borderColor: "var(--primary)", // Match border color to text color on hover
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.3, // Slightly longer duration
    },
  },
};

export function Nav() {
  return (
    <header className="flex h-16 w-full items-center bg-background">
      <div className="mx-auto max-w-7xl flex w-full items-center px-4 md:px-6">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <Image
            src="/logo.svg"
            width={150}
            height={150}
            alt="Picture of the author"
          />
          <span className="sr-only">RishtaHai</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="initial"
              whileHover="hover"
              variants={navItemVariants}
              style={{ borderBottom: "2px solid", borderColor: "transparent" }} // Initial border is transparent
            >
              <Link
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary"
                prefetch={false}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          {/* <button className="inline-flex h-12 items-center justify-center rounded-lg bg-[#f5f5f5] bg-[linear-gradient(110deg,#ff007f,45%,#ff77a0,55%,#ff007f)] bg-[length:200%_100%] bg-[position:0%_0%] animate-shimmer px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Get Started
          </button> */}
          <button className="md:inline-flex h-12 items-center hidden justify-center rounded-lg bg-[#114bdf] bg-[linear-gradient(110deg,#FF007F,45%,#FF77A0,55%,#FF007F)] bg-[length:200%_100%] bg-[position:0%_0%] animate-shimmer px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Get Started
          </button>



          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-secondary text-primary hover:bg-secondary/10 hover:text-primary"
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