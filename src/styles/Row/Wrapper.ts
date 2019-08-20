import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const RowWrapper = styled.tr`
  @media ${getRule("max", "laptop")} {
    display: block;

    & > * {
      display: block;
    }
  }
`

export const RowWrapperClickable = styled(RowWrapper)`
  cursor: pointer;

  &:hover {
    background-color: #eff2f7;
  }
`
