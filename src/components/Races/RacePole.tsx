import React from "react"

import { Flag } from "../Flag"

import { IPoleProps } from "../../interfaces/Props"

import { MobileLabel, MobileContent } from "../../styles/Mobile"
import { RowLeftAligned } from "../../styles/Row/Misc"
import { Driver } from "../../styles/Race/Column"

export const RacePole = ({ feature, drivers, teams }: IPoleProps) => {
  const driver = drivers.find(d => d.short === feature.pole)

  if (!feature.pole || !driver) {
    return <td />
  }

  const team = teams.find(t => t.drivers.includes(driver.short))

  if (team) {
    return (
      <RowLeftAligned>
        <MobileLabel>Pole position</MobileLabel>
        <MobileContent>
          <Driver>
            <div>
              <Flag countryCode={driver.country} large={true} />
              <abbr title={`${driver.name} ${driver.lastName} | ${team.name}`}>
                {driver.short}
              </abbr>
            </div>
            <div>
              <small>{feature.poleTime}</small>
            </div>
          </Driver>
        </MobileContent>
      </RowLeftAligned>
    )
  }

  return <td />
}
