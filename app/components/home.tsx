"use client"

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
          className={`mt-4 bg-white px-4 border-2 border-white rounded text-center text-2xl font-bold flex items-center justify-center`}
        >
          <button>Deposit Now</button>
        </div>
      </div>
      <div></div>
    </div>
  )
}
