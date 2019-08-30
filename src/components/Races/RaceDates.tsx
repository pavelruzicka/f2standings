import React from "react"

import { formatDate } from "../../services/formatDate"

import { IRaceDatesProps, IDate } from "../../interfaces/render/Race"

import { MobileLabel, TableContent } from "../../styles/Mobile"
import { RowBlock } from "../../styles/Row"
import { RaceWrapper } from "../../styles/Race/Wrapper"
import { RaceDate } from "../../styles/Race/Misc"

const formattedDate = ({
  date,
  short,
  bold,
}: {
  date: IDate
  short?: boolean
  bold?: boolean
}) => {
  const result = formatDate({ date, short: short || false })

  return (
    <span>
      {bold ? <strong>{result.day}</strong> : result.day} {result.month}
    </span>
  )
}

export const RaceDates = ({ feature, sprint, mobile }: IRaceDatesProps) => {
  if (mobile) {
    return (
      <RowBlock alignLeft mobileOnly bold>
        <MobileLabel>Races</MobileLabel>
        <TableContent>
          {formattedDate({ date: feature.date, short: true, bold: true })} —{" "}
          {formattedDate({ date: sprint.date, short: true, bold: true })}
        </TableContent>
      </RowBlock>
    )
  }

  return (
    <RaceWrapper>
      <RaceDate>{formattedDate({ date: feature.date })}</RaceDate>
      <RaceDate>{formattedDate({ date: sprint.date })}</RaceDate>
    </RaceWrapper>
  )
}
