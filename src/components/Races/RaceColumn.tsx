import React from "react"
import styled from "styled-components"

import { getRule } from "../../util/viewports"

import { Flag } from "../Flag"

import { IDriverBase } from "../../interfaces/Driver"
import { ITeam } from "../../interfaces/Team"
import RookieStatus from "../Drivers/RookieStatus"

import { MobileLabel, MobileContent } from "../../styles/Mobile"

const RaceColumnWrapper = styled.td`
  @media ${getRule("max", "mobileL")} {
    && {
      display: flex;
      justify-content: space-between;
      border-bottom: none;
      padding: 4px 6px;
    }
  }
`

const Driver = styled.div`
  font-weight: 500;
  position: relative;

  @media ${getRule("max", "mobileL")} {
    margin-bottom: 4px;
  }
`

interface IRaceColumn {
  keys?: string[]
  occupants: string[]
  drivers: IDriverBase[]
  teams: ITeam[]
  shortened?: boolean
  label?: string
}

const RaceColumn = ({
  keys,
  occupants,
  drivers,
  teams,
  shortened = true,
  label,
}: IRaceColumn) => {
  const boxes = occupants.map(o => drivers.find(d => d.short === o))

  return (
    <RaceColumnWrapper>
      <MobileLabel>{label || ``}</MobileLabel>
      <MobileContent>
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
                  {driver.rookie ? <RookieStatus noWidth={shortened} /> : null}
                </Driver>
              )
            }
          }
        })}
      </MobileContent>
    </RaceColumnWrapper>
  )
}

export default RaceColumn
