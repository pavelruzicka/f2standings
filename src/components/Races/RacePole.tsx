import React from "react"

import { Flag } from "../Flag"

import { IPoleProps } from "../../interfaces/Props"

import { MobileLabel, MobileContent } from "../../styles/Mobile"
import { Driver } from "../../styles/Race/Column"
import { Abbr } from "../../styles/Global"
import { TableItem } from "../../styles/Layout/Table"
import { RowBlock } from "../../styles/Row/Block"

export const RacePole = ({ feature, drivers, teams }: IPoleProps) => {
  const driver = drivers.find(d => d.short === feature.pole)

  if (!feature.pole || !driver) {
    return <TableItem />
  }

  const team = teams.find(t => t.drivers.includes(driver.short))
  if (!team) {
    return <TableItem />
  }

  return (
    <RowBlock alignLeft>
      <MobileLabel>Pole</MobileLabel>
      <MobileContent>
        <Driver>
          <div>
            <Flag countryCode={driver.country} large />
            <Abbr title={`${driver.name} ${driver.lastName} | ${team.name}`}>
              {driver.short}
            </Abbr>
          </div>
          <div>
            <small>{feature.poleTime}</small>
          </div>
        </Driver>
      </MobileContent>
    </RowBlock>
  )
}
