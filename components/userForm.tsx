'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import MultiStepForm from "./stepper/stepControler";








const UserForm = () => {


    const [open, setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(true);
    };












    return (

        <Dialog open={open} onOpenChange={() => setOpen(!open)}>    

            <form>
                <div className="flex flex-wrap   p-4">
                    {/* right section */}


                    {/* left section */}
                    <div className="md:w-[50%] w-full md:p-6 py-4 flex flex-col items-start justify-center   gap-6 ">





                        {/* Get Started Button */}
                        <DialogTrigger asChild>
                            <Button onClick={handleClick} className="w-full" type="submit">Let&apos;s Begin</Button>
                        </DialogTrigger>
                    </div>
                </div>
            </form>
            <DialogContent>

                <MultiStepForm />

            </DialogContent>

        </Dialog >
    );
};

export default UserForm;