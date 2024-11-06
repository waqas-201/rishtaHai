import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import EmailIcon from "./generel/emailIcon";
import Input46 from "../ui/phoneInputs";
import { Controller, useFormContext } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import ErrorMessage from "./generel/errorMessage";
import { errorAnimation, inputAnimation } from "@/constants/constents";


export const EmailAndPhone: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const { register, formState: { errors }, getValues, control, trigger } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['email', 'phone']);
        if (isValid && nextStep) {
            nextStep();
        }
        console.log(getValues());
        console.log(errors);
    };








    return (
        <div className="flex flex-col items-center justify-center  gap-4 ">
            <div className="flex justify-center mb-4">
                <EmailIcon />
            </div>




            {/* Email Field */}
            <motion.div
                className="space-y-2 w-full"
                variants={inputAnimation}
            >
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: 'Enter a valid email address'
                        }
                    })}
                    placeholder="Enter your email"
                    className={`transition-all duration-200 ${errors.email ? 'border-red-500 shake' : ''}`}
                />




                <AnimatePresence mode="wait">
                    {errors.email && (
                        <motion.div
                            variants={errorAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                        >
                            <ErrorMessage message={errors.email.message} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Phone Number Field */}
            <motion.div
                className="space-y-2 w-full"
                variants={inputAnimation}
            >
                <Label htmlFor="phone"> Phone Number (WhatsApp Preferred)</Label>
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: 'Phone number is required' }}
                    render={({ field }) => (
                        <Input46
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                        />
                    )}
                />
                <AnimatePresence mode="wait">
                    {errors.phone && (
                        <motion.div
                            variants={errorAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                        >
                            <ErrorMessage message={errors.phone.message} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

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