import React from 'react'
import { Link } from "gatsby"
import ScrollIntoView from 'react-scroll-into-view'

export default function scroll_view() {
    return (
        <React.Fragment>
            <ScrollIntoView selector="#projects">
                <a className="has-text-grey-darker">
                    <p className="navbar-item has-text-weight-semibold">
                        Projects
                </p>
                </a>
            </ScrollIntoView>
            <ScrollIntoView selector="#about">
                <p className="navbar-item has-text-weight-semibold">
                    <a className="has-text-grey-darker">
                        About
                    </a>
                </p>
            </ScrollIntoView>
        </React.Fragment>
    )
}
