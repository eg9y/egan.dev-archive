import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data, location }) => {
  return (
    <Layout location={location}>
      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link
                  to={node.fields.slug}
                  css="text-decoration: none;color: inherit;">
                  <h3
                    css="margin-bottom: 10px;"
                  >
                    {node.frontmatter.title}{" "}
                    <span
                      css="color: #bbb;"
                    >
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
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