import React from "react"

import { RaceColumn } from "../Races/RaceColumn"
import { Flag } from "../Flag"

import { ITeamProfileProps } from "../../interfaces/Props"

import { MobileLabel, MobileContent } from "../../styles/Mobile"
import { RowBlock } from "../../styles/Row/Block"
import { RowWrapper } from "../../styles/Row/Wrapper"
import { RowStart } from "../../styles/Row/Start"

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
        <MobileContent>
          <Flag countryCode={team.country} large /> {team.name}
        </MobileContent>
      </RowBlock>

      <RaceColumn
        occupants={team.drivers}
        drivers={drivers}
        teams={teams}
        label={"Drivers"}
      />

      <RowBlock>
        <MobileLabel>Podium finishes</MobileLabel>
        <MobileContent>{stats.podiums}</MobileContent>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Race wins</MobileLabel>
        <MobileContent>{stats.wins}</MobileContent>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Points</MobileLabel>
        <MobileContent>{stats.points}</MobileContent>
      </RowBlock>
    </RowWrapper>
  )
}
