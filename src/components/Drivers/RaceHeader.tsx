import React from "react"

import { Flag } from "../Flag"

import { IRaceHeaderProps } from "../../interfaces/Props"

import {
  LocationWrapperShortened,
  LocationWrapperExpanded,
  Circuit,
} from "../../styles/Race/Header"

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
