import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import NavBar from './navbar'


export default class Layout extends React.Component {
  render() {
    const { children, location = "/" } = this.props;
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
    `
        }
        render={data => (
          <div
            className="container is-fluid"
          >
            <Helmet>
              <html class="bg" />
            </Helmet>
            <NavBar location={location} />
            {children}
          </div>
        )}
      />
    )
  }
}
