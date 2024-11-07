// store/stepStore.ts
import { create } from 'zustand';

interface StepState {
    activeStep: number;
    setActiveStep: (step: number) => void;
}

export const useStepStore = create<StepState>((set) => ({
    activeStep: 1, // Default initial step
    setActiveStep: (step) => set({ activeStep: step }),
}));
