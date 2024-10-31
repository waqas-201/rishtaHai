import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  profileFor: z.enum([
    "Myself",
    "My Son",
    "My Daughter",
    "My Brother",
    "My Sister",
    "My Friend",
    "My Relative",
  ]),
  gender: z.enum(["Male", "Female"]),
});
