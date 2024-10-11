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
import StyledInputWrapper from "./styledwrapper";

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
        <div className="" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap">
                    {/* right section */}
                    <div className=" md:w-[50%] w-full md:p-6 py-4 flex flex-col justify-center
                     md:gap-4 gap-2"  >
                        {/* profile input */}
                        <div className="border border-red-700 flex items-start flex-col gap-1 ">
                            <Label className="md:text-[12px] text-[10px] text-gray-500" htmlFor="profileFor">
                            Create profile for <span>*</span>
                        </Label>
                        <Controller
                            name="profileFor"
                            control={control}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger>
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
                            {errors.profileFor && <p className="text-[12px] text-red-600" >{errors.profileFor.message}</p>}
                    </div>

                        {/* phone number */}

                        <StyledInputWrapper label="Phone Number" error={errors.phone?.message} required='Phone Number' >

                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <PhoneInput
                                        value={field.value}
                                        onChange={(value) => field.onChange(value || "")}
                                        placeholder="Enter a phone number"
                                        defaultCountry="PK"
                                        className="w-full min-w-full"
                                    />
                                )}
                            />

                        </StyledInputWrapper>

                        {/* terms */}
                        <div className="md:flex items-center justify-center hidden flex-col " >
                            <div className="flex items-center justify-center gap-2 ">
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
                                <Label htmlFor="terms">
                                Accept terms and conditions
                                </Label>
                        </div>
                        {errors.termsAccepted && (
                                <span className="text-[12px] text-red-600" >{errors.termsAccepted.message}</span>
                        )}
                    </div>


                </div>


                    {/* lefte secions */}
                    <div className="md:w-[50%] w-full md:p-6 p-4 flex flex-col justify-center md:gap-4 gap-2">


                        {/* bride groom name  */}
                        <StyledInputWrapper label="GroomName" error={errors.GroomName?.message} required='Bride / Groom Name' >

                            <Input
                                id="GroomName"
                                type="text"
                                placeholder="Bride / Groom Name *"
                                {...register("GroomName")}
                            />
                        </StyledInputWrapper>



                        {/* gender  */}
                        <div className="flex flex-col  justify-start">


                            <div className="border border-red-600 flex items-center justify-start gap-4" >
                                <Label className="flex md:text-[12px] text-[10px] text-gray-500" >Gender <span>*</span></Label>
                        <Controller

                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup onValueChange={field.onChange} value={field.value}  >
                                    <div className="flex">
                                        <div className="flex items-center justify-center" >

                                            <RadioGroupItem className="h-3 w-3" value="male" id="male" />
                                            <Label className="md:text-[12px] text-[10px] text-gray-500" htmlFor="male">Male</Label>
                                        </div>
                                        <div>

                                            <div className="flex items-center justify-center" >

                                                <RadioGroupItem className="w-3 h-3" value="female" id="female" />
                                                <Label className="md:text-[12px] text-[10px] text-gray-500" htmlFor="female">Female</Label>
                                            </div>
                                        </div>
                                    </div>
                                </RadioGroup>
                            )}
                                />
                            </div>
                            {errors.gender && <p className="text-[12px] text-red-600">{errors.gender.message}</p>}
                        </div>
                        {/* getstartedbtn */}

                    <Button type="submit">Get Started</Button>


                    </div>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfoForm;