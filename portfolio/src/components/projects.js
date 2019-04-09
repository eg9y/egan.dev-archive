import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <h1>Projects</h1>
    <p>
      I'm an international student studying in United States as a Senior CS Undergrad in UCSC.
      </p>
  </div>
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