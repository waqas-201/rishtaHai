import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import UserIcon from "./icons/userIcon";
import { useFormContext, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export const PersonalInfo: React.FC<StepComponentProps> = ({ nextStep }) => {
    const { control, formState: { errors }, trigger, getValues } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['profileFor', 'gender']);

        if (isValid) {
            const data = getValues();
            console.log("All Form Data:", data);
            if (nextStep) {
                nextStep();
            }
        } else {
            console.log("Validation failed");
        }
    };

    return (
        <div className="space-y-6 p-6 bg-white shadow-md rounded-md">
            <UserIcon />
            <div className="space-y-2">
                <h2 className="text-lg font-semibold">This Profile is for:</h2>
                <Controller
                    control={control}
                    name="profileFor"
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                        <div className="space-y-2">
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-2"
                            >
                                {[
                                    "Myself",
                                    "My Son",
                                    "My Daughter",
                                    "My Brother",
                                    "My Sister",
                                    "My Friend",
                                    "My Relative"
                                ].map((option) => (
                                    <div key={option} className="flex items-center">
                                        <RadioGroupItem value={option} id={option.toLowerCase().replace(' ', '-')} />
                                        <Label
                                            htmlFor={option.toLowerCase().replace(' ', '-')}
                                            className="ml-2 text-sm font-medium text-gray-700"
                                        >
                                            {option}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                    )}
                />
                {errors.profileFor && (
                    <p className="text-red-500 text-sm">{errors.profileFor.message}</p>
                )}
            </div>
            <div className="flex justify-end mt-6">
                <Button
                    onClick={handleNext}
                >
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};