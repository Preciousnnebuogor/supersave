"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";





const schema = z.object({
  amount: z.number(),
  purpose: z.string().min(3, { message: "must contain 3 to 10 words " }).max(10,  {message: "must contain 3 to 10 words "}),
  
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

type FormData = z.infer<typeof schema>


// type FormData = {
//   amount: number
//   purpose: string
//   duration: 
// }
export default function Deposit() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const submitData = (data: FormData) => {
    console.log("Form has been validated")
  }

  return (
    <div className={``}>
      <div className={`px-4 mt-10`}>
        <div
          className={`border-2 border-primary rounded-xl bg-primary w-[50%] px-5 py-6`}
        >
          <h1>Wallet Balance:</h1>
          <h1>$20</h1>
        </div>
        <div className={`flex flex-col items-center justify-center `}>
          <form onSubmit={handleSubmit(submitData)}>
            <div className={` mt-10 px-4 w-[80vw] pb-4 space-y-10`}>
              <input
                type="number"
                placeholder="Amount"
                {...register("amount", { valueAsNumber: true })}
                className={`border-2 border-primary px-2 py-2  text-black w-full`}
              />
              {errors.amount && (
                <span className={`text-red-700`}>{errors.amount.message}</span>
              )}

              <input
                type="text"
                placeholder="Purpose"
                {...register("purpose")}
                className={`border-2 border-primary px-2 py-2 w-full`}
              />
              {errors.purpose?.message && (
                <span className={`text-red-700`}>{errors.purpose.message}</span>
              )}

              <select
                id="duration"
                {...register("duration")}
                className={`border-2 border-primary px-2 py-2  w-full`}
              >
                <option value="duration">Select Duration</option>
                <option value="1week">1week</option>
                <option value="2weeks">2weeks</option>
                <option value="1month">1months</option>
                <option value="2months">2months</option>
                <option value="3months">3months</option>
                <option value="4months">4months</option>
                <option value="5months">5months</option>
                <option value="6months">6months</option>
                <option value="7months">7months</option>
                <option value="8months">8months</option>
                <option value="9months">9months</option>
                <option value="10months">10months</option>
                <option value="11months">11months</option>
                <option value="1year">1year</option>
              </select>
              {errors.duration?.message && (
                <span className={`text-red-700`}>{errors.duration.message}</span>
              )}

              <div
                className={`border-2 border-primary px-2 py-2 w-full space-x-2`}
              >
                <label>
                  <input
                   {...register("sholdLock")} 
                    type="checkbox"
                    placeholder="lock"
                    className={`mr-2`}
                  />
                  Locked
                </label>
              </div>
              {errors.sholdLock?.message && (
                <span className={`text-red-700`}>{errors.sholdLock.message}</span>
              )}
            </div>

            <div className={`mt-6  flex items-center justify-center`}>
              <button
                type="submit"
                className={`rounded-2xl text-center font-bold px-8 py-3  bg-primary border-2 border-primary`}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}