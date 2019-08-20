import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

import useNotes from "../hooks/use-notes"

export default () => {

  const notes = useNotes()

  return (
    <Layout>
      <SEO title="Notes" />
      <section>
        <h1>Notes</h1>
        {notes.map(item => (
          <article key={item.slug}>
            {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
            <h2>{item.title}</h2>
            <p>{item.excerpt}</p>
            <Link to={item.slug}>Visit</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}
