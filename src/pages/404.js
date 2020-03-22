import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
    <section className="hero relative mb-20">
      <div className="bg-gray-500 inset-0 flex flex-col justify-center items-center text-center text-white pt-32 pb-12 md:pt-20 md:pb-20">
        <h2 className="font-serif text-6xl leading-none">Page not found</h2>
      </div>
    </section>
      <div className="container mx-auto">
        <section className="headLine mb-20 pr-10 pl-10 md:pr-20 md:pl-20 lg:pr-40 lg:pl-40 text-center">
          <p className="font-serif text-2xl">Phasellus vulputate tellus et pulvinar facilisis. Integer eros urna, interdum a lacus eget, porta sodales lorem. Donec orci sem, rutrum a interdum dapibus, fringilla non nibh. Vivamus tempor faucibus erat ut suscipit.</p>
        </section>
      </div>
    </Layout>
  )
}
