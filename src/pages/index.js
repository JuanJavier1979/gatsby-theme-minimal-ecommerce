import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import Article from "../components/article";

import '../scss/global.scss'

export default ({ data }) => {
  return (
    <div className="main-layout flex flex-col min-h-screen text-gray-900">
          <Header />
          <main className="flex flex-1 flex-col z-40">
            <section className="hero h-screen md:h-auto relative mb-20">
              <Img fluid={data.file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" className="h-screen md:h-auto" alt="" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h1 className="font-serif text-6xl leading-none">New Collection 2020</h1>
                <p className="text-3xl mb-10">Lorem ipsum dolor sit amet.</p>
                <button className="transition-colors duration-150 ease-in-out bg-transparent hover:bg-white text-white hover:text-black border border-white rounded pt-2 pb-2 pl-4 pr-4 shadow">Shop collection</button>
              </div>
            </section>
            <div className="container mx-auto">
              <section className="headLine mb-20 pr-10 pl-10 md:pr-20 md:pl-20 lg:pr-40 lg:pl-40 text-center">
                <h2 className="font-serif text-4xl">Donec viverra est nisi, nec iaculis nisi.</h2>
                <p className="font-serif text-2xl">Phasellus vulputate tellus et pulvinar facilisis. Integer eros urna, interdum a lacus eget, porta sodales lorem. Donec orci sem, rutrum a interdum dapibus, fringilla non nibh. Vivamus tempor faucibus erat ut suscipit.</p>
              </section>
              <section className="productList flex flex-wrap mb-20">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
              </section>
            </div>
          </main>
          <Footer />
        </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "raphael-lovaski-pxax5WuM7eY-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`