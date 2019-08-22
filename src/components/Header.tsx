import React from "react"
import { Link } from "gatsby"

import { Logo } from "./Logo"

import { IHeaderProps } from "../interfaces/Props"

import { HeaderWrapper, ImageWrapper } from "../styles/Layout/Header"

export const Header = ({
  logo = true,
  subStyling = false,
  children,
}: IHeaderProps) => (
  <HeaderWrapper subStyling={subStyling}>
    {logo ? (
      <h3>
        <Link to="/drivers" title="F2 Standings">
          <ImageWrapper>
            <Logo />
          </ImageWrapper>
        </Link>
      </h3>
    ) : null}

    <div>{children}</div>
  </HeaderWrapper>
)
