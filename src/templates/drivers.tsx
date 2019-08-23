import React from "react"

import { DriverProfile } from "../components/Drivers/DriverProfile"
import { Layout } from "../components/Layout/Layout"
import { SubMenu } from "../components/Layout/SubMenu"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"
import { LineChart } from "../components/Charts/LineChart"

import { IDriversContext } from "../interfaces/Context"

import { sortDrivers } from "../services/championship/driversChampionship"
import { getChartDriverPoints } from "../services/charts/chartDriverPoints"
import { getChartRaces } from "../services/charts/chartRaces"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
  TableHeadWrapper,
} from "../styles/Layout/TableHead"
import { RookieExpl } from "../styles/RookieExpl"
import { Tooltip } from "../styles/Tooltip"

export default ({
  pageContext: { drivers, teams, races, chart },
}: IDriversContext) => {
  const open = [0, drivers.length - 1]
  const sortedDrivers = sortDrivers(drivers)

  return (
    <Layout onChartPage={chart}>
      <Head title="Drivers" />

      <SubMenu origin={"drivers"} />

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
          <TableHeadWrapper>
            <tr>
              <TableHeadInit scope="col">Pos</TableHeadInit>
              <TableHead scope="col">Driver</TableHead>
              <TableHead scope="col">Team</TableHead>
              <TableHeadCentered scope="col">
                <Icon type={"pole"} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">
                <Icon type={"fastest"} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">Points</TableHeadCentered>
            </tr>
          </TableHeadWrapper>

          <tbody>
            {sortedDrivers.map((driver, index) => (
              <DriverProfile
                driver={driver}
                teams={teams}
                races={races}
                index={index}
                open={open}
                key={driver.short}
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
