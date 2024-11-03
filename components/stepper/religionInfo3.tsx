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
// import { useEffect } from "react";
import { z } from "zod";
import { formSchema } from "@/schema/formSchema";



const Communities = [
    "UrduSpeaking",
    "Punjabi",
    "Sindhi",
    "Pashtun",
    "Baloch",
    "Muhajir",
    "Saraiki",
    "Hindko",
    "Brahui",
    "EnglishSpeaking",
];

const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const errorAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 }
};

const selectAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 }
};

export const ReligionsInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { formState: { errors }, trigger, setValue, watch, getValues } = useFormContext<FormData>();
    const data = getValues();

    const handleNext = async () => {
        console.log("All Form Data:", data);
        const isValid = await trigger(['community', 'country', 'religion', 'city']);
        if (isValid && nextStep) {
            nextStep();
        }
    };


    // const community = watch('community');
    // const country = watch('country');
    // const religion = watch('religion');
    // const city = watch('city');


    // // Auto-advance to next step if all fields are valid
    // useEffect(() => {
    //     const validateAndMoveNext = async () => {
    //         const isValid = await trigger(['community', 'country', 'religion', 'city']);

    //         if (isValid && nextStep) {
    //             nextStep();
    //         }
    //     };

    //     // Validate only when all fields have been filled
    //     if (community && country && religion && city) {
    //         validateAndMoveNext();
    //     }
    // }, [community, country, religion, city, nextStep, trigger]);




    const selectedReligion = watch("religion") as z.infer<typeof formSchema>["religion"];
    const selectedCommunity = watch("community") as z.infer<typeof formSchema>["community"];
    const selectedCountry = watch("country") as z.infer<typeof formSchema>["country"];
    const selectedCity = watch("city") as z.infer<typeof formSchema>["city"];

    return (
        <motion.div
            className="flex flex-col items-center justify-center gap-4"
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

            {/* Religion Select */}
            <motion.div
                className="w-full space-y-2"
                variants={selectAnimation}
                transition={{ duration: 0.3 }}
            >
                <TypographySmall>Religion</TypographySmall>
                <Select
                    onValueChange={(selected: z.infer<typeof formSchema>["religion"]) => setValue("religion", selected)}
                    value={selectedReligion}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select your religion" />
                    </SelectTrigger>
                    <SelectContent>
                        <AnimatePresence mode="wait">
                            {["Islam", "Christianity", "Hinduism", "Buddhism", "Sikhism"].map((religion) => (
                                <motion.div
                                    key={religion}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <SelectItem value={religion as z.infer<typeof formSchema>["religion"]}>
                                        {religion}
                                    </SelectItem>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </SelectContent>
                </Select>
                <AnimatePresence mode="wait">
                    {errors.religion && (
                        <motion.div
                            variants={errorAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2 }}
                        >
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.religion.message}</AlertDescription>
                            </Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Communities Select */}
            <AnimatePresence mode="wait">
                {selectedReligion && (
                    <motion.div
                        className="w-full space-y-2"
                        variants={selectAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <TypographySmall>Community</TypographySmall>
                        <Select
                            onValueChange={(selected: z.infer<typeof formSchema>["community"]) => setValue("community", selected)}  
                            value={selectedCommunity}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select your community" />
                            </SelectTrigger>
                            <SelectContent>
                                <AnimatePresence mode="wait">
                                    {[...Communities].map((community) => (
                                        <motion.div
                                            key={community}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <SelectItem value={community as z.infer<typeof formSchema>["community"]}>
                                                {community}
                                            </SelectItem>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </SelectContent>
                        </Select>
                        <AnimatePresence mode="wait">
                            {errors.community && (
                                <motion.div
                                    variants={errorAnimation}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.2 }}
                                >
                                    <Alert variant="destructive" className="py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.community.message}</AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Countries Select */}
            <AnimatePresence mode="wait">
                {selectedReligion && selectedCommunity && (
                    <motion.div
                        className="w-full space-y-2"
                        variants={selectAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <TypographySmall>Country</TypographySmall>
                        <Select
                            onValueChange={(selected: z.infer<typeof formSchema>["country"]) => setValue("country", selected)}
                            value={selectedCountry}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                                <AnimatePresence mode="wait">
                                    {["Pakistan", "USA", "Canada", "India"].map((country) => (
                                        <motion.div
                                            key={country}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <SelectItem value={country as z.infer<typeof formSchema>["country"]}>
                                                {country}
                                            </SelectItem>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </SelectContent>
                        </Select>
                        <AnimatePresence mode="wait">
                            {errors.country && (
                                <motion.div
                                    variants={errorAnimation}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.2 }}
                                >
                                    <Alert variant="destructive" className="py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.country.message}</AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* City Select */}
            <AnimatePresence mode="wait">
                {selectedReligion && selectedCommunity && selectedCountry && (
                    <motion.div
                        className="w-full space-y-2"
                        variants={selectAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    >
                        <TypographySmall>City</TypographySmall>
                        <Select
                            onValueChange={(selected: string) => setValue("city", selected as z.infer<typeof formSchema>["city"])}
                            value={selectedCity}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select your City" />
                            </SelectTrigger>
                            <SelectContent>
                                <AnimatePresence mode="wait">
                                    {cities.map((city) => (
                                        <motion.div
                                            key={city}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <SelectItem value={city as z.infer<typeof formSchema>["city"]}>
                                                {city}
                                            </SelectItem>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </SelectContent>
                        </Select>
                        <AnimatePresence mode="wait">
                            {errors.city && (
                                <motion.div
                                    variants={errorAnimation}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.2 }}
                                >
                                    <Alert variant="destructive" className="py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.city.message}</AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Buttons */}
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