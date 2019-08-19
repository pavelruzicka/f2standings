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
import { MobileLabel, MobileText } from "../../styles/Mobile"

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
        <MobileText>
          <Flag countryCode={team.country} large={true} /> {team.name}
        </MobileText>
      </RowVert>

      <RowInitMobile>
        <MobileLabel>Championship position</MobileLabel>
        <MobileText>{getSuffix(index + 1)}</MobileText>
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
        <MobileText>{stats.podiums}</MobileText>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Race wins</MobileLabel>
        <MobileText>{stats.wins}</MobileText>
      </RowBlock>

      <RowEnd>
        <MobileLabel>Points</MobileLabel>
        <MobileText>{stats.points}</MobileText>
      </RowEnd>
    </RowWrapper>
  )
}

export default TeamProfile
