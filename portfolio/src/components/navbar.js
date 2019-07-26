import { Link } from "gatsby"
import React, { Component } from "react"

import "../styles/styles.scss"
import ScrollView from "./scroll_view"

import logo from "./images/logo.svg"

export default class NavBar extends Component {
  name = (
    <div className="navbar-brand">
      <Link to="/" className="has-text-black ">
        <img src={logo} alt="Egan Bisma" id="logo" />
      </Link>
    </div>
  )

  render() {
    const { location, is_dropshadow } = this.props
    return (
      <nav
        className="navbar is-spaced is-fixed-bottom is-warning showMe"
        id={is_dropshadow ? "navbar-dropit" : "navbar-containit"}
        role="navigation"
        aria-label="main navigation"
      >
        {this.name}
        <div className={`navbar-menu navbar-end `}>
          {location.pathname === "/" ? (
            <ScrollView />
          ) : (
            <p className="navbar-item has-text-weight-semibold">
              <Link to="/" className="has-text-grey-darker">
                Home
              </Link>
            </p>
          )}
          <p className="navbar-item has-text-weight-semibold">
            <Link to="/current_status" className="has-text-grey-darker">
              Status
            </Link>
          </p>
          <p className="navbar-item has-text-weight-semibold">
            <Link to="/blogs" className="has-text-grey-darker">
              Blog
            </Link>
          </p>
          <p className="navbar-item has-text-weight-semibold">
            <Link to="/contact" className="has-text-grey-darker">
              Contact
            </Link>
          </p>
        </div>
      </nav>
    )
  }
}
