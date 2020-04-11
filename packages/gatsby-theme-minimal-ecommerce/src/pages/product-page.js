import React from "react"
import Img from "gatsby-image";
import Layout from "../components/layout"
import Article from "../components/article";
import Button from "../components/button";

import '../scss/global.scss'

export default ({ data }) => {
  return (
    <Layout>
      <section className="hero relative mb-20">
        <div className="bg-gray-500 inset-0 flex flex-col justify-center items-center text-center text-white pt-32 pb-12 md:pt-20 md:pb-20">
          <h2 className="font-serif text-6xl leading-none">Category name</h2>
          <p className="text-3xl mb-10">Lorem ipsum dolor sit amet.</p>
        </div>
      </section>
      <div className="container mx-auto">
        <section className="productList flex flex-wrap mb-20">
          <div className="w-1/2 p-4">
            <Img fluid={data.file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" className="h-screen md:h-auto" alt="" />
          </div>
          <div className="w-1/2 p-4">
            <h1 className="font-serif text-6xl mb-10">Product name</h1>
            <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus finibus vehicula. Ut suscipit finibus fringilla. In ultrices a dolor at suscipit. Suspendisse vitae luctus orci, et molestie nisi. Integer quis convallis enim. Ut leo velit, efficitur a semper sit amet, ultrices volutpat quam. Nunc volutpat velit at mattis egestas. Maecenas nec vestibulum dui, at tincidunt arcu. Curabitur ut mauris suscipit, tempor diam in, suscipit purus. </p>
            <p className="mb-10 text-xl font-bold">$25.00</p>
            <p className="">
              <input type="number" className="inline-block w-16 font-normal border rounded mr-4 py-3 px-4" value="1" />
              <Button />
            </p>
          </div>
        </section>
        <h3 className="text-2xl p-4">Related products</h3>
        <section className="productList flex flex-wrap mb-20">
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "the-honest-company-iXFelifXseA-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`