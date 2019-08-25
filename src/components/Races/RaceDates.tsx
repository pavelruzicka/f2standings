import React from "react"

import { IRaceDatesProps } from "../../interfaces/render/Race"

import { MobileLabel, MobileContent } from "../../styles/Mobile"
import {
  RaceWrapper,
  RaceWrapperMobile,
  RaceDate,
} from "../../styles/Race/Wrapper"

import { formatDate } from "../../services/formatDate"

export const RaceDates = ({ feature, sprint, mobile }: IRaceDatesProps) => {
  return (
    <>
      {mobile ? (
        <RaceWrapperMobile>
          <MobileLabel>Race weekend</MobileLabel>
          <MobileContent>
            {formatDate({ date: feature.date, short: true })} —{" "}
            {formatDate({ date: sprint.date, short: true })}
          </MobileContent>
        </RaceWrapperMobile>
      ) : (
        <RaceWrapper>
          <RaceDate>{formatDate({ date: feature.date })}</RaceDate>
          <RaceDate>{formatDate({ date: sprint.date })}</RaceDate>
        </RaceWrapper>
      )}
    </>
  )
}
