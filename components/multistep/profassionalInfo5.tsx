import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StyledInputWrapper from './formutils/styledwrapper';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { professionalSchema } from '@/schema/formSchema';
import { useWizard } from 'react-use-wizard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setCurrentStep } from '@/slices/stepCouterSlice';

type FormValues = z.infer<typeof professionalSchema>;

const ProfessionalInfo = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(professionalSchema),
    });

    const { nextStep, previousStep } = useWizard();
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

    const onSubmit = (data: FormValues) => {
        console.log(data);
        nextStep();
        handleNextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex md:gap-6 flex-col md:flex-row md:p-4">
                <StyledInputWrapper label="Community" required error={errors.community?.message}>
                    <Controller
                        name="community"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select community" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Sunni">Sunni</SelectItem>
                                    <SelectItem value="Shia">Shia</SelectItem>

                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>

                <StyledInputWrapper label="Caste" error={errors.caste?.message}>
                    <Controller
                        name="caste"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select caste" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Rajput">Rajput</SelectItem>
                                    <SelectItem value="Sheikh">Sheikh</SelectItem>
                                    <SelectItem value="Mughal">Mughal</SelectItem>
                                    <SelectItem value="Syed">Syed</SelectItem>
                                    <SelectItem value="Pathan">Pathan</SelectItem>
                                    <SelectItem value="Arain">Arain</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>
            </div>

            <div className='flex md:gap-6 flex-col md:flex-row md:p-4'>
                <StyledInputWrapper label="Religiousness" required error={errors.religiousness?.message}>
                    <Controller
                        name="religiousness"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select religiousness" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Very Religious">Very Religious</SelectItem>
                                    <SelectItem value="Religious">Religious</SelectItem>
                                    <SelectItem value="Moderate">Moderate</SelectItem>
                                    <SelectItem value="Not Religious">Not Religious</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>

                <StyledInputWrapper label="Perform Namaz" required error={errors.performNamaz?.message}>
                    <Controller
                        name="performNamaz"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Yes, five times daily">Yes, five times daily</SelectItem>
                                    <SelectItem value="Occasionally">Occasionally</SelectItem>
                                    <SelectItem value="Rarely">Rarely</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>
            </div>

            <div className='md:p-4'>
                <StyledInputWrapper label="Profile Description" required error={errors.profileDescription?.message}>
                    <Controller
                        name="profileDescription"
                        control={control}
                        render={({ field }) => (
                            <Textarea
                                {...field}
                                placeholder="Enter your profile description"
                                className="mt-1"
                            />
                        )}
                    />
                </StyledInputWrapper>
            </div>

            <div className="flex justify-center gap-6">
                <Button variant="outline" type="button" onClick={() => {
                    previousStep();
                    handlePreviousStep();
                }}>Previous</Button>
                <Button type="submit">Next</Button>
            </div>
        </form>
    );
};

export default ProfessionalInfo;