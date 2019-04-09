import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <section>
    <h1 className="title is-1">
      Hello Earth!
      <span role="img" aria-labelledby="handwave">👋🏾</span>
    </h1>
    <h1 className="subtitle is-5 has-text-left">I'm Egan Bisma, an aspiring Software Engineering and Fullstack Web Developer</h1>
    <h2 className="subtitle is-5">Please, make yourself at home <span role="img" aria-labelledby="handwave">🙂</span></h2>
  </section>
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