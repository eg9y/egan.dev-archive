import React from 'react'
import { Link } from "gatsby"

import crack from "./images/crack.svg"
import doggo from "./images/doggo.svg"

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
            <p id="nationality">Proud Indonesian
              <span role="img" aria-labelledby="handwave">🇮🇩</span>
            </p>
            <p id="dark-mode">Dark mode lover</p>
            <p className="image is-96x96" id="crack"><img src={crack} /></p>
            <p id="netflix">Professional Netflix viewer</p>
            <a id="resume" href="https://ibb.co/xS7sG8Z" target="_blank" className="has-text-weight-bold">Kick-ass résumé</a>
            <p id="playlist">
              <iframe src="https://open.spotify.com/embed/user/1242715396/playlist/4nO5GSNhdidHJKKj0pW9pZ" id="iframe" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </p>
            <p className="image" id="doggo"><img src={doggo} /></p>
          </div>
        </div>
      </div>

    </section>
  )
}
