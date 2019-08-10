import React from "react"
import styled from "styled-components"

import { RaceType } from "../../enums/RaceType"

const PartitionWrapper = styled.div`
  flex-basis: 50%;
  padding: 0.3rem 0;
  text-align: center;
`

const RacePartition = ({ type }: { type: RaceType }) => {
  const abbr = (full: string) =>
    `${full
      .split(` `)
      .map(part => part[0])
      .join(` `)}R`

  return (
    <PartitionWrapper>
      <small>
        <abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</abbr>
      </small>
    </PartitionWrapper>
  )
}

export default RacePartition
