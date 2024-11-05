import React from 'react';
import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Country, State, City } from 'country-state-city';
import { fadeInAnimation } from "@/constants/constents";
import SelectWrapper from './generel/animateAndSelect';

export const ReligionsInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { formState: { errors }, trigger, setValue, watch } = useFormContext<FormData>();

    const selectedCountry = watch("country");
    const selectedState = watch("state");
    const selectedCity = watch("city");

    const handleNext = async () => {
        const isValid = await trigger(['country', 'city', 'state']);
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
        <motion.div
            className="flex flex-col items-center justify-center gap-4 "
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInAnimation}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image src='/Image-3.png' alt="Religion Icon" width={80} height={80} />
            </motion.div>


            <SelectWrapper
                label="Country"
                options={countries}
                value={selectedCountry}
                onChange={(value) => {
                    setValue("country", value as typeof selectedCountry)
                    // when user changes country, after first time selection is made, the state and city are reset
                    setValue("state", "");
                    setValue("city", "");
                }}


                placeholder="Select your country"
                error={errors.country?.message}

            />

            <SelectWrapper
                label="State"
                options={states}
                value={selectedState}
                onChange={(value) => {
                    setValue("state", value as typeof selectedState)
                    // when user changes state, after first time selection is made, the city is reset
                    setValue("city", "");
                }}
                placeholder="Select your state"
                error={errors.state?.message}

            />

            <SelectWrapper
                label="City"
                options={cities}
                value={selectedCity}
                onChange={(value) => setValue("city", value)}
                placeholder="Select your city"
                error={errors.city?.message}
            />

            <motion.div
                className="flex justify-between mt-4 w-full"
                variants={fadeInAnimation}
            >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="flex items-center gap-2" variant="outline" onClick={previousStep}>
                        <ArrowLeft /> Previous
                    </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="flex items-center gap-2" variant="default" onClick={handleNext}>
                        Next <ArrowRight className="w-4 h-4" />
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ReligionsInfo;