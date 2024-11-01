import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"; // Adjust the import path as necessary
import { Button } from "../ui/button";
import Image from "next/image";
import { TypographySmall } from "../ui/typography/small";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { cities } from "@/lib/dataArrays";

// Define the union type for religions
type Religion = "Christianity" | "Islam" | "Hinduism" | "Buddhism" | "Sikhism";
type Community = "CommunityA" | "CommunityB" | "CommunityC";
type Country = "USA" | "Canada" | "Pakistan" | "India";
type City = "Karachi" | "Lahore" | "Islamabad" | "Faisalabad" | "Rawalpindi" | "Multan" | "Hyderabad" | "Gujranwala" | "Peshawar" | "Quetta";

export const ReligionsInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { formState: { errors }, trigger, setValue, watch, getValues } = useFormContext<FormData>();
    const data = getValues();

    const handleNext = async () => {
        console.log("All Form Data:", data);
        const isValid = await trigger(['community', 'country', 'religion']); 
        if (isValid && nextStep) {
            nextStep();
        }
    };

    // Watch selected values
    const selectedReligion = watch("religion") as Religion; // cast as Religion
    const selectedCommunity = watch("community") as Community; // cast as Community
    const selectedCountry = watch("country") as Country; // cast as Country
    const selectedCity = watch("city") as City; // cast as City

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Religions Select */}
            <Image src='/Image-3.png' alt="Religion Icon" width={80} height={80} />
            <div className="w-full space-y-2">
                <TypographySmall>Religion</TypographySmall>
                <Select
                    onValueChange={(selected: Religion) => setValue("religion", selected as Religion)}
                    value={selectedReligion} // single value binding
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select your religion" />
                    </SelectTrigger>
                    <SelectContent>
                        {["Christianity", "Islam", "Hinduism", "Buddhism", "Sikhism"].map((religion) => (
                            <SelectItem key={religion} value={religion as Religion}>
                                {religion}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.religion && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.religion.message}</AlertDescription>
                    </Alert>
                )}
            </div>

            {/* Communities Select */}
            {selectedReligion &&
                (<div className="w-full space-y-2">
                    <TypographySmall>Community</TypographySmall>
                    <Select
                    onValueChange={(selected: Community) => setValue("community", selected as Community)}
                    value={selectedCommunity} // single value binding
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select your community" />
                    </SelectTrigger>
                    <SelectContent>
                        {["CommunityA", "CommunityB", "CommunityC"].map((community) => (
                            <SelectItem key={community} value={community as Community}>
                                {community}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.community && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.community.message}</AlertDescription>
                    </Alert>
                )}
            </div>
                )
            }  
            {/* Countries Select */}

            {selectedReligion && selectedCommunity &&

                (
                    <div className="w-full space-y-2">
                        <TypographySmall>Country</TypographySmall>
                    <Select
                        onValueChange={(selected: Country) => setValue("country", selected as Country)}
                        value={selectedCountry} // single value binding
                    >
                    <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                            {["USA", "Canada", "Pakistan", "India"].map((country) => (
                                <SelectItem key={country} value={country as Country}>
                                    {country}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                        {errors.country && (
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{errors.country.message}</AlertDescription>
                            </Alert>
                        )}
                    </div>)
            }
            {/* city selectet */}

            {selectedReligion && selectedCommunity && selectedCountry &&

                (
                    <div className="w-full space-y-2">
                        <TypographySmall>City</TypographySmall>
                        <Select
                            onValueChange={(selected: Religion) => setValue("city", selected as City)}
                            value={selectedCity} // single value binding
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select your City" />
                            </SelectTrigger>
                            <SelectContent>
                                {[...cities].map((city) => (
                                    <SelectItem key={city} value={city as City}>
                                        {city}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.religion && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{errors.religion.message}</AlertDescription>
                    </Alert>
                )}
                    </div>)}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4 w-full">
                <Button className="flex items-center gap-2" variant="outline" onClick={previousStep}>
                    <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
                <Button className="flex items-center gap-2" variant="default" onClick={handleNext}>
                    Next <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
