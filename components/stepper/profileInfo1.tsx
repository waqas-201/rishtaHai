import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import UserIcon from "./icons/userIcon";
import { useFormContext, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useEffect } from "react";
import { TypographySmall } from "../ui/typography/small";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const errorAnimation = {
    initial: { height: 0, opacity: 0, marginBottom: 0 },
    animate: { height: "auto", opacity: 1, marginBottom: 8 },
    exit: { height: 0, opacity: 0, marginBottom: 0 }
};

export const ProfileInfo: React.FC<StepComponentProps> = ({ nextStep }) => {
    const { control, formState: { errors }, trigger, getValues, watch, setValue } = useFormContext<FormData>();

    const profileFor = watch('profileFor');
    const showGenderSelection = ["Myself", "MyFriend", "MyRelative"].includes(profileFor);

    const handleNext = async () => {
        const isValid = await trigger(['profileFor', 'gender']);

        if (isValid) {
            console.log("All Form Data:", getValues());

            if (nextStep) nextStep();
        } else {
            console.log("Validation failed");
        }
    };


    useEffect(() => {
        if (profileFor === "MySon" || profileFor === "MyBrother") {
            setValue('gender', 'Male');
        } else if (profileFor === "MyDaughter" || profileFor === "MySister") {
            setValue('gender', 'Female');
        }
    }, [profileFor, setValue]);

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-6">
            <div className="flex justify-center mb-4">
                <UserIcon />
            </div>

            <TypographySmall className="self-start mb-2">This Profile is for</TypographySmall>

            <div className="w-full mb-4">
                <Controller
                    control={control}
                    name="profileFor"
                    rules={{ required: "Please select an option" }}
                    render={({ field }) => (
                        <div className="space-y-2">
                            <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
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
                            <AnimatePresence mode="wait">
                                {errors.profileFor && (
                                    <motion.div
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={errorAnimation}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p className="text-red-500 text-sm">{errors.profileFor.message}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                />
            </div>

            <AnimatePresence mode="wait">
                {showGenderSelection && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="self-start w-full mb-4"
                    >
                        <TypographySmall className="self-start mb-2">Gender</TypographySmall>
                        <Controller
                            control={control}
                            name="gender"
                            rules={{ required: "Please select a gender" }}
                            render={({ field }) => (
                                <div className="space-y-2">
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
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
                                    <AnimatePresence mode="wait">
                                        {errors.gender && (
                                            <motion.div
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                variants={errorAnimation}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <p className="text-red-500 text-sm">{errors.gender.message}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        />
                    </motion.div>
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
