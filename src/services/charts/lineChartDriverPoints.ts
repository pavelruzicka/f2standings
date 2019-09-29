import { IDataEntry } from "./drawLineChart"

import { IDriverBase } from "../../interfaces/render/Driver"
import { ITeam } from "../../interfaces/render/Team"

import { featurePoints, sprintPoints } from "../../util/points"
import { teamColours } from "../../util/colours"

function isSecondDriver(teams: ITeam[], driver: IDriverBase) {
  const team = teams.find(team => team.short === driver.team)
  return (team && team.drivers.indexOf(driver.short) === 1) || false
}

export function getChartDriverPoints(drivers: IDriverBase[], teams: ITeam[]) {
  return drivers
    .filter(driver => teams.some(team => team.drivers.includes(driver.short)))
    .map<IDataEntry>(driver => {
      const points = driver.results
        .filter(result => result.upcoming !== true)
        .reduce<number[]>((total, result) => {
          const previousPoints = total[total.length - 1] || 0

          let points = 0

          if (result.feature) {
            if (result.feature.position !== null) {
              points += featurePoints[result.feature.position] || 0
            }
            points += result.feature.fastest ? 2 : 0
            points += result.feature.pole ? 4 : 0
          }

          if (result.sprint) {
            if (result.sprint.position !== null) {
              points += sprintPoints[result.sprint.position] || 0
            }
            points += result.sprint.fastest ? 2 : 0
          }

          return [...total, previousPoints + points]
        }, [])
        .map<[number, number]>((points, index) => [index, points])

      const team = teams.find(team => team.short === driver.team)
      const teamName = team ? team.name : driver.team

      return {
        points,
        color: teamColours[driver.team] || "#000",
        dotted: isSecondDriver(teams, driver),
        shortLabel: `${driver.short} ${driver.rookie ? "*" : ""}`,
        label: `<b>${driver.name} ${driver.lastName}</b> ${
          driver.rookie ? "*" : ""
        }<br/>${teamName}`,
      }
    })
}
