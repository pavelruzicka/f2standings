import React from "react"

import { IRaceDatesProps } from "../../interfaces/Race"

import {
  MobileLabel,
  MobileContent,
  RaceContentWrapper,
  RaceContentWrapperMobile,
} from "../../styles/Mobile"

import { formatDate } from "../../services/formatDate"

const RaceDates = ({ feature, sprint, mobile }: IRaceDatesProps) => {
  return (
    <>
      {mobile ? (
        <RaceContentWrapperMobile>
          <MobileLabel>Race weekend</MobileLabel>
          <MobileContent>
            {formatDate({ date: feature.date, short: true })} —{" "}
            {formatDate({ date: sprint.date, short: true })}
          </MobileContent>
        </RaceContentWrapperMobile>
      ) : (
        <RaceContentWrapper>
          <div>{formatDate({ date: feature.date })}</div>
          <div>{formatDate({ date: sprint.date })}</div>
        </RaceContentWrapper>
      )}
    </>
  )
}

export default RaceDates
