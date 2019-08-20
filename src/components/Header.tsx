import React from "react"
import { Link } from "gatsby"

import { Logo } from "./Logo"

import { MenuLink } from "../styles/menuLink"
import { HeaderWrapper, ImageWrapper } from "../styles/Header"

export const Header = () => (
  <HeaderWrapper>
    <h3>
      <Link to="/">
        <ImageWrapper>
          <Logo />
        </ImageWrapper>
      </Link>
    </h3>

    <div>
      <Link to="/" style={MenuLink} activeStyle={{ opacity: 1 }}>
        Drivers
      </Link>
      <Link to="/teams" style={MenuLink} activeStyle={{ opacity: 1 }}>
        Teams
      </Link>
      <Link to="/races" style={MenuLink} activeStyle={{ opacity: 1 }}>
        Races
      </Link>
    </div>
  </HeaderWrapper>
)
