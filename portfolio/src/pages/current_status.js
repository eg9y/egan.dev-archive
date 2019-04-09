import { graphql } from "gatsby"


import React, { Component } from 'react'

import Layout from '../components/layout'

export default class About extends Component {
    state = {
        "pie_chart": false,
        "chart": "https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/5891007e-626c-4979-a444-d286445f5d6b.svg"
    }
    toggleChart = () => {
        if (this.state.pie_chart) {
            this.setState({
                "pie_chart": !this.state.pie_chart,
                "chart": "https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/5891007e-626c-4979-a444-d286445f5d6b.svg"
            })
        } else {
            this.setState({
                "pie_chart": !this.state.pie_chart,
                "chart": "https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/cfa2df92-7685-46b2-ba72-806179d77a74.svg"
            })
        }
    }
    render() {
        return (
            <Layout>
                <section className="hero is-medium is-bold is-fullheight " id="about">
                    <div className="hero-head">
                        <div className="container">
                            <h1 className="title is-1 get-into-view">
                                Current Status
                             </h1>
                            <section class="section columns">
                                <section className="column is-two-thirds">
                                    <figure className="chart"><embed src={this.state.chart} key={this.state.chart}></embed></figure>
                                </section>
                                <section className="column">
                                    <a className="button is-black toggle-bottom" onClick={this.toggleChart}>toggle chart</a>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
