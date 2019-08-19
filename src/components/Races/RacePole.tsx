import React from "react"
import styled from "styled-components"

import { Flag } from "../Flag"

import { IDriverBase } from "../../interfaces/Driver"
import { ITeam } from "../../interfaces/Team"
import { IRacePartition } from "../../interfaces/Race"

import { RowLeftAligned } from "../../styles/TableRow"
import { MobileLabel, MobileContent } from "../../styles/Mobile"

const Driver = styled.div`
  font-weight: 500;
`

interface IPoleProps {
  feature: IRacePartition
  drivers: IDriverBase[]
  teams: ITeam[]
}

const RacePole = ({ feature, drivers, teams }: IPoleProps) => {
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

export default RacePole
