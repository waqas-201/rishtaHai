import { FormProvider, useForm } from "react-hook-form";
import StepWizard from "react-step-wizard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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








// Main Form Component
export const MultiStepForm: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeStep, setActiveStep] = useState(1);
    const methods = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        shouldUnregister: true,

    });

    const handleStepChange = (stats: { activeStep: number }) => {
        setActiveStep(stats.activeStep);
    };

    return (



            <FormProvider {...methods}>
                <StepWizard onStepChange={handleStepChange}>
                <ProfileInfo /> 
                <NameAndBirthDay />
                <CountryCityAndState />
                <CommunityAndReligionAndFamilyStatus />
                <QualificationAndProfessionAndEarning />
                <HeightAndWeight />
                <EmailAndPhone />
                <DescriptionAboutUser />
                <SuccessMessage />
                </StepWizard>
                </FormProvider>

    );
};

export default MultiStepForm;