import React from "react"
import styled from "styled-components"

import { getRule } from "../../util/viewports"

import { RaceType } from "../../enums/RaceType"

const PartitionWrapper = styled.div<{ padded: boolean }>`
  flex-basis: 50%;
  padding: ${p => (p.padded ? "0.3rem 0" : 0)};
  text-align: center;

  @media ${getRule("max", "mobileL")} {
    text-align: left;
    padding: 0 0 0 6px;
  }
`

const TypeShortened = styled.small`
  @media ${getRule("max", "mobileL")} {
    display: none;
  }
`

const TypeExpanded = styled.small`
  text-transform: uppercase;

  @media ${getRule("min", "mobileL")} {
    display: none;
  }
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
      <TypeShortened>
        <abbr title={`${RaceType[type]} Race`}>{abbr(RaceType[type])}</abbr>
      </TypeShortened>
      <TypeExpanded>{`${RaceType[type]} Race`}</TypeExpanded>
    </PartitionWrapper>
  )
}

export default RacePartition
