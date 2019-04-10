import React from 'react'

import NavBar from '../components/navbar'
import Contstraint from '../components/constraint'
import Projects from '../components/projects'
import About from '../components/about'
import Home from '../components/home'
import Layout from '../components/layout'

import github from '../components/images/github.svg'
import linkedin from '../components/images/linkedin.svg'
import letterboxd from '../components/images/letterboxd.svg'

export default function index(props) {
    return (
        <Layout location={props.location}>
            <Home />
            <Contstraint>
                <Projects />
            </Contstraint>
            <Contstraint>
                <About />
                <footer class="footer">
                    <div class="content has-text-centered">
                        <nav class="level is-mobile">
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Code</p>
                                    <figure class="image is-64x64">
                                        <img src={github} />
                                    </figure>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Network</p>
                                    <figure class="image is-64x64">
                                        <img src={linkedin} />
                                    </figure>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Movies</p>
                                    <figure class="image is-64x64">
                                        <img src={letterboxd} />
                                    </figure>
                                </div>
                            </div>
                        </nav>
                    </div>
                </footer>
            </Contstraint>
        </Layout>
    )
}
