'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setPersonalInfo, setCurrentStep } from "../../slices/formSlice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { PhoneInput } from "../ui/phoneInput"; // Ensure this points to the correct PhoneInput component
import { isValidPhoneNumber } from "react-phone-number-input";

// Define the Zod schema
const personalInfoSchema = z.object({
    profileFor: z.string().min(1, { message: "You must select a profile type." }),
    phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number." }),
    address: z.string().min(5, { message: "Address must be at least 5 characters long." }),
    gender: z.enum(['male', 'female'], { message: "You must select a gender." }) // Enum for gender selection
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

const PersonalInfoForm: React.FC = () => {
    const { nextStep } = useWizard();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<PersonalInfoFormData>({
        resolver: zodResolver(personalInfoSchema),
    });

    const onSubmit = (data: PersonalInfoFormData) => {
        dispatch(setPersonalInfo(data));
        dispatch(setCurrentStep(1));
        nextStep(); // Move to the next step in the wizard
        console.log(data);

    };

    const phoneValue = watch("phone"); // Watch phone value for controlled input

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Profile Selection */}
                <div className="flex flex-col items-start justify-center gap-2">
                    <Label className="text-[12px] text-gray-600 ml-3" htmlFor="profileFor">
                        Create profile for <span>*</span>
                    </Label>
                    <Select
                        onValueChange={(value) => {
                            setValue("profileFor", value);
                        }}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="myself">Myself</SelectItem>
                            <SelectItem value="daughter">Daughter</SelectItem>
                            <SelectItem value="son">Son</SelectItem>
                            <SelectItem value="sister">Sister</SelectItem>
                            <SelectItem value="brother">Brother</SelectItem>
                            <SelectItem value="friend">Friend</SelectItem>
                            <SelectItem value="relative">Relative</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.profileFor && <p className="text-red-500">{errors.profileFor.message}</p>} {/* Show error message */}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col items-start justify-center gap-2">
                    <Label className="text-[12px] text-gray-600 ml-3" htmlFor="phone">
                        Phone Number <span>*</span>
                    </Label>
                    <PhoneInput
                        value={phoneValue} // Use watch to keep the value controlled
                        onChange={(value) => setValue("phone", value)} // Update the react-hook-form state
                        placeholder="Enter a phone number"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>} {/* Show error message */}
                </div>

                {/* Address Input */}
                <div className="flex flex-col items-start justify-center gap-2">
                    <Label className="text-[12px] text-gray-600 ml-3" htmlFor="address">
                        Address <span>*</span>
                    </Label>
                    <input
                        id="address"
                        type="text"
                        placeholder="Enter your address"
                        {...register("address")}
                        className="input-class" // Replace with your input class
                    />
                    {errors.address && <p className="text-red-500">{errors.address.message}</p>} {/* Show error message */}
                </div>

                {/* Gender Selection */}
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
                    {errors.gender && <p className="text-red-500">{errors.gender.message}</p>} {/* Show error message */}
                </div>

                <Button type="submit">Next</Button>
            </form>
        </div>
    );
};

export default PersonalInfoForm;
