import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const RaceWrapper = styled.div<{ upcoming?: boolean }>`
  flex: 1 1 0;

  @media ${getRule("max", "laptop")} {
    display: ${p => (p.upcoming ? "none" : "block")};
    flex: none;
    padding: 10px 0;

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
