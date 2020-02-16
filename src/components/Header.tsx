import React from "react"
import { Link } from "gatsby"

import { Logo } from "./Logo"

import { IHeaderProps } from "../interfaces/Props"

import {
  HeaderWrapper,
  ImageWrapper,
  YearWrapper,
  Bullet,
} from "../styles/Layout/Header"

export const Header = ({
  logo = false,
  subStyling = false,
  children,
  availableYears,
}: IHeaderProps) => (
  <HeaderWrapper subStyling={subStyling}>
    {logo ? (
      <h3>
        <Link to="/" title="F2 Standings">
          <ImageWrapper>
            <Logo />
          </ImageWrapper>
        </Link>
        <YearWrapper>
          {availableYears.map((year, index) => (
            <>
              {index !== 0 ? <Bullet /> : null}
              <Link
                key={year}
                to={`/${year}`}
                activeStyle={{ opacity: 1 }}
                partiallyActive
              >
                {year}
              </Link>
            </>
          ))}
        </YearWrapper>
      </h3>
    ) : null}

    <div>{children}</div>
  </HeaderWrapper>
)
