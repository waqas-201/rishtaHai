import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWizard } from "react-use-wizard";
import { Label } from "../ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import StyledInputWrapper from "./formutils/styledwrapper";
import { personalinfo } from "@/schema/formSchema";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCurrentStep } from "@/slices/stepCouterSlice";

// Define Zod schema
type FormData = z.infer<typeof personalinfo>;

const PersonalInfo: React.FC = () => {
    const { nextStep, previousStep } = useWizard();
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(personalinfo),
        defaultValues: {
            MaritalStatus: undefined,
            PhysicallyChallenged: undefined,
        },
    });
    const dispatch = useDispatch();
    const currentStep = useSelector((state: RootState) => state.form.currentStep);

    const handleNextStep = () => {
        dispatch(setCurrentStep(currentStep + 1));
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            dispatch(setCurrentStep(currentStep - 1));
        }
    };

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("Form Submitted:", data);
        handleNextStep();
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Height and Weight */}
            <div className="flex md:gap-6 flex-col md:flex-row md:p-4">
                {/* Height */}
                <StyledInputWrapper label="Height" required="Height" error={errors.Height?.message}>
                    <Controller
                        name="Height"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="150">150 cm</SelectItem>
                                    <SelectItem value="155">155 cm</SelectItem>
                                    <SelectItem value="160">160 cm</SelectItem>
                                    <SelectItem value="165">165 cm</SelectItem>
                                    <SelectItem value="170">170 cm</SelectItem>
                                    <SelectItem value="175">175 cm</SelectItem>
                                    <SelectItem value="180">180 cm</SelectItem>
                                    <SelectItem value="185">185 cm</SelectItem>
                                    <SelectItem value="190">190 cm</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>

                {/* Weight */}
                <StyledInputWrapper label="Weight" required="Weight" error={errors.Weight?.message}>
                    <Controller
                        name="Weight"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="50">50 kg</SelectItem>
                                    <SelectItem value="55">55 kg</SelectItem>
                                    <SelectItem value="60">60 kg</SelectItem>
                                    <SelectItem value="65">65 kg</SelectItem>
                                    <SelectItem value="70">70 kg</SelectItem>
                                    <SelectItem value="75">75 kg</SelectItem>
                                    <SelectItem value="80">80 kg</SelectItem>
                                    <SelectItem value="85">85 kg</SelectItem>
                                    <SelectItem value="90">90 kg</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>
            </div>

            {/* Marital Status */}
            <div className="flex flex-col justify-start items-start gap-1 md:p-4">
                <Label className="md:text-[12px] text-[10px] text-gray-500">Marital Status *</Label>
                <Controller
                    name="MaritalStatus"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex gap-2 flex-col"
                        >
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center gap-2">
                                    <RadioGroupItem value="Never Married" id="never-married" />
                                    <Label htmlFor="never-married" className="md:text-[12px] text-[10px] text-gray-500">Never Married</Label>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <RadioGroupItem value="Widowed/Widower" id="widowed" />
                                    <Label htmlFor="widowed" className="md:text-[12px] text-[10px] text-gray-500">Widowed/Widower</Label>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <RadioGroupItem value="Divorced" id="divorced" />
                                    <Label htmlFor="divorced" className="md:text-[12px] text-[10px] text-gray-500">Divorced</Label>
                                </div>
                            </div>
                        </RadioGroup>
                    )}
                />
                {errors.MaritalStatus && <span className="text-red-500 text-sm">{errors.MaritalStatus.message}</span>}
            </div>

            {/* Ethnic Group and Body Type */}
            <div className="flex md:gap-6 flex-col md:flex-row md:p-4">
                {/* Ethnic Group */}
                <StyledInputWrapper label="EthnicGroup" required="EthnicGroup" error={errors.EthnicGroup?.message}>
                    <Controller
                        name="EthnicGroup"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Asian">Asian</SelectItem>
                                    <SelectItem value="African">African</SelectItem>
                                    <SelectItem value="Caucasian">Caucasian</SelectItem>
                                    <SelectItem value="Hispanic">Hispanic</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>

                {/* Body Type */}
                <StyledInputWrapper label="BodyType" required="BodyType" error={errors.BodyType?.message}>
                    <Controller
                        name="BodyType"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Slim">Slim</SelectItem>
                                    <SelectItem value="Average">Average</SelectItem>
                                    <SelectItem value="Athletic">Athletic</SelectItem>
                                    <SelectItem value="Overweight">Overweight</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>
            </div>

            {/* Physically Challenged */}
            <div className="flex flex-col gap-1 md:p-4">
                <Label className="md:text-[12px] text-[10px] text-gray-800">Physically Challenged? *</Label>
                <Controller
                    name="PhysicallyChallenged"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex gap-2"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <RadioGroupItem value="Yes" id="physically-challenged-yes" />
                                <Label htmlFor="physically-challenged-yes" className="md:text-[12px] text-[10px] text-gray-500">Yes</Label>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <RadioGroupItem value="No" id="physically-challenged-no" />
                                <Label htmlFor="physically-challenged-no" className="md:text-[12px] text-[10px] text-gray-500">No</Label>
                            </div>
                        </RadioGroup>
                    )}
                />
                {errors.PhysicallyChallenged && <span className="text-red-500 text-sm">{errors.PhysicallyChallenged.message}</span>}
            </div>

            {/* Buttons */}
            <div className="flex w-full md:p-4 items-center justify-center gap-4">
                <Button variant="outline" type="button" onClick={() => {
                    handlePreviousStep();
                    previousStep();
                }}>Previous</Button>
                <Button variant="default" type="submit">Next</Button>
            </div>
        </form>
    );
};

export default PersonalInfo;