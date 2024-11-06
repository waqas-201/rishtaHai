// RadioGroupWrapper.tsx
import { Controller, useFormContext } from "react-hook-form";

import { motion, AnimatePresence } from "framer-motion";
import { errorAnimation } from "@/constants/constents";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import ErrorMessage from "./stepper/generel/errorMessage";

interface Option {
    value: string;
    label: string;
}

interface RadioGroupWrapperProps {
    name: string;
    label: string;
    options: Option[];
    errorMessage?: string;

}

export const RadioGroupWrapper: React.FC<RadioGroupWrapperProps> = ({
    name,
    label,
    options,
    errorMessage,

}) => {
    const { control } = useFormContext();

    // const selectedValue = getValues();
    // console.log("Selected Value:", selectedValue);


    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" w-full  flex flex-col gap-1  justify-start items-start  "
        >
            <Label className="self-start ">{label}</Label>

            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <div className="space-y-2">
                        <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-wrap "
                        >
                            {options.map(({ value, label }) => (
                                <div key={value} className="flex items-center">
                                    <RadioGroupItem value={value} id={value} />
                                    <Label
                                        htmlFor={value}
                                        className="ml-2 font-medium text-gray-700"
                                    >
                                        {label}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                        <AnimatePresence mode="wait">
                            {errorMessage && (
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={errorAnimation}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ErrorMessage message={errorMessage} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            />
        </motion.div>
    );
};