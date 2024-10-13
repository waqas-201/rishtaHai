'use client'
import React from "react";
import { useWizard } from "react-use-wizard";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";


const ReviewForm: React.FC = () => {
    const { previousStep } = useWizard();


    const handleSubmit = () => {
        // Implement the submission logic here

    };

    return (
        <Card>

            data will be here 
            <div className="flex gap-2">
                <Button type="button" onClick={previousStep}>Back</Button>
                <Button type="button" onClick={handleSubmit}>Submit</Button>
            </div>
        </Card>
    );
};

export default ReviewForm;
