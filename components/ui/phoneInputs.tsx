import { cn } from '@/lib/utils'
import { Input } from "@/components/ui/input";
import { ChevronDown, Phone } from "lucide-react";
import React, { forwardRef, type InputHTMLAttributes } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { E164Number } from 'libphonenumber-js/core';

interface Input46Props {
    value?: string;
    onChange?: (value?: E164Number | undefined) => void; // Make `value` optional
    onBlur?: () => void;
}

export default function Input46({ value, onChange, onBlur }: Input46Props) {
    return (
        <div className="space-y-2" dir="ltr">
            <RPNInput.default
                className="flex rounded-lg shadow-sm shadow-black/[.04]"
                international
                flagComponent={FlagComponent}
                countrySelectComponent={CountrySelect}
                inputComponent={PhoneInput}
                id="input-46"
                placeholder="Enter phone number"
                value={value}
                onChange={(newValue) => onChange?.(newValue)} // Use optional chaining for `onChange`
                onBlur={onBlur}
            />

        </div>
    );
}

// Define types for PhoneInput and related components
export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const PhoneInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <Input
                className={cn("-ms-px rounded-s-none shadow-none focus-visible:z-10", className)}
                ref={ref}
                {...props}
            />
        );
    }
);

PhoneInput.displayName = "PhoneInput";

type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    onChange: (value: RPNInput.Country) => void;
    options: { label: string; value: RPNInput.Country | undefined }[];
};

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => {
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as RPNInput.Country);
    };

    return (
        <div className="relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground ring-offset-background transition-shadow focus-within:z-10 focus-within:border-ring focus-within:text-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
            <div className="inline-flex items-center gap-1" aria-hidden="true">
                <FlagComponent country={value} countryName={value} aria-hidden="true" />
                <span className="text-muted-foreground/80">
                    <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
                </span>
            </div>
            <select
                disabled={disabled}
                value={value}
                onChange={handleSelect}
                className="absolute inset-0 text-sm opacity-0"
                aria-label="Select country"
            >
                <option key="default" value="">
                    Select a country
                </option>
                {options
                    .filter((x) => x.value)
                    .map((option, i) => (
                        <option key={option.value ?? `empty-${i}`} value={option.value}>
                            {option.label} {option.value && `+${RPNInput.getCountryCallingCode(option.value)}`}
                        </option>
                    ))}
            </select>
        </div>
    );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
    const Flag = flags[country];

    return (
        <span className="w-5 overflow-hidden rounded-sm">
            {Flag ? <Flag title={countryName} /> : <Phone size={16} aria-hidden="true" />}
        </span>
    );
};
