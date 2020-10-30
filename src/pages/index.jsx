import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="パソコンのべんきょうのためのリンク"
        description="たのしくまなべそうなサイトをあつめました。"
        image={data.hero.url}
      />


      <Hero
        image={data.hero}
        tag="#study"
        title="パソコンのべんきょうのためのリンク"
        description="たのしくまなべそうなサイトをあつめました"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "tm-image.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          country
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
          country
          url
        }
      }
    }
  }
`
