import { ITeamResult, ITeam } from "../../interfaces/Team"
import { IBonusPointSources } from "../../interfaces/General"

import { featurePoints, sprintPoints } from "../../util/points"

const countCarPodiums = (set: ITeamResult[]) =>
  set.filter(placement => placement.position && placement.position < 4).length

const countCarWins = (set: ITeamResult[]) =>
  set.filter(placement => placement.position === 1).length

const countPoints = (set: ITeamResult[]) =>
  set
    .map(v => v.position)
    .map(v => (v === null ? 0 : v))
    .reduce((acc, curr, index) => {
      const isFeature = index % 2 === 0
      const source = isFeature ? featurePoints[curr] : sprintPoints[curr]

      acc += source || 0

      return acc
    }, 0)

const getTeamStats = (
  results: [ITeamResult[], ITeamResult[]],
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
