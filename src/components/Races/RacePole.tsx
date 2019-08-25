import React from "react"

import { Flag } from "../Flag"

import { IPoleProps } from "../../interfaces/Props"

import { MobileLabel, DesktopContent, MobileContent } from "../../styles/Mobile"
import { Driver, PoleTime, PoleSitter } from "../../styles/Race/Column"
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
      <MobileContent>
        <RowBlock>
          <MobileLabel>Pole</MobileLabel>
        </RowBlock>
      </MobileContent>
      <RowBlock alignLeft>
        <Driver>
          <DesktopContent>
            <div>
              <Flag countryCode={driver.country} large />
              <Abbr title={`${driver.name} ${driver.lastName} | ${team.name}`}>
                {driver.short}
              </Abbr>
            </div>
            <div>
              <small>{feature.poleTime}</small>
            </div>
          </DesktopContent>

          <MobileContent>
            <Flag countryCode={driver.country} large />
            <PoleSitter>
              {driver.name} {driver.lastName}
              {driver.rookie ? <RookieStatus /> : null}
            </PoleSitter>
            <span>-</span>
            <PoleTime>{feature.poleTime}</PoleTime>
          </MobileContent>
        </Driver>
      </RowBlock>
    </>
  )
}
