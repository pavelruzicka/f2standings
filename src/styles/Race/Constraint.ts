import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const RaceConstraint = styled.div`
  @media ${getRule("max", "laptop")} {
    display: flex;
  }
`
