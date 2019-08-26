import React from "react"

import { IRacePartititon } from "../../../interfaces/Props"

import { RaceType } from "../../../enums/RaceType"

import { PartitionWrapper, TypeExpanded } from "../../../styles/Race/Partition"
import { Abbr } from "../../../styles/Global"
import { MobileContent, DesktopContent } from "../../../styles/Mobile"

export const RacePartition = ({ type, padded }: IRacePartititon) => {
  const abbr = (full: string) =>
    `${full
      .split(` `)
      .map(part => part[0])
      .join(` `)}R`

  return (
    <PartitionWrapper padded={padded}>
      <DesktopContent>
        <Abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</Abbr>
      </DesktopContent>
      <MobileContent>
        <TypeExpanded>{`${RaceType[type]} Race`}</TypeExpanded>
      </MobileContent>
    </PartitionWrapper>
  )
}
