import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import SelectWrapper from "./generel/animateAndSelect";
import { Communities, familyStatusOptions, topReligions2 } from "@/constants/constents";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReligionIcon from "./generel/religionIcon";

export const CommunityAndReligionAndFamilyStatus: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const {
        formState: { errors },
        trigger,
        control
    } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['community', 'religion', 'familyStatus']);
        if (isValid && nextStep) {
            nextStep();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex justify-center      rounded-full mb-4">

                <ReligionIcon className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]  text-emerald-400   bg-emerald-500/20 rounded-full" /> 
            </div>

            {/* religion section */}
            <SelectWrapper<FormData>
                label="Religion"
                name="religion"
                control={control}
                options={topReligions2}
                placeholder="Select your religion"
                error={errors.religion?.message}
            />

            {/* community */}
            <SelectWrapper<FormData>
                label="Community"
                name="community"
                control={control}
                options={Communities}
                placeholder="Select your community"
                error={errors.community?.message}
            />

            {/* family status section */}
            <SelectWrapper<FormData>
                label="Family Status"
                name="familyStatus"
                control={control}
                options={familyStatusOptions}
                placeholder="Select your family status"
                error={errors.familyStatus?.message}
            />

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

export default CommunityAndReligionAndFamilyStatus;