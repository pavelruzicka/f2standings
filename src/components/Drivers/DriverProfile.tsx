import React from "react"
import { useBoolean } from "react-hanger"

import DriverRow from "./DriverRow"
import RacesRow from "./RacesRow"

import { IDriver } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"
import { ITeam } from "../../interfaces/Team"

interface IProfileProps {
  driver: IDriver
  teams: ITeam[]
  races: IRace[]
  index: number
}

const DriverProfile = ({ driver, teams, races, index }: IProfileProps) => {
  const racesVisible = useBoolean(index === 0)

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
          <RacesRow results={results} races={races} />
        ) : null}
      </>
    )
  }

  return <div />
}

export default DriverProfile
