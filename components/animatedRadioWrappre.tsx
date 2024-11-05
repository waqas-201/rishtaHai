// RadioGroupWrapper.tsx
import { Controller, useFormContext } from "react-hook-form";

import { motion, AnimatePresence } from "framer-motion";
import { errorAnimation } from "@/constants/constents";
import { TypographySmall } from "./ui/typography/small";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

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
    const { control, getValues } = useFormContext();

    const selectedValue = getValues();
    console.log("Selected Value:", selectedValue);


    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="self-start w-full mb-4"
        >
            <TypographySmall className="self-start">{label}</TypographySmall>

            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <div className="space-y-2">
                        <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex px-4 flex-wrap "
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
                                    <p className="text-red-500 text-sm">{errorMessage}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            />
        </motion.div>
    );
};