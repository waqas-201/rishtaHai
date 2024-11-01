// schema/formSchema.ts
import { z } from "zod";

export const formSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    day: z
      .number()
      .int("Day must be an integer")
      .min(1, "Day must be at least 1")
      .max(31, "Day must be at most 31"),
    month: z
      .number()
      .int("Month must be an integer")
      .min(1, "Month must be at least 1")
      .max(12, "Month must be at most 12"),
    year: z
      .number()
      .int("Year must be an integer")
      .min(1900, "Year must be at least 1900")
      .max(new Date().getFullYear(), "Year cannot be in the future"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    city: z.enum([
      "Karachi",
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Rawalpindi",
      "Multan",
      "Hyderabad",
      "Gujranwala",
      "Peshawar",
      "Quetta",
    ]),
    profileFor: z.enum([
      "Myself",
      "MySon",
      "MyDaughter",
      "MyBrother",
      "MySister",
      "MyFriend",
      "MyRelative",
    ]),
    gender: z.enum(["Male", "Female"]),
    religion: z.enum([
      "Christianity",
      "Islam",
      "Hinduism",
      "Buddhism",
      "Sikhism",
    ]),
    community: z.enum(["CommunityA", "CommunityB", "CommunityC"]),
    country: z.enum(["USA", "Canada", "Pakistan", "India"]),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters"),
  })
  .refine(
    (data) => {
      const { day, month, year } = data;
      const date = new Date(year, month - 1, day); // month is 0-indexed in Date
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    },
    {
      message: "Invalid date",
      path: ["day", "month", "year"], // Attach the error to the date fields
    }
  );
