"use client"

import Link from "next/link"

export default function Deposit() {
  return (
    <div className={``}>
      <div className={`pt-5 pl-5`}>
        <h1>
          Super<span className={`text-primary`}>Save</span>
        </h1>
      </div>
      <div className={`px-4 mt-20`}>
        <div
          className={`border-2 border-primary rounded-xl bg-primary w-[50%] px-5 py-6`}
        >
          <h1>Wallet Balance:</h1>
          <h1>$20</h1>
        </div>
        <div
          className={`border-2 border-primary rounded mt-10 px-4 w-[80vw] pb-4`}
        >
          <input
            type="text"
            placeholder="Amount"
            className={`border-2 border-primary px-2 py-2 mt-3 text-black w-full`}
          />

          <input type="text" placeholder="Purpose" className={`border-2 border-primary px-2 py-2 mt-3 w-full`}>
            
          </input>

          <select className={`border-2 border-primary px-2 py-2 mt-3 w-full`}>
            <option value="Plan">Duration</option>
            <option value="Plan">4months</option>
            <option value="Plan">6months</option>
            <option value="Plan">8months</option>
            <option value="Plan">12months</option>
            <option value="Plan">16months</option>
            <option value="Plan">20months</option>
            <option value="Plan">24months</option>
            <option value="Plan">26months</option>
          </select>

          <div
            className={`border-2 border-primary px-2 py-2 mt-3 w-full space-x-2`}
          >
            <label>
              <input type="checkbox" placeholder="lock" className={`mr-2`} />
              Locked
            </label>
          </div>
        </div>

        <div className={`mt-6  flex items-center justify-center`}>
          <Link href={""}>
            <button
              className={`rounded-2xl text-center font-bold px-8 py-3  bg-primary border-2 border-primary`}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
