// actions/createUser.ts
"use server";

import { z } from "zod";
import { db } from "@/prismaClient";

const InfoSchema = z.object({
  profileFor: z.string().min(1, { message: "You must select a profile type." }),
  phone: z.string(),
  GroomName: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long." }),
  gender: z.enum(["male", "female"], { message: "You must select a gender." }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export async function createUser(data: z.infer<typeof InfoSchema>) {
  try {
    const validatedData = InfoSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        success: false,
        error: {
          message: validatedData.error.message,
          cause: validatedData.error.cause,
        },
      };
    }

    const userExists = await db.user.findFirst({
      where: { phone: validatedData.data.phone },
    });

    if (userExists) {
      return {
        success: false,
        error: {
          message: "Phone number already exists.",
          cause: "user already created",
        },
      };
    }

    const user = await db.user.create({
      data: {
        phone: validatedData.data.phone,
        profileFor: validatedData.data.profileFor,
        gender: validatedData.data.gender,
        GroomName: validatedData.data.GroomName,
        termsAccepted: validatedData.data.termsAccepted,
      },
    });

    return { success: true, error: null, data: user };
  } catch (error) {
    return {
      success: false,
      error: {
        message: "Failed to create user",
        cause: error,
      },
    };
  }
}
