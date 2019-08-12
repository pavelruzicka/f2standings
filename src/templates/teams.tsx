import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Icon } from "../components/Icon"

import { IDriverBase } from "../interfaces/Driver"
import { ITeam } from "../interfaces/Team"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
} from "../styles/TableHead"

interface IPageContext {
  pageContext: {
    teams: ITeam[]
    drivers: IDriverBase[]
  }
}

export default ({ pageContext: { teams, drivers } }: IPageContext) => {
  return (
    <>
      <Layout>
        <SEO title="Teams" />

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
                <Icon type={"win"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">Points</TableHeadCentered>
            </tr>
          </thead>

          <tbody>
            {/*sortTeams(teams).map((team, index) => (
              <DriverProfile
                driver={driver}
                teams={teams}
                races={races}
                index={index}
                key={driver.short}
              />
            ))*/}
          </tbody>
        </table>
      </Layout>
    </>
  )
}
