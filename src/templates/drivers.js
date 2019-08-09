import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import DriverProfile from "../components/Drivers/DriverProfile"

import { featurePoints, sprintPoints } from "../util/points"

const countPoles = results =>
  results.reduce((acc, curr) => {
    if (!curr.upcoming && curr.feature && curr.feature.pole) {
      acc += 1
    }

    return acc
  }, 0)

const countFastest = results =>
  results.reduce((acc, curr) => {
    if (!curr.upcoming && curr.feature && curr.feature.fastest) {
      acc += 1
    }

    if (!curr.upcoming && curr.sprint && curr.sprint.fastest) {
      acc += 1
    }

    return acc
  }, 0)

const countPoints = (results, { poles, fastest }) => {
  const base = results.reduce((acc, curr) => {
    if (!curr.upcoming) {
      if (curr.feature) {
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

const getDriverStats = results => {
  const poles = countPoles(results)
  const fastest = countFastest(results)
  const points = countPoints(results, { poles, fastest })

  return { poles, fastest, points }
}

const sortDrivers = drivers =>
  drivers
    .map(driver => ({ ...driver, stats: getDriverStats(driver.results) }))
    .sort((x, y) => y.stats.points - x.stats.points)

export default ({ pageContext: { drivers, teams, races } }) => (
  <>
    <Layout>
      <SEO title="Drivers" />

      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              style={{
                padding: `.75rem`,
                borderLeft: `1px solid #dee2e6`,
              }}
            >
              Pos
            </th>
            <th scope="col">Driver</th>
            <th scope="col">Team</th>
            <th scope="col" style={{ textAlign: `center` }}>
              PP
            </th>
            <th scope="col" style={{ textAlign: `center` }}>
              FL
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
