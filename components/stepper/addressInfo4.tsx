import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight, } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import EmailIcon from "./icons/emailIcon";
import Input46 from "../ui/phoneInputs";
import { Controller, useFormContext } from "react-hook-form";

// Step 3: Contact Information
export const AddressInfo: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const { register, formState: { errors }, getValues, control, trigger } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['firstName', 'lastName', 'day', 'month', 'year']);
        if (isValid && nextStep) {
            nextStep();
        }

        console.log(getValues());


        console.log(errors);

    };



    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <EmailIcon />

            {/* Email Field */}
            <div className="space-y-2 w-full">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: 'Enter a valid email address'
                        }
                    })}
                    placeholder="Enter your email"
                    className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.email.message}</AlertDescription>
                    </Alert>
                )}
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2 w-full">
                <Label htmlFor="phone">Phone Number</Label>
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: 'Phone number is required' }}
                    render={({ field }) => (
                        <Input46
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                        />
                    )}
                />
                {errors.phone && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.phone.message}</AlertDescription>
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
