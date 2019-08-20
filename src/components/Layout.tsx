import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Header } from "./Header"

import "../styles/layout.css"
import { Footer, FooterLine, FooterLink } from "../styles/Layout/Footer"

export const Layout: React.FunctionComponent = ({ children }) => {
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
    <div className="uk-container">
      <Header />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <Footer>
          <FooterLine>
            The number one destination for FIA&nbsp;Formula&nbsp;2
            championship&nbsp;standings, race&nbsp;reports, and
            team&nbsp;overviews.
          </FooterLine>
          <FooterLine>
            Crafted in 2019 by{" "}
            <FooterLink href="https://pavelruzicka.com/" target="_blank">
              Pavel&nbsp;Růžička
            </FooterLink>
            &nbsp;and&nbsp;
            <FooterLink href="https://ruigrok.info/" target="_blank">
              Christian&nbsp;Ruigrok
            </FooterLink>
            .
          </FooterLine>
        </Footer>
      </div>
    </div>
  )
}
