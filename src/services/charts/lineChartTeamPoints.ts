import { IDataEntry } from "./drawLineChart"

import { ITeam } from "../../interfaces/render/Team"

import { featurePoints, sprintPoints } from "../../util/points"
import { teamColours } from "../../util/colours"

export function getChartTeamPoints(teams: ITeam[]) {
  return teams.map<IDataEntry>(team => {
    const points = team.results.map(teamResult =>
      teams[0].results[0].reduce<number[]>((pointsPerDriver, _, index) => {
        let racePoints = 0
        racePoints += teamResult[index].pole ? 4 : 0
        racePoints += teamResult[index].fastest ? 2 : 0

        const position = teamResult[index].position
        const isFeatureRace = index % 2 === 0
        if (position !== null) {
          racePoints +=
            (isFeatureRace
              ? featurePoints[position]
              : sprintPoints[position]) || 0
        }

        if (isFeatureRace) {
          pointsPerDriver.push(racePoints)
        } else {
          const featureRacePoints = pointsPerDriver[pointsPerDriver.length - 1]

          pointsPerDriver[pointsPerDriver.length - 1] =
            featureRacePoints + racePoints
        }
        return pointsPerDriver
      }, [])
    )

    const addedPoints = points[0].reduce<[number, number][]>(
      (pointsPerTeam, _, index) => {
        const teamPoints = points[0][index] + points[1][index]
        const previousTeamPoints = (pointsPerTeam[index - 1] || [0, 0])[1]

        pointsPerTeam.push([index, previousTeamPoints + teamPoints])
        return pointsPerTeam
      },
      []
    )

    return {
      points: addedPoints,
      color: teamColours[team.short] || "#000",
      dotted: false,
      label: `<b>${team.name}</b>`,
      shortLabel: team.short,
    }
  })
}
