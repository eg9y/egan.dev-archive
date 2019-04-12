import React from 'react'

import Layout from '../components/layout'

export default function form() {
    return (
        <Layout>
            <div class="section">
                <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field">
                        <p>
                            <label className="label">
                                Your Name:
                                <input className="input is-dark" type="text" name="name"
                                    placeholder="e.g Alex Smith" />
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p>
                            <label className="label">
                                Your Email:
                                <input className="input is-dark" type="email" name="email"
                                    placeholder="e.g asmith@hotmail.com" />
                            </label>
                        </p>
                    </div>
                    <div class="field">
                        <p>
                            <label className="label">
                                Message:
                                <textarea className="textarea" name="message"
                                    placeholder="Greetings Egan, I would like to lend you a job ASAP"></textarea>
                            </label>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-dark">
                                Submit
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
