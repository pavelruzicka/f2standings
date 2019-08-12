import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Icon } from "../components/Icon"

import DriverProfile from "../components/Drivers/DriverProfile"

import { IDriverBase } from "../interfaces/Driver"
import { IRace } from "../interfaces/Race"
import { ITeam } from "../interfaces/Team"

import { getDriverStats } from "../services/driversChampionship"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"

const sortDrivers = (drivers: IDriverBase[]) => {
  return drivers
    .map(driver => ({ ...driver, stats: getDriverStats(driver.results) }))
    .sort((x, y) => y.stats.points - x.stats.points)
}

interface IPageContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
  }
}

export default ({ pageContext: { drivers, teams, races } }: IPageContext) => {
  return (
    <>
      <Layout>
        <SEO title="Drivers" />

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
            {sortDrivers(drivers).map((driver, index) => (
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
