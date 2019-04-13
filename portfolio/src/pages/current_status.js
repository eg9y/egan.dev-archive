import { graphql } from "gatsby"


import React, { Component } from 'react'

import Layout from '../components/layout'
import GitHubCalendar from '@grubersjoe/github-contributions-calendar'

const defaultTheme = {
    background: 'transparent',
    text: '#000',
    grade4: 'rgb(102, 101, 101)',
    grade3: 'rgb(141, 140, 140)',
    grade2: 'rgb(184, 184, 184)',
    grade1: 'rgb(213, 208, 208)',
    grade0: '#fff',
};

export default class About extends Component {
    render() {
        return (
            <Layout>
                <section className="hero is-medium is-bold is-fullheight " id="about">
                    <div className="hero-head">
                        <div className="container">
                            <h1 className="title is-1 get-into-view">
                                Current Status
                             </h1>
                            <h2 className="subtitle is-5">P.S. These charts update daily (PRETTY KEWL HUH?)</h2>
                            <section class="section columns">
                                <section className="column">
                                    <figure className="chart"><embed src="https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/cfa2df92-7685-46b2-ba72-806179d77a74.svg"></embed></figure>
                                </section>
                                <section className="column">
                                    <figure className="chart"><embed src="https://wakatime.com/share/@b63a290d-67c6-4893-8445-2fa163048351/5891007e-626c-4979-a444-d286445f5d6b.svg"></embed></figure>
                                </section>
                            </section>
                            <section className="section has-text-centered">
                                <GitHubCalendar
                                    username="VVNoodle"
                                    years={[2019, 2018, 2017, 2016]}
                                    fullYear={false}
                                    theme={defaultTheme}
                                    blockSize={12}
                                    fontSize={8}
                                    blockMargin={0}
                                />
                            </section>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
