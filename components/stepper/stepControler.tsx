import { FormProvider, useForm } from "react-hook-form";
import StepWizard from "react-step-wizard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { PersonalInfo } from "./persolanInfo1";
import { ContactInfo } from "./contactInfo2";
import { AddressInfo } from "./addressInfo3";
import { formSchema } from "@/schema/formSchema";



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
        <div className="w-full max-w-lg mx-auto">

                <FormProvider {...methods}>
                    <StepWizard onStepChange={handleStepChange}>
                        <PersonalInfo />


                        <ContactInfo />


                        <AddressInfo />
                    </StepWizard>
                </FormProvider>
        </div>
    );
};

export default MultiStepForm;