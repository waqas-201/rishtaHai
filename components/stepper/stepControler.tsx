/* eslint-disable @typescript-eslint/no-unused-vars */
// MultiStepForm.tsx
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

// Main Form Component
export const MultiStepForm: React.FC = () => {
    const { activeStep, setActiveStep } = useStepStore(); // Zustand state for step
    const methods = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        shouldUnregister: true,
    });

    // Function to handle step changes and update Zustand store
    const handleStepChange = (stats: { activeStep: number }) => {
        setActiveStep(stats.activeStep);
    };

    return (
        <FormProvider {...methods}>
            <StepWizard onStepChange={handleStepChange}>
                <ProfileInfo />
                <NameAndBirthDay />
                <HeightAndWeight />
                <CountryCityAndState />
                <QualificationAndProfessionAndEarning />
                <CommunityAndReligionAndFamilyStatus />
                <EmailAndPhone />
                <DescriptionAboutUser />
                <SuccessMessage />
            </StepWizard>
        </FormProvider>
    );
};

export default MultiStepForm;
