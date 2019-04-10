import React from 'react'

import "../styles/styles.scss";

export default function card(props) {
    const { name, desc, preview, source, icon, icon_class } = props;
    const style = {
        'marginRight': '1rem'
    };
    return (
        <div className="box">
            <div className="media">
                <div className="media-content">
                    <div className="content">
                        <p className="title is-5 has-text-weight-semibold">
                            {name}
                        </p>
                        <p className="subtitle is-6">
                            {desc}
                        </p>

                        {preview
                            && <a href={preview} target="_blank" className="button is-outlined" style={style}>"preview"</a>

                        }

                        {source
                            ? <a href={source} target="_blank" className="button is-outlined has-text-weight-bold">{"</source>"}</a>
                            : <a href={source} target="_blank" disabled className="button has-text-weight-bold">coming soon...</a>
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
