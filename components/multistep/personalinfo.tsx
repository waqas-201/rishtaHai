import React from "react";
import { useForm, Controller } from "react-hook-form";
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
    termsAccepted: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions." })
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

const PersonalInfoForm = () => {
    const { nextStep } = useWizard();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<PersonalInfoFormData>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            termsAccepted: false
        }
    });

    const onSubmit = (data: PersonalInfoFormData) => {
        console.log("Form submitted:", data);
        dispatch(setPersonalInfo(data));
        dispatch(setCurrentStep(1));
        nextStep();
    };


    return (
        <div className="p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-between gap-10">
                {/* left section */}
                <div className="flex flex-col items-start justify-start gap-10">
                    {/* Profile Selection */}
                    <div className="flex flex-col items-start justify-center gap-1">
                        <Label className="text-[12px] text-muted-foreground" htmlFor="profileFor">
                            Create profile for <span>*</span>
                        </Label>
                        <Controller
                            name="profileFor"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
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
                            )}
                        />
                        {errors.profileFor && <p className="text-red-500 text-[10px]">{errors.profileFor.message}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col items-start justify-center gap-1">
                        <Label className="text-[12px] text-gray-600" htmlFor="phone">
                            Phone Number <span>*</span>
                        </Label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <PhoneInput
                                    value={field.value}
                                    onChange={(value) => field.onChange(value || "")}
                                    placeholder="Enter a phone number"
                                    defaultCountry="PK"
                                />
                            )}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px]">{errors.phone.message}</p>}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start justify-start flex-col gap-1">
                        <div className="flex items-start justify-start space-x-2">
                            <Controller
                                name="termsAccepted"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        id="terms"
                                        checked={field.value}
                                        onCheckedChange={(checked) => field.onChange(checked)}
                                    />
                                )}
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
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup onValueChange={field.onChange} value={field.value}>
                                    <div className="flex gap-4">
                                        <RadioGroupItem value="male" id="male" />
                                        <Label htmlFor="male" className="text-sm">Male</Label>

                                        <RadioGroupItem value="female" id="female" />
                                        <Label htmlFor="female" className="text-sm">Female</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                        {errors.gender && <p className="text-red-500 text-[10px]">{errors.gender.message}</p>}
                    </div>

                    <Button type="submit">Get Started</Button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfoForm;