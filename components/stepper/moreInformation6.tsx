import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import SelectWrapper from "./generel/animateAndSelect";
import { Communities, fadeInAnimation, topReligions2 } from "@/constants/constents";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const MoreInformationAgain: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const { formState: { errors }, trigger, watch, setValue } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger([]);
        if (isValid && nextStep) {
            nextStep();
        }

    };


    const selectedCommunity = watch("community");
    const selectedReligion = watch("religion");
    return (
        <>

            <SelectWrapper
                label="Religion"
                options={topReligions2}
                value={selectedReligion}
                onChange={(value) => setValue("religion", value as typeof selectedReligion)}
                placeholder="Select your religion"
                error={errors.religion?.message}


            />


            <SelectWrapper
                label="Community"
                options={Communities}
                value={selectedCommunity}
                onChange={(value) => setValue("community", value as typeof selectedCommunity)}
                placeholder="Select your community"
                error={errors.community?.message}
            />
            <motion.div
                className="flex justify-between mt-4 w-full"
                variants={fadeInAnimation}
            >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="flex items-center gap-2" variant="outline" onClick={previousStep}>
                        <ArrowLeft /> Previous
                    </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="flex items-center gap-2" variant="default" onClick={handleNext}>
                        Next <ArrowRight className="w-4 h-4" />
                    </Button>
                </motion.div>
            </motion.div>
        </>
    )
}
