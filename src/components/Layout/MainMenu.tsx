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
      <Link
        to={`/drivers${onChartPage ? "/chart" : ""}`}
        style={MenuLink}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Drivers
      </Link>
      <Link
        to={`/teams${onChartPage ? "/chart" : ""}`}
        style={MenuLink}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Teams
      </Link>
      <Link
        to="/races"
        style={MenuLink}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Races
      </Link>
    </Header>
  )
}
