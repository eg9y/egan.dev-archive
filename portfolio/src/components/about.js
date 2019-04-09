import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <section id="about">
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