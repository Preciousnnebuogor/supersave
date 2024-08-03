"use client"

import React, { ReactNode } from "react"

import Footer from "./footer"

export default function PageLayout(props: { children: ReactNode }) {
  return (
    <div className={"bg-background"}>
      <div className={``}> {props.children}</div>

      <Footer />
    </div>
  )
}
