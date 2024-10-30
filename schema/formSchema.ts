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

export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
});