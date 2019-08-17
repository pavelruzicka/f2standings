import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "./Logo"

import { MenuLink } from "../styles/menuLink"
import { getRule } from "../util/viewports"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto 2.5rem;

  @media ${getRule("max", "mobileL")} {
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  link {
    display: flex;
    text-decoration: none;
  }
`

const ImageWrapper = styled.div`
  width: 60px;
  margin: 1rem 0.5rem;
`

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
