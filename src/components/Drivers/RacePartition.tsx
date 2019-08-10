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
    <div
      style={{
        flexBasis: `50%`,
        padding: `.3rem 0`,
        textAlign: `center`,
      }}
    >
      <small>
        <abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</abbr>
      </small>
    </div>
  )
}

export default RacePartition
