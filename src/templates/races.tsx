import React from "react"

import { Layout } from "../components/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import RaceRow from "../components/Races/RaceRow"

import { IDriverBase } from "../interfaces/Driver"
import { IRace } from "../interfaces/Race"
import { ITeam } from "../interfaces/Team"

import { TableHead, TableHeadInit } from "../styles/TableHead"

interface IPageContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
  }
}

export default ({ pageContext: { drivers, teams, races } }: IPageContext) => {
  return (
    <Layout>
      <Head title="Races" />

      <table className="uk-table uk-table-small">
        <thead>
          <tr>
            <TableHeadInit scope="col">No</TableHeadInit>
            <TableHead scope="col">Race dates</TableHead>
            <TableHead scope="col">Location</TableHead>
            <TableHead scope="col">
              <Icon type={"pole"} singular={true} />
            </TableHead>
            <TableHead scope="col" />
            <TableHead scope="col" colSpan={3}>
              Podium
            </TableHead>
            <TableHead scope="col">
              <Icon type={"fastest"} singular={true} />
            </TableHead>
          </tr>
        </thead>

        <tbody>
          {races.map((race, index) => (
            <RaceRow
              race={race}
              index={index}
              drivers={drivers}
              teams={teams}
              key={race.short}
            />
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
