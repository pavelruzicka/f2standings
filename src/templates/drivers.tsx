import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import { Header } from "../components/Header"
import DriverProfile from "../components/Drivers/DriverProfile"
import { LineChart } from "../components/Graphs/LineChart"

import { IDriverBase } from "../interfaces/Driver"
import { IRace } from "../interfaces/Race"
import { ITeam } from "../interfaces/Team"

import { sortDrivers } from "../services/championship/driversChampionship"
import { getChartDriverPoints } from "../services/graphs/chartDriverPoints"
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

export default ({
  pageContext: { drivers, teams, races, chart },
}: IPageContext) => {
  const sortedDrivers = sortDrivers(drivers)

  return (
    <Layout>
      <Head title="Drivers" />

      <Header logo={false} smallMargin={true}>
        <Link to="/drivers" style={SubMenuLink} activeStyle={{ opacity: 1 }}>
          Table
        </Link>
        <Link
          to="/drivers/chart"
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
            races={getChartRaces(sortedDrivers)}
            data={getChartDriverPoints(sortedDrivers, teams)}
          />
        </>
      ) : (
        <table className="uk-table uk-table-small">
          <thead>
            <tr>
              <TableHeadInit scope="col">Pos</TableHeadInit>
              <TableHead scope="col">Driver</TableHead>
              <TableHead scope="col">Team</TableHead>
              <TableHeadCentered scope="col">
                <Icon type={"pole"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">
                <Icon type={"fastest"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">Points</TableHeadCentered>
            </tr>
          </thead>

          <tbody>
            {sortedDrivers.map((driver, index) => (
              <DriverProfile
                driver={driver}
                teams={teams}
                races={races}
                index={index}
                key={driver.short}
              />
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  )
}
