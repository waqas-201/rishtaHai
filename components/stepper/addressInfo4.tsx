import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import EmailIcon from "./icons/emailIcon";
import Input46 from "../ui/phoneInputs";
import { Controller, useFormContext } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";

const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const errorAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 }
};

const inputAnimation = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 300, damping: 30 }
};

export const AddressInfo: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const { register, formState: { errors }, getValues, control, trigger } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['email', 'phone']);
        if (isValid && nextStep) {
            nextStep();
        }
        console.log(getValues());
        console.log(errors);
    };


    // const email = watch('email');
    // const phone = watch('phone');


    // useEffect(() => {
    //     const validateAndMoveNext = async () => {
    //         const isValid = await trigger(['email', 'phone']);
    //         if (isValid && nextStep) {
    //             nextStep();
    //         }
    //     };

    //     // Validate only when all fields have been filled
    //     if (email && phone) {
    //         validateAndMoveNext();
    //     }
    // }, [nextStep, trigger, email, phone]);





    return (
        <motion.div
            className="flex flex-col items-center justify-center gap-4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInAnimation}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <EmailIcon />
            </motion.div>

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
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.email.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Phone Number Field */}
            <motion.div
                className="space-y-2 w-full"
                variants={inputAnimation}
            >
                <Label htmlFor="phone">Phone Number</Label>
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
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.phone.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
                className="flex justify-between mt-4 w-full"
                variants={fadeInAnimation}
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        variant="outline"
                        onClick={previousStep}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" /> Previous
                    </Button>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        onClick={handleNext}
                        className="flex items-center gap-2"
                    >
                        Next <ArrowRight className="w-4 h-4" />
                    </Button>
                </motion.div>
            </motion.div>

            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    75% { transform: translateX(4px); }
                }
                .shake {
                    animation: shake 0.3s ease-in-out;
                }
            `}</style>
        </motion.div>
    );
};