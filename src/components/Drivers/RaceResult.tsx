import React from "react"

import { RaceType } from "../../enums/RaceType"

import { IRaceResultProps } from "../../interfaces/Props"

import { ResultWrapper, ResultWrapperBold } from "../../styles/Race/Result"

export const RaceResult = ({ result, type }: IRaceResultProps) => {
  const typeName = RaceType[type].toLowerCase()
  const race = typeName === "feature" ? result["feature"] : result["sprint"]

  if (race === null) {
    return <ResultWrapper>—</ResultWrapper>
  }

  if (race.position < 4) {
    return <ResultWrapperBold active>{`P${race.position}`}</ResultWrapperBold>
  } else {
    return <ResultWrapper active>{`P${race.position}`}</ResultWrapper>
  }
}
