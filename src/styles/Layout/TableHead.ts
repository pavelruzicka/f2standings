import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const TableHead = styled.th`
  && {
    color: black;
  }
`

export const TableHeadInit = styled(TableHead)`
  && {
    text-align: right;
  }
`

export const TableHeadCentered = styled(TableHead)`
  && {
    text-align: center;
  }
`

export const TableHeadWrapper = styled.thead`
  @media ${getRule("max", "laptop")} {
    display: none;
  }
`
