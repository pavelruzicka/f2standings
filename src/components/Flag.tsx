import React from "react"
import styled from "styled-components"

import { countries } from "../util/countries"

const FlagElement = styled.img<{ countryCode: string; large: boolean }>`
  bottom: ${p => (p.large ? `2px` : undefined)};
  margin: 0 0.5rem 0 0;
  position: ${p => (p.large ? `relative` : undefined)};
  width: ${p => (p.large ? `24` : `21`)}px;
  user-select: ${p => (p.countryCode === "empty" ? `none` : undefined)};
`

interface IFlagProps {
  countryCode: string
  desc?: string
  large: boolean
}

export const Flag = ({ countryCode, desc, large }: IFlagProps) => {
  const description =
    desc || countryCode !== "empty" ? (countries as any)[countryCode] : null

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
