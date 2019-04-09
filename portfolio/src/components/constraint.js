import React from 'react'

export default function constraint(props) {
    return (
        <section className="hero is-medium is-bold is-fullheight">
            <div className="hero-body">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </section>
    )
}
