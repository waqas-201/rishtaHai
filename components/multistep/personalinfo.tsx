import React from "react";
import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useDispatch } from "react-redux";
import { setPersonalInfo, setCurrentStep } from "../../slices/formSlice";

const personalInfoSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

const PersonalInfoForm: React.FC = () => {
    const { nextStep } = useWizard();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoFormData>({
        resolver: zodResolver(personalInfoSchema),
    });

    const onSubmit = (data: PersonalInfoFormData) => {
        dispatch(setPersonalInfo(data));
        dispatch(setCurrentStep(1));
        nextStep();
    };

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>

                <CardContent>
                    <Input
                        {...register("name")}
                        placeholder="Name"
                    />
                    {errors.name && <span className="text-sm text-red-700">{errors.name.message}</span>}
                </CardContent>
                <Button type="submit">Next</Button>
            </form>
        </Card>
    );
};

export default PersonalInfoForm;
