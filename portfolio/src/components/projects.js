import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import Card from './card'

import lofo from "./images/lofo.svg"
import distributed_systems from "./images/distributed_systems.svg"
import cramwithme from "./images/cramwithme.svg"
import feelsociety from "./images/feelsociety.svg"

export default ({ data }) => (
  <section className="section is-bold is-small get-into-view" id="projects">
    <div className="section">
      <h1 className="title is-2">Side Projects</h1>
      <h4 className="subtitle is-5">Here are a list of projects I developed.</h4>
    </div>
    <div className="">
      <section className="columns">
        <div className="column">
          <Card
            name="Lo-Fo"
            desc="map-based UCSC lost and found webapp"
            preview="https://lostfound.ml"
            source="https://github.com/VVNoodle/Lo-Fo"
            list={
              (<ul>
                <li>pin lost-found item locations within the map</li>
                <li>search lost-found item catalogue with advanced search queries</li>
              </ul>)
            }
            tags={
              <span class="is-pulled-right">
                <span class="tag  is-dark">Vue</span>
                <span class="tag  is-dark">Firebase</span>
                <span class="tag  is-dark">TravisCI</span>
                <span class="tag  is-dark">Algolia</span>
              </span>
            }
            icon={lofo}
            icon_class="is-96x96"
          />
        </div>
        <div className="column">
          <Card
            name="Distributed Key-Value Store"
            desc="Available in a RESTful API"
            source="https://github.com/VVNoodle/Fault-tolerant-scalable-Key-value-Store"
            list={
              (<ul>
                <li>scalability through sharding incoming/existing keys</li>
                <li>fault-tolerance through replication</li>
              </ul>)
            }
            tags={
              <span class="is-pulled-right">
                <span class="tag  is-dark">Django</span>
                <span class="tag  is-dark">Docker</span>
              </span>
            }
            icon={distributed_systems}
            icon_class="is-96x96"
          />
        </div>
      </section>
      <section className="columns">
        <div className="column">
          <Card
            name="FeelSociety"
            desc="Anonymous social chat app"
            preview="https://aqueous-coast-83469.herokuapp.com/"
            source="https://github.com/VVNoodle/CureHut"
            list={
              (<ul>
                <li>find random chat rooms and chat anonymously</li>
                <li>create daily journal logs anonymous to you</li>
              </ul>)
            }
            tags={
              <span class="is-pulled-right is-medium">
                <span class="tag is-dark">Node</span>
                <span class="tag is-dark">Express</span>
                <span class="tag is-dark">Socket.io</span>
              </span>
            }
            icon={feelsociety}
            icon_class="is-96x96"
          />
        </div>
        <div className="column">
          <Card
            name="Cramwith.me"
            desc="online study group sessions with Pomodoro!"
            list={
              (<ul>
                <li>video-call random students/friends as an online study group</li>
                <li>Each study session include break times to socialize with other students</li>
              </ul>)
            }
            tags={
              <span class="is-pulled-right">
                <span class="tag  is-dark">React</span>
                <span class="tag  is-dark">GraphQL-Yoga</span>
                <span class="tag  is-dark">Prisma</span>
              </span>
            }
            icon={cramwithme}
            icon_class="is-64x64 cramwithme-pad"
          />
        </div>
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