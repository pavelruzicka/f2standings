import React from "react"
import { Link } from "gatsby"

import { TeamProfile } from "../components/Teams/TeamProfile"
import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"
import { Header } from "../components/Header"
import { LineChart } from "../components/Charts/LineChart"

import { ITeamsContext } from "../interfaces/Context"

import { sortTeams } from "../services/championship/teamsChampionship"
import { getChartTeamPoints } from "../services/charts/chartTeamPoints"
import { getChartRaces } from "../services/charts/chartRaces"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
  TableHeadWrapper,
} from "../styles/Layout/TableHead"
import { RookieExpl } from "../styles/RookieExpl"
import { Tooltip } from "../styles/Tooltip"
import { SubMenuLink } from "../styles/Layout/MenuLink"

export default ({ pageContext: { teams, drivers, chart } }: ITeamsContext) => {
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
      <RookieExpl>
        The &#42; besides a driver's name denotes them being a rookie in
        Formula&nbsp;2.
      </RookieExpl>
    </Layout>
  )
}
