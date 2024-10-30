import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import UserIcon from "./icons/userIcon";
import IconComponent from "./icons/step2Icon";

// Step 1: Personal Information
export const PersonalInfo: React.FC<StepComponentProps> = ({ nextStep }) => {
    const { register, formState: { errors }, trigger } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['firstName', 'lastName']);
        if (isValid && nextStep) { nextStep(); }
    };

    return (
        <div className="space-y-4">
            <UserIcon />
            <IconComponent />
            <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                    id="firstName"
                    {...register('firstName')}
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
            <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                    id="lastName"
                    {...register('lastName')}
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
            <div className="flex justify-end mt-4">
                <Button onClick={handleNext} className="flex items-center gap-2">
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};