import React from "react"

import { Header } from "../Header"

import { SubMenuLink } from "../../styles/Layout/MenuLink"

interface IProps {
  origin: "drivers" | "teams"
}

export const SubMenu = ({ origin }: IProps) => {
  return (
    <Header subStyling>
      <SubMenuLink to={`/${origin}`} activeStyle={{ opacity: 1 }}>
        Table
      </SubMenuLink>
      <SubMenuLink to={`/${origin}/chart`} activeStyle={{ opacity: 1 }}>
        Chart
      </SubMenuLink>
    </Header>
  )
}
