import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const RowInit = styled.td`
  color: black;
  text-align: right;

  @media ${getRule("max", "laptop")} {
    && {
      display: none;
    }
  }
`

export const RowInitMobile = styled.td`
  && {
    font-weight: 500;
    text-align: left;
    padding: 4px 6px;
  }

  @media ${getRule("min", "laptop")} {
    display: none;
  }

  @media ${getRule("max", "laptop")} {
    && {
      display: flex;
      justify-content: space-between;
      border-bottom: none;
    }
  }
`

export const RowInitVert = styled(RowInit)`
  && {
    vertical-align: middle;
  }

  @media ${getRule("max", "laptop")} {
    && {
      display: none;
    }
  }
`
