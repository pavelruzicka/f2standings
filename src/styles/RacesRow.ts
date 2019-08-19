import styled from "styled-components"

import { getRule } from "../util/viewports"

export const RowBase = styled.td`
  && {
    padding: 0;
    background: #f7f6f6;
    border-bottom: 2px solid hsla(0, 0%, 0%, 0.12);
  }
`

export const RowTable = styled.div`
  display: flex;
  margin-bottom: 0;

  @media ${getRule("max", "tablet")} {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const RaceWrapper = styled.div`
  flex: 1 1 0;

  @media ${getRule("max", "tablet")} {
    padding: 10px 0;
    height: 85px;

    &:not(:last-child) {
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    }
  }

  @media ${getRule("max", "mobileL")} {
    height: 75px;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  padding: 0 0.35rem;

  @media ${getRule("max", "tablet")} {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0;
  }
`
