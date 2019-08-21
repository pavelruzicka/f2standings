import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "./Logo"

const HeaderWrapper = styled.header<{ smallMargin: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto ${p => (p.smallMargin ? 1 : 2.5)}rem;

  h3 {
    margin: 0;
  }

  link {
    display: flex;
    text-decoration: none;
  }

  > div {
    margin-left: auto;
  }
`

const ImageWrapper = styled.div`
  width: 60px;
  margin: 1rem 0.5rem;
`

interface IProps {
  logo?: boolean
  smallMargin?: boolean
  children: React.ReactNode
}

export const Header = ({
  logo = true,
  smallMargin = false,
  children,
}: IProps) => (
  <HeaderWrapper smallMargin={smallMargin}>
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
