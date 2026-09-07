"use server";

import type { RegistrationData } from "./types";

export async function submitRegistration(
  data: RegistrationData
): Promise<{ success: boolean; message: string }> {
  try {
    // Add timestamp
    const registration = {
      ...data,
      submittedAt: new Date().toISOString(),
    };

    // Log registration (in production, this would write to a database)
    console.log("[IRONFORGE] New Registration:", registration);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message: "Registration successful. Welcome to IRONFORGE.",
    };
  } catch (error) {
    console.error("[IRONFORGE] Registration error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
