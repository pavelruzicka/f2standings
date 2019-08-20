import React from "react"

import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import { LineChart, IDataEntry } from "../components/Graphs/LineChart"
import TeamProfile from "../components/Teams/TeamProfile"

import { IDriverBase } from "../interfaces/Driver"
import { ITeam } from "../interfaces/Team"
import { IRace } from "../interfaces/Race"

import { sortTeams } from "../services/teamsChampionship"

import { teamColours } from "../util/colours"
import { featurePoints, sprintPoints } from "../util/points"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"

interface IPageContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
  }
}

export default ({ pageContext: { teams, drivers } }: IPageContext) => {
  const sortedTeams = sortTeams(teams)

  const dataRaces = drivers[0].results
    .filter(result => result.upcoming !== true)
    .map(race => race.location)
  const data: IDataEntry[] = teams
    .map(team => {
      const points = team.results.map(result => {
        return teams[0].results[0]
          .map((_, index) => {
            let points = 0
            points += result[index].pole ? 4 : 0
            points += result[index].fastest ? 2 : 0
            const position = result[index].position
            if (position !== null) {
              points +=
                (index % 2 === 0
                  ? featurePoints[position]
                  : sprintPoints[position]) || 0
            }
            return points
          })
          .reduce<number[]>((total, next, index) => {
            if (index % 2 === 0) {
              total.push(next)
            } else {
              total[total.length - 1] = total[total.length - 1] + next
            }
            return total
          }, [])
      })

      const addedPoints = points[0].map(
        (_, index) => points[0][index] + points[1][index]
      )

      const fuckingPoints = addedPoints.reduce<[number, number][]>(
        (total, item, index) => {
          const previousPoints = (total[index - 1] || [0, 0])[1]

          total.push([index, previousPoints + item])

          return total
        },
        []
      )

      return {
        points: fuckingPoints,
        color: teamColours[team.short] || "#000",
        dotted: false,
        label: `<b>${team.name}</b>`,
        shortLabel: team.short,
      }
    })
    .sort(
      (a, b) =>
        b.points[b.points.length - 1][1] - a.points[a.points.length - 1][1]
    )

  return (
    <>
      <Layout>
        <Head title="Teams" />

        <LineChart races={dataRaces} data={data} />

        <table className="uk-table uk-table-small">
          <thead>
            <tr>
              <TableHeadInit scope="col">Pos</TableHeadInit>
              <TableHead scope="col">Team</TableHead>
              <TableHead scope="col">Drivers</TableHead>
              <TableHeadCentered scope="col">
                <Icon type={"podium"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered>
                <Icon type={"win"} size={18} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">Points</TableHeadCentered>
            </tr>
          </thead>

          <tbody>
            {sortedTeams.map((team, index) => (
              <TeamProfile
                team={team}
                teams={teams}
                drivers={drivers}
                index={index}
                key={team.short}
              />
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  )
}
