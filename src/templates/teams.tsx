import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import TeamProfile from "../components/Teams/TeamProfile"
import { LineChart } from "../components/Graphs/LineChart"
import { Header } from "../components/Header"

import { IDriverBase } from "../interfaces/Driver"
import { ITeam } from "../interfaces/Team"
import { IRace } from "../interfaces/Race"

import { sortTeams } from "../services/championship/teamsChampionship"
import { getChartTeamPoints } from "../services/graphs/chartTeamPoints"
import { getChartRaces } from "../services/graphs/chartRaces"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"
import { Tooltip } from "../styles/Tooltip"
import { SubMenuLink } from "../styles/menuLink"

interface IPageContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
    chart: boolean
  }
}

export default ({ pageContext: { teams, drivers, chart } }: IPageContext) => {
  const sortedTeams = sortTeams(teams)

  return (
    <Layout>
      <Head title="Teams" />

      <Header logo={false} smallMargin={true}>
        <Link to="/teams" style={SubMenuLink} activeStyle={{ opacity: 1 }}>
          Table
        </Link>
        <Link
          to="/teams/chart"
          style={SubMenuLink}
          activeStyle={{ opacity: 1 }}
        >
          Chart
        </Link>
      </Header>

      {chart ? (
        <>
          <Tooltip data-tooltip />
          <LineChart
            races={getChartRaces(drivers)}
            data={getChartTeamPoints(sortedTeams)}
          />
        </>
      ) : (
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
      )}
    </Layout>
  )
}
