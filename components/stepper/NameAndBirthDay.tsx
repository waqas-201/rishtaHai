import { useFormContext } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import Step2Icon from "./generel/step2Icon";
import { Label } from "../ui/label";
import SignleInputFieldWrapper from "./generel/signleInputFieldWrapper";
import { AnimatePresence, motion } from "framer-motion";


export const NameAndBirthDay: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const { trigger, formState: { errors } } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['firstName', 'lastName', 'day', 'month', 'year']);
        if (isValid && nextStep) {
            nextStep();
        }
    };


    const errorAnimationForSmallErrors = {
        initial: { height: 0, opacity: 0, marginBottom: 0 },
        animate: { height: "auto", opacity: 1, marginBottom: 0 },
        exit: { height: 0, opacity: 0, marginBottom: 0 },
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex justify-center mb-4">
                <Step2Icon />
            </div>

            {/* First Name */}
            <SignleInputFieldWrapper
                id="firstName"
                label="First Name"
                placeholder="Enter your first name"
                errorMessage={errors.firstName?.message}
            />

            {/* Last Name */}
            <SignleInputFieldWrapper
                id="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                errorMessage={errors.lastName?.message}
            />

            {/* Date of Birth */}
            <div>
                <div className=" w-full ">
                    <Label  >Date of Birth</Label>
                    <div className="flex gap-3 ">

                    <SignleInputFieldWrapper

                        id="day"
                        label="Day"
                        placeholder="Day"
                        type="number"
                            showError={!!errors.day?.message}
                    />


                    <SignleInputFieldWrapper
                        id="month"
                        label="Month"
                        placeholder="Month"
                        type="number"
                            showError={!!errors.month?.message}


                    />




                    <SignleInputFieldWrapper
                        id="year"
                        label="Year"
                        placeholder="Year"
                        type="number"
                            showError={!!errors.year?.message}


                    />

                </div>
            </div>

            {/* Error Messages */}
            <div className=" flex flex-col justify-start w-full " >
                <AnimatePresence mode="wait">
                    {errors.day?.message && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                                variants={errorAnimationForSmallErrors}
                            transition={{ duration: 0.2 }}
                        >
                                <p className="text-red-500 md:text-[12px]  text-[11px]  font-medium">{errors.day?.message}</p>

                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {errors.month?.message && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                                variants={errorAnimationForSmallErrors}
                            transition={{ duration: 0.2 }}
                        >
                                <p className="text-red-500 md:text-[12px]  text-[11px]  font-medium">{errors.month?.message}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    {errors.year?.message && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                                variants={errorAnimationForSmallErrors}
                            transition={{ duration: 0.2 }}
                        >
                                <p className="text-red-500 md:text-[12px]  text-[11px]  font-medium">{errors.year?.message}</p>


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
