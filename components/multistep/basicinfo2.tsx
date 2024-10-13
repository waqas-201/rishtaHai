import React from "react";
import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../../slices/stepCouterSlice";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import StyledInputWrapper from "./formutils/styledwrapper";
import { basicDetailsSchema } from "@/schema/formSchema";
import { RootState } from "@/store";



const BasicDetailsForm = () => {
    const { nextStep, previousStep } = useWizard();
    const dispatch = useDispatch();
    const currentStep = useSelector((state: RootState) => state.form.currentStep);

    const handleNextStep = () => {
        dispatch(setCurrentStep(currentStep + 1)); // Increment the step
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) { // Ensure you don't go below step 1
            dispatch(setCurrentStep(currentStep - 1)); // Decrement the step
        }
    };
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<z.infer<typeof basicDetailsSchema>>({
        // resolver: zodResolver(basicDetailsSchema),
    });

    const onSubmit = (data: z.infer<typeof basicDetailsSchema>) => {
        console.log("Form Submitted:", data); // Check captured data in console
        console.log(data); // Check captured data in console
        nextStep();
        handleNextStep()
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
                            <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: 100 }, (_, i) => {
                                const year = new Date().getFullYear() - i;
                                return (
                                    <SelectItem key={year} value={year.toString()}>
                                        {year}
                                    </SelectItem>
                                );
                            })}
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
                <Button variant='secondary' type="button" onClick={
                    () => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        previousStep()
                        handlePreviousStep()
                    }
                }>Back</Button>
                <Button type="submit">Next</Button>
            </div>
        </form >

    );
};

export default BasicDetailsForm;
