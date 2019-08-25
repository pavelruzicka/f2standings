import React from "react"
import { useBoolean } from "react-hanger"

import { RacesRow } from "./RacesRow"

import { IProfileProps } from "../../interfaces/Props"
import { RowWrapperClickable } from "../../styles/Row/Wrapper"
import { RowBlock } from "../../styles/Row/Block"
import { RowStart } from "../../styles/Row/Start"
import { MobileContent, MobileLabel } from "../../styles/Mobile"
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
          <MobileContent>
            <Flag countryCode={driver.country} large /> {`${name} `}
            <span>{driver.name} </span>
            <strong>{driver.lastName}</strong>
            {driver.rookie ? <RookieStatus /> : null}
          </MobileContent>
        </RowBlock>

        <RowBlock alignLeft bold>
          <MobileLabel>Team</MobileLabel>
          <MobileContent>
            <Flag countryCode={team.country} large /> {team.name}
          </MobileContent>
        </RowBlock>

        <RowBlock>
          <MobileLabel>Pole positions</MobileLabel>
          <MobileContent>{driver.stats.poles}</MobileContent>
        </RowBlock>

        <RowBlock>
          <MobileLabel>Fastest laps</MobileLabel>
          <MobileContent>{driver.stats.fastest}</MobileContent>
        </RowBlock>

        <RowBlock>
          <MobileLabel>Points</MobileLabel>
          <MobileContent>{driver.stats.points}</MobileContent>
        </RowBlock>
      </RowWrapperClickable>

      {racesVisible.value ? (
        <RacesRow results={driver.results} driver={driver} />
      ) : null}
    </>
  )
}
