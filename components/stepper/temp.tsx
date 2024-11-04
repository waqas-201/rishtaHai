import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { Button } from "../ui/button";
import Image from "next/image";
import { TypographySmall } from "../ui/typography/small";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { cities } from "@/lib/dataArrays";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { formSchema } from "@/schema/formSchema";
import { Country, State, City } from 'country-state-city';

// ... keep all existing animations and Communities array ...

export const ReligionsInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { formState: { errors }, trigger, setValue, watch, getValues } = useFormContext<FormData>();
    const data = getValues();

    const handleNext = async () => {
        console.log("All Form Data:", data);
        const isValid = await trigger(['community', 'country', 'state', 'city', 'religion']);
        if (isValid && nextStep) {
            nextStep();
        }
    };

    const selectedReligion = watch("religion");
    const selectedCommunity = watch("community");
    const selectedCountry = watch("country");
    const selectedState = watch("state");
    const selectedCity = watch("city");

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
        ? City.getCitiesOfState(
            countries.find(c => c.value === selectedCountry)?.isoCode,
            states.find(s => s.value === selectedState)?.isoCode
          ).map(city => ({
            value: city.name,
            label: city.name
          }))
        : [];

    // Add handlers for country, state, and city changes
    const handleCountryChange = (value: string) => {
        setValue("country", value);
        setValue("state", "");
        setValue("city", "");
    };

    const handleStateChange = (value: string) => {
        setValue("state", value);
        setValue("city", "");
    };

    // Keep all existing JSX structure, but update the Country, State, and City selects:

    {/* Replace the existing country select with: */}
    <Select
        onValueChange={handleCountryChange}
        value={selectedCountry}
    >
        <SelectTrigger>
            <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent>
            <AnimatePresence mode="wait">
                {countries.map((country) => (
                    <motion.div
                        key={country.value}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <SelectItem value={country.value}>
                            {country.label}
                        </SelectItem>
                    </motion.div>
                ))}
            </AnimatePresence>
        </SelectContent>
    </Select>

    {/* Add after country select and before city select: */}
    {selectedCountry && (
        <motion.div
            className="w-full space-y-2"
            variants={selectAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
            <TypographySmall>State</TypographySmall>
            <Select
                onValueChange={handleStateChange}
                value={selectedState}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                    <AnimatePresence mode="wait">
                        {states.map((state) => (
                            <motion.div
                                key={state.value}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <SelectItem value={state.value}>
                                    {state.label}
                                </SelectItem>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </SelectContent>
            </Select>
            {errors.state && (
                <Alert variant="destructive" className="py-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.state.message}</AlertDescription>
                </Alert>
            )}
        </motion.div>
    )}

    {/* Update the city select to use the cities from the picker: */}
    <Select
        onValueChange={(value: string) => setValue("city", value)}
        value={selectedCity}
    >
        <SelectTrigger>
            <SelectValue placeholder="Select your City" />
        </SelectTrigger>
        <SelectContent>
            <AnimatePresence mode="wait">
                {cities.map((city) => (
                    <motion.div
                        key={city.value}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <SelectItem value={city.value}>
                            {city.label}
                        </SelectItem>
                    </motion.div>
                ))}
            </AnimatePresence>
        </SelectContent>
    </Select>

    // ... keep rest of the component unchanged ...

};