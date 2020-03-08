import React from "react"

import { Header } from "../Header"

import { MenuLink } from "../../styles/Layout/MenuLink"

interface IProps {
  onChartPage: boolean
  year: string
  availableYears: string[]
  path: string
}

export function MainMenu({ onChartPage, path, year, availableYears }: IProps) {
  return (
    <Header logo year={year} path={path} availableYears={availableYears}>
      <MenuLink
        to={`/${year}/drivers${onChartPage ? "/chart" : ""}`}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Drivers
      </MenuLink>
      <MenuLink
        to={`/${year}/teams${onChartPage ? "/chart" : ""}`}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Teams
      </MenuLink>
      <MenuLink
        to={`/${year}/races`}
        activeStyle={{ opacity: 1 }}
        partiallyActive
      >
        Races
      </MenuLink>
    </Header>
  )
}
