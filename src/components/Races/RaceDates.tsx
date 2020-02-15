import React from "react"

import { IRaceDatesProps, IDate } from "../../interfaces/render/Race"

import { MobileLabel, TableContent } from "../../styles/Mobile"
import { RowBlock } from "../../styles/Row"
import { RaceWrapper } from "../../styles/Race/Wrapper"
import { RaceDate } from "../../styles/Race/Misc"

const FormattedDate = ({
  date,
  short,
  bold,
}: {
  date: IDate
  short?: boolean
  bold?: boolean
}) => {
  const { day } = date
  const month = short ? date.month.substring(0, 3) : date.month

  return (
    <span>
      {bold ? <strong>{day}</strong> : day} {month}
    </span>
  )
}

export const RaceDates = ({ feature, sprint, mobile }: IRaceDatesProps) => {
  if (mobile) {
    return (
      <RowBlock alignLeft mobileOnly bold>
        <MobileLabel>Races</MobileLabel>
        <TableContent>
          <FormattedDate date={feature.date} short bold />
          {" — "}
          <FormattedDate date={sprint.date} short bold />
        </TableContent>
      </RowBlock>
    )
  }

  return (
    <RaceWrapper>
      <RaceDate>
        <FormattedDate date={feature.date} />
      </RaceDate>
      <RaceDate>
        <FormattedDate date={sprint.date} />
      </RaceDate>
    </RaceWrapper>
  )
}
