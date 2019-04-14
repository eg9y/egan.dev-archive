import React from 'react'
import { Link } from "gatsby"

import profile from "./images/profile.png"
import clouds from "./images/clouds.svg"


export default function about() {
  return (
    <section className="section" id="about">
      <h1 className="title is-1">
        About me
      </h1>
      <div id="about-me-grid">
        <section id="undergrad">
          <p className="content">
            I'm a third-year
            <span className="gist"> Undergraduate </span>
            at UC Santa Cruz pursuing a major in Computer Science.
          </p>
          <p className="content">
            I'm also a
            <span className="gist"> Web Developer </span>
            driven by deliberate, out-of-the-box yet minimalistic design, stirring
            away as much redundant detail from the product as possible.
          </p>
          <p className="content">
            I'm into
            <span className="gist"> distributed systems</span>
            , specifically distributed video streaming services (e.g. DLive).
              I plan to dedicate my time learning and creating dapps and acquanting myself with traditional networking
              protocols like HTTP, and exciting ones such as IPFS.
            </p>
          <p className="content">
            When I'm not starring at VS Code, I find myself sketching at a park,
            tossing random ingridients and calling it stir-fry, swimming at a generously heated outdoor pool,
            or sipping a cup of
            <span><a href="https://www.youtube.com/watch?v=1cvH8bCl14Y" target="_blank"> Teh tarik☕ </a>
            </span>
            while reminding myself that online ads are the bane of my existence and
          Brave Rewards is the future <span>😊</span>
          </p>
        </section>
        <div id="profile">
          <figure className="image is-128x128">
            <img src={profile} alt="profile image" className="" />
          </figure>
          <p className="is-size-4 content" id="check-resume">
            Check out my resume over
              <span>
              <a href="https://drive.google.com/file/d/1FgZrO3A-zWkRdcP6ShdyNlmVw8dQVDDd/view?usp=sharing"
                target="_blank"> here </a>
            </span>
          </p>
          <p className="is-size-5 content" id="check-contact">
            If you'd like to know more about me, or anything really, shoot up a message at the
                <span>
              <a href="/contact"> contact </a>
            </span>
            page!
              </p>
        </div>
      </div>
    </section>
  )
}
