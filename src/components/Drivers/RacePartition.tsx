import React from "react"

import { IRacePartititon } from "../../interfaces/Props"
import { RaceType } from "../../enums/RaceType"

import {
  PartitionWrapper,
  TypeShortened,
  TypeExpanded,
} from "../../styles/Race/Partition"

export const RacePartition = ({ type, padded }: IRacePartititon) => {
  const abbr = (full: string) =>
    `${full
      .split(` `)
      .map(part => part[0])
      .join(` `)}R`

  return (
    <PartitionWrapper padded={padded}>
      <TypeShortened>
        <abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</abbr>
      </TypeShortened>
      <TypeExpanded>{`${RaceType[type]} Race`}</TypeExpanded>
    </PartitionWrapper>
  )
}
