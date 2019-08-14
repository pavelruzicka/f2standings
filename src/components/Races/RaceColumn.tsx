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
  shortened: boolean
}

const RaceColumn = ({
  occupants,
  drivers,
  teams,
  shortened = true,
}: IRaceColumn) => {
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
                {shortened ? (
                  <abbr
                    title={`${driver.name} ${driver.lastName} | ${team.name}`}
                  >
                    {driver.short}
                  </abbr>
                ) : (
                  `${driver.name} ${driver.lastName}`
                )}
              </Driver>
            )
          }
        }
      })}
    </td>
  )
}

export default RaceColumn
