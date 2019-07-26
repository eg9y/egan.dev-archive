import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import NavBar from "./navbar"
import favicon from "./images/favicon.svg"

export default class Layout extends React.Component {
  state = {
    is_dropshadow: false,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    let scrollTop = window.scrollY
    this.setState({
      is_dropshadow: scrollTop >= 160 ? true : false,
    })
  }

  render() {
    const { children, location = "/" } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet>
              <html class="bg has-navbar-fixed-bottom" />
              <title>Egan Bisma</title>
              <link rel="shortcut icon" type="image/svg" href={favicon} />
            </Helmet>
            <NavBar
              location={location}
              is_dropshadow={this.state.is_dropshadow}
            />
            <section className="container is-fluid">{children}</section>
          </div>
        )}
      />
    )
  }
}
