import React from "react"

import { IRacePartititon } from "../../interfaces/Props"
import { RaceType } from "../../enums/RaceType"

import {
  PartitionWrapper,
  TypeShortened,
  TypeExpanded,
} from "../../styles/Race/Partition"
import { Abbr } from "../../styles/Global"

export const RacePartition = ({ type, padded }: IRacePartititon) => {
  const abbr = (full: string) =>
    `${full
      .split(` `)
      .map(part => part[0])
      .join(` `)}R`

  return (
    <PartitionWrapper padded={padded}>
      <TypeShortened>
        <Abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</Abbr>
      </TypeShortened>
      <TypeExpanded>{`${RaceType[type]} Race`}</TypeExpanded>
    </PartitionWrapper>
  )
}
