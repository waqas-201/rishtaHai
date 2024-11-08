'use client'
import React from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { P } from "./ui/typography/P";
import { ArrowRight, X } from "lucide-react";
import dynamic from "next/dynamic";
import { Watch } from 'react-loader-spinner'
import { numbersAsStrings, topCountries, topReligions } from "@/constants/constents";
import SelectWrapper from "./stepper/generel/SelectWrapper";

const MultiStepForm = dynamic(() => import('./stepper/stepControler'), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center justify-center h-full">
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color="#F05CA1"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
});

const UserForm = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <div className="flex md:items-center items-start gap-4 flex-wrap justify-between">
                    {/* first row */}
                    <div className="flex md:gap-4 gap-2 items-center justify-start w-full md:flex-1 md:w-auto">
                        <SelectWrapper values={['Women', 'Men']} text="I'm Looking for a " containerClassName="grow" />
                        <SelectWrapper values={[...numbersAsStrings]} text="Aged" containerClassName="basis-1/5 md:basis" />
                        <div className="text-white mt-6">to</div>
                        <SelectWrapper
                            values={[...numbersAsStrings]}
                            text="...."
                            TextclassName="invisible"
                            containerClassName="basis-1/5"
                            valueAt={5}
                        />
                    </div>
                    {/* second row */}
                    <div className="flex md:gap-4 gap-2 w-full md:flex-1 md:w-auto">
                        <SelectWrapper values={[...topReligions]} text="of reiligion" containerClassName="grow" />
                        <SelectWrapper
                            values={[...topCountries]}
                            text="and i'm living in"
                            valueIs='Pakistan'
                            containerClassName="grow"
                        />
                    </div>
                    {/* Get Started Button */}
                    <DialogTrigger asChild>
                        <div className="flex flex-col items-start gap-[2px] md:w-auto w-full">
                            <P className="invisible text-sm mb-1">Get Started</P>
                            <Button
                                onClick={handleClick}
                                className="w-full flex justify-around gap-2 md:w-auto letter-spacing-[12px]"
                                variant="default"
                            >
                                Let&apos;s Begin <ArrowRight className="w-4 h-4 hidden md:block" />
                            </Button>
                        </div>
                    </DialogTrigger>
                </div>
            </form>
            <DialogContent className="md:w-[100%] rounded-lg w-[95%] min-h-fit bg-white/95 max-h-[99vh] md:p-6 p-2 flex flex-col md:overflow-visible md:landscape:overflow-visible landscape:overflow-y-scroll">
                {/* Custom Close Button for Mobile */}
                <button
                    onClick={handleClose}
                    className="md:hidden absolute right-2 top-2 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full touch-manipulation active:bg-gray-200 z-50"
                    aria-label="Close dialog"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="md:p-6 p-2">
                    <MultiStepForm />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UserForm;