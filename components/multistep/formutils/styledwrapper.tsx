import { Label } from "@/components/ui/label";
import React from "react";

interface StyledInputWrapperProps {
    label: string;
    required?: boolean | string;
    error?: string;
    children: React.ReactNode;
}

const StyledInputWrapper: React.FC<StyledInputWrapperProps> = ({
    label,
    required,
    error,
    children,
}) => {
    return (
        <div className="flex items-start flex-col gap-1 w-full">
            <Label className="md:text-[12px] text-[10px] text-gray-500">
                {label}
                {required && <span>*</span>}
            </Label>
            {children}
            <div className="h-[16px]"> {/* Reserve space for the error */}
                {error && (
                    <p className="md:text-[12px] text-[8px] text-red-600">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default StyledInputWrapper;




{/* Marital Status */ }

