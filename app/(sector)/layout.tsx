"use client"

import React, { ReactNode } from "react"

import Footer from "./footer"
import Navbar from "./deposit/navbar"

export default function PageLayout(props: { children: ReactNode }) {
  return (
    <div className={"bg-background"}>
        <Navbar/>
      <div className={``}> {props.children}</div>

      <Footer />
    </div>
  )
}
