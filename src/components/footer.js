import React from "react"

const Footer = () => (
  <footer className="border-t">
    <div className="container mx-auto py-6 px-4 lg:px-0 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
      <div>Created by <a href="https://juanjavier.blog" className="text-black">JuanJavier1979</a></div>
      <div className="pt-4 md:pt-0 text-center md:text-right text-xs">
        <a href="#" className="text-black no-underline hover:underline">Terms &amp; Conditions</a>
        <a href="#" className="text-black no-underline hover:underline ml-4">Privacy Policy</a>
        <a href="#" className="text-black no-underline hover:underline ml-4">Cookie Policy</a>
      </div>
    </div>
  </footer>
)

export default Footer