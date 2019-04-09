import React from 'react'

export default function card(props) {
    const { name, desc, preview, source } = props;
    return (
        <div class="card ">
            <div class="card-content">
                <p class="title is-5">
                    {name}
                </p>
                <p class="subtitle is-6">
                    {desc}
                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        {preview
                            ? <a href={preview} target="_blank">preview</a>
                            : "coming soon..."
                        }
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        {source
                            ? <a href={source} target="_blank"> {`</source>`}</a>
                            : "🤫"
                        }

                    </span>
                </p>
            </footer>
        </div>
    )
}
