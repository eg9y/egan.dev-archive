import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <section>
    <h1>About me</h1>
    <p>
      I'm an international student studying in United States as a Senior CS Undergrad in UCSC.
  </p>
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