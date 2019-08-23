import React from "react"
import { Link } from "gatsby"

import { Header } from "../Header"

import { SubMenuLink } from "../../styles/Layout/MenuLink"

interface IProps {
  origin: "drivers" | "teams"
}

export const SubMenu = ({ origin }: IProps) => {
  return (
    <Header subStyling>
      <Link to={`/${origin}`} style={SubMenuLink} activeStyle={{ opacity: 1 }}>
        Table
      </Link>
      <Link
        to={`/${origin}/chart`}
        style={SubMenuLink}
        activeStyle={{ opacity: 1 }}
      >
        Chart
      </Link>
    </Header>
  )
}
