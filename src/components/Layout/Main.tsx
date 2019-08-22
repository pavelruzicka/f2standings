import React from "react"
import { Link } from "gatsby"

import { Header } from "../Header"

import { Footer, FooterLine, FooterLink } from "../../styles/Layout/Footer"
import { MenuLink } from "../../styles/Layout/MenuLink"
import "../../styles/layout.css"

export const Layout: React.FunctionComponent = ({ children }) => {
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
          <FooterLine>
            The number one destination for FIA&nbsp;Formula&nbsp;2
            championship&nbsp;standings, race&nbsp;reports, and
            team&nbsp;overviews.
          </FooterLine>
          <FooterLine>
            Crafted in 2019 by{" "}
            <FooterLink
              href="https://pavelruzicka.com/"
              rel="noopener"
              target="_blank"
            >
              Pavel&nbsp;Růžička
            </FooterLink>
            &nbsp;and&nbsp;
            <FooterLink
              href="https://ruigrok.info/"
              rel="noopener"
              target="_blank"
            >
              Christian&nbsp;Ruigrok
            </FooterLink>
            .
          </FooterLine>
        </Footer>
      </div>
    </div>
  )
}
