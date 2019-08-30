import React from "react"

import { MainMenu } from "./MainMenu"

import { Footer, FooterLine, FooterLink } from "../../styles/Layout/Footer"
import { GlobalStyle, Container } from "../../styles/Global"

interface IProps {
  children: React.ReactNode
  onChartPage: boolean
}

export function Layout({ children, onChartPage }: IProps) {
  return (
    <Container>
      <GlobalStyle />
      <MainMenu onChartPage={onChartPage} />
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

        <FooterLine>
          Check out{" "}
          <FooterLink
            href="https://f2calendar.com/"
            rel="noopener"
            target="_blank"
          >
            F2calendar
          </FooterLink>{" "}
          as well.
        </FooterLine>
      </Footer>
    </Container>
  )
}
