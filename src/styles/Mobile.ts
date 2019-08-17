import styled from "styled-components"

import { getRule } from "../util/viewports"

export const MobileLabel = styled.span`
  text-align: left;
  vertical-align: bottom;
  font-size: 0.875rem;
  font-weight: normal;
  color: #565656;
  text-transform: uppercase;

  @media ${getRule("min", "mobileL")} {
    display: none;
  }
`

export const MobileText = styled.span`
  @media ${getRule("max", "mobileL")} {
    && {
      text-align: right;
    }
  }
`
