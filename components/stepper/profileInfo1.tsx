import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import UserIcon from "./icons/userIcon";
import { useFormContext, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useEffect } from "react";
import { TypographySmall } from "../ui/typography/small";

export const ProfileInfo: React.FC<StepComponentProps> = ({ nextStep }) => {
    const { control, formState: { errors }, trigger, getValues, watch, setValue } = useFormContext<FormData>();

    const profileFor = watch('profileFor');
    const showGenderSelection = ["Myself", "MyFriend", "MyRelative"].includes(profileFor);

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

    // Automatically set the gender based on the profileFor value
    useEffect(() => {
        if (profileFor === "MySon" || profileFor === "MyBrother") {
            setValue('gender', 'Male');
        } else if (profileFor === "MyDaughter") {
            setValue('gender', 'Female');
        }
    }, [profileFor, setValue]);

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-6">

            {/* User Icon */}
            <div className="flex justify-center mb-4">
                <UserIcon />
            </div>

            {/* Typography */}
            <TypographySmall className="self-start mb-2">This Profile is for</TypographySmall>

            {/* Radio Group for Profile Selection */}
            <div className="w-full mb-4">
                <Controller
                    control={control}
                    name="profileFor"
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                        <div className="space-y-2">
                            <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value} // Set the value for controlled input
                                className="flex flex-wrap gap-4"
                            >
                                {[
                                    "Myself",
                                    "MySon",
                                    "MyDaughter",
                                    "MyBrother",
                                    "MySister",
                                    "MyFriend",
                                    "MyRelative"
                                ].map((option) => (
                                    <div key={option} className="flex items-center">
                                        <RadioGroupItem value={option} id={option.toLowerCase().replace(' ', '-')} />
                                        <Label
                                            htmlFor={option.toLowerCase().replace(' ', '-')}
                                            className="ml-2 font-medium text-gray-700"
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

            {/* Gender Selection */}
            {showGenderSelection && (
                <div className="self-start w-full mb-4">
                    <TypographySmall className="self-start mb-2">Gender</TypographySmall>
                    <Controller
                        control={control}
                        name="gender"
                        rules={{ required: "Please select a gender" }}
                        render={({ field }) => (
                            <div className="space-y-2">
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value} // Set the value for controlled input
                                    className="flex px-4"
                                >
                                    {["Male", "Female"].map((option) => (
                                        <div key={option} className="flex items-center">
                                            <RadioGroupItem value={option} id={option.toLowerCase()} />
                                            <Label
                                                htmlFor={option.toLowerCase()}
                                                className="ml-2 font-medium text-gray-700"
                                            >
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                                {errors.gender && (
                                    <p className="text-red-500 text-sm">{errors.gender.message}</p>
                                )}
                            </div>
                        )}
                    />
                </div>
            )}

            {/* Next Button */}
            <div className="flex justify-end w-full mt-6">
                <Button onClick={handleNext}>
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
