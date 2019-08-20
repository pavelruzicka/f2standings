import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const RowBlock = styled.td`
  && {
    text-align: center;
    vertical-align: middle;
  }

  @media ${getRule("max", "mobileL")} {
    && {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      padding: 4px 6px;
      border-bottom: none;
    }
  }
`

export const RowBlockVert = styled.td`
  font-weight: bold;

  && {
    vertical-align: middle;
  }

  @media ${getRule("max", "mobileL")} {
    && {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding: 16px 6px 4px;
      border-bottom: none;
      border-top: 2px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`
