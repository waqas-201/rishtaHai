// components/ProgressTracker.tsx
import { RootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';


const steps = ['Personal Information', 'Basic Details', 'Review'];

const ProgressTracker: React.FC = () => {
    const currentStep = useSelector((state: RootState) => state?.form?.currentStep);

    return (
        <div className="flex  gap-4 md:mb-6 ">
            {steps.map((step, index) => (
                <div key={index} className={`card md:p-2 p-1 rounded-sm md:text-sm text-[12px] ${index === currentStep ? 'bg-accent text-black' : 'bg-gray-200 '}`}>
                    {step}
                </div>
            ))}
        </div>
    );
};

export default ProgressTracker;
