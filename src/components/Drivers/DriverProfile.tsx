import React from "react"
import { useBoolean } from "react-hanger"

import { RacesRow } from "./RacesRow"

import { IProfileProps } from "../../interfaces/Props"
import { RowStart, RowBlock, RowWrapperClickable } from "../../styles/Row"
import { TableContent, MobileLabel } from "../../styles/Mobile"
import { Flag } from "../Flag"
import { RookieStatus } from "./RookieStatus"

export const DriverProfile = ({
  driver,
  teams,
  index,
  open,
}: IProfileProps) => {
  const racesVisible = useBoolean(open.includes(index))

  const team = teams.find(t => t.short === driver.team)
  if (!team) {
    return null
  }

  return (
    <>
      <RowWrapperClickable onClick={racesVisible.toggle} short={driver.short}>
        <RowStart>#{index + 1}</RowStart>

        <RowBlock alignLeft>
          <MobileLabel>
            #<b>{index + 1}</b>
          </MobileLabel>
          <TableContent>
            <Flag countryCode={driver.country} large /> {`${name} `}
            <span>{driver.name} </span>
            <strong>{driver.lastName}</strong>
            {driver.rookie ? <RookieStatus /> : null}
          </TableContent>
        </RowBlock>

        <RowBlock alignLeft bold>
          <MobileLabel>Team</MobileLabel>
          <TableContent>
            <Flag countryCode={team.country} large /> {team.name}
          </TableContent>
        </RowBlock>

        <RowBlock>
          <MobileLabel>Pole positions</MobileLabel>
          <TableContent>{driver.stats.poles}</TableContent>
        </RowBlock>

        <RowBlock>
          <MobileLabel>Fastest laps</MobileLabel>
          <TableContent>{driver.stats.fastest}</TableContent>
        </RowBlock>

        <RowBlock>
          <MobileLabel>Points</MobileLabel>
          <TableContent>{driver.stats.points}</TableContent>
        </RowBlock>
      </RowWrapperClickable>

      {racesVisible.value ? (
        <RacesRow results={driver.results} driver={driver} />
      ) : null}
    </>
  )
}
