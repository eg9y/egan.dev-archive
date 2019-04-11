import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Card from './card'

import lofo from "./images/lofo.svg"
import distributed_systems from "./images/distributed_systems.svg"
import cramwithme from "./images/cramwithme.svg"
import feelsociety from "./images/feelsociety.svg"

export default ({ data }) => (
  <section className="hero is-bold is-small get-into-view" id="projects">
    <div className="hero-head">
      <h1 className="title is-2">Side Projects</h1>
      <h4 className="subtitle is-5">Here are a list of projects I developed.</h4>
      <section className="hero-body">
        <section className="columns">
          <div className="column">
            <Card
              name="Lo-Fo"
              desc="map-based lost and found webapp"
              preview="https://lostfound.ml"
              source="https://github.com/VVNoodle/Lo-Fo"
              icon={lofo}
              icon_class="is-128x128"
            />
          </div>
          <div className="column">
            <Card
              name="Distributed Key-Value Store"
              desc="Available in a RESTful API"
              source="https://github.com/VVNoodle/Fault-tolerant-scalable-Key-value-Store"
              icon={distributed_systems}
              icon_class="is-96x96"
            />
          </div>
        </section>
        <section className="columns">
          <div className="column">
            <Card
              name="FeelSociety"
              desc="map-based lost and found webapp"
              preview="https://aqueous-coast-83469.herokuapp.com/"
              source="https://github.com/VVNoodle/CureHut"
              icon={feelsociety}
              icon_class="is-96x96"
            />
          </div>
          <div className="column">
            <Card
              name="Cramwith.me"
              desc="online study group sessions with Pomodoro!"
              icon={cramwithme}
              icon_class="is-64x64"
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