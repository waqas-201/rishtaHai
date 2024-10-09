// MultiStepForm.tsx
import React from "react";
import { Wizard } from "react-use-wizard";
import ProgressTracker from "./progressTracker";
import PersonalInfoForm from "./personalinfo";
import AddressForm from "./adderssform";
import ReviewForm from "./reviewform";

export const MultiStepForm = () => {
    return (
        <div className=" bg-slate-100 rounded-sm  md:p-5 p-2   flex flex-col items-start justify-start  ">



            <ProgressTracker /> {/* Display the progress tracker */}


            <Wizard>
                {/* Render the step components */}
                <PersonalInfoForm />
                <AddressForm />
                <ReviewForm />
            </Wizard>
        </div>
    );
};
