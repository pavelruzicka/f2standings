import React from "react"

import { DriverProfile } from "../components/Drivers/DriverProfile"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { Icon } from "../components/Icon"

import { IDriversContext } from "../interfaces/Context"

import { sortDrivers } from "../services/driversChampionship"

import {
  TableHead,
  TableHeadInit,
  TableHeadCentered,
  TableHeadWrapper,
} from "../styles/Layout/TableHead"
import { RookieExpl } from "../styles/RookieExpl"

export default ({
  pageContext: { drivers, teams, races },
}: IDriversContext) => {
  return (
    <>
      <Layout>
        <SEO title="Drivers" />

        <table className="uk-table uk-table-small">
          <TableHeadWrapper>
            <tr>
              <TableHeadInit scope="col">Pos</TableHeadInit>
              <TableHead scope="col">Driver</TableHead>
              <TableHead scope="col">Team</TableHead>
              <TableHeadCentered scope="col">
                <Icon type={"pole"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">
                <Icon type={"fastest"} singular={false} />
              </TableHeadCentered>
              <TableHeadCentered scope="col">Points</TableHeadCentered>
            </tr>
          </TableHeadWrapper>

          <tbody>
            {sortDrivers(drivers).map((driver, index) => (
              <DriverProfile
                driver={driver}
                teams={teams}
                races={races}
                index={index}
                key={driver.short}
              />
            ))}
          </tbody>
        </table>

        <RookieExpl>
          The &#42; besides a driver's name denotes them being a rookie in
          Formula 2.
        </RookieExpl>
      </Layout>
    </>
  )
}
