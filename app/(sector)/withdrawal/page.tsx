"use client"

import { useState } from "react"

export default function People() {
  const [valid, setValid] = useState(false)

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
