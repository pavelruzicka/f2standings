import React from "react"

import { RaceType } from "../../enums/RaceType"

interface IRacePartition {
  type: RaceType
}

const RacePartition = ({ type }: IRacePartition) => {
  return (
    <td
      style={{
        padding: `.3rem`,
        textAlign: `center`,
        width: `${100 / 24}%`,
      }}
    >
      <small>
        <abbr title={`${RaceType[type]} Race`}>NN</abbr>
      </small>
    </td>
  )
}

export default RacePartition
