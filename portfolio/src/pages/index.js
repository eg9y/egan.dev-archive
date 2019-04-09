import React from 'react'

import NavBar from '../components/navbar'
import Contstraint from '../components/constraint'
import Projects from '../components/projects'
import About from '../components/about'
import Home from '../components/home'
import Layout from '../components/layout'


export default function index(props) {
    return (
        <Layout location={props.location}>
            <Contstraint>
                <Home />
            </Contstraint>
            <About />
            <Contstraint>
                <Projects />
            </Contstraint>
        </Layout>
    )
}
