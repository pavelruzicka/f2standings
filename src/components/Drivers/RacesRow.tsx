import React from "react"

import { RaceHeader } from "./RaceHeader"
import { RacePartition } from "./RacePartition"
import { RaceResult } from "./RaceResult"

import { RaceType } from "../../enums/RaceType"

import { IRacesRowProps } from "../../interfaces/Props"

import { RowBase } from "../../styles/Row/Base"
import { RowTable } from "../../styles/Row/Table"
import { RaceWrapper, SectionWrapper } from "../../styles/Race/Row"
import { RaceConstraint } from "../../styles/Race/Constraint"

export const RacesRow = ({ results, races }: IRacesRowProps) => {
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
