'use client'
import React from "react";
import { useWizard } from "react-use-wizard";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { Card, CardContent } from "../ui/card";
import { RootState } from "@/store";

const ReviewForm: React.FC = () => {
    const { previousStep } = useWizard();
    const { personalInfo, addressInfo } = useSelector((state: RootState) => state?.form);

    const handleSubmit = () => {
        // Implement the submission logic here
        console.log("Final Submission:", { personalInfo, addressInfo });
    };

    return (
        <Card>

            <CardContent>
                <p><strong>Name:</strong> {personalInfo.name}</p>
                <p><strong>City:</strong> {addressInfo.city}</p>
            </CardContent>
            <div className="flex gap-2">
                <Button type="button" onClick={previousStep}>Back</Button>
                <Button type="button" onClick={handleSubmit}>Submit</Button>
            </div>
        </Card>
    );
};

export default ReviewForm;
