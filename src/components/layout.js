import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="main-layout flex flex-col min-h-screen text-gray-900">
      <Header />
      <main className="flex flex-1 flex-col z-40">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout