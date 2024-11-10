/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormProvider, useForm } from "react-hook-form";
import StepWizard from "react-step-wizard";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileInfo } from "./profileInfo";
import { formSchema } from "@/schema/formSchema";
import { CountryCityAndState } from "./CountryCityAndState";
import { EmailAndPhone } from "./EmailAndPhone";
import { DescriptionAboutUser } from "./discription";
import SuccessMessage from "./successMessage";
import { QualificationAndProfessionAndEarning } from "./QualificationAndProfessionAndEarning";
import { HeightAndWeight } from "./HeightAndWeight";
import { CommunityAndReligionAndFamilyStatus } from "./CommunityAndReligionAndFamilyStatus";
import { NameAndBirthDay } from "./NameAndBirthDay";
import { useStepStore } from "@/store/useActiveStep";
import { useCallback } from "react";

// Main Form Component
export const MultiStepForm: React.FC = () => {
    const { activeStep, setActiveStep } = useStepStore(); // Zustand state for step
    const methods = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        shouldUnregister: true,
    });

    // Function to handle step changes and update Zustand store
    const handleStepChange = useCallback(
        (state: { activeStep: number }) => {
            setActiveStep(state.activeStep);
        },
        [setActiveStep]  // Memoizing the function with respect to setActiveStep
    );


    return (
        <FormProvider {...methods}>
            <StepWizard onStepChange={handleStepChange}>
                <ProfileInfo />
                <NameAndBirthDay />
                <CountryCityAndState />
                <QualificationAndProfessionAndEarning />
                <CommunityAndReligionAndFamilyStatus />
                <HeightAndWeight />
                <EmailAndPhone />
                <DescriptionAboutUser />
                <SuccessMessage />
            </StepWizard>
        </FormProvider>
    );
};

export default MultiStepForm;
