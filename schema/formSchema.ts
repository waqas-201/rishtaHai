import { z } from "zod";

const currentYear = new Date().getFullYear();
const minYear = currentYear - 75;
const maxYear = currentYear - 18;

 const familyStatusEnum = z.enum([
   "MIDDLE_CLASS",
   "UPPER_MIDDLE_CLASS",
   "UPPER_CLASS",
 ]);
 const maritalStatusEnum = z.enum(["UNMARRIED", "WIDOW"]);

export const formSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    day: z
      .number()
      .int("Day must be an integer")
      .min(1)
      .max(31)
      .refine((value) => value >= 1 && value <= 31, {
        message: "Month must be between 1 and 31",
      }),
    month: z
      .number()
      .int("Month must be a whole number")
      .refine((value) => value >= 1 && value <= 12, {
        message: "Month must be between 1 and 12",
      }),
    year: z
      .number()
      .int("Please enter a valid year.")
      .refine((year) => year >= minYear && year <= maxYear, {
        message: `Your birth year must be between ${minYear} and ${maxYear} to join.`,
      }),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(
        13,
        "Phone number must be at least 13 digits! including country code"
      ),
    city: z.string().min(1, "Please select a city"),
    state: z.string().min(1, "Please select a state"),
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
    maritalStatus: maritalStatusEnum,
    hasChildren: z.enum(["Yes", "No"]),
    livesWithYou: z.enum(["Yes", "No"]),
    height: z
      .string()
      .transform((val) => parseFloat(val)) // Convert string to number
      .refine(
        (val) => !isNaN(val) && val > 0 && val < 300,
        "Height must be a positive number and less than 300 cm"
      ),
    weight: z
      .string()
      .transform((val) => parseFloat(val)) // Convert string to number
      .refine(
        (val) => !isNaN(val) && val > 0 && val < 300,
        "Weight must be a positive number and less than 300 kg"
      ),
    qualification: z.string().trim().min(1, "Qualification is required"),
    profession: z.string().trim().min(1, "Profession is required"),
    earning: z.number().nonnegative("Earning must be a non-negative number"),
    familyStatus: familyStatusEnum,
    country: z.string().min(1, "Please select a country"),
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

