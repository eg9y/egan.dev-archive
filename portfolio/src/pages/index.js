// import React from 'react'
import Projects from "../components/projects"
import About from "../components/about"
import Home from "../components/home"
import Layout from "../components/layout"

import React, { Component } from "react"

export default class index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Home />
        <Projects />
        <About />
      </Layout>
    )
  }
}
