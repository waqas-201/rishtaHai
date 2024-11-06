import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import SelectWrapper from "./generel/animateAndSelect";
import { Communities, familyStatusOptions, topReligions2 } from "@/constants/constents";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UserIcon from "./generel/userIcon";

export const CommunityAndReligionAndFamilyStatus: React.FC<StepComponentProps> = ({ previousStep, nextStep }) => {
    const { formState: { errors }, trigger, watch, setValue } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['community', 'religion', 'familyStatus']);
        if (isValid && nextStep) {
            nextStep();
        }

    };

    const selectedCommunity = watch("community");
    const selectedReligion = watch("religion");
    const selectedFamilyStatus = watch("familyStatus");


    return (
        <div className="flex flex-col items-center justify-center gap-4 ">

            <div className="flex justify-center mb-4">
                <UserIcon />
            </div>
            {/* religion section  */}
            <SelectWrapper
                label="Religion"
                options={topReligions2}
                value={selectedReligion}
                onChange={(value) => setValue("religion", value as typeof selectedReligion)}
                placeholder="Select your religion"
                error={errors.religion?.message}


            />
            {/* community */}
            <SelectWrapper
                label="Community"
                options={Communities}
                value={selectedCommunity}
                onChange={(value) => setValue("community", value as typeof selectedCommunity)}
                placeholder="Select your community"
                error={errors.community?.message}
            />


            {/* family status section */}

            <SelectWrapper
                label="Family Status"
                options={familyStatusOptions}
                value={selectedFamilyStatus}
                onChange={(value) => setValue("familyStatus", value as typeof selectedFamilyStatus)}
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
    )
}
