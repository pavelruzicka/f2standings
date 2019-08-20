import React from "react"

import { RaceColumn } from "../Races/RaceColumn"
import { Flag } from "../Flag"

import { ITeamProfileProps } from "../../interfaces/Props"

import { MobileLabel, MobileContent } from "../../styles/Mobile"
import { RowBlock, RowBlockVert } from "../../styles/Row/Block"
import { RowInitMobile, RowInitVert } from "../../styles/Row/Init"
import { RowEnd } from "../../styles/Row/End"
import { RowWrapper } from "../../styles/Row/Wrapper"

import { getSuffix } from "../../util/ordinalSuffix"

export const TeamProfile = ({
  team,
  teams,
  drivers,
  index,
}: ITeamProfileProps) => {
  const { stats } = team

  return (
    <RowWrapper>
      <RowInitVert>#{index + 1}</RowInitVert>

      <RowBlockVert>
        <MobileLabel>Team</MobileLabel>
        <MobileContent>
          <Flag countryCode={team.country} large={true} /> {team.name}
        </MobileContent>
      </RowBlockVert>

      <RowInitMobile>
        <MobileLabel>Championship position</MobileLabel>
        <MobileContent>{getSuffix(index + 1)}</MobileContent>
      </RowInitMobile>

      <RaceColumn
        occupants={team.drivers}
        drivers={drivers}
        teams={teams}
        shortened={false}
        label={"Drivers"}
        mobile={null}
      />

      <RowBlock>
        <MobileLabel>Podium finishes</MobileLabel>
        <MobileContent>{stats.podiums}</MobileContent>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Race wins</MobileLabel>
        <MobileContent>{stats.wins}</MobileContent>
      </RowBlock>

      <RowEnd>
        <MobileLabel>Points</MobileLabel>
        <MobileContent>{stats.points}</MobileContent>
      </RowEnd>
    </RowWrapper>
  )
}
