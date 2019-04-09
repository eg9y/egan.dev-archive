import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <section className="hero">
      <div className="hero-body"></div>
      <div className="container">
        <h1 className="title is-1">
          Hello Earth!
            <span role="img" aria-labelledby="handwave">👋🏾</span>
        </h1>
        <h1 className="subtitle is-5 has-text-left">I'm Egan Bisma, an aspiring Software Engineering and Fullstack Web Developer</h1>
        <h2 className="subtitle is-5">Please, make yourself at home <span role="img" aria-labelledby="handwave">🙂</span></h2>
      </div>
    </section >
  </Layout >
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  } 
`