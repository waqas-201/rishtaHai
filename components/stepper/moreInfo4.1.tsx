import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FormData, StepComponentProps } from "@/types/types";
import Step2Icon from "./generel/step2Icon";
import { motion, AnimatePresence } from "framer-motion";
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import SignleInputFieldWrapper from "./generel/signleInputFieldWrapper";
import ErrorMessage from "./generel/errorMessage";

const errorAnimation = {
    initial: { height: 0, opacity: 0, marginBottom: 0 },
    animate: { height: "auto", opacity: 1, marginBottom: 8 },
    exit: { height: 0, opacity: 0, marginBottom: 0 }
};
// Qualification options
const qualifications = [
    { value: "Matric", label: "Matric" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Graduation", label: "Graduation" },
    { value: "Masters", label: "Masters" },
    { value: "PhD", label: "PhD" },
];


const selectAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 }
};
export const MorePersonalInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { register, formState: { errors }, trigger, control } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['height', 'weight', 'qualification', 'profession', 'earning',]);
        if (isValid && nextStep) {
            nextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Step2Icon />



            <div className="flex justify-between items-center  gap-2 md:gap-4 "  >


                <SignleInputFieldWrapper
                    type="number"
                    id="height"
                    label="Height(cm)"
                    placeholder="Enter your height"
                    errorMessage={errors.height?.message}
                />  

                <SignleInputFieldWrapper
                    type="number"
                    id="weight"
                    label="Weight(kg)"
                    placeholder="Enter your weight"
                    errorMessage={errors.weight?.message}
                />
            </div>



            {/* Qualification  */}
            <motion.div
                className="w-full space-y-2"
                variants={selectAnimation}
                transition={{ duration: 0.3 }}
            >
                <Label htmlFor="qualification" >Qualification </Label>
                <Controller
                    name="qualification"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value || ""}
                        >
                            <SelectTrigger
                                id="qualification"
                                className={`w-full ${errors.qualification ? 'border-red-500' : ''}`}
                            >
                                <SelectValue placeholder="Select your qualification" />
                            </SelectTrigger>
                            <SelectContent>
                                {qualifications.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
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

            </motion.div>


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
                            <ErrorMessage message={errors.profession?.message} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <SignleInputFieldWrapper
                type="number"
                id="earning"
                label="Earning(pkr)"
                placeholder="Enter your earning"
                errorMessage={errors.earning?.message}
            />
            {/* Family Status */}


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
