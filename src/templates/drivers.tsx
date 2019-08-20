import React from "react"

import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import DriverProfile from "../components/Drivers/DriverProfile"
import { LineChart } from "../components/Graphs/LineChart"
import { getChartDriverPoints } from "../components/Graphs/chartDriverPoints"
import { getChartRaces } from "../components/Graphs/chartRaces"

import { IDriverBase } from "../interfaces/Driver"
import { IRace } from "../interfaces/Race"
import { ITeam } from "../interfaces/Team"

import { sortDrivers } from "../services/driversChampionship"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"
import { Tooltip } from "../styles/Tooltip"

interface IPageContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
  }
}

export default ({ pageContext: { drivers, teams, races } }: IPageContext) => {
  const sortedDrivers = sortDrivers(drivers)

  const dataRaces = getChartRaces(drivers)
  const data = getChartDriverPoints(drivers, teams)

  return (
    <>
      <Layout>
        <Head title="Drivers" />

        <Tooltip data-tooltip />
        <LineChart races={dataRaces} data={data} />

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
      </Layout>
    </>
  )
}
