import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import { Header } from "./Header"

import { footer, footerLine, footerLink } from "../styles/footer"
import "../styles/layout.css"

export const Layout: React.SFC = ({ children }) => {
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
      <div className="container">
        <Header />
        <div
          style={{
            margin: `0 auto`,
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
      </div>
    </>
  )
}
