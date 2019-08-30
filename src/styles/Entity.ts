import styled from "styled-components"

import { getRule } from "../util/viewports"

export const EntityName = styled.span`
  @media ${getRule("max", "laptop")} {
    display: block;
  }
`
export const EntityPos = styled.div`
  background: tomato;
  width: 32px;
  height: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: black;
  background: rgba(0, 0, 0, 0.12);
`
