import React from 'react';
import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext, Controller } from "react-hook-form";
import Image from "next/image";
import { Country, State, City } from 'country-state-city';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import ErrorMessage from './generel/errorMessage';
import { motion, AnimatePresence } from "framer-motion";
import { errorAnimation, inputAnimation } from '@/constants/constents';
import { Label } from '../ui/label';

const inputStyles = cn(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:visible focus:ring-accent focus:border-accent focus:outline-none"
);

export const CountryCityAndState: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const {
        control,
        formState: { errors },
        trigger,
        watch,
        setValue
    } = useFormContext<FormData>();

    const selectedCountry = watch("country");
    const selectedState = watch("state");

    const handleNext = async () => {
        const isValid = await trigger(['country', 'state', 'city']);
        if (isValid && nextStep) {
            nextStep();
        }
    };

    // Get location data
    const getLocationData = () => {
        const countries = Country.getAllCountries().map(country => ({
            value: country.name,
            label: country.name,
            isoCode: country.isoCode
        }));

        const states = selectedCountry
            ? State.getStatesOfCountry(
                countries.find(c => c.value === selectedCountry)?.isoCode
            ).map(state => ({
                value: state.name,
                label: state.name,
                isoCode: state.isoCode
            }))
            : [];

        const cities = selectedState && selectedCountry
            ? (() => {
                const country = countries.find(c => c.value === selectedCountry);
                const state = states.find(s => s.value === selectedState);
                return country && state
                    ? City.getCitiesOfState(country.isoCode, state.isoCode)
                        .map(city => ({
                            value: city.name,
                            label: city.name
                        }))
                    : [];
            })()
            : [];

        return { countries, states, cities };
    };

    const { countries, states, cities } = getLocationData();

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex justify-center mb-4">
                <Image src='/Image-3.png' alt="Religion Icon" width={80} height={80} />
            </div>

            {/* Country Selector */}
            <motion.div className="w-full space-y-2" variants={inputAnimation}>
                <Label htmlFor="country">Country</Label>
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <select
                            {...field}
                            id="country"
                            className={inputStyles}
                            onChange={(e) => {
                                field.onChange(e);
                                // Reset dependent fields
                                setValue("state", "", { shouldValidate: true });
                                setValue("city", "", { shouldValidate: true });
                            }}
                        >
                            <option value="">Select your country</option>
                            {countries.map(country => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </select>
                    )}
                />
                <AnimatePresence>
                    {errors.country && (
                        <motion.div variants={errorAnimation}>
                            <ErrorMessage message={errors.country.message} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* State Selector */}
            <motion.div className="w-full space-y-2" variants={inputAnimation}>
                <Label htmlFor="state">State</Label>
                <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                        <select
                            {...field}
                            id="state"
                            className={inputStyles}
                            disabled={!selectedCountry}
                            onChange={(e) => {
                                field.onChange(e);
                                // Reset city when state changes
                                setValue("city", "", { shouldValidate: true });
                            }}
                        >
                            <option value="">Select your state</option>
                            {states.map(state => (
                                <option key={state.value} value={state.value}>
                                    {state.label}
                                </option>
                            ))}
                        </select>
                    )}
                />
                <AnimatePresence>
                    {errors.state && (
                        <motion.div variants={errorAnimation}>
                            <ErrorMessage message={errors.state.message} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* City Selector */}
            <motion.div className="w-full space-y-2" variants={inputAnimation}>
                <Label htmlFor="city">City</Label>
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        <select
                            {...field}
                            id="city"
                            className={inputStyles}
                            disabled={!selectedState}
                        >
                            <option value="">Select your city</option>
                            {cities.map(city => (
                                <option key={city.value} value={city.value}>
                                    {city.label}
                                </option>
                            ))}
                        </select>
                    )}
                />
                <AnimatePresence>
                    {errors.city && (
                        <motion.div variants={errorAnimation}>
                            <ErrorMessage message={errors.city.message} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4 w-full">
                <Button variant="outline" onClick={previousStep} className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
                <Button onClick={handleNext} className="flex items-center gap-2">
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

export default CountryCityAndState;