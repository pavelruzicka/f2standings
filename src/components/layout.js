import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "../styles/layout.css"
import { footer, footerLine, footerLink } from "../styles/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1024,
        }}
      >
        <main>{children}</main>
        <footer style={footer}>
          <p style={footerLine}>{data.site.siteMetadata.description}</p>
          <p style={footerLine}>
            Crafted in {new Date().getFullYear()} by{" "}
            <a
              style={footerLink}
              href="https://www.pavelruzicka.com/"
              target="_blank"
            >
              Pavel Růžička
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
