// Navigation Dots Component
export const StepperNav: React.FC<{ currentStep: number; totalSteps: number }> = ({ currentStep, totalSteps }) => (
    <div className="flex items-center gap-2 justify-center mb-6">
        {[...Array(totalSteps)].map((_, i) => (
            <div
                key={i}
                className={`w-3 h-3 rounded-full ${i + 1 === currentStep
                    ? 'bg-primary'
                    : i + 1 < currentStep
                        ? 'bg-primary/20'
                        : 'bg-muted'
                    }`}
            />
        ))}
    </div>
);



