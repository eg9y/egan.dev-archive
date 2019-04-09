import React from "react"
import { Link } from "gatsby"


export default (props) => {
    return (
        <Link to={`/${props.title.toLowerCase()}/`}
        >
            {props.title}
        </Link >
    )
}