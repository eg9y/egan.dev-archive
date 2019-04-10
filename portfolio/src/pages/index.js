// import React from 'react'

import NavBar from '../components/navbar'
import Contstraint from '../components/constraint'
import Projects from '../components/projects'
import About from '../components/about'
import Home from '../components/home'
import Layout from '../components/layout'

import github from '../components/images/github.svg'
import linkedin from '../components/images/linkedin.svg'
import letterboxd from '../components/images/letterboxd.svg'

import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <Home />
                <Contstraint>
                    <Projects />
                </Contstraint>
                <About />
                <footer className="footer">
                    <div className="content has-text-centered">
                        <nav className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Code</p>
                                    <figure className="image is-64x64">
                                        <img src={github} />
                                    </figure>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Network</p>
                                    <figure className="image is-64x64">
                                        <img src={linkedin} />
                                    </figure>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Movies</p>
                                    <figure className="image is-64x64">
                                        <img src={letterboxd} />
                                    </figure>
                                </div>
                            </div>
                        </nav>
                    </div>
                </footer>
            </Layout>
        )
    }
}


// export default function index(props) {
//     return (
//         <Layout location={props.location}>
//             <Home />
//             <Contstraint>
//                 <Projects />
//             </Contstraint>
//             <About />
//             <footer className="footer">
//                 <div className="content has-text-centered">
//                     <nav className="level">
//                         <div className="level-item has-text-centered">
//                             <div>
//                                 <p className="heading">Code</p>
//                                 <figure className="image is-64x64">
//                                     <img src={github} />
//                                 </figure>
//                             </div>
//                         </div>
//                         <div className="level-item has-text-centered">
//                             <div>
//                                 <p className="heading">Network</p>
//                                 <figure className="image is-64x64">
//                                     <img src={linkedin} />
//                                 </figure>
//                             </div>
//                         </div>
//                         <div className="level-item has-text-centered">
//                             <div>
//                                 <p className="heading">Movies</p>
//                                 <figure className="image is-64x64">
//                                     <img src={letterboxd} />
//                                 </figure>
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </footer>
//         </Layout>
//     )
// }
