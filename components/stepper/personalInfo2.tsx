import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import Step2Icon from "./icons/step2Icon";
import { motion, AnimatePresence } from "framer-motion";



const errorAnimation = {
    initial: { height: 0, opacity: 0, marginBottom: 0 },
    animate: { height: "auto", opacity: 1, marginBottom: 8 },
    exit: { height: 0, opacity: 0, marginBottom: 0 }
};

export const PersonalInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { register, formState: { errors }, trigger } = useFormContext<FormData>();



    const handleNext = async () => {
        const isValid = await trigger(['firstName', 'lastName', 'day', 'month', 'year']);
        if (isValid && nextStep) {
            nextStep();
        }
    };


    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Step2Icon />

            {/* First Name */}
            <div className="space-y-2 w-full">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                    id="firstName"
                    {...register('firstName', { required: "First name is required" })}
                    placeholder="Enter your first name"
                    className={errors.firstName ? 'border-red-500' : ''}
                />
                <AnimatePresence mode="wait">
                    {errors.firstName && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.firstName.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
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
                <AnimatePresence mode="wait">
                    {errors.lastName && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.lastName.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
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
                            valueAsNumber: true,

                        })}

                        onInput={(e) => {
                            const value = e.currentTarget.valueAsNumber;
                            if (value < 1) e.currentTarget.value = "1";
                            if (value > 31) e.currentTarget.value = "31";
                        }}
                        className={errors.day ? 'border-red-500' : ''}
                    />
                    <Input
                        type="number"
                        placeholder="Month"
                        {...register('month', {
                            required: "Month is required",
                            valueAsNumber: true,

                        })}
                        onInput={(e) => {
                            const value = e.currentTarget.valueAsNumber;
                            if (value < 1) e.currentTarget.value = "1";
                            if (value > 12) e.currentTarget.value = "12";
                        }}
                        className={errors.month ? 'border-red-500' : ''}
                    />
                    <Input
                        type="number"
                        placeholder="Year"
                        {...register('year', {
                            required: "Year is required",
                            valueAsNumber: true,
                            min: { value: 1900, message: "Year must be at least 1900" },
                            max: { value: new Date().getFullYear(), message: "Year cannot be in the future" },
                        })}

                        className={errors.year ? 'border-red-500' : ''}
                    />
                </div>
                <div className="space-y-2">
                    <AnimatePresence mode="wait">
                        {errors.day && (
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={errorAnimation}
                                transition={{ duration: 0.2 }}
                            >
                                <Alert variant="destructive" className="py-2">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{errors.day.message}</AlertDescription>
                                </Alert>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        {errors.month && (
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={errorAnimation}
                                transition={{ duration: 0.2 }}
                            >
                                <Alert variant="destructive" className="py-2">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{errors.month.message}</AlertDescription>
                                </Alert>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        {errors.year && (
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={errorAnimation}
                                transition={{ duration: 0.2 }}
                            >
                                <Alert variant="destructive" className="py-2">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{errors.year.message}</AlertDescription>
                                </Alert>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
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
