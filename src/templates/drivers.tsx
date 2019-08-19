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
import { featurePoints, sprintPoints } from "../util/points"

interface IPageContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
  }
}

export default ({ pageContext: { drivers, teams, races } }: IPageContext) => {
  const placements = drivers
    .filter(driver => teams.some(team => team.drivers.includes(driver.short)))
    .map(driver => {
      const points = driver.results
        .filter(result => result.upcoming !== true)
        .reduce<number[]>((total, result) => {
          const previousPoints = total[total.length - 1] || 0

          let points = 0

          if (result.feature) {
            points += featurePoints[result.feature.position] || 0
            points += result.feature.fastest ? 2 : 0
            points += result.feature.pole ? 4 : 0
          }

          if (result.sprint) {
            points += sprintPoints[result.sprint.position] || 0
            points += result.sprint.fastest ? 2 : 0
          }

          return [...total, previousPoints + points]
        }, [])
        .map<[number, number]>((points, index) => [index, points])

      return { driver, points }
    })
    .sort(
      (a, b) =>
        b.points[b.points.length - 1][1] - a.points[a.points.length - 1][1]
    )

  return (
    <>
      <Layout>
        <Head title="Drivers" />

        <LineChart
          races={drivers[0].results
            .filter(result => result.upcoming !== true)
            .map(race => race.location)}
          teams={teams}
          data={placements}
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
