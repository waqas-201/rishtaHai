import { z } from "zod";

const currentYear = new Date().getFullYear();
const minYear = currentYear - 75;
const maxYear = currentYear - 18;

const familyStatusEnum = z.enum([
  "MIDDLE_CLASS",
  "UPPER_MIDDLE_CLASS",
  "UPPER_CLASS",
]);
const maritalStatusEnum = z.enum(["UNMARRIED", "WIDOW", "DIVORCED"]);

export const formSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    day: z
      .string() // Change to string for initial processing
      .transform((val) => parseInt(val, 10)) // Transform to number
      .refine((value) => Number.isInteger(value) && value >= 1 && value <= 31, {
        message: "Day must be an integer between 1 and 31",
      }),
    month: z
      .string() // Change to string for initial processing
      .transform((val) => parseInt(val, 10)) // Transform to number
      .refine((value) => Number.isInteger(value) && value >= 1 && value <= 12, {
        message: "Month must be an integer between 1 and 12",
      }),
    year: z
      .string() // Change to string for initial processing
      .transform((val) => parseInt(val, 10)) // Transform to number
      .refine((year) => year >= minYear && year <= maxYear, {
        message: `Your birth year must be between ${minYear} and ${maxYear} to join.`,
      }),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(
        11,
        "Phone number must be at least 11 digits! including country code"
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
    religion: z.string({ required_error: "Please select a religion" }),
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
      "Kashmiri",
      "Gilgiti",
    ]),
    maritalStatus: maritalStatusEnum,
    hasChildren: z.enum(["Yes", "No"]),
    livesWithYou: z.enum(["Yes", "No"]),
    height: z
      .string()
      .transform((val) => parseFloat(val))
      .refine(
        (val) => !isNaN(val) && val > 0 && val < 300,
        "Height must be a positive number"
      ),
    weight: z
      .string()
      .transform((val) => parseFloat(val))
      .refine(
        (val) => !isNaN(val) && val > 0 && val < 300,
        "Weight must be a positive number and less than 300 kg"
      ),
    qualification: z.string().trim().min(1, "Qualification is required"),
    profession: z.string().trim().min(1, "Profession is required"),
    earning: z
      .string()
      .transform((val) => parseFloat(val))
      .refine(
        (val) => !isNaN(val) && val > 0,
        "earning must be a positive number"
      ),

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
