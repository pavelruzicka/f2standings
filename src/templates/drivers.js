import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const generateRaceHeader = (race, races) => {
  const { location } = race
  const raceInfo = races.filter(r => r.short === location)[0]

  return (
    <td
      style={{
        width: `${100 / 12}%`,
        padding: `.3rem`,
        border: `1px solid #dee2e6`,
        textAlign: `center`,
      }}
      colspan="2"
    >
      <img
        src={`/flags/${location}.svg`}
        alt={raceInfo.country}
        title={raceInfo.country}
        style={{ width: 24, margin: `0 .5rem 0 0` }}
      />
      <small style={{ fontWeight: `bold` }}>
        <abbr title={`${raceInfo.circuit} | ${raceInfo.country}`}>
          {location}
        </abbr>
      </small>
    </td>
  )
}

const generateRow = (driver, teams, races) => {
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
          <img
            src={`/flags/${country}.svg`}
            style={{
              width: 25,
              margin: `0 .35rem 0 0`,
              position: `relative`,
              bottom: `3px`,
            }}
          />{" "}
          {name} <strong>{lastName}</strong>
        </td>
        <td>
          <img
            src={`/flags/${team.country}.svg`}
            style={{
              width: 25,
              margin: `0 .35rem 0 0`,
              position: `relative`,
              bottom: `3px`,
            }}
          />{" "}
          {team.name}
        </td>
        <td>0</td>
        <td>0</td>
        <td style={{ borderRight: `1px solid #dee2e6` }}>0</td>
      </tr>

      <tr>
        <td colspan="6" style={{ padding: 0 }}>
          <table class="table table-sm" style={{ marginBottom: 0 }}>
            <thead>
              <tr>{results.map(race => generateRaceHeader(race, races))}</tr>
            </thead>
            <tbody>
              <tr>
                {results.map(() => (
                  <>
                    <td
                      style={{
                        border: `1px solid #dee2e6`,
                        padding: `.3rem`,
                        width: `${100 / 24}%`,
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
                        padding: `.3rem`,
                        width: `${100 / 24}%`,
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
                {results.map(race => {
                  if (race.upcoming) {
                    return (
                      <td
                        style={{
                          border: `1px solid #dee2e6`,
                          padding: `.3rem`,
                          textAlign: `center`,
                        }}
                        colspan="2"
                      ></td>
                    )
                  } else {
                    return (
                      <>
                        <td
                          style={{
                            border: `1px solid #dee2e6`,
                            padding: `.3rem`,
                            textAlign: `center`,
                          }}
                        >
                          {race.feature ? `P${race.feature.position}` : "—"}
                        </td>
                        <td
                          style={{
                            border: `1px solid #dee2e6`,
                            padding: `.3rem`,
                            textAlign: `center`,
                          }}
                        >
                          {race.sprint ? `P${race.sprint.position}` : "—"}
                        </td>
                      </>
                    )
                  }
                })}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  )
}

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
          {drivers.map(driver => generateRow(driver, teams, races))}
        </tbody>
      </table>
    </Layout>
  </>
)
