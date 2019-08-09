import React from "react"

import { RaceType } from "../../enums/RaceType"

interface IRacePartition {
  type: RaceType
}

const RacePartition = ({ type }: IRacePartition) => {
  const abbr = (full: string) =>
    `${full
      .split(` `)
      .map(part => part[0])
      .join(` `)}R`

  return (
    <td
      style={{
        padding: `.3rem`,
        textAlign: `center`,
        width: `${100 / 24}%`,
      }}
    >
      <small>
        <abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</abbr>
      </small>
    </td>
  )
}

export default RacePartition
