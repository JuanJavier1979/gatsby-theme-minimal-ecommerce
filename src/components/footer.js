import React from "react"

const Footer = () => (
  <footer className="border-t">
    <div className="container mx-auto py-6 px-4 lg:px-0 flex flex-wrap md:flex-no-wrap justify-between">
      <div className="w-1/2 lg:w-1/4 mb-4 md:mb-0  pt-4 md:pt-0">
        <h3 className="font-bold mb-2">Accont links</h3>
        <ul>
          <li><a href="#" className="text-black no-underline hover:underline">My account</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Addresses</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Orders</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Billing info</a></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/4 mb-4 md:mb-0  pt-4 md:pt-0">
        <h3 className="font-bold mb-2">Latest products</h3>
        <ul>
          <li><a href="#" className="text-black no-underline hover:underline">Product name</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Product name</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Product name</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Product name</a></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/4 mb-4 md:mb-0  pt-4 md:pt-0">
        <h3 className="font-bold mb-2">Collections</h3>
        <ul>
          <li><a href="#" className="text-black no-underline hover:underline">Fall/Winter 2020</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Spring 2020</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Summer 2020</a></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-1/4 pt-4 md:pt-0">
        <h3 className="font-bold mb-2">About us</h3>
        <ul>
          <li><a href="#" className="text-black no-underline hover:underline">About us</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Stores</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Careers</a></li>
          <li><a href="#" className="text-black no-underline hover:underline">Press</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t container mx-auto py-6 px-4 lg:px-0 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
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