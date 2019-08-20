import styled from "styled-components"
import { getRule } from "../../util/viewports"

import { RowBlock } from "./Block"

export const RowEnd = styled(RowBlock)`
  @media ${getRule("max", "mobileL")} {
    && {
      padding: 4px 6px 16px;
      border-bottom: 2px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`
