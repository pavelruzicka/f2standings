import React from "react"
import styled from "styled-components"

const FlagElement = styled.img<{ large: boolean }>`
  bottom: ${p => (p.large ? `2px` : undefined)};
  margin: 0 ${p => (p.large ? `0.35` : `0.5`)}rem 0 0;
  position: ${p => (p.large ? `relative` : undefined)};
  width: 24;
`

interface IFlagProps {
  countryCode: string
  alt?: string
  title?: string
  large: boolean
}

export const Flag = ({ countryCode, alt, title, large }: IFlagProps) => {
  return (
    <FlagElement
      src={`/flags/${countryCode}.svg`}
      alt={alt}
      title={title}
      large={large}
    />
  )
}
