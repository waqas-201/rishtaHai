import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";


// Step 2: Contact Information
export const ContactInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { register, formState: { errors }, trigger } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['email', 'phone']);
        if (isValid && nextStep) {
            nextStep();
        }

    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
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
            <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                    id="phone"
                    type="tel"
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
            <div className="flex justify-between mt-4">
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