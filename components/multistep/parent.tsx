// MultiStepForm.tsx
import React from "react";
import { Wizard } from "react-use-wizard";
import ProgressTracker from "./progressTracker";
import PersonalInfoForm from "./personalinfo";
import AddressForm from "./adderssform";
import ReviewForm from "./reviewform";
import { Card, CardDescription, CardHeader } from "../ui/card";

export const MultiStepForm = () => {
    return (
        <Card className="border border-red-500">

            <CardHeader>
                <CardDescription>

                    <ProgressTracker /> {/* Display the progress tracker */}
                </CardDescription>
            </CardHeader>
            <Wizard>
                {/* Render the step components */}
                <PersonalInfoForm />
                <AddressForm />
                <ReviewForm />
            </Wizard>
        </Card>
    );
};
