import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1> <span role="img" aria-labelledby="handwave">👋🏾</span> Hello Earth!</h1>
    <h1>I'm Egan Bisma</h1>
    <h2>If you're a recruiter searching for a Software Engineering or Fullstack New Grad candidate, you went to the right spot!</h2>
  </Layout>
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