import React from "react"

const Header = () => (
  <header className="absolute w-full z-50">
    <nav className="container mx-auto sm:flex justify-between p-8 items-center text-center md:text-left">
      <a href="#" className="font-sans text-white">Gatsby Ecommerce Theme</a>
      <ul className="list-reset flex justify-center md:justify-end pt-4 sm:pt-0">
        <li><a href="#" className="text-white p-2 md:p-4">Shop</a></li>
        <li><a href="#" className="text-white p-2 md:p-4">About</a></li>
        <li><a href="#" className="text-white p-2 md:p-4">Contact</a></li>
      </ul>
    </nav>
  </header>
)

export default Header