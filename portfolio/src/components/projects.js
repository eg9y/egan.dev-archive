import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <section className="hero is-medium is-bold is-fullheight get-into-view" id="projects">
    <div className="hero-head">
      <div className="container">
        <h1 className="title is-1">
          Projects
        </h1>
      </div>
    </div>
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