import React from "react"

import DriverRow from "./DriverRow"
import RacesRow from "./RacesRow"

const DriverProfile = ({ driver, teams, races }) => {
  const { results } = driver
  const team = teams.filter(t => t.short === driver.team)[0]

  return (
    <>
      <DriverRow driver={driver} team={team} />
      <RacesRow results={results} races={races} />
    </>
  )
}

export default DriverProfile
