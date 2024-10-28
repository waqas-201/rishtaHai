import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "@/schema/formSchema";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { PhoneInput } from "./ui/phoneInput";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";
import StyledInputWrapper from "./styledWrapper";
import { toast } from "sonner";





type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

const UserForm = () => {




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

        toast.success("Success , we are going to contact you very soon! ")
    };


    return (
        <>



            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap   p-4">
                    {/* right section */}
                    <div className="md:w-[50%] w-full md:p-6 py-4 flex flex-col items-start justify-center gap-6">
                        {/* profile input */}
                        <div className="flex items-start flex-col gap-1 w-full">
                            <Label className="md:text-[12px] text-[10px] text-gray-500" htmlFor="profileFor">
                                For <span>*</span>
                            </Label>
                            <Controller
                                name="profileFor"
                                control={control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent className="w-full">
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
                            {errors.profileFor && <p className="text-[12px] text-red-600">{errors.profileFor.message}</p>}
                        </div>

                        {/* phone number */}
                        <StyledInputWrapper label="Phone Number" error={errors.phone?.message} required="Phone Number">
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <PhoneInput
                                        value={field.value}
                                        onChange={(value) => field.onChange(value || "")}
                                        placeholder="Enter a phone number"
                                        defaultCountry="PK"
                                        className="w-full "
                                    />
                                )}
                            />
                        </StyledInputWrapper>


                        {/* terms for desktop */}
                        <div className="md:flex items-center justify-center hidden flex-col">
                            <div className="flex items-center justify-center gap-2">
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
                                <Label htmlFor="terms">Accept terms and conditions</Label>
                            </div>
                            {errors.termsAccepted && <span className="md:text-[12px] text-[8px] text-red-600">{errors.termsAccepted.message}</span>}
                        </div>
                    </div>

                    {/* left section */}
                    <div className="md:w-[50%] w-full md:p-6 py-4 flex flex-col items-start justify-center   gap-6 ">
                        {/* bride groom name */}
                        <StyledInputWrapper label="GroomName" error={errors.GroomName?.message} required="Bride / Groom Name">
                            <Input
                                id="GroomName"
                                type="text"
                                placeholder="Bride / Groom Name *"
                                {...register("GroomName")}

                            />
                        </StyledInputWrapper>

                        {/* gender */}
                        <div className="flex flex-col justify-center items-start grow w-full">
                            <div className="flex items-start justify-start gap-4 w-full">
                                <Label className="flex md:text-[12px] text-[10px] text-gray-500">
                                    Gender <span>*</span>
                                </Label>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <RadioGroup onValueChange={field.onChange} value={field.value} className="w-full">
                                            <div className="flex gap-4">
                                                <div className="flex items-center justify-start gap-1 ">
                                                    <RadioGroupItem className="h-3 w-3 " value="male" id="male" />
                                                    <Label className="md:text-[12px] text-[10px] text-gray-500" htmlFor="male">Male</Label>
                                                </div>

                                                <div className="flex items-center justify-start gap-1">
                                                    <RadioGroupItem className="h-3 w-3" value="female" id="female" />
                                                    <Label className="md:text-[12px] text-[10px] text-gray-500" htmlFor="female">Female</Label>
                                                </div>
                                            </div>
                                        </RadioGroup>
                                    )}
                                />
                            </div>
                            {errors.gender && <p className="text-[12px] text-red-600">{errors.gender.message}</p>}
                        </div>

                        {/* terms for mobile */}
                        <div className="flex items-center justify-center md:hidden flex-col">
                            <div className="flex items-center justify-center gap-2">
                                <Controller
                                    name="termsAccepted"
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            id="terms"
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked)}
                                            className=" w-3 h-3"
                                        />
                                    )}
                                />
                                <Label htmlFor="terms">Accept terms and conditions</Label>
                            </div>
                            {errors.termsAccepted && <span className="md:text-[12px]  text-[8px] text-red-600">{errors.termsAccepted.message}</span>}
                        </div>

                        {/* Get Started Button */}
                        <Button className="w-full" type="submit">Inquire Now</Button>
                    </div>
                </div>
            </form>
        </>


    );
};

export default UserForm;