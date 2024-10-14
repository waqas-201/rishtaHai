import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const steps = [

    { number: '1', label: 'Basic Information' },
    { number: '2', label: 'Personal Details' },
    { number: '3', label: 'Education and Location' },
    { number: '4', label: 'Self Description' },
    { number: '5', label: 'Review Information' },
];

export const ProgressTracker: React.FC = () => {
    const currentStep = useSelector((state: RootState) => state?.form?.currentStep);

    return (
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center w-full">
                {steps.map((step, index) => (
                    <React.Fragment key={step.number}>
                        <div className="flex flex-col items-center relative z-10">
                            {/* Apply color based on whether the step is the current or a completed step */}
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${index + 1 === currentStep
                                    ? 'bg-pink-500 text-white' // Highlight the current step
                                    : index + 1 < currentStep
                                        ? 'bg-pink-300 text-white' // Highlight completed steps
                                        : 'bg-gray-300 text-gray-600' // Dim future steps
                                    }`}
                            >
                                {step.number}
                            </div>
                            <div className="text-xs text-center mt-1 max-w-[80px]">
                                {step.label}
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-grow h-0.5 ${index + 1 < currentStep
                                    ? 'bg-pink-300' // Highlight the connecting line for completed steps
                                    : 'bg-gray-300' // Dim future step connectors
                                    }`}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
