/* eslint-disable @typescript-eslint/no-unused-vars */
// actions/createUser.ts
"use server";

import { z } from "zod";
import { db } from "@/prismaClient";
import { formSchema } from "@/schema/formSchema";

export async function createUser(data: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.safeParse(data);
    console.log(validatedData);

    if (!validatedData.success) {
      return {
        success: false,
        error: {
          message: validatedData.error.message,
          cause: validatedData.error.cause,
        },
      };
    }

    const PhoneExists = await db.user.findFirst({
      where: { phone: validatedData.data.phone },
    });
    if (PhoneExists) {
      return {
        success: false,
        error: {
          message: " This phone number is already registered.",
          cause: "user already created",
        },
      };
    }

    const EmailExists = await db.user.findFirst({
      where: { email: validatedData.data.email },
    });
    if (EmailExists) {
      return {
        success: false,
        error: {
          message: "This email is  already registered.",
          cause: "user already created",
        },
      };
    }

    console.log(validatedData.data);
    const user = await db.user.create({
      data: validatedData.data,
    });

    return { success: true, error: null, data: {} }; // Spread operator to ensure it's a plain object
  } catch (error: unknown) {
    console.log(error);

    return {
      success: false,
      error: {
        message: "Failed to create user",
        cause: "something went wrong",
      },
    };
  }
}
