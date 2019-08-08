import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const generateRow = (driver, teams) => {
  const { name, lastName, country, results } = driver
  const team = teams.filter(t => t.short === driver.team)[0]

  return (
    <>
      <tr>
        <th
          scope="row"
          style={{ borderLeft: `1px solid #dee2e6`, padding: `.75rem` }}
        >
          #0
        </th>
        <td>
          <small>{country}</small> {name} <strong>{lastName}</strong>
        </td>
        <td>
          <small>{team.country}</small> {team.name}
        </td>
        <td>0</td>
        <td>0</td>
        <td style={{ borderRight: `1px solid #dee2e6` }}>0</td>
      </tr>

      <tr>
        <td colspan="6" style={{ padding: 0 }}>
          <table class="table table-sm" style={{ marginBottom: 0 }}>
            <thead>
              <tr>
                {results.map(race => (
                  <td
                    style={{
                      width: `${100 / 12}%`,
                      padding: `.3rem`,
                      border: `1px solid #dee2e6`,
                    }}
                    colspan="2"
                  >
                    <small style={{ fontWeight: `bold` }}>{race.where}</small>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {results.map(race => (
                  <>
                    <td
                      style={{
                        border: `1px solid #dee2e6`,
                        textAlign: `center`,
                      }}
                    >
                      <small>
                        <abbr title="Feature Race">FR</abbr>
                      </small>
                    </td>
                    <td
                      style={{
                        border: `1px solid #dee2e6`,
                        textAlign: `center`,
                      }}
                    >
                      <small>
                        <abbr title="Sprint Race">SR</abbr>
                      </small>
                    </td>
                  </>
                ))}
              </tr>
              <tr>
                {results.map(race => (
                  <>
                    <td
                      style={{
                        border: `1px solid #dee2e6`,
                        textAlign: `center`,
                      }}
                    >
                      {race.feature ? `P${race.feature.position}` : "--"}
                    </td>
                    <td
                      style={{
                        border: `1px solid #dee2e6`,
                        textAlign: `center`,
                      }}
                    >
                      {race.sprint ? `P${race.sprint.position}` : "--"}
                    </td>
                  </>
                ))}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  )
}

// NEZAPOMEN SORTNOUT DRIVERS PODLE POINTS LOL

export default ({ pageContext: { drivers, teams } }) => (
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
        <tbody>{drivers.map(driver => generateRow(driver, teams))}</tbody>
      </table>
    </Layout>
  </>
)
