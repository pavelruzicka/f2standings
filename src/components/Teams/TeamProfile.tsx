import React from "react"

import { RaceColumn } from "../Races/RaceColumn"
import { Flag } from "../Flag"

import { ITeamProfileProps } from "../../interfaces/Props"

import { MobileLabel, TableContent } from "../../styles/Mobile"
import { RowWrapper, RowStart, RowBlock } from "../../styles/Row"

export const TeamProfile = ({
  team,
  teams,
  drivers,
  index,
}: ITeamProfileProps) => {
  const { stats } = team

  return (
    <RowWrapper>
      <RowStart>#{index + 1}</RowStart>

      <RowBlock alignLeft bold>
        <MobileLabel>
          #<b>{index + 1}</b>
        </MobileLabel>
        <TableContent>
          <Flag countryCode={team.country} large /> {team.name}
        </TableContent>
      </RowBlock>

      <RaceColumn
        occupants={team.drivers}
        drivers={drivers}
        teams={teams}
        label={"Drivers"}
      />

      <RowBlock>
        <MobileLabel>Podium finishes</MobileLabel>
        <TableContent>{stats.podiums}</TableContent>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Race wins</MobileLabel>
        <TableContent>{stats.wins}</TableContent>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Points</MobileLabel>
        <TableContent>{stats.points}</TableContent>
      </RowBlock>
    </RowWrapper>
  )
}
