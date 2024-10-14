// pages/register.tsx
'use client'
import BasicDetailsForm from "@/components/multistep/basicinfo2";
import EducationProfessionForm from "@/components/multistep/education4";
import { ProgressTracker } from "@/components/multistep/formutils/progressTracker";
import PersonalInfo from "@/components/multistep/personalInfo3";
import ProfessionalInfo from "@/components/multistep/profassionalInfo5";
import ReviewForm from "@/components/multistep/reviewform";
import { Card, CardDescription } from "@/components/ui/card";
import React from "react";
import { Wizard } from "react-use-wizard";

const RegisterPage = () => {


    return (
        <div className="bg-pink-200 min-h-screen flex items-center flex-col justify-center  ">
            {/* Card centered using flexbox */}
            <h1 className="text-3xl font-bold text-center mb-6">
                Complete Your Registration
            </h1>
            <Card className=" md:w-full md:max-w-[80%] lg:max-w-[60%] w-[95%]    md:p-8 p-4 shadow-2xl  ">

                <CardDescription className="hidden md:block" >
                    <ProgressTracker />
                </CardDescription>



                <Wizard>
                    <BasicDetailsForm />
                    <PersonalInfo />
                    <EducationProfessionForm />
                    <ProfessionalInfo />
                    <ReviewForm />
                </Wizard>
            </Card>
        </div>
    );
};

export default RegisterPage;
