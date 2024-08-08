"use client";

import { useState } from "react";
import { SuperSaveContract } from "@/Contract";
import { useAccount, useReadContract } from "wagmi";





export default function People() {
  const [valid, setValid] = useState(false)

  const account = useAccount()

  const result = useReadContract({
    abi: SuperSaveContract.abi,
    address: SuperSaveContract.address as `0x${string}`,
    functionName: "getAllDeposits",
    args: [
      // "0xd2135CfB216b74109775236E36d4b433F1DF507B",
      account.address
    ],
  })

  if (result.data) {
    console.log("result", result.data)
    return <div>Loading...</div>
  }

  return (
    <div className={`px-10`}>
      <div className={`mt-20`}>
        <h1
          className={`text-primary font-bold text-3xl flex items-center justify-center`}
        >
          Withdrawal
        </h1>
      </div>
      <div className={`mt-8`}>
        <div className={`flex items-start justify-between`}>
          <p>Wallet Address:</p>
          <p>888888888888</p>
        </div>
        <div className={`mt-2 flex items-start justify-between`}>
          <p>Total Savings:</p>
          <p>$100</p>
        </div>

        <div className={`flex items-center justify-center`}>
          <div
            className={`border-2 border-primary rounded mt-10 px-4 w-[80vw] pt-4 pb-4 bg-primary`}
          >
            <div className={`flex items-start justify-between`}>
              <p className={`mb-2`}>Amount</p>
              <p>$20</p>
            </div>
            <div className={`flex items-start justify-between`}>
              <p className={`mb-2`}>Purpose</p>
              <p>House</p>
            </div>
            <div className={`flex items-start justify-between`}>
              <p className={`mb-2`}>Duration</p>
              <p>4months</p>
            </div>
            <div className={`flex items-start justify-between`}>
              <p>Withdrawal</p>
              {valid ? (
                <button
                  className={`bg-white border-2 border-white rounded px-4`}
                >
                  Withdraw
                </button>
              ) : (
                <p className={`text-red-700`}>Not Due</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}