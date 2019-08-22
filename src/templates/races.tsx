import React from "react"

import { RaceRow } from "../components/Races/RaceRow"
import { Layout } from "../components/Layout/Main"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import { IRacesContext } from "../interfaces/Context"

import {
  TableHeadWrapper,
  TableHead,
  TableHeadInit,
} from "../styles/Layout/TableHead"
import { RookieExpl } from "../styles/RookieExpl"

export default ({ pageContext: { drivers, teams, races } }: IRacesContext) => {
  return (
    <Layout>
      <Head title="Races" />

      <table className="uk-table uk-table-small">
        <TableHeadWrapper>
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
        </TableHeadWrapper>

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

      <RookieExpl>
        The &#42; besides a driver's name denotes them being a rookie in Formula
        2.
      </RookieExpl>
    </Layout>
  )
}
