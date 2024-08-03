"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <div className={`flex justify-between items-center text-center fixed bottom-0 py-2`}>
      <div
        className={
          "flex flex-row justify-between text-center mx-auto md:px-6 px-4 py-2 "
        }
      >
        <div className={" "}>
          <Link
            href={"/"}
            className={
              " hover:text-secondary p-4 mt-20 md:mt-0 text-secondary-foreground"
            }
          >
            Home
          </Link>
          <Link
            href={"/deposit"}
            className={" hover:text-secondary p-4 text-secondary-foreground"}
          >
            Deposit
          </Link>

          <Link
            href={"/profile"}
            className={
              " hover:text-secondary p-4 mt-20 md:mt-0 text-secondary-foreground"
            }
          >
            Profile
          </Link>

          <Link
            href={"/withdrwal"}
            className={
              " hover:text-secondary p-4 mt-20 md:mt-0 text-secondary-foreground"
            }
          >
            Withdrawal
          </Link>
        </div>
      </div>
    </div>
  )
}
