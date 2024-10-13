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

// basic info

export const basicDetailsSchema = z.object({
  Day: z.string().min(1, "Day is required"),
  Month: z.string().min(1, "Month is required"),
  Year: z.string().min(4, "Year is required"),
  Email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  Password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  Religion: z.string().min(1, "Religion is required"),
  Nationality: z.string().min(1, "Nationality is required"),
});

export const personalinfo = z.object({
  Height: z.string(),
  Weight: z.string(),
  MaritalStatus: z.string(),
  EthnicGroup: z.string(),
  BodyType: z.string(),
  PhysicallyChallenged: z.string(),
});

// edication

export const EducationSchema = z.object({
  highestEducation: z.string().min(1, "Highest education is required"),
  educationField: z.string().min(1, "Education field is required"),
  profession: z.string().min(1, "Profession is required"),
  professionType: z.string().min(1, "Profession type is required"),
  homeLocation: z.string().min(1, "Home location is required"),
  presentLocation: z.string().min(1, "Present location is required"),
});

export const professionalSchema = z.object({
  community: z.string().min(1, "Community is required"),
  caste: z.string().min(1, "Caste is required"),
  religiousness: z.string().min(1, "Religiousness is required"),
  performNamaz: z.string().min(1, "Perform Namaz is required"),
  profileDescription: z
    .string()
    .min(10, "Profile description must be at least 10 characters long"),
});
