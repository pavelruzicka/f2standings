import React from "react"

import { Flag } from "../../Flag"

import { IRaceHeaderProps } from "../../../interfaces/Props"

import { countries } from "../../../util/countries"
import { circuits } from "../../../util/circuits"

import { Abbr } from "../../../styles/Global"
import {
  LocationWrapperShortened,
  LocationWrapperExpanded,
  Circuit,
} from "../../../styles/Race/Header"
import { MobileContent, DesktopContent } from "../../../styles/Mobile"

export const RaceHeader = ({ race, index }: IRaceHeaderProps) => {
  const { location } = race
  const country = countries[location]
  const circuit = circuits[location as keyof typeof circuits]

  return (
    <>
      <MobileContent>
        <LocationWrapperExpanded>
          <Circuit>
            <span>
              R{index + 1}: {country}
            </span>
          </Circuit>

          <div>
            <Flag countryCode={location} desc={country} spaceless />
          </div>
        </LocationWrapperExpanded>
      </MobileContent>

      <DesktopContent>
        <LocationWrapperShortened>
          <Flag countryCode={location} desc={country} />

          <Circuit>
            <Abbr title={`${circuit} | ${country}`}>{location}</Abbr>
          </Circuit>
        </LocationWrapperShortened>
      </DesktopContent>
    </>
  )
}
