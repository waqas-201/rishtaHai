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
import { PhoneInput } from "../ui/phoneInput";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

// Define the Zod schema
export const personalInfoSchema = z.object({
    profileFor: z.string().min(1, { message: "You must select a profile type." }),
    phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number." }),
    GroomName: z.string().min(5, { message: "Name must be at least 5 characters long." }),
    gender: z.enum(['male', 'female'], { message: "You must select a gender." }),
    termsAccepted: z.boolean().refine(value => value === true, {
        message: "You must accept the terms and conditions."
    })
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

const PersonalInfoForm = () => {
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
        nextStep();
        console.log(data);
    };

    const phoneValue = watch("phone");

    return (
        <div className="p-5">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-between gap-28">
                {/* left section */}
                <div className="flex flex-col items-start justify-start gap-10">
                    {/* Profile Selection */}
                    <div className="flex flex-col items-start justify-center gap-1">
                        <Label className="text-[12px] text-muted-foreground" htmlFor="profileFor">
                            Create profile for <span>*</span>
                        </Label>
                        <Select onValueChange={(value) => setValue("profileFor", value)}>
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
                        {errors.profileFor && <p className="text-red-500 text-[10px]">{errors.profileFor.message}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col items-start justify-center gap-1">
                        <Label className="text-[12px] text-gray-600" htmlFor="phone">
                            Phone Number <span>*</span>
                        </Label>
                        <PhoneInput
                            value={phoneValue}
                            onChange={(value) => setValue("phone", value)}
                            placeholder="Enter a phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-[10px]">{errors.phone.message}</p>}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start justify-start flex-col gap-1">
                        <div className="flex items-start justify-start space-x-2">
                            <Checkbox
                                id="terms"
                                {...register("termsAccepted", {
                                    required: "You must accept the terms and conditions.",
                                    setValueAs: (value) => value === true // Ensure it returns a boolean
                                })}
                            />
                            <label htmlFor="terms" className="text-sm font-medium leading-none">
                                Accept terms and conditions
                            </label>
                        </div>
                        {errors.termsAccepted && (
                            <p className="text-[10px] text-red-500">{errors.termsAccepted.message}</p>
                        )}
                    </div>
                </div>




                {/* right section */}
                <div className="flex flex-col items-start justify-start gap-10">
                    {/* Name Input */}
                    <div className="flex flex-col items-start justify-center gap-1">
                        <Label className="text-[12px] text-muted-foreground  ml-1 " htmlFor="GroomName">
                            Bride / Groom Name <span>*</span>
                        </Label>
                        <Input
                            className="placeholder:text-muted-foreground"
                            id="GroomName"
                            type="text"
                            placeholder="Bride / Groom Name *"
                            {...register("GroomName")}
                        />
                        {errors.GroomName && <p className="text-red-500 text-[10px]">{errors.GroomName.message}</p>}
                    </div>



                    {/* Gender Selection */}
                    <div className="flex flex-col items-start justify-center gap-2">
                        <Label className="text-[12px] text-gray-600 ml-3">Gender <span>*</span></Label>
                        <RadioGroup
                            onValueChange={(value: "male" | "female") => setValue("gender", value)}
                        >
                            <div className="flex gap-4">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male" className="text-sm">Male</Label>

                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female" className="text-sm">Female</Label>
                            </div>
                        </RadioGroup>
                        {errors.gender && <p className="text-red-500 text-[10px]">{errors.gender.message}</p>}
                    </div>

                    <Button type="submit">Get Started</Button>
                </div>
                {/* right section */}
            </form>
        </div>
    );
};

export default PersonalInfoForm;
