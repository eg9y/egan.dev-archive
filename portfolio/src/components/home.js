import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

function getHour() {
  const hour = (new Date()).getHours();
  if (hour >= 5 && hour <= 12) {
    return "Morning"
  } else if (hour >= 13 && hour <= 17) {
    return "Afternoon"
  } else {
    return "Evening"
  }
}

export default ({ data }) => (
  <section className="section">
    <h1 className="title is-1">
      Good {getHour()}!
      <span role="img" aria-labelledby="handwave">👋🏾</span>
    </h1>
    <h2 className="subtitle is-1 has-text-left">My name is Egan Bisma.</h2>
    <div className="container  has-text-left">
      <div className="columns">
        <div className="column is-three-fifths">
          <h2 className="title is-2  	">I'm an aspiring Software Engineering and Fullstack Web Developer</h2>
          <h2 className="subtitle is-3 feel_good">Please, make yourself at home <span role="img" aria-labelledby="handwave">🙂</span></h2>
        </div>
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