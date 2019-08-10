import React from "react"
import Helmet from "react-helmet"

import { graphql, useStaticQuery } from "gatsby"

interface ISEOProps {
  description?: string
  lang?: string
  title: string
}

export const SEO = ({ description, lang, title }: ISEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        { content: `summary`, name: `twitter:card` },
        { content: site.siteMetadata.author, name: `twitter:creator` },
        { content: title, name: `twitter:title` },
        { content: metaDescription, name: `twitter:description` },
      ]}
    />
  )
}
