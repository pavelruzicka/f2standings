import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const RaceWrapper = styled.div`
  flex: 1 1 0;

  @media ${getRule("max", "laptop")} {
    padding: 10px 0;
    height: 85px;

    &:not(:last-child) {
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    }
  }

  @media ${getRule("max", "laptop")} {
    height: 80px;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  padding: 0 0.35rem;

  @media ${getRule("max", "laptop")} {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0;
  }
`
