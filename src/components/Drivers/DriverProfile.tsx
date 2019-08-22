import React, { useState } from "react"

import { DriverRow } from "./DriverRow"
import { RacesRow } from "./RacesRow"

import { IProfileProps } from "../../interfaces/Props"

export const DriverProfile = ({
  driver,
  teams,
  races,
  index,
  open,
}: IProfileProps) => {
  const [racesVisible, updateVisibility] = useState(open.includes(index))

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
        {racesVisible ? (
          <RacesRow results={results} races={races} driver={driver} />
        ) : null}
      </>
    )
  }

  return <div />
}
