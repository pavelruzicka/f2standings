import styled from "styled-components"

import { getRule } from "../util/viewports"

export const FlagElement = styled.img<{
  large: boolean
  space: boolean
}>`
  bottom: ${p => (p.large ? 2 : 0)}px;
  margin: 0 ${p => (p.space ? 0.5 : 0)}rem 0 0;
  position: ${p => (p.large ? "relative" : "static")};
  width: ${p => (p.large ? 24 : 21)}px;
  user-select: none;

  @media ${getRule("max", "laptop")} {
    && {
      width: 18px;
      bottom: 1px;
      margin: 0 ${p => (p.space ? 0.35 : 0)}rem 0 0;
    }
  }
`
