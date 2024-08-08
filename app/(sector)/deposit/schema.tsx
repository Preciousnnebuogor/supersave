"use client"

import { ZodType, z } from "zod"

export const schema = z.object({
  amount: z.number(),
  purpose: z
    .string()
    .min(3, { message: "must contain 3 to 10 words " })
    .max(10, { message: "must contain 3 to 10 words " }),

  sholdLock: z.boolean().refine((val) => val === true, {
    message: "You must lock your funds",
  }),

  duration: z.enum(
    [
      "1week",
      "2weeks",
      "3weeks",
      "4weeks",
      "5weeks",
      "6weeks",
      "7weeks",
      "8weeks",
      "9weeks",
      "10weeks",
      "11weeks",
      "1year",
    ],
    {
      errorMap: () => ({ message: "Please select a valid duration" }),
    }
  ),
})

export type FormData = z.infer<typeof schema>

export default function durationTranformater(duration: string): number {
  if (duration === "1week") {
    return 1000
  } else if (duration === "2weeks")  {
    return  2000
  } else if (duration === "3weeks") {
    return 3000
  } else if (duration === "4weeks") {
    return 4000
  } else if (duration === "5weeks") {
    return 5000
  } else if (duration === "6weeks") {
    return 6000
  } else if (duration === "7weeks") {
    return 7000
  } else if (duration === "8weeks") {
    return 8000
  } else if (duration === "9weeks") {
    return 9000
  } else if (duration === "10weeks") {
    return 10000
  } else if (duration === "11weeks") {
    return 11000
  } else if (duration === "1year") {
    return 12000
  }

  return 100
}
