import React from 'react'
import { Link } from "gatsby"

export default function about() {
  return (
    <section className="hero is-medium is-bold is-fullheight get-into-view" id="about">
      <div className="hero-head">
        <div className="container content">
          <h1 className="title is-1">
            About me
          </h1>
          <div id="about-me-grid">
            <p id="undergrad">
              Undergraduate CS Student in UCSC.
            </p>
            <p id="self-taught">Self-taught Full Stack Developer</p>
            <p id="nationality">Proud Indonesian!!!</p>
            <p id="dark-mode">Dark mode lover</p>
            <p id="netflix">Professional Netflix viewer</p>
            <a id="resume" href="https://ibb.co/xS7sG8Z" target="_blank" class="has-text-weight-bold">Kick-ass résumé</a>
          </div>
        </div>
      </div>

    </section>
  )
}
