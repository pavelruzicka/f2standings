import React from "react"
import styled from "styled-components"

import { getRule } from "../../util/viewports"

import RaceHeader from "./RaceHeader"
import RacePartition from "./RacePartition"
import RaceResult from "./RaceResult"

import { RaceType } from "../../enums/RaceType"

import { IResult } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"

import {
  RowBase,
  RowTable,
  RaceWrapper,
  SectionWrapper,
} from "../../styles/RacesRow"

const RaceConstraint = styled.div`
  @media ${getRule("max", "tablet")} {
    display: flex;
  }
`

interface IRacesRowProps {
  results: IResult[]
  races: IRace[]
}

const RacesRow = ({ results, races }: IRacesRowProps) => {
  return (
    <tr>
      <RowBase colSpan={6}>
        <RowTable>
          {results.map((race, index) => (
            <RaceWrapper key={race.location}>
              <RaceHeader race={race} races={races} index={index} />

              <RaceConstraint>
                {!race.upcoming ? (
                  <>
                    <SectionWrapper>
                      <RacePartition type={RaceType.Feature} padded={true} />
                      <RacePartition type={RaceType.Sprint} padded={true} />
                    </SectionWrapper>
                    <SectionWrapper>
                      <RaceResult result={race} type={RaceType.Feature} />
                      <RaceResult result={race} type={RaceType.Sprint} />
                    </SectionWrapper>
                  </>
                ) : null}
              </RaceConstraint>
            </RaceWrapper>
          ))}
        </RowTable>
      </RowBase>
    </tr>
  )
}

export default RacesRow
