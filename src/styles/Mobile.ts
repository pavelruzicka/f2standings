import styled from "styled-components"

import { getRule } from "../util/viewports"
import { ColumnDriver } from "./Race/Column"

export const MobileLabel = styled.span<{ varied?: boolean }>`
  display: block;
  text-align: left;
  font-size: 0.875rem;
  font-weight: ${p => (p.varied ? "bold" : "normal")};
  color: ${p => (p.varied ? "black" : "#565656")};
  text-transform: uppercase;
  margin-top: 0.8rem;

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

export const TableContent = styled.div<{ horizontal?: boolean }>`
  vertical-align: middle;

  @media ${getRule("max", "laptop")} {
    text-align: right;
    display: ${p => (p.horizontal ? "flex" : "static")};
    flex-flow: ${p => (p.horizontal ? "row" : "column")} nowrap;

    ${ColumnDriver} {
      margin: 0 0.6rem;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export const DesktopContent = styled(TableContent)`
  @media ${getRule("max", "laptop")} {
    display: none;
  }
`

export const MobileContent = styled(TableContent)`
  @media ${getRule("min", "laptop")} {
    display: none;
  }
`
