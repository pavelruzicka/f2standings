import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const LocationWrapperShortened = styled.div`
  padding: 0.3rem 0;
  text-align: center;

  @media ${getRule("max", "laptop")} {
    display: none;
  }
`

export const LocationWrapperExpanded = styled.div`
  padding: 0 6px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`

export const Circuit = styled.span`
  font-size: 90%;
  font-weight: bold;
`
