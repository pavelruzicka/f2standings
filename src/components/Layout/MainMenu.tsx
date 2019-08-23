import React from "react"
import { Link } from "gatsby"

import { Header } from "../Header"

import { MenuLink } from "../../styles/Layout/MenuLink"

export function MainMenu() {
  const onChartSubPage = window.location.pathname.includes("/chart")

  return (
    <Header logo>
      <Link
        to={`/drivers${onChartSubPage ? "/chart" : ""}`}
        style={MenuLink}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Drivers
      </Link>
      <Link
        to={`/teams${onChartSubPage ? "/chart" : ""}`}
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
