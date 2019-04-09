import React from 'react'
import { Link } from "gatsby"
import ScrollIntoView from 'react-scroll-into-view'

export default function scroll_view() {
    return (
        <React.Fragment>
            <ScrollIntoView selector="#about">
                <p className="navbar-item has-text-weight-semibold">
                    <a className="has-text-grey-darker">
                        About
                                </a>
                </p>
            </ScrollIntoView>
            <ScrollIntoView selector="#projects">
                <p className="navbar-item has-text-weight-semibold">
                    <a className="has-text-grey-darker">
                        Projects
                            </a>
                </p>
            </ScrollIntoView>
        </React.Fragment>
    )
}
