import React from "react"

const Article = () => (
  <div className="w-full md:w-1/2 lg:w-1/4 overflow-hidden">
    <div className="w-full p-4">
      <img className="w-full" src="https://via.placeholder.com/385x235" alt="alt text" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product name</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="flex justify-between px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$25.00</span>
        <button className="transition-colors duration-150 ease-in-out bg-black hover:bg-white text-sm text-white hover:text-black border border-black rounded-full px-3 py-1 shadow">Add to cart</button>
      </div>
    </div>
  </div>
)

export default Article