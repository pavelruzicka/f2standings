import styled from "styled-components"

import { FlagElement } from "./Flag"

import { getRule } from "../util/viewports"

export const Results = styled.td`
  display: flex;

  @media ${getRule("min", "laptop")} {
    display: none;
  }
`

export const ResultColumn = styled.div<{ second?: boolean }>`
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  padding-left: ${p => (p.second ? 0.75 : 0)}rem;
`

export const ResultHeader = styled.div`
  text-align: left;
  font-size: 0.875rem;
  font-weight: normal;
  color: #565656;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  padding: 0 0.3rem;
`

export const ResRow = styled.div<{ fastest?: boolean }>`
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  margin-top: ${p => (p.fastest ? 1 : 0)}rem;
  text-align: left;

  ${FlagElement} {
    padding-left: 1rem;
  }
`
