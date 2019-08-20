import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Icon } from "../components/Icon"

import RaceRow from "../components/Races/RaceRow"

import { IRacesContext } from "../interfaces/Context"

import { TableHeadWrapper, TableHead, TableHeadInit } from "../styles/TableHead"

export default ({
  pageContext: { drivers, teams, calendar },
}: IRacesContext) => {
  return (
    <Layout>
      <SEO title="Races" />

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
          {calendar.map((race, index) => (
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
