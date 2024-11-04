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
    const gender = watch('gender');

    const showGenderSelection = ["Myself", "MyFriend", "MyRelative"].includes(profileFor);
    const showMaritalStatus = ["MySon", "MyDaughter", "MyBrother", "MySister"].includes(profileFor) ||
        (showGenderSelection && gender);

    const isWidow = watch('maritalStatus') === 'WIDOW';
    const hasChildren = watch('hasChildren') === 'Yes';


    const handleNext = async () => {
        const isValid = await trigger(['profileFor', 'gender', 'maritalStatus', 'hasChildren']);

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

    const profileOptions = {
        Myself: "Myself",
        MySon: "My Son",
        MyDaughter: "My Daughter",
        MyBrother: "My Brother",
        MySister: "My Sister",
        MyFriend: "My Friend",
        MyRelative: "My Relative"
    };

    const maritalStatusOptions = {
        UNMARRIED: "Unmarried",
        WIDOW: "Widow"
    };

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
                                {Object.entries(profileOptions).map(([value, display]) => (
                                    <div key={value} className="flex items-center">
                                        <RadioGroupItem value={value} id={value} />
                                        <Label
                                            htmlFor={value}
                                            className="ml-2 font-medium text-gray-700"
                                        >
                                            {display}
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

            {/* Gender section */}
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

            {/* Marital Status: show based on profile selection and gender */}
            <AnimatePresence mode="wait">
                {showMaritalStatus && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="self-start w-full mb-4"
                    >
                        <TypographySmall className="self-start mb-2">Marital Status</TypographySmall>
                        <Controller
                            control={control}
                            name="maritalStatus"
                            rules={{ required: "Please select" }}
                            render={({ field }) => (
                                <div className="space-y-2">
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        className="flex px-4"
                                    >
                                        {Object.entries(maritalStatusOptions).map(([key, value]) => (
                                            <div key={key} className="flex items-center">
                                                <RadioGroupItem value={key} id={key} />
                                                <Label
                                                    htmlFor={key}
                                                    className="ml-2 font-medium text-gray-700"
                                                >
                                                    {value}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <AnimatePresence mode="wait">
                                        {errors.maritalStatus && (
                                            <motion.div
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                variants={errorAnimation}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* has children */}
            {/* Children: Yes/No selection */}
            {isWidow && (
                <AnimatePresence mode="wait">
                    {showMaritalStatus && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="self-start w-full mb-4"
                        >
                            <TypographySmall className="self-start mb-2">Do you have children?</TypographySmall>
                            <Controller
                                control={control}
                                name="hasChildren"
                                rules={{ required: "Please select an option" }}
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex px-4"
                                        >
                                            <div className="flex items-center">
                                                <RadioGroupItem value="Yes" id="children-yes" />
                                                <Label
                                                    htmlFor="children-yes"
                                                    className="ml-2 font-medium text-gray-700"
                                                >
                                                    Yes
                                                </Label>
                                            </div>
                                            <div className="flex items-center">
                                                <RadioGroupItem value="No" id="children-no" />
                                                <Label
                                                    htmlFor="children-no"
                                                    className="ml-2 font-medium text-gray-700"
                                                >
                                                    No
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                        <AnimatePresence mode="wait">
                                            {errors.hasChildren && (
                                                <motion.div
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    variants={errorAnimation}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <p className="text-red-500 text-sm">{errors.hasChildren.message}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            {/* {has childern and is wiidow } */}

            {isWidow && hasChildren && (
                <AnimatePresence mode="wait">
                    {showMaritalStatus && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="self-start w-full mb-4"
                        >
                            <TypographySmall className="self-start mb-2">Live with you?</TypographySmall>
                            <Controller
                                control={control}
                                name="livesWithYou"
                                rules={{ required: "Please select an option" }}
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex px-4"
                                        >
                                            <div className="flex items-center">
                                                <RadioGroupItem value="Yes" id="children-yes" />
                                                <Label
                                                    htmlFor="children-yes"
                                                    className="ml-2 font-medium text-gray-700"
                                                >
                                                    Yes
                                                </Label>
                                            </div>
                                            <div className="flex items-center">
                                                <RadioGroupItem value="No" id="children-no" />
                                                <Label
                                                    htmlFor="children-no"
                                                    className="ml-2 font-medium text-gray-700"
                                                >
                                                    No
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                        <AnimatePresence mode="wait">
                                            {errors.livesWithYou && (
                                                <motion.div
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    variants={errorAnimation}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <p className="text-red-500 text-sm">{errors.livesWithYou.message}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}




            {/* Handle the Next button */}
            <div className="flex justify-end w-full mt-6">
                <Button onClick={handleNext}>
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
