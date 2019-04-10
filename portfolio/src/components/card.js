import React from 'react'

import "../styles/styles.scss";

export default function card(props) {
    const { name, desc, preview, source, icon, icon_class } = props;
    return (
        <div className="box">
            <div className="media">
                <div className="media-content">
                    <div className="content">
                        <p className="title is-5">
                            {name}
                        </p>
                        <p className="subtitle is-6">
                            {desc}
                        </p>
                        <a href={preview} target="_blank" className="button">
                            {preview
                                ? "preview"
                                : "coming soon..."
                            }
                        </a>
                        {source
                            && <a href={source} target="_blank" className="button"> {`</source>`}</a>
                        }
                    </div>
                </div>
                <figure className="media-right">
                    <p className={`image ${icon_class}`} id="icon">
                        <img src={icon} />
                    </p>
                </figure>
            </div>
        </div>
    )
}
