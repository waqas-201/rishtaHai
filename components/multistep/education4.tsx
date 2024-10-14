'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import StyledInputWrapper from './formutils/styledwrapper';
import { EducationSchema } from '@/schema/formSchema';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '@/slices/stepCouterSlice';
import { RootState } from '@/store';
import { useWizard } from 'react-use-wizard';

type FormValues = z.infer<typeof EducationSchema>;

const EducationProfessionForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(EducationSchema),
        defaultValues: {
            highestEducation: '',
            educationField: '',
            profession: '',
            professionType: '',
            homeLocation: '',
            presentLocation: '',
        }
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className='flex md:gap-6 flex-col md:flex-row md:p-4'>
                <StyledInputWrapper label="Highest Education" error={errors.highestEducation?.message}>
                    <Controller
                        name="highestEducation"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select highest education" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Doctorate">Doctorate</SelectItem>
                                    <SelectItem value="Masters">Masters</SelectItem>
                                    <SelectItem value="Bachelors">Bachelors</SelectItem>
                                    <SelectItem value="High School">High School</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>

                <StyledInputWrapper label="Education Field" error={errors.educationField?.message}>
                    <Controller
                        name="educationField"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select education field" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Science">Science</SelectItem>
                                    <SelectItem value="Engineering">Engineering</SelectItem>
                                    <SelectItem value="Arts">Arts</SelectItem>
                                    <SelectItem value="Commerce">Commerce</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>
            </div>

            <div className="flex gap-6 flex-col md:flex-row md:p-4">
                <StyledInputWrapper label="Profession" error={errors.profession?.message}>
                    <Controller
                        name="profession"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select profession" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Student">Student</SelectItem>
                                    <SelectItem value="Engineer">Engineer</SelectItem>
                                    <SelectItem value="Doctor">Doctor</SelectItem>
                                    <SelectItem value="Teacher">Teacher</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>

                <StyledInputWrapper label="Profession Type" error={errors.professionType?.message}>
                    <Controller
                        name="professionType"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select profession type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Full Time">Full Time</SelectItem>
                                    <SelectItem value="Part Time">Part Time</SelectItem>
                                    <SelectItem value="Freelancer">Freelancer</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>
            </div>

            <div className="flex gap-6 flex-col md:flex-row md:p-4">
                <StyledInputWrapper label="Home Location*" error={errors.homeLocation?.message}>
                    <Controller
                        name="homeLocation"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select home location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Aland">Aland</SelectItem>
                                    <SelectItem value="California">California</SelectItem>
                                    <SelectItem value="New York">New York</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>

                <StyledInputWrapper label="Present Location*" error={errors.presentLocation?.message}>
                    <Controller
                        name="presentLocation"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select present location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Barbados">Barbados</SelectItem>
                                    <SelectItem value="Florida">Florida</SelectItem>
                                    <SelectItem value="Texas">Texas</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </StyledInputWrapper>
            </div>

            <div className="flex justify-center gap-6 md:p-4">
                <Button type="button" variant="secondary" onClick={() => {
                    previousStep();
                    handlePreviousStep();
                }}>Previous</Button>
                <Button type="submit" variant="default">Next</Button>
            </div>
        </form>
    );
};

export default EducationProfessionForm;