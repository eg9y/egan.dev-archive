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
          <ul>
            <li>Undergraduate CS Student in UCSC.</li>
            <li>Self-taught Full Stack Developer</li>
            <li>Proud Indonesian</li>
            <li>Dark mode lover</li>
            <li>Professional Netflix watcher</li>
            <li>
              <a href="https://ibb.co/xS7sG8Z" target="_blank" class="has-text-weight-bold">Kick-ass résumé</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
