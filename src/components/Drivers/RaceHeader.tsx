import React from "react"
import styled from "styled-components"

import { getRule } from "../../util/viewports"

import { Flag } from "../Flag"

import { IRaceHeaderProps } from "../../interfaces/Props"

const LocationWrapperShortened = styled.div`
  padding: 0.3rem 0;
  text-align: center;

  @media ${getRule("max", "tablet")} {
    display: none;
  }
`

const LocationWrapperExpanded = styled.div`
  padding: 0 6px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;

  @media ${getRule("min", "tablet")} {
    display: none;
  }
`

const Circuit = styled.span`
  font-size: 80%;
  font-weight: bold;
`

export const RaceHeader = ({ race, races, index }: IRaceHeaderProps) => {
  const { location } = race
  const raceInfo = races.find(r => r.short === location)

  if (raceInfo) {
    return (
      <>
        <LocationWrapperShortened>
          <Flag countryCode={location} large={false} desc={raceInfo.country} />

          <Circuit>
            <abbr title={`${raceInfo.circuit} | ${raceInfo.country}`}>
              {location}
            </abbr>
          </Circuit>
        </LocationWrapperShortened>

        <LocationWrapperExpanded>
          <Circuit>
            <span>
              Round {index + 1} — {raceInfo.country}
            </span>
          </Circuit>

          <div>
            <Flag
              countryCode={location}
              large={false}
              desc={raceInfo.country}
              spaceless={true}
            />
          </div>
        </LocationWrapperExpanded>
      </>
    )
  }

  return <LocationWrapperShortened />
}
