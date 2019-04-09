import React from 'react'

import NavBar from '../components/navbar'
import Contstraint from '../components/constraint'
import Projects from '../components/projects'
import About from '../components/about'
import Home from '../components/home'
import Layout from '../components/layout'


export default function index() {
    return (
        <Layout>
            <Contstraint>
                <Home />
            </Contstraint>
            <Contstraint>
                <About />
            </Contstraint>
            <Contstraint>
                <Projects />
            </Contstraint>
        </Layout>
    )
}
