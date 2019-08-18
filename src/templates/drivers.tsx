import React from "react"

import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import DriverProfile from "../components/Drivers/DriverProfile"

import { IDriverBase } from "../interfaces/Driver"
import { IRace } from "../interfaces/Race"
import { ITeam } from "../interfaces/Team"

import { sortDrivers } from "../services/driversChampionship"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"
import { LineChart } from "../components/Graphs/LineChart"

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
        <Head title="Drivers" />

        <LineChart
          races={races.map(race => race.short)}
          data={[
            {
              points: [[0, 4], [1, 8], [2, 10], [3, 22], [4, 22], [5, 23]],
              driver: "DEV",
              color: "#f08",
            },
            {
              points: [[0, 0], [1, 2], [2, 4], [3, 8], [4, 10], [5, 20]],
              driver: "LOT",
              color: "#f0f",
            },
          ]}
        />

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
