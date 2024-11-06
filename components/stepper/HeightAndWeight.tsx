import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SignleInputFieldWrapper from "./generel/signleInputFieldWrapper";
import UserIcon from "./generel/userIcon";

export const HeightAndWeight: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const { formState: { errors }, trigger, } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['height', 'weight']);
        if (isValid && nextStep) {
            nextStep();
        }

    };


    return (
        <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex justify-center mb-4">
                <UserIcon />
            </div>

            <SignleInputFieldWrapper
                type="number"
                id="height"
                label="Height(cm)"
                placeholder="Enter your height"
                errorMessage={errors.height?.message}
            />

            <SignleInputFieldWrapper
                type="number"
                id="weight"
                label="Weight(kg)"
                placeholder="Enter your weight"
                errorMessage={errors.weight?.message}
            />



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
    )
}
