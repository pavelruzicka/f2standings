import styled from "styled-components"

import { getRule } from "../../util/viewports"
import { TableItem } from "../Layout/Table"

export const RaceWrapper = styled(TableItem)`
  @media ${getRule("max", "laptop")} {
    display: none;
  }
`
