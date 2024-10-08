import React from "react";
import { useForm } from "react-hook-form";
import { useWizard } from "react-use-wizard";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setAddressInfo, setCurrentStep } from "../../slices/formSlice";
import { Card, CardContent } from "../ui/card";

const addressInfoSchema = z.object({
    city: z.string().min(1, "City is required"),
});

type AddressFormData = z.infer<typeof addressInfoSchema>;

const AddressForm: React.FC = () => {
    const { nextStep, previousStep } = useWizard();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<AddressFormData>({
        resolver: zodResolver(addressInfoSchema),
    });

    const onSubmit = (data: AddressFormData) => {
        dispatch(setAddressInfo(data));
        dispatch(setCurrentStep(2));
        nextStep();
    };

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>

                <CardContent>
                    <Input
                        {...register("city")}
                        placeholder="City"
                    // error={!!errors.city}
                    />
                    {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                </CardContent>
                <div className="flex gap-2">
                    <Button type="button" onClick={previousStep}>Back</Button>
                    <Button type="submit">Next</Button>
                </div>
            </form>
        </Card>
    );
};

export default AddressForm;
