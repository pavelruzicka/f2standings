import React from "react"

import { Flag } from "../Flag"

import { IResult } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"

interface IRaceHeaderProps {
  race: IResult
  races: IRace[]
}

const RaceHeader = ({ race, races }: IRaceHeaderProps) => {
  const { location } = race
  const raceInfo = races.find(r => r.short === location)

  if (raceInfo) {
    return (
      <div
        style={{
          padding: `.3rem 0`,
          textAlign: `center`,
        }}
      >
        <Flag
          countryCode={location}
          large={false}
          alt={raceInfo.country}
          title={raceInfo.country}
        />
        <small style={{ fontWeight: `bold` }}>
          <abbr title={`${raceInfo.circuit} | ${raceInfo.country}`}>
            {location}
          </abbr>
        </small>
      </div>
    )
  }

  return <div />
}

export default RaceHeader
