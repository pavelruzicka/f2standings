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
  const raceInfo = races.filter(r => r.short === location)[0]

  return (
    <td
      style={{
        padding: `.3rem`,
        textAlign: `center`,
        width: `${100 / 12}%`,
      }}
      colSpan={2}
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
    </td>
  )
}

export default RaceHeader
