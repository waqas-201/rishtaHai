import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { MenuIcon } from "./ui/menuIcon";
import Image from 'next/image'

export function Nav() {
  return (
    <header className="flex h-16 w-full items-center  bg-background">
      <div className="mx-auto max-w-7xl flex w-full items-center px-4 md:px-6">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-secondary text-primary hover:bg-secondary/10 hover:text-primary">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r border-secondary">
              <div className="grid gap-6 p-6">
                <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
                  Home
                </Link>
                <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
                  Services
                </Link>
                <Link href="#" className="text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-4" prefetch={false}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}



