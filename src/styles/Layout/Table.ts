import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`

export const TableItem = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid #e0e0e0;
  vertical-align: top;

  @media ${getRule("min", "laptop")} {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`

export const TableHead = styled(TableItem.withComponent("th"))<{
  textAlign?: string
}>`
  color: rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  text-align: ${p => p.textAlign || "left"};
  font-weight: 400;
  font-size: 0.875rem;
`

export const TableHeadWrapper = styled.thead`
  @media ${getRule("max", "laptop")} {
    display: none;
  }
`

export const TableRow = styled.tr`
  transition: background-color 0.1s;
`

export const TableFooter = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin: 1em 0;
  padding: 0;

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`
