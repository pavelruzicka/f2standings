import { IDriverBase, IResult } from "../../interfaces/render/Driver"

import { featurePoints, sprintPoints } from "../../util/points"

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

const countPoints = (results: IResult[], short: string) => {
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

  return base - (short === "DOE" ? 1 : 0)
}

const getDriverStats = (results: IResult[], short: string) => {
  const poles = countPoles(results)
  const fastest = countFastest(results)
  const points = countPoints(results, short)

  return { poles, fastest, points: points + poles * 4 + fastest * 2 }
}

export const sortDrivers = (drivers: IDriverBase[]) => {
  return drivers
    .map(driver => ({
      ...driver,
      stats: getDriverStats(driver.results, driver.short),
    }))
    .sort((x, y) => y.stats.points - x.stats.points)
}
