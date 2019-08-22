import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const RowWrapper = styled.tr`
  @media ${getRule("max", "laptop")} {
    display: block;
    width: 100%;

    & > * {
      display: block;
    }
  }
`

export const RowWrapperClickable = styled(RowWrapper)<{ short: string }>`
  @media ${getRule("max", "laptop")} {
    && {
      display: ${p => (p.short === "DOE" ? "none" : "block")};
    }
  }

  @media ${getRule("min", "laptop")} {
    && {
      display: ${p => (p.short === "DOE" ? "none" : "table-row")};
    }
  }

  cursor: pointer;

  &:hover {
    background-color: #eff2f7;
  }
`
