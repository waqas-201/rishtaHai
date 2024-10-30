import { formSchema } from "@/schema/formSchema";
import { StepWizardChildProps } from "react-step-wizard";
import { z } from "zod";

// Update the type definition for step components
export type StepComponentProps = Partial<StepWizardChildProps> & {
  isActive?: boolean;
  currentStep?: number;
  totalSteps?: number;
  firstStep?: () => void;
  lastStep?: () => void;
  nextStep?: () => void;
  previousStep?: () => void;
  goToStep?: (step: number) => void;
  goToNamedStep?: (step: string) => void;
  hashKey?: string;
  stepName?: string;
};
export type FormData = z.infer<typeof formSchema>;
