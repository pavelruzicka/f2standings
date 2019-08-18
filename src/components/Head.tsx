import React from "react"
import Helmet from "react-helmet"

import { graphql, useStaticQuery } from "gatsby"

interface ISEOProps {
  description?: string
  lang?: string
  title: string
}

export const Head = ({ description, lang, title }: ISEOProps) => {
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
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: "F2standings.com",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: "https://f2standings.com/images/og-image.png",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata.author },
        { name: `twitter:title`, content: "F2standings.com" },
        { name: `twitter:description`, content: metaDescription },
      ]}
    />
  )
}
