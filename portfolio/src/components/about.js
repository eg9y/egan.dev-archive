import { graphql } from "gatsby"


import React, { Component } from 'react'

export default class About extends Component {
  state = {
    "pie_chart": false,
    "chart": "https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/f6588a9b-81f5-4161-8f13-9d2a0625d831.svg"
  }
  toggleChart = () => {
    if (this.state.pie_chart) {
      this.setState({
        "pie_chart": !this.state.pie_chart,
        "chart": "https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/f6588a9b-81f5-4161-8f13-9d2a0625d831.svg"
      })
    } else {
      this.setState({
        "pie_chart": !this.state.pie_chart,
        "chart": "https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/936cc924-e881-4b69-a4fd-1a12ae5a8a7e.svg"
      })
    }
  }
  render() {
    return (
      <section className="hero is-medium is-bold is-fullheight " id="about">
        <div className="hero-head">
          <div className="container">
            <h1 className="title is-1 get-into-view">
              Current Status
        </h1>
            <section>
              <figure className="chart"><embed src={this.state.chart} key={this.state.chart}></embed></figure>
            </section>
            <button className="button is-warning" onClick={this.toggleChart}>toggle chart</button>
          </div>
        </div>
      </section>
    )
  }
}