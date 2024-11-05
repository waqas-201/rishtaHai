import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import UserIcon from "./icons/userIcon";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { genderOptions, hasChildrenOptions, LiveWithYou, maritalStatusOptions, profileOptions } from "@/constants/constents";
import { RadioGroupWrapper } from "../animatedRadioWrappre";

export const ProfileInfo: React.FC<StepComponentProps> = ({ nextStep }) => {
    const { formState: { errors }, trigger, getValues, watch, setValue } = useFormContext<FormData>();

    const profileFor = watch('profileFor');
    const gender = watch('gender');
    const maritalStatus = watch('maritalStatus');
    const isWidow = maritalStatus === 'WIDOW' || maritalStatus === 'DIVORCED';
    const hasChildren = watch('hasChildren') === 'Yes';

    const showGenderSelection = ["Myself", "MyFriend", "MyRelative"].includes(profileFor);
    const showMaritalStatus = ["MySon", "MyDaughter", "MyBrother", "MySister"].includes(profileFor) ||
        (showGenderSelection && gender);



    const handleNext = async () => {
        const isValid = await trigger(['profileFor', 'gender', 'maritalStatus', 'hasChildren']);
        if (isValid) {
            console.log("All Form Data:", getValues());
            if (nextStep) nextStep();
        }
    };

    useEffect(() => {
        if (profileFor === "MySon" || profileFor === "MyBrother") {
            setValue('gender', 'Male');
        } else if (profileFor === "MyDaughter" || profileFor === "MySister") {
            setValue('gender', 'Female');
        }
    }, [profileFor, setValue]);

    useEffect(() => {
        if (maritalStatus === 'UNMARRIED') {
            setValue('hasChildren', 'No');
            setValue('livesWithYou', 'No');
        }
    }, [maritalStatus, setValue]);






    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center mb-4">
                <UserIcon />
            </div>

            <RadioGroupWrapper
                name="profileFor"
                label="This Profile is for"
                errorMessage={errors.profileFor?.message}
                options={profileOptions}
            />

            <AnimatePresence mode="wait">
                {showGenderSelection && (
                    <RadioGroupWrapper
                        name="gender"
                        label="Gender"
                        errorMessage={errors.gender?.message}
                        options={genderOptions}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {showMaritalStatus && (
                    <RadioGroupWrapper
                        name="maritalStatus"
                        label="Marital Status"
                        errorMessage={errors.maritalStatus?.message}
                        options={maritalStatusOptions}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isWidow && showMaritalStatus && (
                    <RadioGroupWrapper
                        name="hasChildren"
                        label="Do you have children?"
                        errorMessage={errors.hasChildren?.message}
                        options={hasChildrenOptions}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isWidow && hasChildren && showMaritalStatus && (
                    <RadioGroupWrapper
                        name="livesWithYou"
                        label="Live with you?"
                        errorMessage={errors.livesWithYou?.message}
                        options={LiveWithYou}
                    />
                )}
            </AnimatePresence>

            <div className="flex justify-end w-full mt-6">
                <Button onClick={handleNext}>
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};