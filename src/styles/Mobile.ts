import styled from "styled-components"

import { getRule } from "../util/viewports"

export const MobileLabel = styled.span<{ varied?: boolean }>`
  text-align: left;
  vertical-align: bottom;
  font-size: 0.875rem;
  font-weight: ${p => (p.varied ? "bold" : "normal")};
  color: ${p => (p.varied ? "black" : "#565656")};
  text-transform: uppercase;

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`

export const MobileContent = styled.div`
  @media ${getRule("max", "laptop")} {
    && {
      text-align: right;
    }
  }
`

export const MobileContentReversed = styled(MobileContent)`
  @media ${getRule("max", "laptop")} {
    && {
      display: none;
    }
  }
`

export const MobileContentReversedSmall = styled(MobileContent)`
  @media ${getRule("min", "laptop")} {
    && {
      display: none;
    }
  }
`
