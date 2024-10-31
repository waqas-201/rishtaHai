import { SubmitHandler, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, Check } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import EmailIcon from "./icons/emailIcon";

// Step 3: Contact Information
export const AddressInfo: React.FC<StepComponentProps> = ({ previousStep }) => {
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useFormContext<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <div className="space-y-4">
            <EmailIcon />
            {/* Email Field */}
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    {...register('email')}
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
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    {...register('phone')}
                    placeholder="Enter your phone number"
                    className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.phone.message}</AlertDescription>
                    </Alert>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={previousStep} className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="flex items-center gap-2"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'} <Check className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
