// MultiStepForm.tsx
import React from "react";
import { Wizard } from "react-use-wizard";
import AccontSetup from "./accountSetup1";




export const MultiStepForm = () => {
    return (
        <div className=" bg-background p-4 ">





            <Wizard>
                <AccontSetup />
            </Wizard>
        </div>
    );
};
