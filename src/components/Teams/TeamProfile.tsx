import React from "react"

import { IDriverBase } from "../../interfaces/render/Driver"
import { ITeamProfileProps } from "../../interfaces/Props"

import { RaceColumn } from "../Races/RaceColumn"
import { Flag } from "../Flag"
import { Icon } from "../Icon"
import { RookieStatus } from "../Drivers/RookieStatus"

import { countries } from "../../util/countries"

import { MobileLabel, TableContent } from "../../styles/Mobile"
import { RowWrapper, RowStart, RowBlock } from "../../styles/Row"
import { EntityPos } from "../../styles/Entity"
import {
  StatsBox,
  StatsBlock,
  StatHeading,
  StatValue,
} from "../../styles/Stats"

const MobileDriver = ({
  drivers,
  driver,
}: {
  drivers: IDriverBase[]
  driver: string
}) => {
  const driverInfo = drivers.find(d => d.short === driver)

  if (!driverInfo) {
    return null
  }

  const { country, rookie } = driverInfo

  return (
    <div>
      <Flag countryCode={country} large /> {driver}
      {rookie ? <RookieStatus /> : null}
    </div>
  )
}

export const TeamProfile = ({
  team,
  teams,
  drivers,
  index,
}: ITeamProfileProps) => {
  const { stats } = team
  const country = countries[team.country]

  return (
    <RowWrapper>
      <RowStart>#{index + 1}</RowStart>

      <RowBlock alignLeft>
        <MobileLabel>
          <EntityPos>{index + 1}</EntityPos>
        </MobileLabel>
        <TableContent entity>
          <Flag countryCode={team.country} large />
          <strong>{team.name}</strong>
        </TableContent>
      </RowBlock>

      <RowBlock alignLeft mobileOnly bold>
        <MobileLabel>Country</MobileLabel>
        <TableContent>
          <Flag countryCode={team.country} large /> {country}
        </TableContent>
      </RowBlock>

      <RowBlock alignLeft mobileOnly bold>
        <MobileLabel>Drivers</MobileLabel>
        <TableContent>
          <MobileDriver drivers={drivers} driver={team.drivers[0]} />
          <MobileDriver drivers={drivers} driver={team.drivers[1]} />
        </TableContent>
      </RowBlock>

      <RaceColumn
        occupants={team.drivers}
        drivers={drivers}
        teams={teams}
        label={"Drivers"}
      />

      <StatsBox>
        <StatsBlock>
          <StatHeading>
            <Icon type={"podium"} />
          </StatHeading>
          <StatValue>{stats.podiums}</StatValue>
        </StatsBlock>

        <StatsBlock>
          <StatHeading>
            <Icon type={"win"} size={18} />
          </StatHeading>
          <StatValue>{stats.wins}</StatValue>
        </StatsBlock>

        <StatsBlock>
          <StatHeading>Pts</StatHeading>
          <StatValue>{stats.points}</StatValue>
        </StatsBlock>
      </StatsBox>

      <RowBlock desktopOnly>
        <MobileLabel>Podium finishes</MobileLabel>
        <TableContent>{stats.podiums}</TableContent>
      </RowBlock>

      <RowBlock desktopOnly>
        <MobileLabel>Race wins</MobileLabel>
        <TableContent>{stats.wins}</TableContent>
      </RowBlock>

      <RowBlock desktopOnly>
        <MobileLabel>Points</MobileLabel>
        <TableContent>{stats.points}</TableContent>
      </RowBlock>
    </RowWrapper>
  )
}
