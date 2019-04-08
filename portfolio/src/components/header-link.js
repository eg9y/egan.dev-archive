import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"


export default (props) => {
    return (
        <Link to={`/${props.title.toLowerCase()}/`}
            css={css`
              margin-left: ${rhythm(1)};
              display: inline-block;
              font-style: normal;
              float: right;
            `}
        >
            {props.title}
        </Link >
    )
}