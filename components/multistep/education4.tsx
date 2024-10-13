'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'; // Updated import
import { Button } from '../ui/button'; // Import your Shadcn Button component
import StyledInputWrapper from './formutils/styledwrapper';
import { EducationSchema } from '@/schema/formSchema';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '@/slices/stepCouterSlice';
import { RootState } from '@/store';
import { useWizard } from 'react-use-wizard';



type FormValues = z.infer<typeof EducationSchema>;

const EducationProfessionForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        // resolver: zodResolver(EducationSchema),
    });
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
    const onSubmit = (data: FormValues) => {
        console.log(data);
        nextStep()
        handleNextStep()
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Education  */}
            <div className='flex' >


            {/* Highest Education */}
            <StyledInputWrapper label="Highest Education" error={errors.highestEducation?.message}>
                <Select {...register('highestEducation')}>
                        <SelectTrigger className="">
                        <SelectValue placeholder="Select highest education" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Doctorate">Doctorate</SelectItem>
                        <SelectItem value="Masters">Masters</SelectItem>
                        <SelectItem value="Bachelors">Bachelors</SelectItem>
                        <SelectItem value="High School">High School</SelectItem>
                    </SelectContent>
                </Select>
            </StyledInputWrapper>

            {/* Education Field */}
            <StyledInputWrapper label="Education Field" error={errors.educationField?.message}>
                <Select {...register('educationField')}>
                        <SelectTrigger className="">
                        <SelectValue placeholder="Select education field" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Arts">Arts</SelectItem>
                        <SelectItem value="Commerce">Commerce</SelectItem>
                    </SelectContent>
                </Select>
            </StyledInputWrapper>
            </div>



            {/* Profession */}
            <div className="flex">
                <StyledInputWrapper label="Profession" error={errors.profession?.message}>
                    <Select {...register('profession')}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select profession" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Student">Student</SelectItem>
                            <SelectItem value="Engineer">Engineer</SelectItem>
                            <SelectItem value="Doctor">Doctor</SelectItem>
                            <SelectItem value="Teacher">Teacher</SelectItem>
                        </SelectContent>
                    </Select>
                </StyledInputWrapper>

                {/* Profession Type */}
                <StyledInputWrapper label="Profession Type" error={errors.professionType?.message}>
                    <Select {...register('professionType')}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select profession type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Full Time">Full Time</SelectItem>
                            <SelectItem value="Part Time">Part Time</SelectItem>
                            <SelectItem value="Freelancer">Freelancer</SelectItem>
                        </SelectContent>
                    </Select>
                </StyledInputWrapper>
            </div>



            {/* Home Location */}
            <div className="flex">
                <StyledInputWrapper label="Home Location*" error={errors.homeLocation?.message}>
                    <Select {...register('homeLocation')}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select home location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Aland">Aland</SelectItem>
                            <SelectItem value="California">California</SelectItem>
                            <SelectItem value="New York">New York</SelectItem>
                        </SelectContent>
                    </Select>
                </StyledInputWrapper>

                {/* Present Location */}
                <StyledInputWrapper label="Present Location*" error={errors.presentLocation?.message}>
                    <Select {...register('presentLocation')}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select present location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Barbados">Barbados</SelectItem>
                            <SelectItem value="Florida">Florida</SelectItem>
                            <SelectItem value="Texas">Texas</SelectItem>
                        </SelectContent>
                    </Select>
                </StyledInputWrapper>
            </div>

            <div className="flex justify-center gap-6">
                <Button type="button" variant="secondary" onClick={() => {
                    previousStep()
                    handlePreviousStep()
                }} >Previous</Button>
                <Button type="submit" variant="default">Next</Button>
            </div>
        </form>
    );
};

export default EducationProfessionForm;
