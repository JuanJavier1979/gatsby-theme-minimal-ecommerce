import React from "react"
import Layout from "../components/layout"
import Article from "../components/article";

import '../scss/global.scss'

export default () => {
  return (
    <Layout>
      <section className="hero relative mb-20">
        <div className="bg-gray-500 inset-0 flex flex-col justify-center items-center text-center text-white pt-32 pb-12 md:pt-20 md:pb-20">
          <h1 className="font-serif text-6xl leading-none">Category name</h1>
          <p className="text-3xl mb-10">Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <div className="container mx-auto">
        <section className="productList flex flex-wrap mb-20">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </div>
    </Layout>
  )
}