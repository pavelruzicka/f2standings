import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const RowTable = styled.div`
  display: flex;
  margin-bottom: 0;

  @media ${getRule("max", "laptop")} {
    flex-direction: column;
    flex-wrap: wrap;
  }
`
