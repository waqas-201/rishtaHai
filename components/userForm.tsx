'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import MultiStepForm from "./stepper/stepControler";
import SelectWrapper from "./stepper/SelectWrapper";
import { P } from "./ui/typography/P";
import { ArrowRight } from "lucide-react";






const numbersAsStrings = Array.from({ length: 55 }, (_, i) => (i + 18).toString());
const topReligions = [
    "Islam",
    "Christianity",
    "Hinduism",
    "Buddhism",
    "Sikhism",
    "Judaism",
    "Baha'i",
    "Jainism",
    "Shinto",
    "Taoism"
];

const topCountries = [
    "Pakistan",
    "India",
    "United States",
    "Bangladesh",
    "China",
    "Russia",
    "Indonesia",
    "Brazil",
    "Nigeria",
    "Mexico"
];




const UserForm = () => {


    const [open, setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(true);
    };


    return (

        <Dialog open={open} onOpenChange={() => setOpen(false)}>    

            <form>
                <div className="flex md:items-center items-start  gap-4 flex-wrap  justify-between ">

                    {/* first row */}
                    <div className="flex  md:gap-4 gap-2   items-center justify-start   w-full md:flex-1  md:w-auto ">

                        <SelectWrapper values={['Women', 'Men']} text="I'm Looking for a " containerClassName="grow" />
                        <SelectWrapper values={[...numbersAsStrings]} text="Aged" containerClassName="basis-1/5 md:basis " />
                        <div className="text-white mt-6">to</div>
                        <SelectWrapper values={[...numbersAsStrings]} text="...." TextclassName="invisible" containerClassName="basis-1/5" valueAt={5} />

                    </div>
                    {/* second row */}
                    <div className="flex md:gap-4  gap-2 w-full md:flex-1   md:w-auto">

                        <SelectWrapper values={[...topReligions]} text="of reiligion" containerClassName="grow" />
                        <SelectWrapper values={[...topCountries]} text="and i'm living in" containerClassName="grow" />
                    </div>


                        {/* Get Started Button */}
                    <DialogTrigger asChild  > 
                        <div className="flex flex-col items-start gap-[2px] md:w-auto  w-full  ">
                            <P className="invisible text-sm mb-1">Get Started</P>

                            <Button onClick={handleClick} className="w-full flex  justify-around gap-2 md:w-auto " variant="default" >
                                Let&apos;s Begin   <ArrowRight className="w-4 h-4 hidden md:block" />
                            </Button>
                        </div>
                        </DialogTrigger>
                    </div>

            </form>
            {/* dialog related content */}

            <DialogContent className="w-[95%]"  >
                <div className="md:p-6 p-2 ">

                <MultiStepForm />
                </div>
            </DialogContent>
        </Dialog >
    );
};

export default UserForm;