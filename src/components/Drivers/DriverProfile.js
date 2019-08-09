import React, { useState } from "react"

import DriverRow from "./DriverRow"
import RacesRow from "./RacesRow"

const DriverProfile = ({ driver, teams, races, index }) => {
  const [racesVisible, updateVisibility] = useState(index < 3)

  const { results } = driver
  const team = teams.filter(t => t.short === driver.team)[0]

  const expandProfile = () => {
    updateVisibility(!racesVisible)
  }

  return (
    <>
      <DriverRow
        driver={driver}
        team={team}
        index={index}
        onClick={expandProfile}
      />
      {racesVisible ? <RacesRow results={results} races={races} /> : null}
    </>
  )
}

export default DriverProfile
