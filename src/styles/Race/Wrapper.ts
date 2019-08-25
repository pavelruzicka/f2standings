import styled from "styled-components"

import { getRule } from "../../util/viewports"
import { TableItem } from "../Layout/Table"

export const RaceWrapper = styled(TableItem)`
  @media ${getRule("max", "laptop")} {
    && {
      display: none;
    }
  }
`
export const RaceWrapperMobile = styled(TableItem)`
  display: flex;
  justify-content: space-between;
  border-bottom: none;
  padding: 4px 6px;

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`

export const RaceDate = styled.div`
  font-size: 0.9rem;
`
