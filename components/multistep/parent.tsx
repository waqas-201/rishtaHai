// MultiStepForm.tsx
import React from "react";
import { Wizard } from "react-use-wizard";
import ProgressTracker from "./formutils/progressTracker";
import ReviewForm from "./reviewform";
import AccontSetup from "./accountSetup1";
import BasicDetailsForm from "./basicinfo2";
import PersonalInfo from "./personalInfo3";
import EducationProfessionForm from "./education4";

export const MultiStepForm = () => {
    return (
        <div className=" bg-background ">



            <ProgressTracker /> {/* Display the progress tracker */}


            <Wizard>
                {/* <AccontSetup /> */}
                {/* <BasicDetailsForm /> */}
                {/* <PersonalInfo /> */}
                <EducationProfessionForm />

                <ReviewForm /> 
            </Wizard>
        </div>
    );
};
