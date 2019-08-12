import React from "react"
import styled from "styled-components"

import { RaceType } from "../../enums/RaceType"

import { IResult } from "../../interfaces/Driver"

const ResultWrapper = styled.div<{ active: boolean }>`
  flex-basis: 50%;
  font-weight: 500;
  opacity: ${p => (p.active ? `1` : `0.4`)};
  padding: 0.3rem 0;
  text-align: center;
`

interface IRaceResultProps {
  result: IResult
  type: RaceType
}

const RaceResult = ({ result, type }: IRaceResultProps) => {
  const typeName = RaceType[type].toLowerCase()

  return (
    <ResultWrapper active={result[typeName] !== null}>
      {result[typeName] ? `P${result[typeName].position}` : "—"}
    </ResultWrapper>
  )
}

export default RaceResult
