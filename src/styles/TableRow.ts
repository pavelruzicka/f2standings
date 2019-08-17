import styled from "styled-components"

import { viewports } from "../util/viewports"

export const RowInit = styled.td`
  color: black;
  text-align: right;
`

export const RowInitVert = styled(RowInit)`
  && {
    vertical-align: middle;
  }
`

export const RowVert = styled.td`
  && {
    vertical-align: middle;
  }
`

export const RowBlock = styled.td`
  && {
    text-align: center;
    vertical-align: middle;
  }
`

export const RowWrapper = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #eff2f7;
  }
`
