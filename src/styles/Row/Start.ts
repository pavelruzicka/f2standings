import styled from "styled-components"
import { getRule } from "../../util/viewports"

import { RowBlock } from "./Block"

export const RowStart = styled(RowBlock)`
  && {
    text-align: left;
  }

  @media ${getRule("max", "laptop")} {
    && {
      display: flex;
      justify-content: space-between;
      padding: 16px 6px 4px;
      margin-top: 1rem;
      border-bottom: none;
      border-top: 2px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`

export const RowStartVert = styled(RowStart)`
  @media ${getRule("min", "laptop")} {
    && {
      vertical-align: middle;
    }
  }
`
