import React from "react"

const Flag = ({ countryCode }) => {
  return (
    <img
      src={`/flags/${countryCode}.svg`}
      style={{
        width: 25,
        margin: `0 .35rem 0 0`,
        position: `relative`,
        bottom: `3px`,
      }}
    />
  )
}

export default Flag
