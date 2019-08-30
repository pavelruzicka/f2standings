import styled from "styled-components"

import { TableItem, TableRow } from "./Layout/Table"
import { getRule } from "../util/viewports"

export const RowBase = styled(TableItem)<{ short: string }>`
  display: ${p => (p.short === "DOE" ? "none" : "table-cell")};
  padding: 0;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`

export const RowBlock = styled(TableItem)<{
  bold?: boolean
  mobileOnly?: boolean
  desktopOnly?: boolean
  alignLeft?: boolean
}>`
  text-align: ${p => (p.alignLeft ? "left" : "center")};
  vertical-align: middle;
  font-weight: ${p => (p.bold ? "500" : "initial")};

  @media ${getRule("max", "laptop")} {
    font-weight: 500;
    display: ${p => (p.desktopOnly ? "none" : "flex")};
    justify-content: space-between;
    align-items: flex-start;
    padding: 4px 6px;
    border-bottom: none;
  }

  @media ${getRule("min", "laptop")} {
    display: ${p => (p.mobileOnly ? "none" : "table-cell")};
  }
`

export const RowStart = styled(RowBlock)`
  text-align: right;

  @media ${getRule("max", "laptop")} {
    font-size: 0;
    line-height: 0;
    justify-content: space-between;
    padding: 10px 16px;
    margin-top: 1rem;
    border-bottom: none;
    border-top: 1px solid hsla(0, 0%, 0%, 0.12);
  }
`

export const RowTable = styled.div`
  display: flex;
  margin-bottom: 0;

  @media ${getRule("max", "laptop")} {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const RowWrapper = styled(TableRow)`
  @media ${getRule("max", "laptop")} {
    display: block;
    width: 100%;
  }
`

export const RowWrapperClickable = styled(RowWrapper)<{ short: string }>`
  @media ${getRule("max", "laptop")} {
    display: ${p => (p.short === "DOE" ? "none" : "block")};
  }

  @media ${getRule("min", "laptop")} {
    display: ${p => (p.short === "DOE" ? "none" : "table-row")};
  }

  cursor: pointer;
`
export const RowFiller = styled(TableItem)`
  @media ${getRule("max", "laptop")} {
    display: none;
  }
`
