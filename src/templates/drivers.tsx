import React from "react"
import { Link } from "gatsby"

import { DriverProfile } from "../components/Drivers/DriverProfile"
import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import { IDriversContext } from "../interfaces/Context"
import { Header } from "../components/Header"
import { LineChart } from "../components/Charts/LineChart"

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
import { SubMenuLink } from "../styles/Layout/MenuLink"

export default ({
  pageContext: { drivers, teams, races, chart },
}: IDriversContext) => {
  const open = [0, drivers.length - 1]
  const sortedDrivers = sortDrivers(drivers)

  return (
    <Layout>
      <Head title="Drivers" />

      <Header logo={false} subStyling={true}>
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
          <TableHeadWrapper>
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
