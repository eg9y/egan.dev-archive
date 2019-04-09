import React from "react"
import { graphql } from "gatsby"

import floor_line from "./images/floor_line.svg"

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
  <section className="hero is-medium is-bold is-fullheight get-into-view-main">
    <section className="home_grid">
      <div className="container" id="greetings">
        <h1 className="title is-1 ">
          Good {getHour()}!
          <span role="img" aria-labelledby="handwave">👋🏾</span>
        </h1>
        <h2 className="subtitle is-1 ">My name is Egan Bisma.</h2>
        <div className="columns">
          <div className="column is-three-fifths">
            <h2 className="title is-2	home_title">I'm an aspiring Software Engineering and Fullstack Web Developer</h2>
            <p className="title is-3 feel_good">Please, make yourself at home</p>
          </div>
        </div>
      </div>
      <div id="floor_line">
        <img src={floor_line} alt="" />
      </div>
    </section>
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