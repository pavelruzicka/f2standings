import React from "react"

import Flag from "../Flag"

const RaceHeader = ({ race, races }) => {
  const { location } = race
  const raceInfo = races.filter(r => r.short === location)[0]

  return (
    <td
      style={{
        width: `${100 / 12}%`,
        padding: `.3rem`,
        border: `1px solid #dee2e6`,
        textAlign: `center`,
      }}
      colSpan="2"
    >
      <Flag
        countryCode={location}
        large={false}
        alt={raceInfo.country}
        title={raceInfo.country}
      />
      <small style={{ fontWeight: `bold` }}>
        <abbr title={`${raceInfo.circuit} | ${raceInfo.country}`}>
          {location}
        </abbr>
      </small>
    </td>
  )
}

export default RaceHeader
