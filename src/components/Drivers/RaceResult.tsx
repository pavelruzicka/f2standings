import React from "react"
import styled from "styled-components"

import { getRule } from "../../util/viewports"

import { RaceType } from "../../enums/RaceType"

import { IResult } from "../../interfaces/Driver"

const ResultWrapper = styled.div<{ active: boolean }>`
  flex-basis: 50%;
  font-weight: 500;
  opacity: ${p => (p.active ? 1 : 0.4)};
  padding: 0.3rem 0;
  text-align: center;

  @media ${getRule("max", "mobileL")} {
    text-align: right;
    padding: 0 6px 0 0;
  }
`

const ResultWrapperBold = styled(ResultWrapper)`
  font-weight: bold;
`

interface IRaceResultProps {
  result: IResult
  type: RaceType
}

const RaceResult = ({ result, type }: IRaceResultProps) => {
  const typeName = RaceType[type].toLowerCase()
  const race = typeName === "feature" ? result["feature"] : result["sprint"]

  if (race === null) {
    return <ResultWrapper active={false}>—</ResultWrapper>
  }

  if (race.position < 4) {
    return (
      <ResultWrapperBold active={true}>{`P${race.position}`}</ResultWrapperBold>
    )
  } else {
    return <ResultWrapper active={true}>{`P${race.position}`}</ResultWrapper>
  }
}

export default RaceResult
