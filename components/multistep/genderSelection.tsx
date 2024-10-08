import React from 'react';
import { Label } from "../ui/label";

interface GenderSelectionProps {
    register: any; // Adjust type as necessary
    error?: string;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ register, error }) => {
    return (
        <div className="flex flex-col items-start justify-center gap-2">
            <Label className="text-[12px] text-gray-600 ml-3">Gender <span>*</span></Label>
            <div className="flex gap-4">
                <label>
                    <input
                        type="radio"
                        value="male"
                        {...register("gender")}
                        className="mr-2"
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        value="female"
                        {...register("gender")}
                        className="mr-2"
                    />
                    Female
                </label>
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default GenderSelection;
