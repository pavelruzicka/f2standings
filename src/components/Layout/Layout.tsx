import React from "react"

import { MainMenu } from "./MainMenu"

import { Footer, FooterLine, FooterLink } from "../../styles/Layout/Footer"
import "../../styles/layout.css"

interface IProps {
  children: React.ReactNode
  onChartPage: boolean
}

export function Layout({ children, onChartPage }: IProps) {
  return (
    <div className="uk-container">
      <MainMenu onChartPage={onChartPage} />
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
