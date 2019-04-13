import React from 'react'

import github from '../components/images/github.svg'
import linkedin from '../components/images/linkedin.svg'
import letterboxd from '../components/images/letterboxd.svg'

export default function footer() {
    return (
        <div className="section columns is-mobile showMe">
            <div className="column is-4">
                <figure className="image is-32x32">
                    <a href="https://github.com/VVNoodle" target="_blank">
                        <img src={github} />
                    </a>
                </figure>
            </div>
            <div className="column is-4">
                <figure className="image is-32x32">
                    <a href="https://www.linkedin.com/in/eganbisma/" target="_blank">
                        <img src={linkedin} />
                    </a>
                </figure>
            </div>
            <div className="column is-4">
                <figure className="image is-32x32 ">
                    <a href="https://letterboxd.com/egan/" target="_blank">
                        <img src={letterboxd} />
                    </a>
                </figure>
            </div>
        </div>
    )
}
