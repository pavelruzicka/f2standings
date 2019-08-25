import React from "react"
import { Link } from "gatsby"

import { Header } from "../Header"

import { MenuLink } from "../../styles/Layout/MenuLink"

interface IProps {
  onChartPage: boolean
}

export function MainMenu({ onChartPage }: IProps) {
  return (
    <Header logo>
      <MenuLink
        to={`/drivers${onChartPage ? "/chart" : ""}`}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Drivers
      </MenuLink>
      <MenuLink
        to={`/teams${onChartPage ? "/chart" : ""}`}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Teams
      </MenuLink>
      <MenuLink to="/races" activeStyle={{ opacity: 1 }} partiallyActive>
        Races
      </MenuLink>
    </Header>
  )
}
