import React from "react"
import styled from "styled-components"

import { Flag } from "../Flag"

import { IResult } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"

const LocationWrapper = styled.div`
  padding: 0.3rem 0;
  text-align: center;
`

const Circuit = styled.span`
  font-size: 80%;
  font-weight: bold;
`

interface IRaceHeaderProps {
  race: IResult
  races: IRace[]
}

const RaceHeader = ({ race, races }: IRaceHeaderProps) => {
  const { location } = race
  const raceInfo = races.find(r => r.short === location)

  if (raceInfo) {
    return (
      <LocationWrapper>
        <Flag countryCode={location} large={false} desc={raceInfo.country} />

        <Circuit>
          <abbr title={`${raceInfo.circuit} | ${raceInfo.country}`}>
            {location}
          </abbr>
        </Circuit>
      </LocationWrapper>
    )
  }

  return <LocationWrapper />
}

export default RaceHeader
