import { FormData, StepComponentProps } from "@/types/types";
import { useFormContext } from "react-hook-form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"; // Adjust the import path as necessary
import { Button } from "../ui/button";
import Image from "next/image";


// Define the union type for religions
type Religion = "Christianity" | "Islam" | "Hinduism" | "Buddhism" | "Sikhism";

// Update the communities and countries types if they are also enums or arrays of specific strings
type Community = "Community A" | "Community B" | "Community C";
type Country = "USA" | "Canada" | "Pakistan" | "India";

export const ReligionsInfo: React.FC<StepComponentProps> = ({ nextStep, previousStep }) => {
    const { formState: { errors }, trigger, setValue, watch } = useFormContext<FormData>();

    const handleNext = async () => {
        const isValid = await trigger(['communities', 'countries', 'religions']);
        if (isValid && nextStep) {
            nextStep();
        }
    };

    // Watch selected values
    const selectedReligion = watch("religions") || ""; // single value
    const selectedCommunity = watch("communities") || ""; // single value
    const selectedCountry = watch("countries") || ""; // single value

    // Log selected values for debugging
    console.log("Selected Religion:", selectedReligion);
    console.log("Selected Community:", selectedCommunity);
    console.log("Selected Country:", selectedCountry);

    return (
        <div>
            {/* Religions Select */}
            <Image src='/Image-3.png' alt="Religion Icon" width={80} height={80} />

            <Select
                onValueChange={(selected: Religion) => setValue("religions", selected as Religion)}
                value={selectedReligion} // single value binding
            >
                <SelectTrigger className="w-[180px]">
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
            {errors.religions && <span className="text-red-600">{errors.religions.message}</span>}

            {/* Communities Select */}
            <Select
                onValueChange={(selected: Community) => setValue("communities", selected as Community)}
                value={selectedCommunity} // single value binding
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select your community" />
                </SelectTrigger>
                <SelectContent>
                    {["Community A", "Community B", "Community C"].map((community) => (
                        <SelectItem key={community} value={community as Community}>
                            {community}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {errors.communities && <span className="text-red-600">{errors.communities.message}</span>}

            {/* Countries Select */}
            <Select
                onValueChange={(selected: Country) => setValue("countries", selected as Country)}
                value={selectedCountry} // single value binding
            >
                <SelectTrigger className="w-[180px]">
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
            {errors.countries && <span className="text-red-600">{errors.countries.message}</span>}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={previousStep}>
                    Previous
                </Button>
                <Button variant="default" onClick={handleNext}>
                    Next
                </Button>
            </div>
        </div>
    );
};
