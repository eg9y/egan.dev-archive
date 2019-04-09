import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout >
      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} className="is-4" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`