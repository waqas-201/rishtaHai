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

export const MorePersonalInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { register, formState: { errors }, trigger } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['height', 'weight', 'qualification', 'profession', 'earning', 'familyStatus']);
        if (isValid && nextStep) {
            nextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Step2Icon />

            {/* Height */}
            <div className="space-y-2 w-full">
                <Label htmlFor="height">Height</Label>
                <Input
                    id="height"
                    {...register('height', { required: "Height is required" })}
                    placeholder="Enter your height"
                    className={errors.height ? 'border-red-500' : ''}
                />
                <AnimatePresence mode="wait">
                    {errors.height && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.height.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Weight */}
            <div className="space-y-2 w-full">
                <Label htmlFor="weight">Weight</Label>
                <Input
                    id="weight"
                    {...register('weight', { required: "Weight is required" })}
                    placeholder="Enter your total weight"
                    className={errors.weight ? 'border-red-500' : ''}
                />
                <AnimatePresence mode="wait">
                    {errors.weight && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.weight.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Qualification */}
            <div className="space-y-2 w-full">
                <Label htmlFor="qualification">Qualification</Label>
                <Input
                    id="qualification"
                    {...register('qualification', { required: "Qualification is required" })}
                    placeholder="Enter your qualification"
                    className={errors.qualification ? 'border-red-500' : ''}
                />
                <AnimatePresence mode="wait">
                    {errors.qualification && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.qualification.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Profession */}
            <div className="space-y-2 w-full">
                <Label htmlFor="profession">Profession</Label>
                <Input
                    id="profession"
                    {...register('profession', { required: "Profession is required" })}
                    placeholder="Enter your profession"
                    className={errors.profession ? 'border-red-500' : ''}
                />
                <AnimatePresence mode="wait">
                    {errors.profession && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.profession.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Earning */}
            <div className="space-y-2 w-full">
                <Label htmlFor="earning">Earning</Label>
                <Input
                    id="earning"
                    type="number" // Assuming earning is a number
                    {...register('earning', {
                        required: "Earning is required",
                        valueAsNumber: true,
                        min: { value: 0, message: "Earning must be a non-negative number" }
                    })}
                    placeholder="Enter your earning"
                    className={errors.earning ? 'border-red-500' : ''}
                />
                <AnimatePresence mode="wait">
                    {errors.earning && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.earning.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Family Status */}
            <div className="space-y-2 w-full">
                <Label htmlFor="familyStatus">Family Status</Label>
                <select
                    id="familyStatus"
                    {...register('familyStatus', { required: "Family status is required" })}
                    className={`border ${errors.familyStatus ? 'border-red-500' : ''} w-full p-2`}
                >
                    <option value="">Select family status</option>
                    <option value="MIDDLE_CLASS">Middle Class</option>
                    <option value="UPPER_MIDDLE_CLASS">Upper Middle Class</option>
                    <option value="UPPER_CLASS">Upper Class</option>
                </select>
                <AnimatePresence mode="wait">
                    {errors.familyStatus && (
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={errorAnimation}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.familyStatus.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
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
