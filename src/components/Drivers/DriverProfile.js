import React, { useState } from "react"

import DriverRow from "./DriverRow"
import RacesRow from "./RacesRow"

const DriverProfile = ({ driver, teams, races, index }) => {
  const [racesVisible, updateVisibility] = useState(index < 3)

  const { results } = driver
  const team = teams.filter(t => t.short === driver.team)[0]

  const poles = results.reduce((acc, curr) => {
    if (!curr.upcoming && curr.feature && curr.feature.pole) {
      acc += 1
    }

    return acc
  }, 0)

  const fastest = results.reduce((acc, curr) => {
    if (!curr.upcoming && curr.feature && curr.feature.fastest) {
      acc += 1
    }

    if (!curr.upcoming && curr.sprint && curr.sprint.fastest) {
      acc += 1
    }

    return acc
  }, 0)

  const expandProfile = () => {
    updateVisibility(!racesVisible)
  }

  return (
    <>
      <DriverRow
        driver={driver}
        team={team}
        stats={{ poles, fastest }}
        onClick={expandProfile}
      />
      {racesVisible ? <RacesRow results={results} races={races} /> : null}
    </>
  )
}

export default DriverProfile
