import React from "react"

const Flag = ({ countryCode, alt, title, large }) => {
  return (
    <img
      src={`/flags/${countryCode}.svg`}
      alt={alt}
      title={title}
      style={{
        width: 24,
        margin: `0 ${large ? `0.35` : `0.5`}rem 0 0`,
        position: large ? `relative` : undefined,
        bottom: large ? `2px` : undefined,
      }}
    />
  )
}

export default Flag
