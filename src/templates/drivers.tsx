import React from "react"

import { DriverProfile } from "../components/Drivers/DriverProfile"
import { Layout } from "../components/Layout/Layout"
import { SubMenu } from "../components/Layout/SubMenu"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"
import { LineChart } from "../components/Charts/LineChart"

import { IDriversContext } from "../interfaces/Context"

import { sortDrivers } from "../services/championship/driversChampionship"
import { getChartDriverPoints } from "../services/charts/lineChartDriverPoints"
import { getFinishedRaces } from "../services/finishedRaces"

import {
  TableHead,
  TableHeadWrapper,
  Table,
  TableRow,
  TableFooter,
} from "../styles/Layout/Table"
import { RookieExplanation } from "../styles/RookieExplanation"
import { Tooltip } from "../styles/Tooltip"

export default ({
  pageContext: { drivers, teams, races, chart, year, availableYears },
}: IDriversContext) => {
  const open = [0, drivers.length - 1]
  const sortedDrivers = sortDrivers(drivers)

  return (
    <Layout onChartPage={chart} year={year} availableYears={availableYears}>
      <Head title="Drivers" />

      <SubMenu origin={"drivers"} year={year} availableYears={availableYears} />

      {chart ? (
        <>
          <Tooltip data-tooltip />
          <LineChart
            races={getFinishedRaces(sortedDrivers)}
            data={getChartDriverPoints(sortedDrivers, teams)}
          />
        </>
      ) : (
        <>
          <Table>
            <TableHeadWrapper>
              <TableRow>
                <TableHead textAlign="right" scope="col">
                  Pos
                </TableHead>
                <TableHead scope="col">Driver</TableHead>
                <TableHead scope="col">Team</TableHead>
                <TableHead textAlign="center" scope="col">
                  <Icon type={"pole"} />
                </TableHead>
                <TableHead textAlign="center" scope="col">
                  <Icon type={"fastest"} />
                </TableHead>
                <TableHead textAlign="center" scope="col">
                  Points
                </TableHead>
              </TableRow>
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
          </Table>
          <TableFooter />
        </>
      )}
      <RookieExplanation>
        The &#42; besides a driver's name denotes them being a rookie in
        Formula&nbsp;2.
      </RookieExplanation>
    </Layout>
  )
}
