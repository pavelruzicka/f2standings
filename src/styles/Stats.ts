import styled from "styled-components"

import { getRule } from "../util/viewports"

export const StatsBox = styled.td`
  display: flex;
  margin: 1rem 0 0;
  padding-bottom: 1rem;

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`

export const StatsBlock = styled.div`
  flex: 0 0 calc(100% / 3);
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
`

export const StatHeading = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: normal;
  color: #565656;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  padding: 0 0.3rem;
`

export const StatValue = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 0 0.3rem;
`
