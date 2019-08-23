import React from "react"

import { Flag } from "../Flag"

import { IRaceHeaderProps } from "../../interfaces/Props"

import {
  LocationWrapperShortened,
  LocationWrapperExpanded,
  Circuit,
} from "../../styles/Race/Header"
import { countries } from "../../util/countries"
import { circuits } from "../../util/circuits"

export const RaceHeader = ({ race, index }: IRaceHeaderProps) => {
  const { location } = race
  const country = countries[location]
  const circuit = circuits[location as keyof typeof circuits]

  return (
    <>
      <LocationWrapperShortened>
        <Flag countryCode={location} desc={country} />

        <Circuit>
          <abbr title={`${circuit} | ${country}`}>{location}</abbr>
        </Circuit>
      </LocationWrapperShortened>

      <LocationWrapperExpanded>
        <Circuit>
          <span>
            Round {index + 1} — {country}
          </span>
        </Circuit>

        <div>
          <Flag countryCode={location} desc={country} spaceless />
        </div>
      </LocationWrapperExpanded>
    </>
  )
}
