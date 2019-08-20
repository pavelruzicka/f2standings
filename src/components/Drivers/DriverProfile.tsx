import React, { useState } from "react"

import { DriverRow } from "./DriverRow"
import { RacesRow } from "./RacesRow"

import { IProfileProps } from "../../interfaces/Props"

export const DriverProfile = ({
  driver,
  teams,
  races,
  index,
}: IProfileProps) => {
  const [racesVisible, updateVisibility] = useState(index === 0)

  const { results } = driver
  const team = teams.find(t => t.short === driver.team)

  const expandProfile = () => {
    updateVisibility(!racesVisible)
  }

  if (team) {
    return (
      <>
        <DriverRow
          driver={driver}
          team={team}
          index={index}
          expand={expandProfile}
        />
        {racesVisible ? <RacesRow results={results} races={races} /> : null}
      </>
    )
  }

  return <div />
}
