import { Link } from "gatsby"
import React, { Component } from 'react'

import { findDOMNode } from 'react-dom'
import '../styles/styles.scss'
import ScrollView from './scroll_view'

export default class NavBar extends Component {
    name = (
        <div className="navbar-brand">
            <h1 className="is-size-3-tablet is-size-5-mobile">
                <Link to="/" className="has-text-black">
                    Egan Bisma
        </Link>
            </h1>
        </div>
    )


    render() {
        const { location, is_dropshadow } = this.props;
        return (
            <nav className="navbar is-mobile is-spaced is-fixed-bottom is-warning" id={is_dropshadow ? "navbar-dropit" : "navbar-containit"} role="navigation" aria-label="main navigation">
                {this.name}
                <div className={`navbar-menu navbar-end `} >

                    {location.pathname == "/" && <ScrollView />}
                    <p className="navbar-item has-text-weight-semibold">
                        <Link to={'/current_status'} className="has-text-grey-darker">Status</Link>
                    </p>
                    <p className="navbar-item has-text-weight-semibold">
                        <Link to={'/blogs'} className="has-text-grey-darker">Blog</Link>
                    </p>
                </div>
            </nav>
        )
    }
}
