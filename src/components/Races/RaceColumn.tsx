import React from "react"

import { RookieStatus } from "../Drivers/RookieStatus"
import { Flag } from "../Flag"

import { IRaceColumn } from "../../interfaces/render/Race"

import { TableContent } from "../../styles/Mobile"
import { RaceColumnWrapper, ColumnDriver } from "../../styles/Race/Column"
import { Abbr } from "../../styles/Global"

export const RaceColumn = ({
  keys,
  occupants,
  drivers,
  teams,
  mobile = false,
  shortened = false,
}: IRaceColumn) => {
  const boxes = occupants.map(occupant => {
    const driver = drivers.find(d => d.short === occupant)
    if (driver === undefined) {
      throw new Error("Unknown driver short: " + occupant)
    }

    return driver
  })

  return (
    <RaceColumnWrapper mobile={mobile}>
      <TableContent horizontal>
        {boxes.map((driver, index) => {
          const team = teams.find(team => team.short === driver.team)

          return (
            <ColumnDriver key={keys ? keys[index] : driver.short}>
              <Flag countryCode={driver.country} large />
              {shortened ? (
                <Abbr
                  title={`${driver.name} ${driver.lastName}${
                    team ? ` | ${team.name}` : ""
                  }`}
                >
                  {driver.short}
                </Abbr>
              ) : (
                `${driver.name} ${driver.lastName}`
              )}
              {driver.rookie ? <RookieStatus noWidth={shortened} /> : null}
            </ColumnDriver>
          )
        })}
      </TableContent>
    </RaceColumnWrapper>
  )
}
