import React from "react"
import Layout from "../components/layout"

import '../scss/global.scss'

export default () => {
  return (
    <Layout>
      <section className="hero relative mb-20">
        <div className="bg-gray-500 inset-0 flex flex-col justify-center items-center text-center text-white pt-32 pb-12 md:pt-20 md:pb-20">
          <h2 className="font-serif text-6xl leading-none">Cart</h2>
        </div>
      </section>
      <div className="container mx-auto">
        <section className="headLine mb-20 pr-10 pl-10 md:pr-20 md:pl-20 lg:pr-40 lg:pl-40 text-center">
          <h3 className="font-serif text-4xl">Donec viverra est nisi, nec iaculis nisi.</h3>
        </section>
        <section className="cart-table flex flex-wrap mb-20">
          <table class="min-w-full shadow sm:rounded-lg border-b border-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"></td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"><img className="" src="https://via.placeholder.com/60x60" width="60" alt="alt text" /></td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Product name - Series XYZ-98</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">$29.90</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">1</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">$29.90</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"></td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"><img className="" src="https://via.placeholder.com/60x60" width="60" alt="alt text" /></td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Product name - Series XYZ-98</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">$29.90</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">1</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">$29.90</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"></td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"><img className="" src="https://via.placeholder.com/60x60" width="60" alt="alt text" /></td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Product name - Series XYZ-98</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">$29.90</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">1</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">$29.90</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  )
}