import styled from "styled-components"

import { TableRow } from "./Layout/Table"
import { getRule } from "../util/viewports"

export const ExpandHelper = styled(TableRow)<{ mobileOnly: boolean }>`
  text-align: center;
  margin: 0;
  color: #848484;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
  cursor: pointer;

  @media ${getRule("min", "laptop")} {
    display: ${p => (p.mobileOnly ? "none" : "table-row")};
  }

  td:first-child {
    padding-bottom: 1rem;
  }
`
