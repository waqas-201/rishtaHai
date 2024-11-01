import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import Step2Icon from "./icons/step2Icon";

// Step 2: Personal Information
export const PersonalInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { register, formState: { errors }, trigger, getValues } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['firstName', 'lastName', 'day', 'month', 'year']);
        if (isValid && nextStep) {
            nextStep();
        }

        console.log(getValues());


        console.log(errors);

    };

    return (
        <div className=" flex  flex-col items-center justify-center gap-4">
            <Step2Icon />
            {/* First Name */}
            <div className="space-y-2  w-full">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                    id="firstName"
                    {...register('firstName', { required: "First name is required" })}
                    placeholder="Enter your first name"
                    className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.firstName.message}</AlertDescription>
                    </Alert>
                )}
            </div>

            {/* Last Name */}
            <div className="space-y-2 w-full">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                    id="lastName"
                    {...register('lastName', { required: "Last name is required" })}
                    placeholder="Enter your last name"
                    className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.lastName.message}</AlertDescription>
                    </Alert>
                )}
            </div>

            {/* Date of Birth */}
            <div className="space-y-2 w-full">
                <Label>Date of Birth</Label>
                <div className="flex space-x-2">
                    <Input
                        type="number"
                        placeholder="Day"
                        {...register('day', {
                            required: "Day is required",
                            valueAsNumber: true, // Ensures the value is stored as a number
                            min: { value: 1, message: "Day must be at least 1" },
                            max: { value: 31, message: "Day must be at most 31" },
                        })}
                        className={errors.day ? 'border-red-500' : ''}
                    />
                    <Input
                        type="number"
                        placeholder="Month"
                        {...register('month', {
                            required: "Month is required",
                            valueAsNumber: true, // Ensures the value is stored as a number
                            min: { value: 1, message: "Month must be at least 1" },
                            max: { value: 12, message: "Month must be at most 12" },
                        })}
                        className={errors.month ? 'border-red-500' : ''}
                    />
                    <Input
                        type="number"
                        placeholder="Year"
                        {...register('year', {
                            required: "Year is required",
                            valueAsNumber: true, // Ensures the value is stored as a number
                            min: { value: 1900, message: "Year must be at least 1900" },
                            max: { value: new Date().getFullYear(), message: "Year cannot be in the future" },
                        })}
                        className={errors.year ? 'border-red-500' : ''}
                    />
                </div>
                {errors.day && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.day.message}</AlertDescription>
                    </Alert>
                )}
                {errors.month && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.month.message}</AlertDescription>
                    </Alert>
                )}
                {errors.year && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.year.message}</AlertDescription>
                    </Alert>
                )}
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
