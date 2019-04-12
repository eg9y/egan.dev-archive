import React from 'react'

import "../styles/styles.scss";

export default function card(props) {
    const { name, desc, preview, source, icon, icon_class, list, tags } = props;
    const style = {
        'marginRight': '1rem'
    };
    return (
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <div className="tags">
                        <span className="project_title tag is-medium">{name}</span>
                        {tags}
                    </div>
                </p>
            </header>
            <div class="card-content">
                <div class="media">
                    <div className="media-content">
                        {desc}
                        <br />
                        <div class="content">
                            {list}
                        </div>
                    </div>
                    <div className="media-right">
                        <p class={`image ${icon_class}`}>
                            <img src={icon} className="" alt="project image" />
                        </p>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                {preview
                    &&
                    <p class="card-footer-item">
                        <a href={preview} target="_blank" className="is-outlined has-text-weight-bold" style={style}>preview</a>
                    </p>
                }
                <p class="card-footer-item">
                    {source
                        ? <a href={source} target="_blank" className="is-outlined has-text-weight-bold">{"<source/>"}</a>
                        : <p className="has-text-grey">coming soon...</p>
                    }
                </p>
            </footer>
        </div>
    )
}
