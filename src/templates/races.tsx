import React from "react"

import { RaceRow } from "../components/Races/RaceRow"
import { Layout } from "../components/Layout/Layout"
import { Head } from "../components/Head"
import { Icon } from "../components/Icon"

import { IRacesContext } from "../interfaces/Context"

import {
  TableHeadWrapper,
  TableHead,
  TableHeadAlignRight,
  Table,
  TableRow,
} from "../styles/Layout/Table"
import { RookieExplanation } from "../styles/RookieExplanation"

export default ({ pageContext: { drivers, teams, races } }: IRacesContext) => {
  return (
    <Layout onChartPage={false}>
      <Head title="Races" />

      <Table>
        <TableHeadWrapper>
          <TableRow>
            <TableHeadAlignRight scope="col">No</TableHeadAlignRight>
            <TableHead scope="col">Race dates</TableHead>
            <TableHead scope="col">Location</TableHead>
            <TableHead scope="col">
              <Icon type={"pole"} singular />
            </TableHead>
            <TableHead scope="col" />
            <TableHead scope="col" />
            <TableHead scope="col" colSpan={3}>
              Podium
            </TableHead>
            <TableHead scope="col" />
            <TableHead scope="col">
              <Icon type={"fastest"} singular />
            </TableHead>
          </TableRow>
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
      </Table>

      <RookieExplanation>
        The &#42; besides a driver's name denotes them being a rookie in Formula
        2.
      </RookieExplanation>
    </Layout>
  )
}
