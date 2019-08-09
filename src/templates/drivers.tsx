import React from "react"

import { Layout } from "../components/Layout"
import SEO from "../components/SEO"

import DriverProfile from "../components/Drivers/DriverProfile"

import { IDriverBase, IResult } from "../interfaces/Driver"
import { IRace } from "../interfaces/Race"
import { ITeam } from "../interfaces/Team"

import { featurePoints, sprintPoints } from "../util/points"

const countPoles = (results: IResult[]) =>
  results.reduce((acc, curr) => {
    if (!curr.upcoming && curr.feature && curr.feature.pole) {
      acc += 1
    }

    return acc
  }, 0)

const countFastest = (results: IResult[]) =>
  results.reduce((acc, curr) => {
    if (!curr.upcoming && curr.feature && curr.feature.fastest) {
      acc += 1
    }

    if (!curr.upcoming && curr.sprint && curr.sprint.fastest) {
      acc += 1
    }

    return acc
  }, 0)

interface IBonusPointSources {
  poles: number
  fastest: number
}

const countPoints = (
  results: IResult[],
  { poles, fastest }: IBonusPointSources
) => {
  const base = results.reduce((acc, curr) => {
    if (!curr.upcoming) {
      if (
        curr.feature &&
        curr.feature.position >= 1 &&
        curr.feature.position <= 10
      ) {
        acc += featurePoints[curr.feature.position] || 0
      }

      if (curr.sprint) {
        acc += sprintPoints[curr.sprint.position] || 0
      }
    }

    return acc
  }, 0)

  return base + poles * 4 + fastest * 2
}

const getDriverStats = (results: IResult[]) => {
  const poles = countPoles(results)
  const fastest = countFastest(results)
  const points = countPoints(results, { poles, fastest })

  return { poles, fastest, points }
}

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

        <table className="table">
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  borderLeft: `1px solid #dee2e6`,
                  padding: `.75rem`,
                }}
              >
                Pos
              </th>
              <th scope="col">Driver</th>
              <th scope="col">Team</th>
              <th scope="col" style={{ textAlign: `center` }}>
                <img
                  src={`/icons/pole.svg`}
                  alt={"Pole positions"}
                  title={"Pole positions"}
                  style={{
                    bottom: `2px`,

                    margin: `0`,
                    position: `relative`,
                    width: 22,
                  }}
                />
              </th>
              <th scope="col" style={{ textAlign: `center` }}>
                <img
                  src={`/icons/fastest.svg`}
                  alt={"Fastest laps"}
                  title={"Fastest laps"}
                  style={{
                    bottom: `2px`,

                    margin: `0`,
                    position: `relative`,
                    width: 22,
                  }}
                />
              </th>
              <th
                scope="col"
                style={{
                  borderRight: `1px solid #dee2e6`,
                  padding: `.75rem`,
                  textAlign: `center`,
                }}
              >
                Points
              </th>
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
