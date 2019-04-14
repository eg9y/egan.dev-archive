import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import floor from "../components/images/blog-floor.svg"

import "../styles/styles.scss"

export default ({ data, location }) => {
  return (
    <Layout location={location}>
      <section id="blog-grid">
        <div id="blog-list">
          <h2 className="title is-1">Blog</h2>
          <h2 className="subtitle">{data.allMarkdownRemark.totalCount} Posts</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css="text-decoration: none;color: inherit;">
                <h3 className="title"
                  css="margin-bottom: 10px;"
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css="color: #bbb;"
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p className="subtitle">{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
        <div id="blog-vector">
          <figure className="image">
            <img src={floor} alt="" />
          </figure>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`