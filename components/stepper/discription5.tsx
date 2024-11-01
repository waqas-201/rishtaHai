'use client'
import { Button } from "@/components/ui/button";
import { TypographySmall } from "../ui/typography/small";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { FormData, StepComponentProps } from "@/types/types";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, ArrowLeft } from "lucide-react";
import useCreateUser from "@/hooks/useCreateUser";
import { useEffect, useState } from "react";

export function DescriptionAboutUser({ previousStep, nextStep }: StepComponentProps) {

    const { mutate, isPending, data } = useCreateUser();
    const [successData, setSuccessData] = useState<boolean>(false); 
    const {
        register,
        formState: { errors },
        getValues,
        trigger,
    } = useFormContext<FormData>();

    const submit = async () => {
        const isValid = await trigger(['description']);
        console.log("Is Valid:", isValid);
        console.log("Form Errors:", errors);

        if (isValid) {
            const data = getValues();
            console.log("All Form Data:", data);
            mutate(data);
        } else {
            console.log("Validation failed, description:", getValues('description'));
        }
    };

    useEffect(() => {
        console.log("Data:", data);
        if (data?.success) {
            setSuccessData(true);
        }

        return () => {
            setSuccessData(false);
        };
    }, [data]);


    useEffect(() => {
        if (successData && nextStep) {

            nextStep();
        }
    }, [successData, nextStep]);

    return (
        <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-4">
                <TypographySmall className="ml-2">Tell us more about him/her</TypographySmall>
                <Textarea
                    {...register('description')}
                    placeholder="Type your message here."
                />
                {errors.description && (
                    <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.description.message}</AlertDescription>
                    </Alert>
                )}
            </div>
            {


                <div className="flex justify-between mt-4 animate-slide-in ">

                    <Button className="flex items-center gap-2 animate-slide-in" variant="outline" onClick={previousStep}>
                        <ArrowLeft className="w-4 h-4" /> Previous
                    </Button>
                    {isPending ?
                        <Button disabled={true} className=" flex justify-center gap-2 animate-slide-in "> Submitting...</Button>
                        :
            <Button onClick={(e) => {
                e.preventDefault();
                submit();
            }} >Submit</Button>
                    }
                </div>}
        </div>
    );
}   