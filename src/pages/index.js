import React from "react"

import '../scss/global.scss'

class IndexPage extends React.Component {
  render() {
    return (
      <div className="main-layout flex flex-col min-h-screen text-gray-900">
        <header>Header</header>
        <main className="container mx-auto flex flex-1 flex-col">
          <section className="hero">
            <h1>Example</h1>
          </section>
          <section className="headLine">
            <h2>Headline</h2>
            <p>Subhead line</p>
          </section>
          <section className="productList">
            <article>Article</article>
            <article>Article</article>
            <article>Article</article>
            <article>Article</article>
            <article>Article</article>
            <article>Article</article>
            <article>Article</article>
          </section>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}
export default IndexPage