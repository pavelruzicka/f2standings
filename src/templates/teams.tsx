import React from "react"

import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import { LineChart, IDataEntry } from "../components/Graphs/LineChart"
import TeamProfile from "../components/Teams/TeamProfile"

import { IDriverBase } from "../interfaces/Driver"
import { ITeam } from "../interfaces/Team"
import { IRace } from "../interfaces/Race"

import { sortTeams } from "../services/teamsChampionship"

import { teamColours } from "../util/colours"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"

interface IPageContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
  }
}

export default ({ pageContext: { teams, drivers } }: IPageContext) => {
  const sortedTeams = sortTeams(teams)

  const dataRaces = drivers[0].results
    .filter(result => result.upcoming !== true)
    .map(race => race.location)
  const data: IDataEntry[] = sortedTeams.map(team => {
    // TODO: populate this
    const points: [number, number][] = []

    return {
      points,
      color: teamColours[team.short] || "#000",
      dotted: false,
      label: team.name,
      shortLabel: team.short,
    }
  })

  return (
    <>
      <Layout>
        <Head title="Teams" />

        <LineChart races={dataRaces} data={data} />

        <table className="uk-table uk-table-small">
          <thead>
            <tr>
              <TableHeadInit scope="col">Pos</TableHeadInit>
              <TableHead scope="col">Team</TableHead>
              <TableHead scope="col">Drivers</TableHead>
              <TableHeadCentered scope="col">
                <Icon type={"podium"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered>
                <Icon type={"win"} size={18} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">Points</TableHeadCentered>
            </tr>
          </thead>

          <tbody>
            {sortedTeams.map((team, index) => (
              <TeamProfile
                team={team}
                teams={teams}
                drivers={drivers}
                index={index}
                key={team.short}
              />
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  )
}
