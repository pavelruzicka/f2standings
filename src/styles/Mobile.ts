import styled from "styled-components"

import { getRule } from "../util/viewports"

export const MobileLabel = styled.span<{ varied?: boolean }>`
  display: block;
  text-align: left;
  font-size: 0.875rem;
  font-weight: ${p => (p.varied ? "bold" : "normal")};
  color: ${p => (p.varied ? "black" : "#565656")};
  text-transform: uppercase;

  span {
    font-size: 0.875rem;
    font-weight: normal;
    margin-right: 0.1rem;
  }

  b {
    color: #000;
    font-size: 1.3rem;
  }

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`

export const MobileContent = styled.div`
  vertical-align: middle;

  @media ${getRule("max", "laptop")} {
    text-align: right;
  }
`

export const MobileContentReversed = styled(MobileContent)`
  @media ${getRule("max", "laptop")} {
    display: none;
  }
`

export const MobileContentReversedSmall = styled(MobileContent)`
  @media ${getRule("min", "laptop")} {
    display: none;
  }
`
