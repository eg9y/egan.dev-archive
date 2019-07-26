import React from "react"

import Layout from "../components/layout"
import contact from "../components/images/contact.svg"

export default function form() {
  return (
    <Layout>
      <div className="section" id="contact-grid">
        <div id="form-grid">
          <h1 className="is-1 title">Contact</h1>
          <h2 className="is-6 subtitle">
            Starting a new project?
            <br />
            Recruiting a Fullstack/Software Engineer Intern or New Grad?
            <br />
            Or just down to chat?
            <br />
            Feel free to message!
          </h2>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <p>
                <label className="label">
                  Your Name:
                  <input
                    className="input is-dark"
                    type="text"
                    name="name"
                    placeholder="e.g Alex Smith"
                    required
                  />
                </label>
              </p>
            </div>
            <div className="field">
              <p>
                <label className="label">
                  Your Email:
                  <input
                    className="input is-dark"
                    type="email"
                    name="email"
                    placeholder="e.g asmith@hotmail.com"
                    required
                  />
                </label>
              </p>
            </div>
            <div className="field">
              <p>
                <label className="label">
                  Message:
                  <textarea
                    className="textarea"
                    name="message"
                    placeholder="Greetings Egan, I would like to lend you a job ASAP"
                    required
                  />
                </label>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-dark">Submit</button>
              </p>
            </div>
          </form>
        </div>
        <figure className="image" id="contact-visual">
          <img src={contact} alt="" />
        </figure>
      </div>
    </Layout>
  )
}
