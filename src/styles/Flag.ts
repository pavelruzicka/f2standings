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
  vertical-align: middle;
  user-select: none;

  @media ${getRule("max", "laptopM")} {
    width: 21px;
    margin: 0 ${p => (p.space ? 0.35 : 0)}rem 0 0;
  }
`
