import React from "react"
import styled from "styled-components"

import { RaceType } from "../../enums/RaceType"

const PartitionWrapper = styled.div<{ padded: boolean }>`
  flex-basis: 50%;
  padding: ${p => (p.padded ? `0.3rem 0` : undefined)};
  text-align: center;
`

interface IPartitionProps {
  type: RaceType
  padded: boolean
}

const RacePartition = ({ type, padded }: IPartitionProps) => {
  const abbr = (full: string) =>
    `${full
      .split(` `)
      .map(part => part[0])
      .join(` `)}R`

  return (
    <PartitionWrapper padded={padded}>
      <small>
        <abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</abbr>
      </small>
    </PartitionWrapper>
  )
}

export default RacePartition
