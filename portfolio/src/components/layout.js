import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import NavBar from '../components/navbar'


export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
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
              <html className="has-background-white" css="background:black;" />
            </Helmet>
            <NavBar />
            <div className="container section">
              {children}
            </div>
          </div>
        )}
      />
    )
  }
}
