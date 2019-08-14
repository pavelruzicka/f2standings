import { ITeam } from "../interfaces/Team"
import { IBonusPointSources } from "../interfaces/General"

import { featurePoints, sprintPoints } from "../util/points"

const countCarPodiums = (set: (number | null)[]) =>
  set.filter(placement => placement && placement < 4).length

const countCarWins = (set: (number | null)[]) =>
  set.filter(placement => placement === 1).length

const countPoints = (set: (number | null)[]) =>
  set
    .map(v => (v === null ? 0 : v))
    .reduce((acc, curr, idx) => {
      const isFeature = idx % 2 === 0
      const source = isFeature
        ? (featurePoints as any)[curr]
        : (sprintPoints as any)[curr]

      acc += source || 0

      return acc
    }, 0)

const getTeamStats = (
  results: [(number | null)[], (number | null)[]],
  { poles, fastest }: IBonusPointSources
) => {
  const podiums = results
    .map(resultSet => countCarPodiums(resultSet))
    .reduce((a, b) => a + b, 0)

  const wins = results
    .map(resultSet => countCarWins(resultSet))
    .reduce((a, b) => a + b, 0)

  const points = results
    .map(resultSet => countPoints(resultSet))
    .reduce((a, b) => a + b, 0)

  return { podiums, wins, points: points + poles * 4 + fastest * 2 }
}

export const sortTeams = (teams: ITeam[]) => {
  return teams
    .map(team => ({
      ...team,
      stats: getTeamStats(team.results, {
        poles: team.poles,
        fastest: team.fastest,
      }),
    }))
    .sort((x, y) => y.stats.points - x.stats.points)
}
