import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const ResultWrapper = styled.div<{ active?: boolean; bold?: boolean }>`
  flex-basis: 50%;
  font-weight: ${p => (p.bold ? "bold" : 500)};
  opacity: ${p => (p.active ? 1 : 0.4)};
  padding: 0.3rem 0;
  text-align: center;

  @media ${getRule("max", "laptop")} {
    text-align: right;
    padding: 0 6px 0 0;
  }
`
