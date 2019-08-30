import React from "react"

import { Flag } from "../Flag"

import { IPoleProps } from "../../interfaces/Props"

import { TableContent, MobileLabel, DesktopContent } from "../../styles/Mobile"
import { Driver } from "../../styles/Race/Column"
import { EntityName } from "../../styles/Entity"
import { Abbr } from "../../styles/Global"
import { TableItem } from "../../styles/Layout/Table"
import { RowBlock } from "../../styles/Row"
import { RookieStatus } from "../Drivers/RookieStatus"

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
    <>
      <RowBlock alignLeft mobileOnly bold bottomGap>
        <MobileLabel>Pole position</MobileLabel>
        <TableContent>
          <EntityName>
            <Flag countryCode={driver.country} large />
            {driver.short}
            {driver.rookie ? <RookieStatus /> : null}
          </EntityName>
          <small>{feature.poleTime}</small>
        </TableContent>
      </RowBlock>

      <RowBlock alignLeft desktopOnly>
        <Driver>
          <DesktopContent>
            <div>
              <Flag countryCode={driver.country} large />
              <Abbr title={`${driver.name} ${driver.lastName} | ${team.name}`}>
                {driver.short}
              </Abbr>
              {driver.rookie ? <RookieStatus /> : null}
            </div>
            <div>
              <small>{feature.poleTime}</small>
            </div>
          </DesktopContent>
        </Driver>
      </RowBlock>
    </>
  )
}
