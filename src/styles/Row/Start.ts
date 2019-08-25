import styled from "styled-components"
import { getRule } from "../../util/viewports"

import { RowBlock } from "./Block"

export const RowStart = styled(RowBlock)`
  text-align: right;

  @media ${getRule("max", "laptop")} {
    font-size: 0;
    line-height: 0;
    justify-content: space-between;
    padding: 10px 16px;
    margin-top: 1rem;
    border-bottom: none;
    border-top: 1px solid hsla(0, 0%, 0%, 0.12);
  }
`
