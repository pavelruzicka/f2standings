import React from "react"

import { Flag } from "../Flag"

import RaceColumn from "../Races/RaceColumn"

import { IDriverBase } from "../../interfaces/Driver"
import { ITeam, ITeamExpanded } from "../../interfaces/Team"

import {
  RowWrapper,
  RowInitMobile,
  RowInitVert,
  RowVert,
  RowBlock,
  RowEnd,
} from "../../styles/TableRow"
import { MobileLabel, MobileContent } from "../../styles/Mobile"

import { getSuffix } from "../../util/ordinalSuffix"

interface ITeamProfileProps {
  team: ITeamExpanded
  teams: ITeam[]
  drivers: IDriverBase[]
  index: number
}

const TeamProfile = ({ team, teams, drivers, index }: ITeamProfileProps) => {
  const { stats } = team

  return (
    <RowWrapper>
      <RowInitVert>#{index + 1}</RowInitVert>

      <RowVert>
        <MobileLabel>Team</MobileLabel>
        <MobileContent>
          <Flag countryCode={team.country} large={true} /> {team.name}
        </MobileContent>
      </RowVert>

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

export default TeamProfile
