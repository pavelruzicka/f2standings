import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      f2Logo: file(relativePath: { eq: "f2-logo.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.f2Logo.childImageSharp.fixed} alt="F2Standings" />
}

export default Image
