import React from "react"
import styled from "styled-components"

import { Flag } from "../Flag"

import { IDriverBase } from "../../interfaces/Driver"
import { ITeam } from "../../interfaces/Team"

const Driver = styled.div`
  font-weight: 500;
`

interface IRaceColumn {
  keys?: string[]
  occupants: string[]
  drivers: IDriverBase[]
  teams: ITeam[]
  shortened?: boolean
}

const RaceColumn = ({
  keys,
  occupants,
  drivers,
  teams,
  shortened = true,
}: IRaceColumn) => {
  const boxes = occupants.map(o => drivers.find(d => d.short === o))

  return (
    <td>
      {boxes.map((driver, index) => {
        if (driver) {
          const team = teams.find(t => t.drivers.includes(driver.short))

          if (team) {
            return (
              <Driver key={keys ? keys[index] : driver.short}>
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
