import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug }}) {
      body
      frontmatter {
        title
        author
      }
    }
  }
`;

const NotesTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout >
)

export default NotesTemplate
