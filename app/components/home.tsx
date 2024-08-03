"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div className={` `}>
      <h1 className={`pt-5 pl-5`}>SuperSave</h1>
      <div className={` w-full flex items-center justify-center`}>
        <img src={"./man.png"} />
      </div>
      <div className={`p-4`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, enim
          totam. Iure nobis illo quod? Qui, ratione consectetur minima beatae
          itaque rerum.
        </p>

        <div
          className={`mt-4  flex items-center justify-center`}
        >
            <Link href={"/client"}>
          <button className={`rounded-2xl text-center font-bold px-6 py-3  bg-white border-2 border-white`}>Deposit Now</button></Link>
        </div>
      </div>
      <div></div>
    </div>
  )
}
