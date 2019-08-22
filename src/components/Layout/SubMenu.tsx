import React from "react"
import { Link } from "gatsby"

import { Header } from "../Header"

import { SubMenuLink } from "../../styles/Layout/MenuLink"

export const SubMenu = ({ origin }: { origin: "drivers" | "teams" }) => {
  return (
    <Header logo={false} subStyling={true}>
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
