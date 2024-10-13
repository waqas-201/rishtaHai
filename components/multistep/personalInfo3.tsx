import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useWizard } from "react-use-wizard";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import StyledInputWrapper from "./formutils/styledwrapper";

// Define Zod schema
const schema = z.object({
    Height: z.string(),
    Weight: z.string(),
    MaritalStatus: z.string(),
    EthnicGroup: z.string(),
    BodyType: z.string(),
    PhysicallyChallenged: z.string()
});

type FormData = z.infer<typeof schema>;

const PersonalInfo: React.FC = () => {
    const { nextStep, previousStep } = useWizard();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("Form Submitted:", data);
        nextStep();
    };

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent>
                    {/* Height */}


                    <StyledInputWrapper label="Height" required='Height' error={errors.Height?.message}  >

                        <Select {...register("Height")}>
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
                    </StyledInputWrapper>


                    {/* Weight */}

                    <StyledInputWrapper label="weight" required='weight' error={errors.Weight?.message} >

                        <Select {...register("Weight")}>
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
                    </StyledInputWrapper>



                    {/* Marital Status */}
                    <div className="flex   flex-col justify-start items-start gap-4">
                        <Label>Marital Status *</Label>
                        <RadioGroup {...register("MaritalStatus")}>
                            <div className="flex gap-2 " >
                                <div>
                                    <RadioGroupItem value="Never Married" />
                                    <Label>Never Married</Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="Widowed/Widower" />
                                    <Label>Widowed/Widower</Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="Divorced" />
                                    <Label>Divorced</Label>
                                </div>
                            </div>
                            <div className="flex gap-2" >
                                <div>
                                    <RadioGroupItem value="Awaiting Divorce" />
                                    <Label>Awaiting Divorce</Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="Nikah Divorce" />
                                    <Label>Nikah Divorce</Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="Married" />
                                    <Label>Married</Label>
                                </div>

                            </div>

                        </RadioGroup>
                        {errors.MaritalStatus && <span>{errors.MaritalStatus.message}</span>}
                    </div>

                    {/* Ethnic Group */}


                    <StyledInputWrapper label="EthnicGroup" required='EthnicGroup' error={errors.EthnicGroup?.message}>

                        <Select {...register("EthnicGroup")}>
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
                    </StyledInputWrapper>




                    {/* Body Type */}

                    <StyledInputWrapper label="BodyType" required='BodyType' error={errors.BodyType?.message} >

                        <Select {...register("BodyType")}>
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

                    </StyledInputWrapper>



                    {/* Physically Challenged */}
                    <div>
                        <Label>Physically Challenged ? *</Label>
                        <RadioGroup {...register("PhysicallyChallenged")}>
                            <div>
                                <RadioGroupItem value="Yes" />
                                <Label>Yes</Label>
                            </div>
                            <div>
                                <RadioGroupItem value="No" />
                                <Label>No</Label>
                            </div>
                        </RadioGroup>
                        {errors.PhysicallyChallenged && <span>{errors.PhysicallyChallenged.message}</span>}
                    </div>
                </CardContent>

                <div className="flex w-full md:p-6 py-4  items-center justify-center gap-6" >
                    <Button variant='secondary' type="button" onClick={previousStep}>Previous</Button>
                    <Button type="submit">Next</Button>
                </div>
            </form>
        </Card>
    );
};

export default PersonalInfo;
