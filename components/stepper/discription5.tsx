'use client'
import { Button } from "@/components/ui/button";
import { TypographySmall } from "../ui/typography/small";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { FormData } from "@/types/types";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle } from "lucide-react";
import { createUser } from "@/actions/createUser";

export function DescriptionAboutUser() {
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
            const response = await createUser(data);
            console.log("Response:", response);
        } else {
            console.log("Validation failed, description:", getValues('description'));
        }
    };

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
            <Button onClick={(e) => {
                e.preventDefault();
                submit();
            }} >Submit</Button>
        </div>
    );
}   