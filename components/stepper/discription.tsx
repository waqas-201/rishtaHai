import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { FormData, StepComponentProps } from "@/types/types";
import { ArrowLeft } from "lucide-react";
import useCreateUser from "@/hooks/useCreateUser";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "../ui/label";
import ErrorMessage from "./generel/errorMessage";
import { DiscriptionIcon } from "./generel/DiscriptionIcon";




const childVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const errorVariants = { 
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 }
};

export function DescriptionAboutUser({ previousStep, nextStep }: StepComponentProps) {
    const { mutate, isPending, data } = useCreateUser();
    const [successData, setSuccessData] = useState<boolean>(false);
    const {
        register,
        formState: { errors },
        getValues,
        trigger,

    } = useFormContext<FormData>();




    const submit = async () => {
        const isValid = await trigger(['description']);
        // console.log("Is Valid:", isValid);
        // console.log("Form Errors:", errors);

        if (isValid) {
            const data = getValues();
            // console.log("All Form Data:", data);
            mutate(data);
        } else {
            // console.log("Validation failed, description:", getValues('description'));
        }
    };

    useEffect(() => {
        // console.log("Data:", data);
        if (data?.success) {
            setSuccessData(true);
        }

        return () => {
            setSuccessData(false);
        };
    }, [data]);

    useEffect(() => {
        if (successData && nextStep) {
            nextStep();
        }
    }, [successData, nextStep]);












    return (
        <div className="flex flex-col items-center justify-center gap-4">


            <div className="flex justify-center     ">
                <DiscriptionIcon className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] p-2 bg-[#5DD2FC]/30 rounded-full" />
            </div>

            <motion.div
                className="flex flex-col gap-4 w-full"
                variants={childVariants}
            >
                <motion.div variants={childVariants}>
                    <Label>Tell us more about him/her</Label>
                </motion.div>

                <motion.div
                    variants={childVariants}
                    whileTap={{ scale: 0.995 }}
                >
                    <Textarea
                        {...register('description')}
                        placeholder="Type your message here."
                        className="transition-all duration-200"
                    />
                </motion.div>

                <AnimatePresence mode="wait">
                    {errors.description && (
                        <motion.div
                            variants={errorVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                        >
                            <ErrorMessage message={errors.description?.message} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>



            <motion.div
                className="flex justify-between mt-4 w-full"
                variants={childVariants}
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        className="flex items-center gap-2"
                        variant="outline"
                        onClick={previousStep}
                    >
                        <ArrowLeft className="w-4 h-4" /> Previous
                    </Button>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {isPending ? (
                        <Button
                            disabled={true}
                            className="flex justify-center gap-2"
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                Submitting...
                            </motion.span>
                        </Button>
                    ) : (
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(data);
                                submit();
                            }}
                        >
                            Submit
                        </Button>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}