import { FormProvider, useForm } from "react-hook-form";
import StepWizard from "react-step-wizard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ProfileInfo } from "./profileInfo1";
import { PersonalInfo } from "./personalInfo2";
import { formSchema } from "@/schema/formSchema";
import { ReligionsInfo } from "./religionInfo3";
import { AddressInfo } from "./addressInfo4";
import { DescriptionAboutUser } from "./discription5";
import SuccessMessage from "./successMessage";
import { MorePersonalInfo } from "./moreInfo4.1";








// Main Form Component
export const MultiStepForm: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeStep, setActiveStep] = useState(1);
    const methods = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
    });

    const handleStepChange = (stats: { activeStep: number }) => {
        setActiveStep(stats.activeStep);
    };

    return (



            <FormProvider {...methods}>
                <StepWizard onStepChange={handleStepChange}>
                    <ProfileInfo />
                    <PersonalInfo />
                    <ReligionsInfo />
                    <AddressInfo />
                    <MorePersonalInfo /> 
                    <DescriptionAboutUser />
                    <SuccessMessage />
                </StepWizard>
                </FormProvider>

    );
};

export default MultiStepForm;