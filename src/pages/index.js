import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";

import '../scss/global.scss'

export default ({ data }) => {
  return (
    <div className="main-layout flex flex-col min-h-screen text-gray-900">
          <header className="absolute w-full z-50">
            <nav className="container mx-auto flex justify-between p-8 items-center">
              <a href="#" className="font-sans text-white">Gatsby Ecommerce Theme</a>
              <ul className="list-reset flex">
                <li><a href="#" className="text-white p-2 md:p-4">Shop</a></li>
                <li><a href="#" className="text-white p-2 md:p-4">About</a></li>
                <li><a href="#" className="text-white p-2 md:p-4">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main className="flex flex-1 flex-col z-40">
            <section className="hero relative mb-20">
              <Img fluid={data.file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt="" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 className="font-serif text-6xl">New Collection 2020</h1>
                <p className="text-3xl mb-10">Lorem ipsum dolor sit amet.</p>
                <button className="transition-colors duration-150 ease-in-out bg-transparent hover:bg-white text-white hover:text-black border border-white rounded pt-2 pb-2 pl-4 pr-4 shadow">Shop collection</button>
              </div>
            </section>
            <div className="container mx-auto">
              <section className="headLine mb-20 pr-40 pl-40 text-center">
                <h2 className="font-serif text-4xl">Donec viverra est nisi, nec iaculis nisi.</h2>
                <p className="font-serif text-2xl">Phasellus vulputate tellus et pulvinar facilisis. Integer eros urna, interdum a lacus eget, porta sodales lorem. Donec orci sem, rutrum a interdum dapibus, fringilla non nibh. Vivamus tempor faucibus erat ut suscipit.</p>
              </section>
              <section className="productList flex flex-wrap items-center justify-center">
                <article>Article</article>
                <article>Article</article>
                <article>Article</article>
                <article>Article</article>
                <article>Article</article>
                <article>Article</article>
                <article>Article</article>
              </section>
            </div>
          </main>
          <footer>Footer</footer>
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