// components/ProgressTracker.tsx
import { RootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';


const steps = ['Personal Information', 'Address Information', 'Review'];

const ProgressTracker: React.FC = () => {
    const currentStep = useSelector((state: RootState) => state?.form?.currentStep);

    return (
        <div className="flex gap-4 mb-6 ">
            {steps.map((step, index) => (
                <div key={index} className={`card p-2 rounded-sm text-sm ${index === currentStep ? 'bg-accent text-black' : 'bg-gray-200 '}`}>
                    {step}
                </div>
            ))}
        </div>
    );
};

export default ProgressTracker;
