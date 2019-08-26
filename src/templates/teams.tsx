import React from "react"

import { TeamProfile } from "../components/Teams/TeamProfile"
import { Layout } from "../components/Layout/Layout"
import { SubMenu } from "../components/Layout/SubMenu"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"
import { LineChart } from "../components/Charts/LineChart"

import { ITeamsContext } from "../interfaces/Context"

import { sortTeams } from "../services/championship/teamsChampionship"
import { getChartTeamPoints } from "../services/charts/lineChartTeamPoints"
import { getFinishedRaces } from "../services/finishedRaces"

import {
  TableHead,
  TableHeadWrapper,
  Table,
  TableRow,
} from "../styles/Layout/Table"
import { RookieExplanation } from "../styles/RookieExplanation"
import { Tooltip } from "../styles/Tooltip"

export default ({ pageContext: { teams, drivers, chart } }: ITeamsContext) => {
  const sortedTeams = sortTeams(teams)

  return (
    <Layout onChartPage={chart}>
      <Head title="Teams" />

      <SubMenu origin={"teams"} />

      {chart ? (
        <>
          <Tooltip data-tooltip />
          <LineChart
            races={getFinishedRaces(drivers)}
            data={getChartTeamPoints(sortedTeams)}
          />
        </>
      ) : (
        <Table>
          <TableHeadWrapper>
            <TableRow>
              <TableHead textAlign="right" scope="col">
                Pos
              </TableHead>
              <TableHead scope="col">Team</TableHead>
              <TableHead scope="col">Drivers</TableHead>
              <TableHead textAlign="center" scope="col">
                <Icon type={"podium"} />
              </TableHead>
              <TableHead textAlign="center">
                <Icon type={"win"} size={18} />
              </TableHead>
              <TableHead textAlign="center" scope="col">
                Points
              </TableHead>
            </TableRow>
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
        </Table>
      )}
      <RookieExplanation>
        The &#42; besides a driver's name denotes them being a rookie in
        Formula&nbsp;2.
      </RookieExplanation>
    </Layout>
  )
}
