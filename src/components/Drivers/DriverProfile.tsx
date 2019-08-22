import React from "react"
import { useBoolean } from "react-hanger"

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
  const racesVisible = useBoolean(open.includes(index))

  const { results } = driver
  const team = teams.find(t => t.short === driver.team)

  if (team) {
    return (
      <>
        <DriverRow
          driver={driver}
          team={team}
          index={index}
          expand={racesVisible.toggle}
        />
        {racesVisible.value ? (
          <RacesRow results={results} races={races} driver={driver} />
        ) : null}
      </>
    )
  }

  return <div />
}
