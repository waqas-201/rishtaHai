import React from "react";
import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../slices/formSlice";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import StyledInputWrapper from "./formutils/styledwrapper";

const basicDetailsSchema = z.object({
    Day: z.string().min(1, "Day is required"),
    Month: z.string().min(1, "Month is required"),
    Year: z.string().min(4, "Year is required"),
    Email: z.string().email("Invalid email address").nonempty("Email is required"),
    Password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
    Religion: z.string().min(1, "Religion is required"),
    Nationality: z.string().min(1, "Nationality is required"),
});

const BasicDetailsForm: React.FC = () => {
    const { nextStep, previousStep } = useWizard();
    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<z.infer<typeof basicDetailsSchema>>({
        resolver: zodResolver(basicDetailsSchema),
    });

    const onSubmit = (data: z.infer<typeof basicDetailsSchema>) => {
        console.log("Form Submitted:", data); // Check captured data in console
        console.log(data); // Check captured data in console
        dispatch(setCurrentStep(2));
        nextStep();
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="" >

            {/* brith day  section 1  */}
            <div className="w-full md:p-6 py-4 flex  items-center justify-center gap-6"   >
                {/* Day */}
                <StyledInputWrapper label="Day" required='Day' error={errors.Day?.message} >

                    <Select onValueChange={(value) => setValue("Day", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Day" />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: 31 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                    {i + 1}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                </StyledInputWrapper>
                {/* month  */}
                <StyledInputWrapper label="Month" required='Month' error={errors.Month?.message} >

                    <Select onValueChange={(value) => setValue("Month", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Day" />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: 31 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                    {i + 1}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                </StyledInputWrapper>
                {/* year  */}
                <StyledInputWrapper label="Year" required='Year' error={errors.Year?.message} >

                    <Select onValueChange={(value) => setValue("Year", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Day" />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: 31 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                    {i + 1}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                </StyledInputWrapper>
            </div>


            {/* Religion & nation section   */}
            <div className="flex w-full md:p-6 py-4  items-center    justify-center gap-6" >

                {/* religion */}
                <StyledInputWrapper label="Religion" required='Religion' error={errors.Religion?.message} >
                    <Select onValueChange={(value) => setValue("Religion", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Religion" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Hindu">Hindu</SelectItem>
                            <SelectItem value="Muslim">Muslim</SelectItem>
                            <SelectItem value="Christian">Christian</SelectItem>
                            <SelectItem value="Sikh">Sikh</SelectItem>
                            {/* Add more religions as needed */}
                        </SelectContent>
                    </Select>
                </StyledInputWrapper>



                {/* Nationality  */}


                <StyledInputWrapper label="Nationality" required='Nationality' error={errors.Nationality?.message} >
                    <Select onValueChange={(value) => setValue("Nationality", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Nationality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="American">American</SelectItem>
                            <SelectItem value="Indian">Indian</SelectItem>
                            <SelectItem value="Canadian">Canadian</SelectItem>
                            {/* Add more nationalities as needed */}
                        </SelectContent>
                    </Select>
                </StyledInputWrapper>


            </div>



            {/* criditioals  section 3  */}
            <div className="flex w-full md:p-6 py-4  items-center justify-center gap-6">
                {/* Email */}

                <StyledInputWrapper label="Email" error={errors.Email?.message} required="Email" >
                    <Input placeholder="Your Email " type="email" {...register("Email")} />
                </StyledInputWrapper>

                {/* Password */}
                <StyledInputWrapper label="password" error={errors.Password?.message} required='password' >
                    <Input type="password" {...register("Password")} />
                </StyledInputWrapper>
            </div>

            <div className="flex w-full md:p-6 py-4  items-center justify-center gap-6" >
                <Button variant='secondary' type="button" onClick={previousStep}>Back</Button>
                <Button type="submit">Next</Button>
            </div>
        </form >

    );
};

export default BasicDetailsForm;
