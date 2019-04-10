import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import NavBar from './navbar'


export default class Layout extends React.Component {
  state = {
    'is_dropshadow': false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }


  handleScroll = (event) => {
    let scrollTop = window.scrollY;
    this.setState({
      is_dropshadow: scrollTop >= 160 ? true : false
    });
    console.log(this.state.is_dropshadow)
    console.log(scrollTop)
  }

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
          >
            <Helmet>
              <html class="bg" />
            </Helmet>
            <NavBar location={location} is_dropshadow={this.state.is_dropshadow} />
            <section className="container is-fluid">
              {children}
            </section>
          </div>
        )}
      />
    )
  }
}
