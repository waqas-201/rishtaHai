import { SubmitHandler, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, Check } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";

// Step 3: Address Information
export const AddressInfo: React.FC<StepComponentProps> = ({ previousStep }) => {
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useFormContext<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input
                    id="address"
                    {...register('address')}
                    placeholder="Enter your address"
                    className={errors.address ? 'border-red-500' : ''}
                />
                {errors.address && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.address.message}</AlertDescription>
                    </Alert>
                )}
            </div>
            <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                    id="city"
                    {...register('city')}
                    placeholder="Enter your city"
                    className={errors.city ? 'border-red-500' : ''}
                />
                {errors.city && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.city.message}</AlertDescription>
                    </Alert>
                )}
            </div>
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