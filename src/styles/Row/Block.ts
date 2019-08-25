import styled from "styled-components"
import { getRule } from "../../util/viewports"
import { TableItem } from "../Layout/Table"

export const RowBlock = styled(TableItem)<{
  bold?: boolean
  alignLeft?: boolean
}>`
  text-align: ${p => (p.alignLeft ? "left" : "center")};
  vertical-align: middle;
  font-weight: ${p => (p.bold ? "500" : "initial")};

  @media ${getRule("max", "laptop")} {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    padding: 4px 6px;
    border-bottom: none;
  }
`
