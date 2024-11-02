import { z } from "zod";

export const formSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    day: z.number().int("Day must be an integer").min(1).max(31),
    month: z.number().int("Month must be an integer").min(1).max(12),
    year: z
      .number()
      .int("Year must be an integer")
      .min(1900)
      .max(new Date().getFullYear()),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(
        13,
        "Phone number must be at least 13 digits! including country code"
      ),
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
      "Islam",
      "Christianity",
      "Hinduism",
      "Buddhism",
      "Sikhism",
    ]),
    community: z.enum([
      "UrduSpeaking",
      "Punjabi",
      "Sindhi",
      "Pashtun",
      "Baloch",
      "Muhajir",
      "Saraiki",
      "Hindko",
      "Brahui",
      "EnglishSpeaking",
    ]),
    country: z.enum(["USA", "Canada", "Pakistan", "India"]),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters"),
  })
  .refine(
    (data) => {
      const { day, month, year } = data;
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    },
    {
      message: "Invalid date",
      path: ["day", "month", "year"],
    }
  );
