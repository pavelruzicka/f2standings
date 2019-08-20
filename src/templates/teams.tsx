import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Icon } from "../components/Icon"

import TeamProfile from "../components/Teams/TeamProfile"

import { ITeamsContext } from "../interfaces/Context"

import { sortTeams } from "../services/teamsChampionship"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
  TableHeadWrapper,
} from "../styles/TableHead"

export default ({ pageContext: { teams, drivers } }: ITeamsContext) => {
  return (
    <>
      <Layout>
        <SEO title="Teams" />

        <table className="uk-table uk-table-small">
          <TableHeadWrapper>
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
          </TableHeadWrapper>

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
