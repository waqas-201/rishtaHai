// components/ui/ValidatedInputField.tsx

import { useFormContext } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "./errorMessage";

const errorAnimation = {
    initial: { height: 0, opacity: 0, marginBottom: 0 },
    animate: { height: "auto", opacity: 1, marginBottom: 8 },
    exit: { height: 0, opacity: 0, marginBottom: 0 }
};

interface ValidatedInputFieldProps {
    id: string;
    label: string;
    placeholder: string;
    type?: string; // Default is "text"
    className?: string;
    errorMessage?: string; // Pass the error message directly
}

const SignleInputFieldWrapper: React.FC<ValidatedInputFieldProps> = ({ id, label, placeholder, type = "text", className, errorMessage }) => {
    const { register } = useFormContext();

    return (
        <div className="space-y-2 w-full">
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type={type}
                {...register(id)} // Just register the field without additional options
                placeholder={placeholder}
                className={errorMessage ? 'border-red-500' : className}
            />
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
    );
};

export default SignleInputFieldWrapper;
