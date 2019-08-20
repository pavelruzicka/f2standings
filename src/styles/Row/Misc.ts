import styled from "styled-components"
import { getRule } from "../../util/viewports"

import { RowBlock } from "./Block"

export const RowLeftAligned = styled(RowBlock)<{ border?: boolean }>`
  && {
    text-align: left;
  }

  @media ${getRule("max", "laptop")} {
    && {
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      margin-top: ${p => (p.border ? `1rem` : 0)};
      padding: 16px 6px 4px;
      border-bottom: none;
      border-top: ${p => (p.border ? `2px solid hsla(0, 0%, 0%, 0.12)` : ``)};
    }
  }
`

export const RowFiller = styled.td`
  @media ${getRule("max", "laptop")} {
    && {
      display: none;
    }
  }
`

export const RowBold = styled.td`
  font-weight: 500;

  @media ${getRule("max", "laptop")} {
    && {
      display: flex;
      justify-content: space-between;
      padding: 4px 6px;
      border-bottom: none;
    }
  }
`
