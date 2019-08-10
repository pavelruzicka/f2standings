import { IResult } from "../interfaces/Driver"

import { featurePoints, sprintPoints } from "../util/points"

interface IBonusPointSources {
  poles: number
  fastest: number
}

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

const countPoints = (
  results: IResult[],
  { poles, fastest }: IBonusPointSources
) => {
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

export const getDriverStats = (results: IResult[]) => {
  const poles = countPoles(results)
  const fastest = countFastest(results)
  const points = countPoints(results, { poles, fastest })

  return { poles, fastest, points }
}
