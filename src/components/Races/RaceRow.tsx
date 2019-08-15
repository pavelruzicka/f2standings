import React from "react"
import styled from "styled-components"

import RaceDates from "./RaceDates"
import RacePole from "./RacePole"
import RacePartition from "../Drivers/RacePartition"
import RaceColumn from "./RaceColumn"

import { Flag } from "../Flag"

import { RaceType } from "../../enums/RaceType"

import { IDriverBase } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"
import { ITeam } from "../../interfaces/Team"

import { RowInit } from "../../styles/TableRow"

const Circuit = styled.div`
  font-weight: 500;
`

interface IRaceRowProps {
  race: IRace
  index: number
  drivers: IDriverBase[]
  teams: ITeam[]
}

const RaceRow = ({ race, index, drivers, teams }: IRaceRowProps) => {
  const { feature, sprint } = race.races

  return (
    <tr>
      <RowInit>#{index + 1}</RowInit>

      <RaceDates feature={feature} sprint={sprint} />

      <td>
        <Circuit>
          <Flag countryCode={race.short} large={true} />
          {race.circuit}
        </Circuit>
        <div>
          <Flag countryCode={"empty"} large={true} />
          <small>
            {race.city}, {race.country}
          </small>
        </div>
      </td>

      <RacePole feature={feature} drivers={drivers} teams={teams} />

      {feature.pole ? (
        <>
          <td>
            <RacePartition type={RaceType.Feature} padded={false} />
            <RacePartition type={RaceType.Sprint} padded={false} />
          </td>

          {[0, 1, 2].map(n => {
            if (feature.podium && sprint.podium) {
              return (
                <RaceColumn
                  occupants={[feature.podium[n], sprint.podium[n]]}
                  drivers={drivers}
                  teams={teams}
                  key={n}
                />
              )
            }
          })}

          {feature.fastest && sprint.fastest ? (
            <RaceColumn
              occupants={[feature.fastest, sprint.fastest]}
              drivers={drivers}
              teams={teams}
            />
          ) : (
            <td />
          )}
        </>
      ) : (
        <>
          {[0, 1, 2, 3, 4].map(n => (
            <td key={n} />
          ))}
        </>
      )}
    </tr>
  )
}

export default RaceRow
