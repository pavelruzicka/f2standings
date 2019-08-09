import React from "react"

interface IFlagProps {
  countryCode: string
  alt?: string
  title?: string
  large: boolean
}

export const Flag = ({ countryCode, alt, title, large }: IFlagProps) => {
  return (
    <img
      src={`/flags/${countryCode}.svg`}
      alt={alt}
      title={title}
      style={{
        bottom: large ? `2px` : undefined,
        margin: `0 ${large ? `0.35` : `0.5`}rem 0 0`,
        position: large ? `relative` : undefined,
        width: 24,
      }}
    />
  )
}
