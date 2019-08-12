import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Image from "./Image"

import { MenuLink } from "../styles/MenuLink"

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 2.5rem;

  h3 {
    margin: 0;
  }

  link {
    display: flex;
    text-decoration: none;
  }
`

const ImageWrapper = styled.div`
  width: 90px;
  margin: 1rem 0.5rem;
`

export const Header = () => (
  <HeaderWrapper>
    <div>
      <h3>
        <Link to="/">
          <ImageWrapper>
            <Image />
          </ImageWrapper>
        </Link>
      </h3>
    </div>

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
