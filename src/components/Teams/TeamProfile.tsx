import React from "react"

import { Flag } from "../Flag"

import RaceColumn from "../Races/RaceColumn"

import { IDriverBase } from "../../interfaces/Driver"
import { ITeam, ITeamExpanded } from "../../interfaces/Team"

import { RowInitVert, RowVert, RowBlock } from "../../styles/TableRow"

interface ITeamProfileProps {
  team: ITeamExpanded
  teams: ITeam[]
  drivers: IDriverBase[]
  index: number
}

const TeamProfile = ({ team, teams, drivers, index }: ITeamProfileProps) => {
  const { stats } = team

  return (
    <tr>
      <RowInitVert>#{index + 1}</RowInitVert>

      <RowVert>
        <Flag countryCode={team.country} large={true} />{" "}
        <strong>{team.name}</strong>
      </RowVert>

      <RaceColumn
        occupants={team.drivers}
        drivers={drivers}
        teams={teams}
        shortened={false}
      />

      <RowBlock>{stats.podiums}</RowBlock>
      <RowBlock>{stats.wins}</RowBlock>
      <RowBlock>{stats.points}</RowBlock>
    </tr>
  )
}

export default TeamProfile
