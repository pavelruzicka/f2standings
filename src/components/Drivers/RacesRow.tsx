import React from "react"
import styled from "styled-components"

import RaceHeader from "./RaceHeader"
import RacePartition from "./RacePartition"
import RaceResult from "./RaceResult"

import { RaceType } from "../../enums/RaceType"

import { IResult } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"

const RowBase = styled.td`
  padding: 0 !important;
`

const RowTable = styled.div`
  display: flex;
  margin-bottom: 0;
`

const RaceWrapper = styled.div`
  flex: 1 1 0;
`

const SectionWrapper = styled.div`
  display: flex;
  padding: 0 0.35rem;
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
          {results.map(race => (
            <RaceWrapper key={race.short}>
              <RaceHeader race={race} races={races} key={race.location} />

              <SectionWrapper>
                <RacePartition type={RaceType.Feature} />
                <RacePartition type={RaceType.Sprint} />
              </SectionWrapper>

              <SectionWrapper>
                {!race.upcoming ? (
                  <>
                    <RaceResult result={race} type={RaceType.Feature} />
                    <RaceResult result={race} type={RaceType.Sprint} />
                  </>
                ) : null}
              </SectionWrapper>
            </RaceWrapper>
          ))}
        </RowTable>
      </RowBase>
    </tr>
  )
}

export default RacesRow
