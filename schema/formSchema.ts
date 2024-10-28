import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const personalInfoSchema = z.object({
  profileFor: z.string().min(1, { message: "You must select a profile type." }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number." }),
  GroomName: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long." }),
  gender: z.enum(["male", "female"], { message: "You must select a gender." }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});
