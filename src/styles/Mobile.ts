import styled from "styled-components"

import { getRule } from "../util/viewports"

export const MobileLabel = styled.span<{ varied?: boolean }>`
  text-align: left;
  vertical-align: bottom;
  font-size: 0.875rem;
  font-weight: ${p => (p.varied ? "bold" : "normal")};
  color: ${p => (p.varied ? "black" : "#565656")};
  text-transform: uppercase;

  @media ${getRule("min", "mobileL")} {
    display: none;
  }
`

export const MobileContent = styled.div`
  @media ${getRule("max", "mobileL")} {
    && {
      text-align: right;
    }
  }
`

export const MobileContentReversed = styled(MobileContent)`
  @media ${getRule("max", "mobileL")} {
    && {
      display: none;
    }
  }
`

export const MobileContentReversedSmall = styled(MobileContent)`
  @media ${getRule("min", "mobileL")} {
    && {
      display: none;
    }
  }
`

export const RaceContentWrapper = styled.td`
  @media ${getRule("max", "mobileL")} {
    && {
      display: none;
    }
  }
`

export const RaceContentWrapperMobile = styled.td`
  &&  {
    display: flex;
    justify-content: space-between;
    border-bottom: none;
    padding: 4px 6px;
  }

  @media ${getRule("min", "mobileL")} {
    && {
      display: none;
    }
  }
`
