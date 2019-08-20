import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const RaceWrapper = styled.td`
  @media ${getRule("max", "laptop")} {
    && {
      display: none;
    }
  }
`

export const RaceWrapperMobile = styled.td`
  &&  {
    display: flex;
    justify-content: space-between;
    border-bottom: none;
    padding: 4px 6px;
  }

  @media ${getRule("min", "laptop")} {
    && {
      display: none;
    }
  }
`
