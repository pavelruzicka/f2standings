import React from "react"

import { formatDate } from "../../services/formatDate"

import { IRaceDatesProps } from "../../interfaces/render/Race"

import { MobileLabel, TableContent } from "../../styles/Mobile"
import { RaceWrapper, RaceWrapperMobile } from "../../styles/Race/Wrapper"
import { RaceDate, RaceDateMobile } from "../../styles/Race/Misc"

export const RaceDates = ({ feature, sprint, mobile }: IRaceDatesProps) => {
  if (mobile) {
    return (
      <>
        <RaceWrapperMobile>
          <MobileLabel>Race weekend</MobileLabel>
        </RaceWrapperMobile>
        <RaceWrapperMobile>
          <TableContent>
            <RaceDateMobile>
              {formatDate({ date: feature.date, short: true })} —{" "}
              {formatDate({ date: sprint.date, short: true })}
            </RaceDateMobile>
          </TableContent>
        </RaceWrapperMobile>
      </>
    )
  }

  return (
    <RaceWrapper>
      <RaceDate>{formatDate({ date: feature.date })}</RaceDate>
      <RaceDate>{formatDate({ date: sprint.date })}</RaceDate>
    </RaceWrapper>
  )
}
