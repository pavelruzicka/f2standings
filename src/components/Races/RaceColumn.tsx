import React from "react"

import { RookieStatus } from "../Drivers/RookieStatus"
import { Flag } from "../Flag"

import { IRaceColumn } from "../../interfaces/render/Race"

import { MobileLabel, TableContent, MobileContent } from "../../styles/Mobile"
import { RaceColumnWrapper, ColumnDriver } from "../../styles/Race/Column"
import { Abbr } from "../../styles/Global"

export const RaceColumn = ({
  keys,
  occupants,
  drivers,
  teams,
  label,
  mobile = false,
  shortened = false,
}: IRaceColumn) => {
  const boxes = occupants.map(o => drivers.find(d => d.short === o))

  return (
    <RaceColumnWrapper mobile={mobile}>
      <TableContent horizontal>
        {boxes.map((driver, index) => {
          if (!driver) {
            return null
          }

          const team = teams.find(t => t.drivers.includes(driver.short))
          if (!team) {
            return null
          }

          return (
            <ColumnDriver key={keys ? keys[index] : driver.short}>
              <Flag countryCode={driver.country} large />
              {shortened ? (
                <Abbr
                  title={`${driver.name} ${driver.lastName} | ${team.name}`}
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
