import React from "react"
import styled from "styled-components"

import { countries } from "../util/countries"

const FlagElement = styled.img<{ countryCode: string; large: boolean }>`
  bottom: ${p => (p.large ? 2 : 0)}px;
  margin: 0 0.5rem 0 0;
  position: ${p => (p.large ? "relative" : "static")};
  width: ${p => (p.large ? 24 : 21)}px;
  user-select: ${p => (p.countryCode === "empty" ? "none" : "auto")};
`

interface IFlagProps {
  countryCode: keyof typeof countries
  desc?: string
  large: boolean
}

export const Flag = ({ countryCode, desc, large }: IFlagProps) => {
  const description = desc || countries[countryCode]

  return (
    <FlagElement
      src={`/flags/${countryCode}.svg`}
      countryCode={countryCode}
      alt={description}
      title={description}
      large={large}
    />
  )
}
