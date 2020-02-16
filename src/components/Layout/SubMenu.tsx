import React from "react"

import { Header } from "../Header"

import { SubMenuLink } from "../../styles/Layout/MenuLink"

interface IProps {
  origin: "drivers" | "teams"
  year: string
  availableYears: string[]
}

export const SubMenu = ({ origin, year, availableYears }: IProps) => {
  return (
    <Header subStyling availableYears={availableYears}>
      <SubMenuLink to={`/${year}/${origin}`} activeStyle={{ opacity: 1 }}>
        Table
      </SubMenuLink>
      <SubMenuLink to={`/${year}/${origin}/chart`} activeStyle={{ opacity: 1 }}>
        Chart
      </SubMenuLink>
    </Header>
  )
}
