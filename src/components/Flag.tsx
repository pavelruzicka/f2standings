import React from "react"
import { countries } from "../util/countries"

import { IFlagProps } from "../interfaces/Props"

import { FlagElement } from "../styles/Flag"

export const Flag = ({
  countryCode,
  desc,
  large,
  spaceless = false,
}: IFlagProps) => {
  const description = desc || countries[countryCode]

  return (
    <FlagElement
      src={`/flags/${countryCode}.svg`}
      alt={description}
      title={description}
      large={large}
      space={!spaceless}
    />
  )
}
