'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'; // Updated import
import { Button } from '../ui/button'; // Import your Shadcn Button component
import StyledInputWrapper from './formutils/styledwrapper';


const schema = z.object({
    highestEducation: z.string().min(1, "Highest education is required"),
    educationField: z.string().min(1, "Education field is required"),
    profession: z.string().min(1, "Profession is required"),
    professionType: z.string().min(1, "Profession type is required"),
    homeLocation: z.string().min(1, "Home location is required"),
    presentLocation: z.string().min(1, "Present location is required"),
});

type FormValues = z.infer<typeof schema>;

const EducationProfessionForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Highest Education */}
            <StyledInputWrapper label="Highest Education" error={errors.highestEducation?.message}>
                <Select {...register('highestEducation')}>
                    <SelectTrigger className="w-[180px]">
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
                    <SelectTrigger className="w-[180px]">
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

            {/* Profession */}
            <div className="">
                <StyledInputWrapper label="Profession" error={errors.profession?.message}>
                    <Select {...register('profession')}>
                        <SelectTrigger className="w-[180px]">
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
                        <SelectTrigger className="w-[180px]">
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
            <div className="bg-green-50 p-4 rounded-md space-y-4">
                <StyledInputWrapper label="Home Location*" error={errors.homeLocation?.message}>
                    <Select {...register('homeLocation')}>
                        <SelectTrigger className="w-[180px]">
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
                        <SelectTrigger className="w-[180px]">
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

            <div className="flex justify-between mt-6">
                <Button type="button" variant="secondary">Previous</Button>
                <Button type="submit" variant="default">Next</Button>
            </div>
        </form>
    );
};

export default EducationProfessionForm;
