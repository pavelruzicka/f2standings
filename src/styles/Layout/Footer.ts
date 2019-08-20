import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const Footer = styled.footer`
  margin: 2.5rem 0 6rem;
  padding: 1.5rem 0;
`

export const FooterLine = styled.p`
  font-size: 15.5px;
  margin-bottom: 0;
  text-align: center;

  @media ${getRule("max", "laptop")} {
    margin-top: 0.5rem;
  }
`

export const FooterLink = styled.a`
  color: #273746;
  text-decoration: underline;

  :hover {
    color: #273746;
    text-decoration: none;
  }
`
