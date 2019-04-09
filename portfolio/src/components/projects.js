import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Card from './card'

export default ({ data }) => (
  <section class="hero is-bold is-medium is-fullheight get-into-view" id="projects">
    <div class="hero-head">
      <h1 class="title is-2">Side Projects</h1>
      <h4 class="subtitle is-5">mhmmmm</h4>
      <section className="section">
        <section className="columns">
          <div className="column">
            <Card
              name="Lo-Fo"
              desc="map-based lost and found webapp"
              preview="https://lostfound.ml"
              source="https://github.com/VVNoodle/Lo-Fo"
            />
          </div>
          <div className="column">
            <Card
              name="Distributed Key-Value Store"
              desc="Available in a RESTful API"
              preview="https://lostfound.ml"
              source="https://github.com/VVNoodle/Lo-Fo"
            />
          </div>
        </section>
        <section className="columns">
          <div className="column">
            <Card
              name="FeelSociety"
              desc="map-based lost and found webapp"
              preview="https://lostfound.ml"
              source="https://github.com/VVNoodle/Lo-Fo"
            />
          </div>
          <div className="column">
            <Card
              name="Cramwith.me"
              desc="online study group sessions with Pomodoro!"
            />
          </div>
        </section>
      </section>
    </div>
  </section >
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