import React from "react"

import { RaceType } from "../../../enums/RaceType"

import { IRaceResultProps } from "../../../interfaces/Props"

import { ResultWrapper } from "../../../styles/Race/Result"

export const RaceResult = ({ result, type }: IRaceResultProps) => {
  const typeName = RaceType[type].toLowerCase() as "feature" | "sprint"
  const race = result[typeName]

  if (race === null || race.position === null) {
    return <ResultWrapper>—</ResultWrapper>
  }

  return (
    <ResultWrapper
      bold={race.position < 4}
      active
    >{`P${race.position}`}</ResultWrapper>
  )
}
