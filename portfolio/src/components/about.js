import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (

  <section className="hero is-medium is-bold is-fullheight " >
    <div className="container" id="about">
      <div className="hero-head">
        <h1 className="title is-3">About me</h1>
      </div>
      <div className="hero-body">
        <p>
          I'm an international student studying in United States as a Senior CS Undergrad in UCSC.
  </p>
      </div>
      <div className="hero-foot">
        dfd
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