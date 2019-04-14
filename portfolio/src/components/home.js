import React from "react"
import { graphql } from "gatsby"

import Footer from './footer'

import floor_line from "./images/floor_line.png"
import code from "./images/code.svg"
import job from "./images/job.svg"
import letterboxd from "./images/letterboxd.svg"

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
      {/* <div id="booter">
        <Footer />
      </div> */}
      <div className="" id="greetings">
        <h1 id="title">
          <span role="img" aria-labelledby="handwave" id="greeting-hand">👋🏾</span>
          <span className="showMe">
            Good {getHour() || "day"},
          </span>
        </h1>
        <h2 id="my-name" className="showMe">I'm Egan Bisma.</h2>
      </div>
      <div id="more-intro" className="showMe">
        <h2 className="title home_title">I'm an aspiring Software Engineer and Fullstack Web Developer</h2>
        <p className="title is-5 feel_good">Please, make yourself at home</p>
      </div>
      <div id="floor_line" className="showMe">
        <figure className="image is-32x32" id="code">
          <a href="https://github.com/VVNoodle" target="_blank">
            <img src={code} />
          </a>
        </figure>
        <figure className="image is-32x32" id="job" >
          <a href="https://www.linkedin.com/in/eganbisma/" target="_blank">
            <img src={job} alt="" />
          </a>
        </figure>
        <figure className="image is-32x32" id="letterboxd" >
          <a href="https://letterboxd.com/egan/" target="_blank">
            <img src={letterboxd} id="letterboxd" alt="" />
          </a>
        </figure>
        <img src={floor_line} id="main-floor" alt="" />
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