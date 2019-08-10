import React, { useState } from "react"

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
  const [racesVisible, updateVisibility] = useState(index < 3)

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

export default DriverProfile
