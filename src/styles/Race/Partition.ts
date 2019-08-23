import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const PartitionWrapper = styled.div<{ padded?: boolean }>`
  flex-basis: 50%;
  padding: ${p => (p.padded ? "0.3rem 0" : 0)};
  text-align: center;

  @media ${getRule("max", "laptop")} {
    text-align: left;
    padding: 0 0 0 6px;
  }
`

export const TypeShortened = styled.span`
  @media ${getRule("max", "laptop")} {
    display: none;
  }
`

export const TypeExpanded = styled.small`
  text-transform: uppercase;

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`
