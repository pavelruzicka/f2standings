import React from "react"
import { Link } from "gatsby"

import { Header } from "../Header"

import { MenuLink } from "../../styles/Layout/MenuLink"

export function MainMenu() {
  return (
    <Header logo>
      <Link
        to="/drivers"
        style={MenuLink}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Drivers
      </Link>
      <Link
        to="/teams"
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
