import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Icon } from "../components/Icon"

import TeamProfile from "../components/Teams/TeamProfile"

import { IDriverBase } from "../interfaces/Driver"
import { ITeam } from "../interfaces/Team"

import { sortTeams } from "../services/teamsChampionship"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"

interface IPageContext {
  pageContext: {
    teams: ITeam[]
    drivers: IDriverBase[]
  }
}

export default ({ pageContext: { teams, drivers } }: IPageContext) => {
  return (
    <>
      <Layout>
        <SEO title="Teams" />

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
                <Icon type={"win"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">Points</TableHeadCentered>
            </tr>
          </thead>

          <tbody>
            {sortTeams(teams).map((team, index) => (
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
