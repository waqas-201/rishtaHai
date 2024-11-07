import { useStepStore } from "@/store/useActiveStep";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface IconWrapperProps {
    className: string;
    children: React.ReactNode;
    step?: number; // Add step as a prop
}

export const IconWrapper = ({ className, children }: IconWrapperProps) => {
    const { activeStep } = useStepStore(); // Zustand state for step
    return (
        <motion.div
            key={activeStep} // Adding step as a key to reset on each step change
            className={twMerge('', className)}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1,
                y: [50, -20, 10, 0],
                transition: {
                    opacity: { duration: 0.3 },
                    y: {
                        duration: 1,
                        times: [0, 0.3, 0.6, 1],
                        repeat: 0,
                        ease: 'easeOut',
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};
