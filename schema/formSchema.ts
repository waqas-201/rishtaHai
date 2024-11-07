// import { z } from "zod";

// const currentYear = new Date().getFullYear();
// const minYear = currentYear - 75;
// const maxYear = currentYear - 18;

// const familyStatusEnum = z.enum([
//   "MIDDLE_CLASS",
//   "UPPER_MIDDLE_CLASS",
//   "UPPER_CLASS",
// ]);
// const maritalStatusEnum = z.enum(["UNMARRIED", "WIDOW", "DIVORCED"]);

// export const formSchema = z
//   .object({
//     firstName: z.string().min(2, "First name must be at least 2 characters"),
//     lastName: z.string().min(2, "Last name must be at least 2 characters"),
//     day: z
//       .string() // Change to string for initial processing
//       .transform((val) => parseInt(val, 10)) // Transform to number
//       .refine((value) => Number.isInteger(value) && value >= 1 && value <= 31, {
//         message: "Day must be an integer between 1 and 31",
//       }),
//     month: z
//       .string() // Change to string for initial processing
//       .transform((val) => parseInt(val, 10)) // Transform to number
//       .refine((value) => Number.isInteger(value) && value >= 1 && value <= 12, {
//         message: "Month must be an integer between 1 and 12",
//       }),
//     year: z
//       .string() // Change to string for initial processing
//       .transform((val) => parseInt(val, 10)) // Transform to number
//       .refine((year) => year >= minYear && year <= maxYear, {
//         message: `Your birth year must be between ${minYear} and ${maxYear} to join.`,
//       }),
//     email: z.string().email("Please enter a valid email address"),
//     phone: z
//       .string()
//       .min(
//         11,
//         "Phone number must be at least 11 digits! including country code"
//       ),
//     city: z.string().min(1, "Please select a city"),
//     state: z.string().min(1, "Please select a state"),
//     profileFor: z.enum([
//       "Myself",
//       "MySon",
//       "MyDaughter",
//       "MyBrother",
//       "MySister",
//       "MyFriend",
//       "MyRelative",
//     ]),
//     gender: z.enum(["Male", "Female"]),
//     religion: z.string({ required_error: "Please select a religion" }),
//     community: z.enum([
//       "UrduSpeaking",
//       "Punjabi",
//       "Sindhi",
//       "Pashtun",
//       "Baloch",
//       "Muhajir",
//       "Saraiki",
//       "Hindko",
//       "Brahui",
//       "EnglishSpeaking",
//       "Kashmiri",
//       "Gilgiti",
//     ]),
//     maritalStatus: maritalStatusEnum,
//     hasChildren: z.enum(["Yes", "No"]),
//     livesWithYou: z.enum(["Yes", "No"]),
//     height: z
//       .string()
//       .transform((val) => parseFloat(val))
//       .refine(
//         (val) => !isNaN(val) && val > 0 && val < 300,
//         "Height must be a positive number"
//       ),
//     weight: z
//       .string()
//       .transform((val) => parseFloat(val))
//       .refine(
//         (val) => !isNaN(val) && val > 0 && val < 300,
//         "Weight must be a positive number and less than 300 kg"
//       ),
//     qualification: z.string().trim().min(1, "Qualification is required"),
//     profession: z.string().trim().min(1, "Profession is required"),
//     earning: z
//       .string()
//       .transform((val) => parseFloat(val))
//       .refine(
//         (val) => !isNaN(val) && val > 0,
//         "earning must be a positive number"
//       ),

//     familyStatus: familyStatusEnum,
//     country: z.string().min(1, "Please select a country"),
//     description: z
//       .string()
//       .min(20, "Description must be at least 20 characters"),
//   })
//   .refine(
//     (data) => {
//       const { day, month, year } = data;
//       const date = new Date(year, month - 1, day);
//       return (
//         date.getFullYear() === year &&
//         date.getMonth() === month - 1 &&
//         date.getDate() === day
//       );
//     },
//     {
//       message: "Invalid date",
//       path: ["day", "month", "year"],
//     }
//   );

import { z } from "zod";

const currentYear = new Date().getFullYear();
const minYear = currentYear - 75;
const maxYear = currentYear - 18;

// Enums
const familyStatusEnum = z.enum([
  "MIDDLE_CLASS",
  "UPPER_MIDDLE_CLASS",
  "UPPER_CLASS",
]);
const maritalStatusEnum = z.enum(["UNMARRIED", "WIDOW", "DIVORCED"]);
const profileForEnum = z.enum([
  "Myself",
  "MySon",
  "MyDaughter",
  "MyBrother",
  "MySister",
  "MyFriend",
  "MyRelative",
]);
const genderEnum = z.enum(["Male", "Female"]);
const yesNoEnum = z.enum(["Yes", "No"]);
const communityEnum = z.enum([
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
]);

export const formSchema = z
  .object({
    // Personal Information
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    // Date of Birth
    day: z.coerce
      .number({ invalid_type_error: "Day is required" })
      .int()
      .min(0)
      .max(31),
    month: z.coerce
      .number({ invalid_type_error: "Month is required" })
      .int()
      .min(0)
      .max(12),
    year: z.coerce
      .number({ invalid_type_error: "Year must is required" })
      .int()
      .min(minYear)
      .max(maxYear),

    // Contact Information
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .regex(
        /^\+?\d{11,}$/,
        "Phone number must be at least 11 digits including country code"
      ),

    // Location
    city: z.string().min(1, "Please select a city"),
    state: z.string().min(1, "Please select a state"),
    country: z.string().min(1, "Please select a country"),

    // Profile Details
    profileFor: profileForEnum,
    gender: genderEnum,
    religion: z.string().min(1, "Please select a religion"),
    community: communityEnum,
    maritalStatus: maritalStatusEnum,
    hasChildren: yesNoEnum,
    livesWithYou: yesNoEnum,

    // Physical Attributes
    height: z.coerce
      .number()
      .positive()
      .max(300, "Height must be positive number"),
    weight: z.coerce
      .number()
      .positive()
      .max(300, "Weight must be less than 300 kg"),

    // height: z.coerce.number().positive().refine((val) => val > 0 && val < 300, {
    //   message: "Height must be a positive",
    // }),
    // weight: z.coerce.number().refine((val) => val > 0 && val < 300, {
    //   message: "Weight must be a positive number and less than 300 kg",
    // }),

    // Professional Information
    qualification: z.string().trim().min(1, "Qualification is required"),
    profession: z.string().trim().min(1, "Profession is required"),
    earning: z.coerce.number().positive("Earning must be a positive number"),

    // Family & Other Details
    familyStatus: familyStatusEnum,
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
