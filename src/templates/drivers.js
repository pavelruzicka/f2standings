import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import DriverProfile from "../components/Drivers/DriverProfile"

// NEZAPOMEN SORTNOUT DRIVERS PODLE POINTS LOL

export default ({ pageContext: { drivers, teams, races } }) => (
  <>
    <Layout>
      <SEO title="Drivers" />

      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              style={{
                padding: `.75rem`,
                borderLeft: `1px solid #dee2e6`,
              }}
            >
              Pos
            </th>
            <th scope="col">Driver</th>
            <th scope="col">Team</th>
            <th scope="col">PP</th>
            <th scope="col">FL</th>
            <th
              scope="col"
              style={{
                borderRight: `1px solid #dee2e6`,
              }}
            >
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <DriverProfile
              driver={driver}
              teams={teams}
              races={races}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </Layout>
  </>
)
