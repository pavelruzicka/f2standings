import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

import { Header } from "./Header"

import { MenuLink } from "../styles/menuLink"

import "../styles/layout.css"

const Footer = styled.footer`
  margin: 2.5rem 0 6rem;
  padding: 1.5rem 0;
`

const FooterLine = styled.p`
  font-size: 15.5px;
  margin-bottom: 0;
  text-align: center;
`

const FooterLink = styled.a`
  color: #273746;
  text-decoration: underline;

  :hover {
    color: #273746;
    text-decoration: none;
  }
`

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
      <Header>
        <Link
          to="/drivers"
          style={MenuLink}
          activeStyle={{ opacity: 1 }}
          partiallyActive={true}
        >
          Drivers
        </Link>
        <Link
          to="/teams"
          style={MenuLink}
          activeStyle={{ opacity: 1 }}
          partiallyActive={true}
        >
          Teams
        </Link>
        <Link
          to="/races"
          style={MenuLink}
          activeStyle={{ opacity: 1 }}
          partiallyActive={true}
        >
          Races
        </Link>
      </Header>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <Footer>
          <FooterLine>{data.site.siteMetadata.description}</FooterLine>
          <FooterLine>
            Crafted in 2019 by{" "}
            <FooterLink
              href="https://pavelruzicka.com/"
              rel="noopener"
              target="_blank"
            >
              Pavel Růžička
            </FooterLink>{" "}
            and{" "}
            <FooterLink
              href="https://ruigrok.info/"
              rel="noopener"
              target="_blank"
            >
              Christian Ruigrok
            </FooterLink>
            .
          </FooterLine>
        </Footer>
      </div>
    </div>
  )
}
