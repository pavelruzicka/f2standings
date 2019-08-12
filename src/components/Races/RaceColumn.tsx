import React from "react"
import styled from "styled-components"

import { Flag } from "../Flag"

import { IDriverBase } from "../../interfaces/Driver"
import { ITeam } from "../../interfaces/Team"

const Driver = styled.div`
  font-weight: 500;
`

interface IRaceColumn {
  occupants: string[]
  drivers: IDriverBase[]
  teams: ITeam[]
}

const RaceColumn = ({ occupants, drivers, teams }: IRaceColumn) => {
  let boxes = occupants.map(o => drivers.find(d => d.short === o))

  return (
    <td>
      {boxes.map(driver => {
        if (driver) {
          const team = teams.find(t => t.drivers.includes(driver.short))

          if (team) {
            return (
              <Driver>
                <Flag countryCode={driver.country} large={true} />
                <abbr
                  title={`${driver.name} ${driver.lastName} | ${team.name}`}
                >
                  {driver.short}
                </abbr>
              </Driver>
            )
          }
        }
      })}
    </td>
  )
}

export default RaceColumn
