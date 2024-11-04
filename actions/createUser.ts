// actions/createUser.ts
"use server";

import { z } from "zod";
import { db } from "@/prismaClient";
import { formSchema } from "@/schema/formSchema";

export async function createUser(data: z.infer<typeof formSchema>) {
 
  console.log(typeof data.city);

  try {
    const validatedData = formSchema.safeParse(data);
    console.log(validatedData);

    // If validation fails, return error response
    if (!validatedData.success) {
      return {
        success: false,
        error: {
          message: validatedData.error.message,
          cause: validatedData.error.errors, // Changed to .errors to provide more detailed feedback
        },
      };
    }

    // Check if the phone number already exists
    const phoneExists = await db.user.findFirst({
      where: { phone: validatedData.data.phone },
    });
    if (phoneExists) {
      return {
        success: false,
        error: {
          message: "This phone number is already registered.",
          cause: "user already created",
        },
      };
    }

    // Check if the email already exists
    const emailExists = await db.user.findFirst({
      where: { email: validatedData.data.email },
    });
    if (emailExists) {
      return {
        success: false,
        error: {
          message: "This email is already registered.",
          cause: "user already created",
        },
      };
    }

    // Create user in the database with properly mapped data
    const user = await db.user.create({
      data: {
        ...validatedData.data,
        community: validatedData.data.community, // Ensure this is of type Community
        city: validatedData.data.city,
      },
    });

    return { success: true, error: null, data: user }; // Return created user data
  } catch (error: unknown) {
    console.error(error);

    return {
      success: false,
      error: {
        message: "Failed to create user",
        cause: "something went wrong",
      },
    };
  }
}
