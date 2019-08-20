import { graphql, useStaticQuery } from 'gatsby'

const useNotes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  console.log(data)

  return data.allMdx.nodes.map(item => ({
    title: item.frontmatter.title,
    slug: item.frontmatter.slug,
    excerpt: item.excerpt
  }))
};

export default useNotes
