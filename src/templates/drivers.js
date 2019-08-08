import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import DriverProfile from "../components/Drivers/DriverProfile"

// NEZAPOMEN SORTNOUT DRIVERS PODLE POINTS LOL

export default ({ pageContext: { drivers, teams, races } }) => (
  <>
    <Layout>
      <SEO title="Drivers" />

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style={{ padding: `.75rem` }}>
              Pos
            </th>
            <th scope="col">Driver</th>
            <th scope="col">Team</th>
            <th scope="col">PP</th>
            <th scope="col">FL</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <DriverProfile driver={driver} teams={teams} races={races} />
          ))}
        </tbody>
      </table>
    </Layout>
  </>
)
