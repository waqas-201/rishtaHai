import { useFormContext } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import Step2Icon from "./generel/step2Icon";
import { Label } from "../ui/label";
import SignleInputFieldWrapper from "./generel/signleInputFieldWrapper";

export const PersonalInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { trigger, formState: { errors } } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['firstName', 'lastName', 'day', 'month', 'year']);
        if (isValid && nextStep) {
            nextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Step2Icon />

            {/* First Name */}
            <SignleInputFieldWrapper
                id="firstName"
                label="First Name"
                placeholder="Enter your first name"
                errorMessage={errors.firstName?.message}
            />

            {/* Last Name */}
            <SignleInputFieldWrapper
                id="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                errorMessage={errors.lastName?.message}
            />

            {/* Date of Birth */}
            <div className="space-y-2 w-full">
                <Label>Date of Birth</Label>
                <div className="flex space-x-2">
                    <SignleInputFieldWrapper

                        id="day"
                        label="Day"
                        placeholder="Day"
                        type="number"
                        errorMessage={errors.day?.message}
                    />
                    <SignleInputFieldWrapper
                        id="month"
                        label="Month"
                        placeholder="Month"
                        type="number"
                        errorMessage={errors.month?.message}
                    />
                    <SignleInputFieldWrapper
                        id="year"
                        label="Year"
                        placeholder="Year"
                        type="number"
                        errorMessage={errors.year?.message}
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4 w-full">
                <Button variant="outline" onClick={previousStep} className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
                <Button onClick={handleNext} className="flex items-center gap-2">
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
