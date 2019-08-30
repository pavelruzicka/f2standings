import React from "react"

import { RaceHeader } from "./RaceHeader"
import { RacePartition } from "./RacePartition"
import { RaceResult } from "./RaceResult"

import { RaceType } from "../../../enums/RaceType"

import { IRacesRowProps } from "../../../interfaces/Props"

import { RowBase, RowTable } from "../../../styles/Row"
import { RaceWrapper, SectionWrapper } from "../../../styles/Race/Row"
import { RaceConstraint } from "../../../styles/Race/Constraint"
import { TableRow } from "../../../styles/Layout/Table"

export const RacesRow = ({ results, driver }: IRacesRowProps) => {
  return (
    <TableRow>
      <RowBase colSpan={6} short={driver.short}>
        <RowTable>
          {results.map((race, index) => (
            <RaceWrapper key={race.location} upcoming={race.upcoming}>
              <RaceHeader race={race} index={index} />
              <RaceConstraint>
                {race.upcoming ? null : (
                  <>
                    <SectionWrapper>
                      <RacePartition type={RaceType.Feature} padded />
                      <RacePartition type={RaceType.Sprint} padded />
                    </SectionWrapper>
                    <SectionWrapper>
                      <RaceResult result={race} type={RaceType.Feature} />
                      <RaceResult result={race} type={RaceType.Sprint} />
                    </SectionWrapper>
                  </>
                )}
              </RaceConstraint>
            </RaceWrapper>
          ))}
        </RowTable>
      </RowBase>
    </TableRow>
  )
}
