"use client"

import Deposit from "./components/deposit"
import Home from "./components/home"


export default function HomePage() {
  return (
    <div className={`bg-primary min-h-screen relative`}>
      <Home/>
      {/* <Deposit/> */}
    </div>
  )
}
